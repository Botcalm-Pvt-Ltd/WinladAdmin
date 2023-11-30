import React from "react";
import vector from '../../assets/UserManagement/vector.png'


const EditUser = ({ user, onClose }) => {
  return (
    <div className=" subCard fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  bg-opacity-50  backdrop-blur-sm">
      <div className="relative w-full mx-auto flex items-center justify-center  ">
<<<<<<< HEAD
        <div className="border-0 rounded-3xl shadow-lg relative flex flex-col xl:w-1/2 w-3/4  outline-none focus:outline-none bg-white px-10">
        <div className="flex justify-center">
              <h1 className="text-xl py-5">Edit User</h1>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center ">
            <img src={vector} alt="vector" />
              <input id="imageUpload" type="file" className="hidden" />
              <label htmlFor="imageUpload" className="cursor-pointer absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1182_2018)">
                    <path
                      d="M24.0081 12.9673L24.0081 19.6109C24.0081 21.4164 22.5377 22.8813 20.7377 22.8813L4.72606 22.8813C2.92056 22.8813 1.45563 21.4109 1.45563 19.6109L1.45563 12.8592C1.45563 12.4537 1.13128 12.1294 0.725859 12.1294C0.320434 12.1294 -0.00390625 12.4537 -0.00390625 12.8592L-0.00390625 19.6109C-0.00390625 22.2218 2.12052 24.3408 4.72606 24.3408L20.7377 24.3408C23.3486 24.3408 25.4676 22.2164 25.4676 19.6109L25.4676 12.9673C25.4676 12.5619 25.1433 12.2375 24.7379 12.2375C24.3324 12.2375 24.0081 12.5673 24.0081 12.9673Z"
                      fill="black"
                    />
                    <path
                      d="M12.2162 0.945148L7.57816 5.58321C7.29166 5.86971 7.29166 6.3292 7.57816 6.6157C7.86466 6.9022 8.32414 6.9022 8.61064 6.6157L12.0054 3.22093L12.0054 18.0271C12.0054 18.4325 12.3297 18.7568 12.7352 18.7568C13.1406 18.7568 13.4649 18.4325 13.4649 18.0271L13.4649 3.22093L16.8597 6.6157C17.1462 6.9022 17.6057 6.9022 17.8922 6.6157C18.0327 6.47515 18.1084 6.28595 18.1084 6.10216C18.1084 5.91837 18.0381 5.72917 17.8922 5.58862L13.2541 0.950554C12.9622 0.658647 12.4973 0.658647 12.2162 0.945148Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </label>
            </div>

            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                User ID:
              </label>
              <input
                type="text"
                name="userId"
         
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                User Name:
              </label>
              <input
                type="text"
                name="userName"
              
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                User Role:
              </label>
              <select
                name="userRole"
             
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              >
                <option value="">Select User Role</option>
                <option value="admin">Admin</option>
         
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                User Type:
              </label>
              <select
                name="userType"
             
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              >
                <option value="">Select User Type</option>
                <option value="admin">Verified</option>
                <option value="user">UnVerified</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Passport:
              </label>
              <input
                type="text"
                name="passport"
              
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
        
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ring-1 ring-black"
              />
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-3">
              <button
                className="text-white bg-black rounded-lg background-transparent font-bold uppercase xl:px-6 px-3  py-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover-up"
                type="submit"
              >
                Save
              </button>
=======
        <div className="rounded-3xl shadow-lg relative flex flex-col xl:w-1/2 w-3/4  outline-none focus:outline-none bg-[#FFFFFF]  border-2 border-[#000000] px-10 py-6">
          <div className="flex flex-col gap-2  my-10  justify-center items-center ">
            <input id="imageUpload" type="file" className="hidden" />
            <label htmlFor="imageUpload" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 26 25"
                fill="none"
              >
                <g clipPath="url(#clip0_1182_2018)">
                  <path
                    d="M24.0081 12.9673L24.0081 19.6109C24.0081 21.4164 22.5377 22.8813 20.7377 22.8813L4.72606 22.8813C2.92056 22.8813 1.45563 21.4109 1.45563 19.6109L1.45563 12.8592C1.45563 12.4537 1.13128 12.1294 0.725859 12.1294C0.320434 12.1294 -0.00390625 12.4537 -0.00390625 12.8592L-0.00390625 19.6109C-0.00390625 22.2218 2.12052 24.3408 4.72606 24.3408L20.7377 24.3408C23.3486 24.3408 25.4676 22.2164 25.4676 19.6109L25.4676 12.9673C25.4676 12.5619 25.1433 12.2375 24.7379 12.2375C24.3324 12.2375 24.0081 12.5673 24.0081 12.9673Z"
                    fill="black"
                  />
                  <path
                    d="M12.2162 0.945148L7.57816 5.58321C7.29166 5.86971 7.29166 6.3292 7.57816 6.6157C7.86466 6.9022 8.32414 6.9022 8.61064 6.6157L12.0054 3.22093L12.0054 18.0271C12.0054 18.4325 12.3297 18.7568 12.7352 18.7568C13.1406 18.7568 13.4649 18.4325 13.4649 18.0271L13.4649 3.22093L16.8597 6.6157C17.1462 6.9022 17.6057 6.9022 17.8922 6.6157C18.0327 6.47515 18.1084 6.28595 18.1084 6.10216C18.1084 5.91837 18.0381 5.72917 17.8922 5.58862L13.2541 0.950554C12.9622 0.658647 12.4973 0.658647 12.2162 0.945148Z"
                    fill="black"
                  />
                </g>
              </svg>
            </label>
          </div>

          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              User ID:
            </label>
            <input
              type="text"
              name="userId"
              className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              User Name:
            </label>
            <input
              type="text"
              name="userName"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              User Role:
            </label>
            <select
              name="userRole"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            >
              <option value="">Select User Role</option>
              <option value="admin">Admin</option>
>>>>>>> 3ba71e07be6f4a9c15b8a9703ce6e20c8beba727

              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              User Type:
            </label>
            <select
              name="userType"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            >
              <option value="">Select User Type</option>
              <option value="admin">Verified</option>
              <option value="user">UnVerified</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Passport:
            </label>
            <input
              type="text"
              name="passport"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
            />
          </div>
          <div className="w-full mb-4 flex justify-between items-center gap-20">
            <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#7CE1F7]"
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

export default EditUser;
