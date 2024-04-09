import React, { useEffect, useState } from "react";
import axios from "axios";
function FileUpload() {
  const [file, setSelectedFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedFiles = new FormData();
    selectedFiles.append("file", file);
    console.log(selectedFiles)
    try {
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "/file",
        selectedFiles,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto max-w-sm p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          name="file"
          placeholder="chooseFile"
          onChange={(e) => {
            setSelectedFile(e.target.files[0]);
          }}
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 my-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          UploadFile
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
