import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../../components/Pagination";
import ColEightTable from "../../components/Tables/ColEightTable";
import { useState } from "react";
import AddUser from "../../components/UserManagementComponent/AddUser";
import FilerSelect from "../../components/FilterSelect";


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
      MNumber: "0771234567",
      SPlan: "Black",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      UType:"Level 01",
      NIC: "0192837291",
      MNumber: "0771234567",
      SPlan: "Gold",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "0771234567",
      SPlan: "Gold",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "0771234567",
      SPlan: "Black",
      status: "Active",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "0771234567",
      SPlan: "Black",
      status: "Inactive",
    },
    {
      id: "Jane Cooper",
      name: "Jane_01",
      role: "User",
      NIC: "0192837291",
      UType:"Level 01",
      MNumber: "0771234567",
      SPlan: "Gold",
      status: "Inactive",
    },
  ];
  const UserManagementFilter = [
    {
      id: 1,
      name: "Filter 1",
    },
    {
      id: 2,
      name: "Filter 2",
    },
    {
      id: 3,
      name: "Filter 3",
    },
    {
      id: 4,
      name: "Filter 4",
    },
  ];
  return (
    <div className="h-full max-xl:mt-5">
      <div>
          <h1 className="text-xl px-3 font-semibold 4xl:text-6xl">
            User Management
          </h1>
        </div>
      <div className="w-full lg:w-full relative max-xl:left-0 bg-[#F2F5FB] h-full">
        <div className="flex items-start justify-between gap-3 pt-10 flex-col-reverse lg:flex-row relative bg-[#F2F5FB]">
          <div className="w-full">
            <div className="flex items-center justify-between pl-4 max-lg:pr-20">
              <div className="bg-white rounded-full w-3/12 max-xl:w-7/12 px-4 relative flex items-center justify-between">
                <div htmlFor="search" className="text-2xl mt-0">
                  <PiMagnifyingGlassThin className="4xl:w-10 4xl:h-10"/>
                </div>
                <input
                  type="search"
                  name="search"
                  placeholder="Search For Anything"
                  className="bg-inherit px-4 py-2 w-full border-none outline-none 4xl:placeholder:text-4xl 4xl:py-4 4xl:px-8 placeholder:relative 4xl:placeholder:top-1"
                />
              </div>
              <div className=" flex gap-5 w-1/5 max-xl:w-[30%]">
                <button
                  className="bg-white px-3 py-1 rounded-lg hover-up whitespace-nowrap  4xl:text-3xl 4xl:px-6 4xl:py-2"
                  onClick={() => setUserModal(true)}
                >
                  Add Users
                </button>

                {UserModal && <AddUser onClose={() => setUserModal(false)} />}

                {/* <select
                  name="filter"
                  className="bg-white px-3 py-1 rounded-lg 4xl:text-4xl 4xl:px-6 4xl:py-2"
                >
                  <option value="">Filter</option>
                </select> */}
                <FilerSelect options={UserManagementFilter}/>
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
