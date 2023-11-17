import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../components/Pagination";
import MDDetTable from "../components/Col8Table/MDDetTable";
import RMBackground from "../assets/RafflesManagement/RMBackground.jpg";
import { useState } from "react";
import AddMasterDataDetails from "./AddMasterDataDetails";

function MasterDataDetailsComponent() {
  const [UserModal, setUserModal] = useState(false);

  const MasterDataDetails = [
    "ID",
    "Category Name",
    "Name",
    "Description",
    "Sort ID",
    "Status",
    "Action",
  ];
  const MasterDataDetails2 = [
    {
      id: "01",
      categoryName: "Jane_01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet Dolor aliquet amet  Dolor aliquet amet ",
      SortID: "1",
      status: "Active",
    },
    {
      id: "01",
      categoryName: "Jane_01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet Dolor aliquet amet Dolor aliquet amet ",
      SortID: "1",
      status: "Active",
    },
    {
      id: "01",
      categoryName: "Jane_01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet Dolor aliquet amet Dolor aliquet amet ",
      SortID: "1",
      status: "Inactive",
    },
    {
      id: "01",
      categoryName: "Jane_01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet Dolor aliquet amet Dolor aliquet amet ",
      SortID: "1",
      status: "Active",
    },
    {
      id: "01",
      categoryName: "Jane_01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet Dolor aliquet amet Dolor aliquet amet ",
      SortID: "1",
      status: "Inactive",
    },
    {
      id: "01",
      categoryName: "Jane_01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet Dolor aliquet amet Dolor aliquet amet",
      SortID: "1",
      status: "Inactive",
    },
  ];
  return (
    <div className="flex items-start justify-between gap-3 mt-12 flex-col-reverse lg:flex-row">
      <div className="w-full px-3 lg-px-0">
        <div className="flex items-center justify-between  ">
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
          <div className=" flex gap-5 ">
            <button
              className="bg-yellow-300 px-3 py-2 rounded-lg hover-up"
              onClick={() => setUserModal(true)}
            >
              Add new
            </button>

            {UserModal && (
              <AddMasterDataDetails onClose={() => setUserModal(false)} />
            )}

            <select
              name="filter"
              className="bg-yellow-300 px-3 py-2 rounded-lg"
            >
              <option value="">Filter</option>
            </select>
          </div>
        </div>

        <div className="relative overflow-x-auto   sm:rounded-lg py-4">
          <MDDetTable cols={MasterDataDetails} data={MasterDataDetails2} />
        </div>
        <div className="w-full">
          <Pagination />
        </div>
        <div className="absolute top-[600px] right-[100px] max-lg:top-96 max-lg:right-0">
          <img src={RMBackground} alt="" className="opacity-20 -z-10" />
        </div>
      </div>
    </div>
  );
}

export default MasterDataDetailsComponent;
