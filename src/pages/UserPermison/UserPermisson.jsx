import UserPermissionComponent from "../../components/UserPermissonComponent/UserPermissionComponent"
import SideNavComponent from "../../components/SideNavComponent/SideNavComponent";
import hiddenCar from "../../assets/hiddenCar.png";
function UserPermisson() {
  return (
    <div className="flex flex-col-2  max-w-[2048px] mx-auto ">
      <SideNavComponent screen="full" />
      <div className="absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/2 h-1/2">
        <img
          src={hiddenCar}
          className="w-50 mt-auto absolute bottom-0 left-0"
        />
      </div>
      <div className="xl:w-3/4">
        <UserPermissionComponent />
      </div>
    </div>
  );
}

export default UserPermisson