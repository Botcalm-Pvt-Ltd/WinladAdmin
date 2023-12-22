import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../../components/Pagination";
import ColEightTable from "../../components/Tables/ColEightTable";
import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import RMBlackSquare from "../RafflesManagement/RMBlackSquare";
import TopBar from "../TopBar";
import authAxios from "../../utils/AuthAxios";

function UserManagementComponent() {
  const [AllUsers, setAllUsers] = useState([]);
  const [UserModal, setUserModal] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;


  const getAllUsers = async()=>{
    try {
      const all = await authAxios.get(`${apiKey}/adminGetUsers`);
      setAllUsers(all.data);
      console.log(all.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllUsers();
  },[])

  const table2Cols = [
    "User Id",
    "Name",
    "Verification Level",
    "User Role",
    "User Email",
    "NIC",
    "Status",
    "Action",
  ];
  const table2Data = [
    {
      id: "01",
      name: "Jane Cooper",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Inactive",
    },
    {
      id: "01",
      name: "Jane Cooper",
      vlevel: "Level 01",
      role: "User",
      email: "test@email.com",
      passport: "ND123456",
      status: "Inactive",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-row  items-start justify-between mb-10">
      <RMBlackSquare />
      <div className="w-full lg:w-full overflow-hidden max-xl:overflow-visible relative max-xl:left-0">
      
        <div className="lg:p-5">
          
          <TopBar />
        </div>
        <div>
          <h1 className="text-xl px-8 max-xl:pt-20 pt-1 max-md:pt-20">
            User Management
          </h1>
        </div>
        <div className="flex items-start justify-between gap-3 mt-10 flex-col-reverse lg:flex-row relative max-xl:top-10">
          <div className="w-full px-3 lg-px-0">
            <div className="flex items-center justify-between  pl-4">
              <div className="bg-gray-200 rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
                <div htmlFor="search" className="text-2xl mt-0">
                  <PiMagnifyingGlassThin />
                </div>
                <input
                  type="search"
                  name="search"
                  placeholder="Search For Anything"
                  className="bg-inherit px-4 py-2 w-full border-none outline-none"
                />
              </div>
              <div className=" flex gap-5 w-1/5 max-xl:w-[30%]">
                <button
                  className="bg-gray-200 px-3 py-1 rounded-lg hover-up"
                  onClick={() => setUserModal(true)}
                >
                  Add Users
                </button>

                {UserModal && <AddUser onClose={() => setUserModal(false)} />}

                <select
                  name="filter"
                  className="bg-gray-200 px-3 py-1 rounded-lg"
                >
                  <option value="">Filter</option>
                </select>
              </div>
            </div>

            <div className="relative overflow-x-auto  sm:rounded-lg py-4">
              <ColEightTable cols={table2Cols} data={AllUsers} />
            </div>
            <div className="w-full relative pr-5">
              <Pagination />
            </div>
            {/* <div className="absolute top-[250px] max-xl:top-[450px] right-[150px] max-lg:top-96 max-lg:right-0">
              <img src={RMBackground} alt="" className="opacity-20 -z-10" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagementComponent;
