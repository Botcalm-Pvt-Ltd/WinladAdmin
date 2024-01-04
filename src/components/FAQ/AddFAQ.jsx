import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { addApi } from "../../Api/Faq/addApi";
import { useDispatch, useSelector } from "react-redux";

const AddFAQ = ({ onClose }) => {
  const dispatch = useDispatch();
  const addFaq = useSelector((state) => state.faq.addFaq);
  const [faqData, setFaqData] = useState({
    id: "",
    q: "",
    a: "",
  });
  const handleAdd = (e) => {
    e.preventDefault();
    addApi({ data: faqData });
  };

const handleChange = (field, value) => {
  setFaqData((prevData) => {
    const newData = {
      ...prevData,
      [field]: value,
    };
    return newData;
  });
};

useEffect(() => {
  onClose();
}, [addFaq]);
  
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white bg-opacity-50">
        <div className="relative w-full max-w-screen-xl mx-auto flex items-center justify-center">
          <div className="border-0 rounded-3xl shadow-2xl relative flex flex-col w-full outline-none focus:outline-none bg-white px-10">
            <div
              className="absolute top-6 right-5 cursor-pointer text-xl"
              onClick={() => onClose()}
            >
              <IoMdClose />
            </div>
            <div className="flex justify-center">
              <h1 className="text-xl py-5">Add FAQ</h1>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ ID
              </label>
              <input
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="id"
                type="text"
                value={faqData.id}
                onChange={(e) => handleChange("id", e.target.value)}
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ Description
              </label>
              <textarea
                id="q"
                rows="10"
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                value={faqData.q}
                onChange={(e) => handleChange("q", e.target.value)}
              ></textarea>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 text-xl mb-2">
                FAQ Answer
              </label>
              <textarea
                id="a"
                rows="10"
                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                value={faqData.a}
                onChange={(e) => handleChange("a", e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-white bg-black rounded-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={(e) => handleAdd(e)}
              >
                Save
              </button>
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

export default AddFAQ;
