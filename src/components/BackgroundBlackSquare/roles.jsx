import hiddenCar from "../../assets/hiddenCar.png";
import Select from "../Select";

const Role = ({ setRole, roleValue, typeValue, setType }) => {
  return (
    <div className="w-full flex gap-10 max-xl:gap-3">
      <div className="w-full">
        {/* 
        <select
          name="filter"
          className="bg-white px-3 py-3 rounded-lg ring-2 ring-gray-300 w-full text-gray-500 4xl:py-5 4xl:text-2xl"
          placeholder="User Portal"
          value={roleValue}
          id="sel"
          onChange={(e) => setRole(e.target.value)}
          >
          <option value="user" className="4xl:text-sm w-20">User</option>
          <option value="admin" className="4xl:text-sm">Admin</option>
        </select> */}
        <Select
          options={[
            { id: "user", name: "User" },
            { id: "admin", name: "Admin" },
          ]}
          defaultSelected={{
            id: roleValue,
            name: roleValue === "user" ? "User" : "Admin",
          }}
          onChange={(value) => setRole(value.id)}
        />
      </div>
      <div className="w-full">
        <Select
          options={
            roleValue === "user"
              ? [
                  { id: "level01", name: "Level 01 Verified User" },
                  { id: "level02", name: "Level 02 Verified User" },
                ]
              : [
                  { id: "admin", name: "Admin Application" },
                  { id: "super-admin", name: "Super Admin Application" },
                ]
          }
          defaultSelected={{ id: typeValue, name: typeValue }}
          onChange={(value) => setType(value.id)}
        />
      </div>
      <div className="w-full">
        <Select
          options={[
            { id: "Group", name: "Group" },
            { id: "verified", name: "Verified" },
            { id: "unverified", name: "Unverified" },
          ]}
          defaultSelected={{ id: "Group", name: "Group" }}
        />
      </div>
      <div className="w-[30%] max-xl:w-0 self-start flex justify-end items-end"></div>
    </div>
  );
};

export default Role;
