"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Loader2, UploadCloud, X } from "lucide-react";

export function ImageAndFileUploader({ onFileUpload, multiple = false }) {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;
      setIsUploading(true);

      if (multiple) {
        setFiles((prev) => [...prev, ...acceptedFiles]);
        onFileUpload([...files, ...acceptedFiles]);
      } else {
        setFiles([acceptedFiles[0]]);
        onFileUpload(acceptedFiles[0]);
      }

      setIsUploading(false);
    },
    [onFileUpload, multiple, files]
  );

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    if (multiple) {
      onFileUpload(updatedFiles);
    } else {
      onFileUpload(null);
    }
  };

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
      className="flex flex-col items-center justify-center w-full h-auto min-h-[160px] border-2 border-dashed rounded-md cursor-pointer bg-muted/20 hover:bg-muted/30 transition-colors p-4"
    >
      <input {...getInputProps()} />
      {isUploading ? (
        <div className="flex items-center space-x-2">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <span>Uploading...</span>
        </div>
      ) : files.length > 0 ? (
        <div className="w-full flex flex-col space-y-1">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white/50 px-2 py-1 rounded-md border"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(idx);
                }}
              >
                <X className="h-4 w-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      ) : isDragActive ? (
        <p className="text-muted-foreground">
          Drop the {multiple ? "files" : "file"} here ...
        </p>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <UploadCloud className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Drag & drop {multiple ? "files" : "file"} here, or click to select
          </p>
          <button type="button" className="px-3 py-2 border rounded-md">
            Browse {multiple ? "Files" : "File"}
          </button>
        </div>
      )}
    </div>
  );
}
