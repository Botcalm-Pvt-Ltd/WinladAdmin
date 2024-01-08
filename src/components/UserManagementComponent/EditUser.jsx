import { useState } from "react";
import vector from "../../assets/UserManagement/vector.png";
import { IoMdClose } from "react-icons/io";
import ModelInputField from "../ModelInputField";
import ModelFilterField from "../ModelFilterField";

const FilterUserId = [
  {
    id: 1,
    name: "User Id 1",
  },
  {
    id: 2,
    name: "User Id 2",
  },
  {
    id: 3,
    name: "User Id 3",
  },
  {
    id: 4,
    name: "User Id 4",
  },
];

const FilterUserName = [
  {
    id: 1,
    name: "User Name 1",
  },
  {
    id: 2,
    name: "User Name 2",
  },
  {
    id: 3,
    name: "User Name 3",
  },
  {
    id: 4,
    name: "User Name 4",
  },
];

const SubscriptionPlan = [
  {
    id: 1,
    name: "Subscription Plan 1",
  },
  {
    id: 2,
    name: "Subscription Plan 2",
  },
  {
    id: 3,
    name: "Subscription Plan 3",
  },
  {
    id: 4,
    name: "Subscription Plan 4",
  },
];
function EditUser({ user, onClose }) {
  const [formData, setFormData] = useState({
    userId: user.id,
    userName: user.name,
    NIC: user.NIC,
    MNumber: user.MNumber
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="subCard fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  bg-opacity-50  bg-white">
      <div className="relative w-full mx-auto flex items-center justify-center  ">
        <div className="rounded-3xl shadow-2xl relative flex flex-col xl:w-1/2 w-3/4  outline-none focus:outline-none bg-[#FFFFFF] px-10 pt-6">
          <h1 className="text-xl px-3 mb-5 font-semibold text-black 4xl:text-5xl">
            View User
          </h1>

          <div
            className="absolute top-3 right-3 cursor-pointer text-xl"
            onClick={() => onClose()}
          >
            <IoMdClose className="4xl:w-10 4xl:h-10" />
          </div>
          <form onSubmit={handleSubmit} className="relative bottom-16">
            <div className="flex flex-col gap-2 justify-center items-center ">
              <img src={vector} alt="vector" className="w-20 4xl:w-40" />
              <input id="imageUpload" type="file" className="hidden" />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer absolute 4xl:scale-150"
              >
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
            <div>
              <div className="flex gap-10">
                <ModelInputField
                  label={"User Id"}
                  value={formData.userId}
                  name="userId"
                  onChange={(e) => handleInputChange("userId", e.target.value)}
                  readOnly={false}
                />
                <ModelInputField
                  label={"User Name"}
                  value={formData.userName}
                  name="userName"
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                />
              </div>
              <div className="flex gap-10">
                <ModelFilterField
                  options={FilterUserId}
                  placeholder="User Role"
                />
                <ModelFilterField
                  options={FilterUserName}
                  placeholder="User Type"
                />
              </div>
              <div className="flex gap-10">
                <ModelInputField
                  label={"NIC"}
                  value={formData.NIC}
                  onChange={(e) =>
                    handleInputChange("NIC", e.target.value)
                  }
                />
                <ModelInputField
                  label={"User Email"}
                  value={formData.MNumber}
                  onChange={(e) =>
                    handleInputChange("MNumber", e.target.value)
                  }
                />
              </div>
              <div>
                <ModelInputField label={"Postal Address"} />
              </div>
              <div className="flex gap-10">
                <ModelInputField label={"Date Of Birth (MM/DD/YYYY)"} />
                <ModelInputField label={"Mobile Number"} />
                <ModelInputField label={"License Number"} />
              </div>
              <div className="flex gap-10">
                <ModelInputField label={"Referral ID"} />
                <ModelInputField label={"TIN"} />
              </div>
              <div className="flex gap-10">
                <ModelFilterField
                  options={SubscriptionPlan}
                  placeholder="Subscription Plan"
                />

                <ModelInputField label={"Earning Balance"} />
              </div>
            </div>
            <div className="flex justify-end items-end flex-col flex-1 gap-5 text-right relative top-5">
              <button className="text-white bg-black rounded-xl py-2 ml-auto w-1/6 4xl:w-1/12 4xl:py-4 4xl:text-4xl max-xl:w-full">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
