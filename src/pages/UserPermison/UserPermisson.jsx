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
    <div className="px-10 max-xl:mt-5">
      <div className="pb-5 text-xl 4xl:text-6xl font-semibold 4xl:pb-10">
        User Permissions Management
      </div>
          <div className="w-full">
            <Role
            setRole={handleRoleChange}
            roleValue={role}
            setType={setType}
            typeValue={typeValue}
          />
          </div>
        <div className="w-full pt-5 z-20">
        <RadioUserPermisson typeValue={typeValue} roleValue={role} />
        </div>
        <div className="absolute right-10 bottom-14 w-20 z-10 4xl:w-40">
          <button className="text-white bg-black rounded-xl py-2 ml-auto w-full 4xl:text-4xl 4xl:py-4">
            Save
          </button>
        </div>
    </div>
  );
}

export default UserPermisson;
