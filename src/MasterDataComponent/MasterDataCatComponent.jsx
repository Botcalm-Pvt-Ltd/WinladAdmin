import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../components/Pagination";
import MDCatTable from "../components/Tables/MDCatTable";
import RMBackground from "../assets/RafflesManagement/RMBackground.jpg";
import { useState } from "react";
import AddMasterDataCategory from "./AddMasterDataCategory";

function MasterDataCatComponent() {
  const [UserModal, setUserModal] = useState(false);

  const MasterCategory = ["User Id", "Name", "Description", "Action"];
  const MasterCategory2 = [
    {
      id: "01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
    },
    {
      id: "01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
    },
    {
      id: "01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
    },
    {
      id: "01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
    },
    {
      id: "01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
    },
    {
      id: "01",
      name: "Jane Cooper",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
    },
  ];
  return (
    <div className="flex items-start justify-between gap-3 mt-12 flex-col-reverse lg:flex-row">
      <div className="w-full px-3 lg-px-0">
        <div className="flex items-center justify-between  ">
          <div className=" bg-[#FFFFFF]  border-2 border-[#000000] rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-[#FFFFFF]  border-2 border-[#000000]"
            />
          </div>
          <div className=" flex gap-5 w-1/3  ">
            <button
              className="bg-[#FFFFFF]  border-2 border-[#000000] px-3 py-2 rounded-lg hover-up"
              onClick={() => setUserModal(true)}
            >
              Add new
            </button>

            {UserModal && (
              <AddMasterDataCategory onClose={() => setUserModal(false)} />
            )}

            <select
              name="filter"
              className="bg-[#FFFFFF]  border-2 border-[#000000] px-3 py-2 rounded-lg"
            >
              <option value="">Filter</option>
            </select>
          </div>
        </div>

        <div className="relative overflow-x-auto  sm:rounded-lg py-4">
          <MDCatTable cols={MasterCategory} data={MasterCategory2} />
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

export default MasterDataCatComponent;
