import UserPermissionComponent from "../../components/UserPermissonComponent/UserPermissionComponent"
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import hiddenCar from "../../assets/hiddenCar.png";
import Inputsearch from "../../components/Inputsearch";
import RoundIcon from "../../components/RoundIcon";
import UserIcon from "../../components/userIcon";
import { motion } from "framer-motion";
import MainCar from "../../assets/Dashboard/MainCar.png";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import BackSquare from "../../components/BackgroundBlackSquare/BackSquare";
import UserPagination from "../../components/UserPermissonComponent/UserPegination";
import Role from "../../components/BackgroundBlackSquare/roles";

function UserPermisson() {
  return (
    <div className="flex lg:flex-row flex-row  items-start justify-between ">
      <div className="">
        <SideNavComponent />
      </div>
      <div className="w-full lg:w-full bg-white ">
        <Role />

        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        <div className="xl:w-2/5  w-5/12 ml-5">
          <UserPermissionComponent />
        </div>

        <div className="mt-5">
          <UserPagination />
        </div>
      </div>
    </div>
  );
}

export default UserPermisson