import React from "react";

const ViewFAQ = ({ faq, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-full max-w-screen-xl mx-auto flex items-center justify-center">
          <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white px-10">
          <div className="flex justify-center">
              <h1 className="text-xl py-5">View FAQ</h1>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ ID
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
                value={faq.id}
                readOnly
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ Description
              </label>
              <textarea
                value={faq.Description}
                readOnly
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              ></textarea>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ Answer
              </label>
              <textarea
                value={faq.Answer}
                readOnly
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              ></textarea>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-white bg-black rounded-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  onClose();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ViewFAQ;
