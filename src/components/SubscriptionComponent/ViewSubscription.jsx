import React from "react";

const VieweSubscription = ({ sub, onClose }) => {
  return (
    <div className=" subCard fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  bg-opacity-50  backdrop-blur-sm">
      <div className="relative w-full mx-auto flex items-center justify-center  ">
        <div className="border-0 rounded-3xl shadow-lg relative flex flex-col xl:w-1/2 w-3/4  outline-none focus:outline-none bg-[#D6F6FF] px-10 py-6">
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              ID:
            </label>
            <input
              value={sub.id}
              readOnly
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Subscription Name
            </label>
            <input
              type="text"
              name="userName"
              value={sub.name}
              readOnly
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Type
            </label>
            <select
              name="userRole"
              value={sub.type}
              readOnly
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            >
              <option value="">Select type</option>
              <option value="premium">Monthly</option>
              <option value="normal">Annually</option>
            </select>
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Cost
            </label>
            <input
              type="text"
              name="cost"
              value={sub.cost}
              readOnly
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Raffle Limit
            </label>
            <input
              type="text"
              name="cost"
              value={sub.limit}
              readOnly
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Description:
            </label>
            <textarea
              type="textarea"
              name="description"
              value={sub.Description}
              readOnly
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
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

export default VieweSubscription;
