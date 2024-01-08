import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

const DragFile = () => {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    // Handle the dropped files or items here
    const files = e.dataTransfer.files;
    // Handle the dropped file here (e.g., upload or process)
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
  const handleButtonClick = () => {
    // Trigger the hidden file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);

    // Handle the selected file here (e.g., upload or process)
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
  return (
    <>
      <div
        className={` cursor-pointer rounded-lg ring-2 ring-gray-300 p-10 w-full min-h-32 text-center ${
          dragging
            ? "border-green-500 bg-gray-300"
            : "border-gray-300 bg-white"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          multiple
          id="fileField"
        />
        <button className="text-2xl">
          <FiUpload className="4xl:w-10 4xl:h-10 max-xl:w-5 max-xl:h-5"/>
        </button>
        <br />
        <label className="text-center text-black 4xl:text-3xl max-xl:text-sm" htmlFor="fileField">
          Drag and drop files
        </label>
        <br />
        <button className="px-4 py-2 bg-black text-white rounded-lg mt-2 4xl:text-3xl max-xl:text-sm">
          Browse
        </button>
      </div>
      {/* Display selected file */}
      {selectedFile && (
        <div className="mt-4">
          <h2 className="text-lg">Selected File:</h2>
          <p className="text-xs">{selectedFile.name}</p>
        </div>
      )}
    </>
  );
};

export default DragFile;
