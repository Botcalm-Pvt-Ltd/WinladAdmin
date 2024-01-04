import UserPermissionComponent from "../../components/UserPermissonComponent/UserPermissionComponent";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import hiddenCar from "../../assets/hiddenCar.png";
// import Inputsearch from "../../components/Inputsearch";
// import RoundIcon from "../../components/RoundIcon";
// import UserIcon from "../../components/userIcon";
import { motion } from "framer-motion";
import MainCar from "../../assets/Dashboard/MainCar.png";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import BackSquare from "../../components/BackgroundBlackSquare/BackSquare";

import Role from "../../components/BackgroundBlackSquare/roles";
import RMBlackSquare from "../../components/RafflesManagement/RMBlackSquare";
import { useState } from "react";
import RadioUserPermisson from "./RadioUserPermisson";

function UserPermisson() {
  const [role, setRole] = useState("user");
  const [typeValue, setType] = useState("level01");

  const handleRoleChange = (value) => {
    if (value == "admin") {
      setType("admin");
    } else {
      setType("level01");
    }
    setRole(value);
  };
  return (
    <>
      <div className=" xl:text-xl px-3 mb-5 text-md">
        User Permissions Management{" "}
      </div>
      {/* <div className="flex lg:flex-row flex-row  items-start justify-between relative">
        <div className="w-full lg:w-full bg-[#F2F5FB]">
          <Role setRole={handleRoleChange} roleValue={role} setType={setType} typeValue={typeValue} />
          <div className="ml-5 flex items-end justify-between">
            <div className="xl:w-2/5  w-11/12">
              <UserPermissionComponent typeValue={typeValue} roleValue={role} />
            </div>
            <div className="w-[500px] hidden items-end xl:flex">
              <div>
                <img src={MainCar} className="w-full h-full" />
              </div>
              <button className="bg-black px-3 py-1 rounded-lg mb-5 text-white">Save</button>
            </div>
          </div>
          <button className="bg-black px-3 py-1 rounded-lg mb-5 text-white xl:hidden block mx-auto my-5">Save</button>
        </div>

      </div> */}
      <div>
        <div className="w-full flex gap-10 px-10">
          <div className="w-1/4 self-start flex justify-end items-end">
            <select
              name="font"
              id="font"
              className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500"
            >
              <option value="font">User Portal</option>
            </select>
          </div>
          <div className="w-1/4 self-start flex justify-end items-end">
            <select
              name="font"
              id="font"
              className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500"
            >
              <option value="font">Level</option>
            </select>
          </div>
          <div className="w-1/4 self-start flex justify-end items-end">
            <select
              name="font"
              id="font"
              className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500"
            >
              <option value="font">Group</option>
            </select>
          </div>
          <div className="w-1/4 self-start flex justify-end items-end"></div>
        </div>
        <div className="w-full pt-5 px-10">
          <RadioUserPermisson />
        </div>
        <div className="flex justify-end items-end">
        <div className="flex w-1/4 relative right-5">
          <button className="text-white bg-black rounded-xl py-2 ml-auto w-1/4">
            Save
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default UserPermisson;
