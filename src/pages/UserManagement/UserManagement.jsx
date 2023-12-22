import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../../components/Pagination";
import ColEightTable from "../../components/Tables/ColEightTable";
import { useState } from "react";
import AddUser from "../../components/UserManagementComponent/AddUser";


function UserManagement() {
  const [UserModal, setUserModal] = useState(false);

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
    <div className="h-full">
      <div>
          <h1 className="text-xl px-3 mb-5">
            User Management
          </h1>
        </div>
      <div className="w-full lg:w-full overflow-hidden max-xl:overflow-visible relative max-xl:left-0 bg-white h-full">
        <div className="flex items-start justify-between gap-3 pt-10 flex-col-reverse lg:flex-row relative  bg-white">
          <div className="w-full">
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
              <ColEightTable cols={table2Cols} data={table2Data} />
            </div>
            <div className="w-full relative pr-5">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
