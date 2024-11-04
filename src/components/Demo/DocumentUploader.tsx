"use client";

import { setDocumentImage, setLoading } from "@/redux/reducers/demoSlice";
import { RootState } from "@/redux/store";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DocumentUploader = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [dragActive, setDragActive] = useState(false);
  const demo = useSelector((st: RootState) => st.demo);
  const [files, setFiles] = useState([]);
  const url = "blob:http://localhost:3000/6d2800ec-fb90-4d50-8541-e6d58f9d8bad";
  const isLoading = demo?.loading?.step2;

  //

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(newFiles);

    setLoading_(false);
    dispatch(setDocumentImage(newFiles[0]));
  };

  const setLoading_ = (payload: Boolean) =>
    dispatch(
      setLoading({
        step: "step2",
        loading: payload,
      })
    );

  const performWebService = () => {
    setLoading_(true);
  };

  const isFiles = files?.length > 0;

  const Loading = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <filter id="svgSpinnersGooeyBalls20">
          <feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1" />
          <feColorMatrix
            in="y"
            result="z"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
          />
          <feBlend in="SourceGraphic" in2="z" />
        </filter>
      </defs>
      <g filter="url(#svgSpinnersGooeyBalls20)">
        <circle cx="5" cy="12" r="4" fill="#d6d6d6">
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2s"
            keySplines=".36,.62,.43,.99;.79,0,.58,.57"
            repeatCount="indefinite"
            values="5;8;5"
          />
        </circle>
        <circle cx="19" cy="12" r="4" fill="#d6d6d6">
          <animate
            attributeName="cx"
            calcMode="spline"
            dur="2s"
            keySplines=".36,.62,.43,.99;.79,0,.58,.57"
            repeatCount="indefinite"
            values="19;16;19"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  );

  return (
    <div
      className={`md:p-6 xs:p-1 bg-gray-100 rounded-md flex gap-6 flex-wrap ${isFiles ? "h-full" : "h-48"}`}
    >
      {/* Drag and Drop Component */}
      {files?.length === 0 && (
        <div
          className={`grow p-6 text-center border-2 ${
            dragActive ? "border-primary bg-primary/10" : "border-gray-300"
          } border-dashed rounded-lg cursor-pointer transition-all`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            ref={ref}
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
            accept="image/*" // Accept only image files
          />
          <label
            htmlFor="fileUpload"
            className="w-full cursor-pointer h-full flex flex-col items-center"
          >
            <p className="text-gray-600 text-lg font-semibold">
              Drag & Drop your images here
            </p>
            <p className="text-gray-400 mt-2">or click to browse files</p>
          </label>
        </div>
      )}

      {/* Display selected images */}
      {files.length > 0 && (
        <div className="shrink">
          {files?.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)} // Create a URL for the image
              alt={`Uploaded file ${index + 1}`}
              className="md:h-96 xs:h-3/6 object-cover border rounded-lg shadow-sm " // Style the images
            />
          ))}
          <div className="flex gap-10 items-center mt-5">
            <button
              onClick={() => setFiles([])}
              disabled={isLoading}
              className=" rounded-sm bg-primary px-8 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              ✎ Change
            </button>

            <button
              disabled={isLoading}
              onClick={performWebService}
              className={`${isLoading ? "pr-3" : ""} rounded-sm bg-dark px-8  py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-dark/80`}
            >
              <div className="flex gap-2">
                Continue
                {isLoading ? Loading : null}
              </div>
            </button>
            <p className="text-md text-gray-500">
              {isLoading ? "Performing Validation, Please wait..." : null}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUploader;
