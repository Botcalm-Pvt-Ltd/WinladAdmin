import UserPermissionComponent from "../../components/UserPermissonComponent/UserPermissionComponent"
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import hiddenCar from "../../assets/hiddenCar.png";
import Inputsearch from "../../components/Inputsearch";
import RoundIcon from "../../components/RoundIcon";
import UserIcon from "../../components/userIcon";
import { motion } from "framer-motion";
import MainCar from "../../assets/Dashboard/MainCar.png";
import { Link } from "react-router-dom";




function UserPermisson() {
  return (
    <div className="flex flex-col-2  max-w-[2048px] mx-auto ">
      <div className="">
        <SideNavComponent />
      </div>

      <div className="absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/2 h-1/2">
        <div className="flex items-center justify-end gap-3 w-full mb-3 pt-5">
          <Inputsearch />
          <UserIcon />
          <RoundIcon />
        </div>
        <div className="flex flex-row gap-10">
          <span className="bg-yellow-400 w-1/2  px-3 py-2  text-center rounded-lg  outline-none">
            <Link to="/user-permisson-role-2">Role</Link>
          </span>
          <span className="bg-yellow-400 w-1/2  px-3 py-2  text-center rounded-lg  outline-none">
            <Link to="/user-permisson-role-3">For</Link>
          </span>

          {/* <select
              name="filter"
              className="bg-yellow-400 px-3 py-2 rounded-lg  outline-none"
            >
              <option value="">Group</option>
            </select> */}
        </div>

        <img
          src={hiddenCar}
          className="w-50 mt-auto absolute bottom-0 left-0"
        />
      </div>
  
      <div className=" flex justify-center items-center xl:w-2/5 xl:ml-10 ">\
        
        <UserPermissionComponent />
      </div>
      {/* <div>
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={MainCar}
          alt="Your Logo"
          className="background-image-join"
        ></motion.img>
      </div> */}
    </div>
  );
}

export default UserPermisson