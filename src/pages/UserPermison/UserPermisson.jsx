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
      <div className="px-10 pb-5 4xl:text-4xl 4xl:pb-10">
        User Permissions Management
      </div>
        <div className="w-full flex gap-10 px-10">
          <div className="w-full self-start flex justify-end items-end">
            <Role
            setRole={handleRoleChange}
            roleValue={role}
            setType={setType}
            typeValue={typeValue}
          />
          </div>
        </div>
        <div className="w-full pt-5 px-10 z-20">
        <RadioUserPermisson typeValue={typeValue} roleValue={role} />
        </div>
        <div className="absolute right-10 bottom-14 w-20 z-10">
          <button className="text-white bg-black rounded-xl py-2 ml-auto w-full">
            Save
          </button>
        </div>
    </>
  );
}

export default UserPermisson;
