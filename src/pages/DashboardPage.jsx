"use client";

import { useState } from "react";
import { ImageAndFileUploader } from "../components/comman/FileUpload";
import { X, FileText, Maximize2, Save, Download, Edit } from "lucide-react";

const DashboardPage = () => {
  const [documents, setDocuments] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  // Add files without rename prompt
  const handleFileUpload = (files) => {
    const fileArray = Array.isArray(files) ? files : [files];

    const newDocs = fileArray.map((file) => ({
      file,
      name: file.name, // keep original name first
      size: `${(file.size / 1024).toFixed(2)} KB`,
      type: file.type,
      url: URL.createObjectURL(file),
    }));

    setDocuments((prev) => [...prev, ...newDocs]);
  };

  const handleRemove = (index) => {
    setDocuments((prev) => {
      const newDocs = [...prev];
      URL.revokeObjectURL(newDocs[index].url); // free memory
      newDocs.splice(index, 1);
      return newDocs;
    });
  };

  const handleRename = (index) => {
    const newName = prompt("Enter new file name:", documents[index].name);
    if (newName) {
      setDocuments((prev) => {
        const newDocs = [...prev];
        newDocs[index] = { ...newDocs[index], name: newName };
        return newDocs;
      });
    }
  };

  const handleSave = () => {
    alert("✅ Documents saved successfully!");
    // You can send documents.map(d => d.file) to your API
  };

  return (
    <div className="flex-1 min-h-screen p-6">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          Compliance Documents
        </h1>
        <p className="text-gray-600 text-base">
          Upload, rename, preview, and manage your compliance documents securely.
        </p>
      </div>

      {/* Upload Section */}
      <div className="mb-10">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-white shadow-sm hover:shadow-md transition p-6">
          <ImageAndFileUploader onFileUpload={handleFileUpload} multiple />
        </div>
      </div>

      {/* Documents Grid */}
      {documents.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No documents uploaded yet. Start by uploading above ⬆️
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              {/* File Preview */}
              {doc.type.startsWith("image/") ? (
                <div className="relative">
                  <img
                    src={doc.url}
                    alt={doc.name}
                    className="h-40 w-full object-cover rounded-xl cursor-pointer"
                    onClick={() => setPreviewImage(doc.url)}
                  />
                  <button
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 text-white rounded-xl transition"
                    onClick={() => setPreviewImage(doc.url)}
                  >
                    <Maximize2 className="h-6 w-6" />
                  </button>
                </div>
              ) : (
                <div className="h-40 flex items-center justify-center bg-gray-100 rounded-xl">
                  <FileText className="h-12 w-12 text-gray-500" />
                </div>
              )}

              {/* Info */}
              <div className="mt-3 flex justify-between items-center">
                <div className="overflow-hidden">
                  <p
                    className="font-semibold text-gray-800 truncate w-36"
                    title={doc.name}
                  >
                    {doc.name}
                  </p>
                  <p className="text-sm text-gray-500">{doc.size}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => handleRename(index)}
                    className="text-yellow-600 hover:text-yellow-800"
                    title="Rename"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <a
                    href={doc.url}
                    download={doc.name}
                    className="text-blue-600 hover:text-blue-800"
                    title="Download"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(index)}
                className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-md transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Save Button */}
      {documents.length > 0 && (
        <button
          onClick={handleSave}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium text-lg transition"
        >
          <Save className="h-5 w-5" />
          Save
        </button>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl w-full p-4">
            <img
              src={previewImage}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
