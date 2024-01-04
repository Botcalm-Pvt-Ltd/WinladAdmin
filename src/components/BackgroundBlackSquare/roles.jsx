import hiddenCar from "../../assets/hiddenCar.png";


const Role = ({ setRole, roleValue,typeValue, setType }) => {
  return (
    <div className="absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl lg:w-1/2	 md:h-2/6  h-2/6 lg:h-1/2">
      <div className="flex flex-row gap-10 px-5 mt-10">
        <select
          name="filter"
          className="bg-gray-200 px-3 py-2 rounded-lg   xl:w-1/2  w-1/4  text-center  outline-none "
          placeholder="User Portal"
          value={roleValue}
          onChange={(e) => setRole(e.target.value)}
        >
          {/* <option value="">User Portal</option> */}
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <select
          name="For"
          value={typeValue}
          onChange={(e)=> setType(e.target.value)}
          className="bg-gray-200 px-3 py-2 rounded-lg  xl:w-1/2  w-1/4  text-center  outline-none"
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

        <select
          name="Group"
          className="bg-gray-200 px-3 py-2 rounded-lg   xl:w-1/2  w-1/4  text-center  outline-none"
        >
          <option value="">Group</option>
          <option value="">Verified</option>
          <option value="">Unverifed</option>
        </select>
      </div>
      {/* <img src={hiddenCar} className="w-50 mt-auto absolute bottom-0 left-0" /> */}
    </div>
  );
};

export default Role;
