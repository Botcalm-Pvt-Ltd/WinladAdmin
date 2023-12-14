import { PiMagnifyingGlassThin } from "react-icons/pi";
import Pagination from "../../components/Pagination";
import SubManTable from "../../components/Tables/SubManTable";
import RMBackground from "../../assets/RafflesManagement/RMBackground.jpg";
import { useState } from "react";
import AddSubscription from "./AddSubscription";

function SubscriptionComponent() {
  const [UserModal, setUserModal] = useState(false);

  const Subscription = [
    "ID",
    "Subscription Name",
    "Plan Type",
    "Description",
    "Status",
    "Action",
  ];
  const Subscription2 = [
    {
      id: "01",
      name: "Jane Cooper",
      type: "Level 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      type: "Level 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      type: "Level 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      type: "Level 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
      status: "Inactive",
    },
    {
      id: "01",
      name: "Jane Cooper",
      type: "Level 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
      status: "Active",
    },
    {
      id: "01",
      name: "Jane Cooper",
      type: "Level 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dolor aliquet amet pellentesque scelerisque velit arcu bibendum maecenas duis.",
      status: "Inactive",
    },
  ];
  return (
    <div className="flex items-start justify-between gap-3 mt-12 flex-col-reverse lg:flex-row">
      <div className="w-full px-3 lg-px-0">
        <div className="flex items-center justify-between  ">
          <div className=" bg-gray-200 rounded-full w-3/12  md:w-4/12 overflow-hidden px-4 relative flex items-center justify-between">
            <div htmlFor="search" className="text-2xl mt-0">
              <PiMagnifyingGlassThin />
            </div>
            <input
              type="search"
              name="search"
              placeholder="Search For Anything"
              className="px-4 py-2 w-full border-none  outline-none bg-inherit"
            />
          </div>
          <div className=" flex gap-5 ">
            <button
              className="bg-gray-200 px-3 py-2 rounded-lg hover-up"
              onClick={() => setUserModal(true)}
            >
              Add new
            </button>

            {UserModal && (
              <AddSubscription onClose={() => setUserModal(false)} />
            )}

            <select
              name="filter"
              className="bg-gray-200 px-3 py-2 rounded-lg"
            >
              <option value="">Filter</option>
            </select>
          </div>
        </div>

        <div className="relative overflow-x-auto  sm:rounded-lg py-4">
          <SubManTable cols={Subscription} data={Subscription2} />
        </div>
        <div className="w-full">
          <Pagination />
        </div>
        {/* <div className="absolute top-[600px] right-[100px] max-lg:top-96 max-lg:right-0">
          <img src={RMBackground} alt="" className="opacity-20 -z-10" />
        </div> */}
      </div>
    </div>
  );
}

export default SubscriptionComponent;
