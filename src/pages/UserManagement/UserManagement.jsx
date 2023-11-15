import UserManagementComponent from "../../components/UserManagementComponent/UserManagementComponent";
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import TopBar from "../../components/TopBar";
import RMBlackSquare from "../../components/RafflesManagement/RMBlackSquare";

function UserManagement() {
  return (
    <div className="flex lg:flex-row flex-row  items-start justify-between">
      <SideNavComponent />
      <div className="w-full lg:w-full bg-white overflow-hidden">
        <RMBlackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
        </div>
        <div>
          <h1 className="text-xl px-20 pt-10 max-md:pt-20">
            Users Management
          </h1>
        </div>
        <div className="">
          <UserManagementComponent />
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
