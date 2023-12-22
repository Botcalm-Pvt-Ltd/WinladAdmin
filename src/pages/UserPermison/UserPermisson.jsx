import UserPermissionComponent from "../../components/UserPermissonComponent/UserPermissionComponent"
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

function UserPermisson() {
  const [role, setRole] = useState('user');
  const [typeValue, setType] = useState('level01');

  const handleRoleChange = (value) => {
    if (value == 'admin') {
      setType('admin');
    } else {
      setType('level01')
    }
    setRole(value);
  }
  return (
    <>
      <div className=" xl:text-xl px-3 mb-5 text-md">User Permissions Management </div>
      <div className="flex lg:flex-row flex-row  items-start justify-between relative h-full bg-white">
        <div className="w-full lg:w-full bg-white ">
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

      </div>
    </>
  );
}

export default UserPermisson