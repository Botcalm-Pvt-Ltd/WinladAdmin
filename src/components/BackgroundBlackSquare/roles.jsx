import hiddenCar from "../../assets/hiddenCar.png";


const Role = () => {
  return (
    <div className="absolute top-0 right-0 rounded-bl-3xl rounded-br-3xl  bg-black w-1/3 lg:w-1/2	 h-2/6 lg:h-1/2 m">
      <div className="flex flex-row gap-10 px-5 mt-20">
        <select
          name="filter"
          className="bg-[#FFFFFF] px-3 py-2 rounded-lg   xl:w-1/2  w-1/4  text-center  outline-none "
        >
          <option value="">Role</option>
          <option value="">User</option>
          <option value="">Admin</option>
        </select>
        <select
          name="For"
          className="bg-[#FFFFFF] px-3 py-2 rounded-lg  xl:w-1/2  w-1/4  text-center  outline-none"
        >
          <option value="">For</option>
          <option value="">Winlads Portal</option>
          <option value="">Admin Application</option>
          <option value="">Super Admin Application</option>
        </select>

        <select
          name="Group"
          className="bg-[#FFFFFF] px-3 py-2 rounded-lg   xl:w-1/2  w-1/4  text-center  outline-none"
        >
          <option value="">Group</option>
          <option value="">Verified</option>
          <option value="">Unverifed</option>
        </select>
      </div>
      <img src={hiddenCar} className="w-50 mt-auto absolute bottom-0 left-0" />
    </div>
  );
};

export default Role;
