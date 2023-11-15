import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../../components/Pagination";
import ColEightTable from "../../components/Col8Table/ColEightTable";

function UserManagementComponent() {

    const table2Cols = [
      "User Id",
      "Name",
      "Verification Level",
      "User Role",
      "User Email",
      "Passport",
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
    <div className="flex items-start justify-between gap-3 mt-12 flex-col-reverse lg:flex-row">
      <div className="lg:w-8/12 w-full px-3 lg-px-0">
        <div className="flex items-center justify-between">
          <div className=" bg-yellow-300 rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-yellow-300"
            />
          </div>
          <select name="filter" className="bg-yellow-300 px-3 py-2 rounded-lg">
            <option value="">Filter</option>
          </select>
        </div>

        <div className="relative overflow-x-auto  sm:rounded-lg py-4">
          <ColEightTable cols={table2Cols} data={table2Data} />
        </div>
        <div className="w-full">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default UserManagementComponent;
