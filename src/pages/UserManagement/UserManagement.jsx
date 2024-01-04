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
    "User Role",
    "User Type",
    "NIC",
    "Mobile Number",
    "Subscription Plan",
    "Status",
    "Action",
  ];
  const table2Data = [
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      UType:"Level 01",
      NIC: "0192837291",
      MNumber: "test@email.com",
      SPlan: "Black",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      UType:"Level 01",
      NIC: "0192837291",
      MNumber: "test@email.com",
      SPlan: "Gold",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "test@email.com",
      SPlan: "Gold",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "test@email.com",
      SPlan: "Black",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "test@email.com",
      SPlan: "Black",
      status: "Inactive",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "test@email.com",
      SPlan: "Gold",
      status: "Inactive",
    },
  ];
  return (
    <div className="h-full">
      <div>
          <h1 className="text-xl px-3 mb-5 font-semibold">
            User Management
          </h1>
        </div>
      <div className="w-full lg:w-full overflow-hidden max-xl:overflow-visible relative max-xl:left-0 bg-[#F2F5FB] h-full">
        <div className="flex items-start justify-between gap-3 pt-10 flex-col-reverse lg:flex-row relative bg-[#F2F5FB]">
          <div className="w-full">
            <div className="flex items-center justify-between pl-4">
              <div className="bg-white rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
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
                  className="bg-white px-3 py-1 rounded-lg hover-up"
                  onClick={() => setUserModal(true)}
                >
                  Add Users
                </button>

                {UserModal && <AddUser onClose={() => setUserModal(false)} />}

                <select
                  name="filter"
                  className="bg-white px-3 py-1 rounded-lg"
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
