import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const EditFAQ = ({ faq, onClose }) => {
  const [editedFAQ, setEditedFAQ] = useState({
    _id: faq._id,
    q: faq.q,
    a: faq.a,
  });

  const handleIdChange = (event) => {
    setEditedFAQ({ ...editedFAQ, _id: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setEditedFAQ({ ...editedFAQ, q: event.target.value });
  };

  const handleAnswerChange = (event) => {
    setEditedFAQ({ ...editedFAQ, a: event.target.value });
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
                FAQ ID
              </label>
              <input
                onChange={handleIdChange}
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                value={editedFAQ._id}
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ Description
              </label>
              <textarea
                value={editedFAQ.q}
                onChange={handleDescriptionChange}
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              ></textarea>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ Answer
              </label>
              <textarea
              rows="10"
                value={editedFAQ.a}
                onChange={handleAnswerChange}
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              ></textarea>
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

export default EditFAQ;
