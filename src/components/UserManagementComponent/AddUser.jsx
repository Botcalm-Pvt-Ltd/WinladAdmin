import  { useState } from "react";

function AddUser() {

    const [formData, setFormData] = useState({
      userId: "",
      userName: "",
      userRole: "",
      userType: "",
      passport: "",
      email: "",
    });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    

     const handleSubmit = (e) => {
       e.preventDefault();
       // Handle form submission logic here
       console.log("Form submitted:", formData);
     };
    return (
      <div className="bg-[#D6F6FF] ">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="text-black">
            User ID:
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="p-2 border border-none bg-[#7CE1F7] rounded"
            />
          </div>

          <div className="text-black">
            User Name:
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="p-2  rounded border-none bg-[#7CE1F7]"
            />
          </div>

          <div className="text-black">
            User Role:
            <select
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
              className="p-2 rounded border-none bg-[#7CE1F7]"
            >
              <option value="">Select User Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="text-black">
            User Type:
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="p-2 rounded border-none bg-[#7CE1F7]"
            >
              <option value="">Select User Type</option>
              <option value="admin">Verified</option>
              <option value="user">UnVerified</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="text-black">
            Passport:
            <input
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
              className="p-2 rounded border-none bg-[#7CE1F7]"
            />
          </div>

          <div className="text-black">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded border-none bg-[#7CE1F7]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#000000] text-blue-500 p-2 rounded hover:bg-blue-700 hover:text-white"
          >
            Save
          </button>
        </form>
      </div>
    );
}

export default AddUser;
