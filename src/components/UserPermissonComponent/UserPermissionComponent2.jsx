import MainCar from "../../assets/Dashboard/MainCar.png";
import { motion } from "framer-motion";
import SideNavComponent from "../SideNavComponent/SideNavComponent";

function UserPermission2() {
  return (
    <div className="flex-col flex-1 space-y-4 hidden xl:flex">
      <SideNavComponent screen="full" />
      <div className=" bg-gradient-to-br  from-[#FFECA8] to-[#FFECA8]  rounded-3xl pl-4 flex flex-row justify-between pt-4 pb-12 cursor-pointer">
        {/* <div className="gold-card-inner-sec1"> */}
        <div className="flex flex-col xl:space-y-2 space-y-1 px-2">
          <span className="xl:text-2xl  text-3xl">Admin Dashboard</span>
          <span className="xl:text-2xl  text-3xl">View Settings</span>
          <span className="xl:text-2xl  text-3xl">Edit Settings</span>
          <span className="xl:text-2xl  text-3xl">View User</span>
          <span className="xl:text-2xl  text-3xl">View Raffle Details</span>
          <span className="xl:text-2xl  text-3xl">Edit Raffle Details</span>
          <span className="xl:text-2xl  text-3xl">View Permissions</span>
          <span className="xl:text-2xl  text-3xl">Edit Permissions</span>
          <span className="xl:text-2xl  text-3xl">View FAQ Settings</span>
          <span className="xl:text-2xl  text-3xl">Edit FAQ Settings</span>
          <span className="xl:text-2xl  text-3xl">View Report</span>
          <span className="xl:text-2xl  text-3xl">Export Reports</span>
        </div>
        <div className="flex flex-col xl:gap-2 gap-1 items-center xl:mr-4 px-2">
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#FF6363] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                    before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
          />
   
          <label htmlFor="hs-basic-usage text-black" className="sr-only">
            switch
          </label>
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        src={MainCar}
        alt="Your Logo"
        className="background-image-join"
      ></motion.img>
    </div>
  );
}

export default UserPermission2;
