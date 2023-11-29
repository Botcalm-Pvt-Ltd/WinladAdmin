import { useState } from "react";

function AddSubscription({ onClose }) {
  const [formData, setFormData] = useState({
    subscriptionId: "",
    subscriptionName: "",
    type: "",
    cost: "",
    raffleLimit: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div className=" subCard fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  bg-opacity-50  backdrop-blur-sm">
      <div className="relative w-full mx-auto flex items-center justify-center  ">
        <div className=" rounded-3xl shadow-lg relative flex flex-col xl:w-1/2 w-3/4  outline-none focus:outline-none bg-[#FFFFFF]  border-2 border-[#000000] px-10 py-6">
          <div className="flex  font-bold text-gray-700 xl:text-xl text-md py-5">
            Subscription Add
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Subscription ID :
              </label>
              <input
                type="text"
                name="userId"
                value={formData.subscriptionId}
                onChange={handleChange}
                className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Subscription Name
              </label>
              <input
                type="text"
                name="subscriptionName"
                value={formData.subscriptionName}
                onChange={handleChange}
                className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
              />
            </div>

            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Type
              </label>
              <select
                name="userRole"
                value={formData.type}
                onChange={handleChange}
                className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
              >
                <option value="">Select type</option>
                <option value="premium">Monthly</option>
                <option value="normal">Anually</option>
              </select>
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Cost
              </label>
              <input
                type="text"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
              />
            </div>
            <div className="w-full mb-4 flex justify-between items-center gap-20">
              <label className="w-full block text-gray-700 xl:text-xl text-md mb-2">
                Raffle Limit
              </label>
              <input
                type="text"
                name="cost"
                value={formData.raffleLimit}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
                className="shadow appearance-none  rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFFFFF]  border border-[#000000]"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubscription;
