"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Loader2, UploadCloud } from "lucide-react";

export function ImageAndFileUploader({ onFileUpload, multiple = false }) {
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;
      setIsUploading(true);

      if (multiple) {
        onFileUpload(acceptedFiles);
      } else {
        onFileUpload(acceptedFiles[0]);
      }

      setIsUploading(false);
    },
    [onFileUpload, multiple]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.ms-excel": [".xls", ".xlsx"],
    },
    multiple,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full min-h-[180px] flex flex-col justify-center items-center rounded-xl border-2 border-dashed p-6 cursor-pointer transition-all
        ${isDragActive ? "bg-yellow-100 border-yellow-400" : "bg-white/10 border-gray-300 hover:bg-white/20"}`}
    >
      <input {...getInputProps()} />
      {isUploading ? (
        <div className="flex items-center space-x-2 text-yellow-600">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="font-medium">Uploading...</span>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="bg-yellow-50 p-4 rounded-full">
            <UploadCloud className="h-10 w-10 text-custom-green" />
          </div>
          {isDragActive ? (
            <p className="text-gray-700 font-semibold">
              Drop the {multiple ? "files" : "file"} here!
            </p>
          ) : (
            <>
              <p className="text-gray-500">
                Drag & drop {multiple ? "files" : "a file"} or click to upload
              </p>
              <button className="mt-2 px-4 py-2 bg-custom-green text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
                Browse {multiple ? "Files" : "File"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
