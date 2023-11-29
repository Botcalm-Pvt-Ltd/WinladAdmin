import React from "react";

const EditMasterDataDetails = ({ details, onClose }) => {
  return (
    <div className=" subCard fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  bg-opacity-50  backdrop-blur-sm">
      <div className="relative w-full mx-auto flex items-center justify-center  ">
        <div className="rounded-3xl shadow-lg relative flex flex-col xl:w-1/2 w-3/4  outline-none focus:outline-none bg-[#FFFFFF]  border border-[#000000] px-10 py-6">
          <div className="flex font-bold text-gray-700 xl:text-xl text-md py-5">
            Edit Master Data Management Details
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              User ID:
            </label>
            <input
              type="text"
              name="userId"
              value={details.id}
              className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Category ID:
            </label>
            <input
              type="text"
              name="userId"
              value={details.categoryId}
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Name:
            </label>
            <input
              type="text"
              name="userName"
              value={details.name}
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Sort ID
            </label>
            <input
              type="text"
              name="userName"
              value={details.sortId}
              className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Description:
            </label>
            <textarea
              type="textarea"
              name="description"
              value={details.description}
              className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
              rows={10} // you can adjust the number of rows as needed
            />
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-3">
            <button
              className="text-white bg-black rounded-lg background-transparent font-bold uppercase xl:px-6 px-3  py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover-up"
              type="submit"
            >
              Save
            </button>

            <button
              className="text-white bg-black rounded-lg background-transparent  font-bold uppercase xl:px-6 px-3  py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover-up"
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
  );
};

export default EditMasterDataDetails;
