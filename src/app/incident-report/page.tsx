
"use client";
import React from "react";
import IncidentReportForm from "@/components/IncidentReportForm/index";

const IncidentReportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero/11.jpg)" }}
      >
        <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
          <h1 className="text-5xl text-white font-bold">Report an Incident</h1>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Safety</h2>
            <p className="mb-4">
              We are committed to providing a safe and secure environment for everyone. If you have witnessed or experienced an incident, please report it using the form on this page. Your report will be handled with the utmost confidentiality and care.
            </p>
            <p className="mb-4">
              Please provide as much detail as possible in your report. This will help us to investigate the incident thoroughly and take appropriate action.
            </p>
            <p>
              If you are in immediate danger, please contact your local emergency services.
            </p>
          </div>
          <div>
            <div className="bg-white  rounded-lg">
              <IncidentReportForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentReportPage;
