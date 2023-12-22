import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function UserPermissionComponent({ roleValue, typeValue }) {
  const [page, setPage] = useState(1);
  return (
    <div className="flex-col flex-1 space-y-4 xl:flex 2xl:mt-10 mt-20 relative ">
      <div className=" bg-gray-200  rounded-3xl pl-4 flex flex-row justify-between py-20  px-5 cursor-pointer overflow-y-auto max-h-[750px] min-h-[600px]">
        {/* <div className="gold-card-inner-sec1"> */}
        <div className="flex flex-col xl:gap-1 gap-1 space-y-1 px-2">
          {
            roleValue == 'user' && (typeValue == 'level01' || typeValue == 'level02') ? <>
              <span className="xl:text-xl  text-md">Home</span>
              <span className="xl:text-xl  text-md">Subscription Purchases</span>
              <span className="xl:text-xl  text-md">Raffle Purchases/Join For Raffle</span>
              <span className="xl:text-xl  text-md">News</span>
              <span className="xl:text-xl  text-md">Business Card</span>
              <span className="xl:text-xl  text-md">Raffle Broadcast</span>
              <span className="xl:text-xl  text-md">Transaction History</span>
              <span className="xl:text-xl  text-md">Fund Transfer</span>
              <span className="xl:text-xl  text-md">FAQ</span>
              <span className="xl:text-xl  text-md">Support</span>
              <span className="xl:text-xl  text-md">Local Diestel</span>
              <span className="xl:text-xl  text-md">Wallet Payment</span>
            </> : roleValue == 'admin' &&  (typeValue == 'admin' || (typeValue == 'super-admin' && page == 1))? <>
              <span className="xl:text-xl  text-md">Admin Dashboard</span>
              <span className="xl:text-xl  text-md">View Settings</span>
              <span className="xl:text-xl  text-md">Edit Settings</span>
              <span className="xl:text-xl  text-md">View User</span>
              <span className="xl:text-xl  text-md">View Raffle Details</span>
              <span className="xl:text-xl  text-md">Edit Raffle Details</span>
              <span className="xl:text-xl  text-md">View Permissions</span>
              <span className="xl:text-xl  text-md">Edit Permissions</span>
              <span className="xl:text-xl  text-md">View FAQ Settings</span>
              <span className="xl:text-xl  text-md">Edit FAQ Settings</span>
              <span className="xl:text-xl  text-md">View Report</span>
              <span className="xl:text-xl  text-md">Export Reports</span>
            </>:roleValue == 'admin' && typeValue == 'super-admin' && page == 2 ? <>
              <span className="xl:text-xl  text-md">
                View Super Admin Settings
              </span>
              <span className="xl:text-xl  text-md">
                Edit Super Admin Settings
              </span>
              <span className="xl:text-xl  text-md">Super Admin Report</span>
            </>
            : ""
          }

        </div>
        <div className="flex flex-col xl:gap-2 gap-1 items-center xl:mr-4 px-2">
          {
            roleValue == 'user' && (typeValue == 'level01' || typeValue == 'level02') ? <>
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />

              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
            </> : roleValue == 'admin' &&  (typeValue == 'admin' || (typeValue == 'super-admin' && page == 1)) ? <>

              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
            </> : roleValue == 'admin' && typeValue == 'super-admin' && page == 2 ? <>
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />

              <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none  dark:bg-gray-400 dark:checked:bg-black appearance-none
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
              />
            </> : <></>
          }

          <label htmlFor="hs-basic-usage text-black" className="sr-only">
            switch
          </label>
        </div>

      </div>
      <div className="flex items-center justify-center gap-2 my-4">
        <button className="p-1" onClick={() => setPage((prev) => --prev)} ><ArrowBackIosIcon /></button>
        <button className="p-1" onClick={() => setPage(1)}>1</button>
        {
          typeValue == 'super-admin' ? <button className="p-1" onClick={() => setPage(2)}>2</button> : <></>
        }
        <button className="p-1" onClick={() => setPage((prev) => ++prev)}><ArrowForwardIosIcon /></button>
      </div>
    </div>
  );
}

export default UserPermissionComponent;
