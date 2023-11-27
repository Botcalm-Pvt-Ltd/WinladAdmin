import UserPermissionComponent2 from "../../components/UserPermissonComponent/UserPermissionComponent2";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import { motion } from "framer-motion";
import MainCar from "../../assets/Dashboard/MainCar.png";
import UserPagination from "../../components/UserPermissonComponent/UserPegination";
import Role from "../../components/BackgroundBlackSquare/roles";
import TopBar from "../../components/TopBar";
function UserPermisson2() {
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
          <UserPermissionComponent2 />
        </div>

        <div className="mt-5">
          <UserPagination />
        </div>
      </div>
    </div>
  );
}

export default UserPermisson2;
