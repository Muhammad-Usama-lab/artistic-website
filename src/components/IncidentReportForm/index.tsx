
"use client";
import { postImage, postIncident } from "@/services/incident.service";
import React, { useRef, useState } from "react";

interface FormErrors {
  incidentType?: string;
  description?: string;
  date?: string;
  location?: string;
  contactInfo?: string;
}

const initialForm = {
  incidentType: "",
  description: "",
  date: "",
  location: "",
  evidence: null,
  contactInfo: "",
};

interface FileInfo {
  name: string;
  type: string;
  extension: string;
}
const IncidentReportForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const dateInputRef = useRef<HTMLInputElement>(null);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "incidentType":
        return !value ? "Incident type is required" : "";
      case "description":
        if (!value) return "Description is required";
        if (value.length < 20)
          return "Description must be at least 20 characters";
        if (value.length > 500)
          return "Description must be less than 500 characters";
        return "";
      case "date":
        if (!value) return "Date is required";
        if (new Date(value) > new Date()) return "Date cannot be in the future";
        return "";
      case "location":
        if (!value) return "Location is required";
        if (value.length < 5) return "Location must be at least 5 characters";
        return "";
      return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    newErrors.incidentType = validateField(
      "incidentType",
      formData.incidentType
    );
    newErrors.description = validateField("description", formData.description);
    newErrors.date = validateField("date", formData.date);
    newErrors.location = validateField("location", formData.location);
    newErrors.contactInfo = validateField("contactInfo", formData.contactInfo);

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const getFileInfo = (file: File | null): FileInfo | null => {
    if (!file) return null;

    const name = file.name;
    const type = file.type;
    const extension = name.split(".").pop()?.toLowerCase() || "";

    return {
      name,
      type,
      extension,
    };
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (
      name === "evidence" &&
      e.target instanceof HTMLInputElement &&
      e.target.files
    ) {
      setFormData({
        ...formData,
        evidence: e.target.files ? e.target.files[0] : null,
      });
    } else {
      setFormData({ ...formData, [name]: value });
      if (errors[name as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      incidentType: true,
      description: true,
      date: true,
      location: true,
      contactInfo: true,
    });

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setLoading(true);
      const response = await postIncident({
        incident_type: formData.incidentType,
        description: formData.description,
        incident_date: formData.date
          ? new Date(formData.date).toISOString().split("T")[0]
          : "",
        incident_loc: formData.location,
        contact_info: formData.contactInfo,
      });

      if ("HEADER_ID" in response) {
        if (formData?.evidence) {
          const string = `V_HEADER_ID=${response?.HEADER_ID}&FILENAME=${getFileInfo(formData?.evidence)?.name}&MIMETYPE=${getFileInfo(formData.evidence)?.type}`;

          const form = new FormData();
          form.append("file", formData?.evidence);

          await postImage(string, form);
        }
        setShowSuccessModal(true);
        setFormData(initialForm);
        setErrors({});
        setTouched({});
      }
    } catch (error) {
      console.error("Failed to report incident:", error);
      alert("Failed to report incident. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-lg w-full max-w-5xl mx-auto border border-gray-200">

        <div className="p-6 md:p-10 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Report an Incident Anonymously
          </h1>
          <form onSubmit={handleSubmit} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="md:col-span-2">
                <label
                  htmlFor="incidentType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Incident Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="incidentType"
                  name="incidentType"
                  value={formData.incidentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`appearance-none w-full p-3 border ${errors.incidentType && touched.incidentType ? "border-red-500" : "border-gray-300"} rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition bg-[url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")] bg-no-repeat bg-right-[0.7rem]`}
                >
                  <option value="">-- Select --</option>
                  <option value="theft">Theft</option>
                  <option value="vandalism">Vandalism</option>
                  <option value="assault">Assault</option>
                  <option value="other">Other</option>
                </select>
                {errors.incidentType && touched.incidentType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.incidentType}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${errors.description && touched.description ? "border-red-500" : "border-gray-300"} rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition`}
                  rows={4}
                ></textarea>
                {errors.description && touched.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {formData.description.length}/500 characters
                </p>
              </div>

              <div
                className="cursor-pointer"
                onClick={() => {
                  dateInputRef?.current?.showPicker();
                }}
              >
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-gray-700 mb-2 cursor-pointer"
                >
                  Date of Incident <span className="text-red-500">*</span>
                </label>
                <input
                  ref={dateInputRef}
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${errors.date && touched.date ? "border-red-500" : "border-gray-300"} rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition`}
                />
                {errors.date && touched.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Location of Incident <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${errors.location && touched.location ? "border-red-500" : "border-gray-300"} rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition`}
                />
                {errors.location && touched.location && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.location}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="evidence"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Upload Evidence (optional)
                </label>
                <input
                  type="file"
                  id="evidence"
                  name="evidence"
                  onChange={handleChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contactInfo"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Contact Info (optional)
                </label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border ${errors.contactInfo && touched.contactInfo ? "border-red-500" : "border-gray-300"} rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition`}
                  placeholder="Leave blank to remain anonymous"
                />
                {errors.contactInfo && touched.contactInfo && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.contactInfo}
                  </p>
                )}
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Report"}
                </button>
              </div>
            </div>
          </form>
          <p className="text-center text-xs text-gray-500 mt-6">
            No IP addresses or device data are tracked. Your identity remains
            fully anonymous.
          </p>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Request Submitted!
            </h2>
            <p className="text-gray-600 mb-6">
              Your incident report has been successfully submitted.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

IncidentReportForm.displayName = "IncidentReportForm";
export default IncidentReportForm;
