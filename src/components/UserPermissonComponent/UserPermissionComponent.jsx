function UserPermission() {
  return (
    <div className="flex-col flex-1  xl:flex">
      <div className=" bg-gradient-to-br  from-[#FFECA8] to-[#FFECA8]  rounded-3xl pl-4 flex flex-row justify-between py-20 cursor-pointer">
        {/* <div className="gold-card-inner-sec1"> */}
        <div className="flex flex-col xl:gap-3 space-y-1 px-2">
          <span className="xl:text-2xl  text-3xl">
            View Super Admin Settings
          </span>
          <span className="xl:text-2xl  text-3xl">
            Edit Super Admin Settings
          </span>
          <span className="xl:text-2xl  text-3xl">Super Admin Report</span>
        </div>
        <div className="flex flex-col xl:gap-5 gap-1 items-center xl:mr-4 px-2">
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none appearance-none dark:bg-[#FF6363] dark:checked:bg-[#7FFF6F]
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
          />

          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none appearance-none dark:bg-[#FF6363] dark:checked:bg-[#7FFF6F]
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
          />
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7  border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent  ring-offset-white focus:outline-none appearance-none dark:bg-[#FF6363] dark:checked:bg-[#7FFF6F]
                    before:inline-block before:w-6 before:h-6   before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-white dark:checked:before:bg-white"
          />
          
          <label htmlFor="hs-basic-usage text-black" className="sr-only">
            switch
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserPermission;
