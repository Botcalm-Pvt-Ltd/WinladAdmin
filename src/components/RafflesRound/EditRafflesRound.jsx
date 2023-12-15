import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const EditRafflesRound = ({ faq, onClose }) => {
  const [editedFAQ, setEditedFAQ] = useState({
    name: faq.name,
    date: faq.date,
    type: faq.type,
    color: faq.color,
    image: faq.image,
  });

  const handleNameChange = (event) => {
    setEditedFAQ({ ...editedFAQ, name: event.target.value });
  };

  const handleDateChange = (event) => {
    setEditedFAQ({ ...editedFAQ, date: event.target.value });
  };

  const handleTypeChange = (event) => {
    setEditedFAQ({ ...editedFAQ, type: event.target.value });
  };
  const handleColorChange = (event) => {
    setEditedFAQ({ ...editedFAQ, color: event.target.value });
  };
  const handleImageChange = (event) => {
    setEditedFAQ({ ...editedFAQ, image: event.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white bg-opacity-50">
        <div className="relative w-full max-w-screen-xl mx-auto flex items-center justify-center">
          <div className="border-0 rounded-3xl shadow-2xl relative flex flex-col w-full outline-none focus:outline-none bg-white px-10">
          <div className='absolute top-6 right-5 cursor-pointer text-xl' onClick={() => onClose()}>
            <IoMdClose />
          </div>
          <div className="flex justify-center">
              <h1 className="text-xl py-5">Edit FAQ</h1>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
              Name
              </label>
              <input
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="username"
                type="text"
                value={editedFAQ.name}
                onChange={handleNameChange}
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
              Date
              </label>
              <input
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="username"
                type="text"
                value={editedFAQ.date}
                onChange={handleDateChange}
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
              Type
              </label>
              <input
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="username"
                type="text"
                value={editedFAQ.type}
                onChange={handleTypeChange}
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
              Color
              </label>
              <input
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="username"
                type="text"
                value={editedFAQ.color}
                onChange={handleColorChange}
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
              image
              </label>
              <input
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="username"
                type="text"
                value={editedFAQ.image}
                onChange={handleImageChange}
              />
            </div>
            
            <div className="flex items-center justify-end py-6 border-t border-solid border-blueGray-200 rounded-b">
              <button className="text-white bg-black rounded-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150">
                Save
              </button>
              {/* <button
                className="text-white bg-black rounded-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  onClose();
                }}
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditRafflesRound;
