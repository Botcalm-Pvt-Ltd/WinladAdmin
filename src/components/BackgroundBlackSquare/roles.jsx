import hiddenCar from "../../assets/hiddenCar.png";


const Role = ({ setRole, roleValue,typeValue, setType }) => {
  return (
      <div className="w-full flex gap-10">
        <div className="w-[30%] self-start flex justify-end items-end">

        <select
          name="filter"
          className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500 4xl:py-5 4xl:text-2xl"
          placeholder="User Portal"
          value={roleValue}
          id="sel"
          onChange={(e) => setRole(e.target.value)}
          >
          {/* <option value="">User Portal</option> */}
          <option value="user" className="4xl:text-sm w-20">User</option>
          <option value="admin" className="4xl:text-sm">Admin</option>
        </select>
          </div>
        <div className="w-[30%] self-start flex justify-end items-end">


        <select
          name="For"
          value={typeValue}
          onChange={(e)=> setType(e.target.value)}
          className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500 4xl:py-5 4xl:text-2xl"
          >
          {
            roleValue == 'user' ? <>
              <option value="level01">Level 01 Verified User</option>
              <option value="level02">Level 02 Verified User</option>
            </> : <>
              <option value="admin">Admin Application</option>
              <option value="super-admin">Super Admin Application</option>
            </>
          }



        </select>
          </div>
          <div className="w-[30%] self-start flex justify-end items-end">

        <select
          name="Group"
          className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500 4xl:py-5 4xl:text-2xl"
        >
          <option value="">Group</option>
          <option value="">Verified</option>
          <option value="">Unverifed</option>
        </select>
      </div>
      <div className="w-[10%] self-start flex justify-end items-end"></div>

      </div>
  );
};

export default Role;
