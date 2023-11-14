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



function UserPermisson() {
  return (
    <div className="flex lg:flex-row flex-row  items-start justify-between ">
      <div className="">
        <SideNavComponent />
      </div>
      <div className="w-full lg:w-full bg-white overflow-hidden">
        <BackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        {/* <div className="flex flex-row gap-10 px-5 mt-5">
          <span className="bg-yellow-400 w-1/2  px-3 py-2  text-center rounded-lg  outline-none">
            <Link to="/user-permisson-role-2">Role</Link>
          </span>
          <span className="bg-yellow-400 w-1/2  px-3 py-2  text-center rounded-lg  outline-none">
            <Link to="/user-permisson-role-3">For</Link>
          </span>
          <span className="bg-yellow-400 w-1/2  px-3 py-2  text-center rounded-lg  outline-none">
            <Link to="/user-permisson-role-1">Group</Link>
          </span>
        </div> */}
        <div className="xl:w-1/2 w-1/2">
          <UserPermissionComponent />
        </div>

        <div className="top-0 right-0 xl:w-1/2 w-3/4 ">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={MainCar}
            alt="Your Logo"
            className="background-image-join"
          ></motion.img>
        </div>
      </div>
    </div>
  );
}

export default UserPermisson