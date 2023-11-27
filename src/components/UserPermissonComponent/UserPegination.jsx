import React from 'react'
import { Link } from "react-router-dom";
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
function UserPegination() {
  return (
    <div className="pagination flex items-center justify-center gap-3 mx-auto float-right">
      <button className="bg-yellow-300 p-2 rounded-lg">
        <MdArrowBackIosNew />
      </button>

      <Link to="/user-permisson-role-2">
        <button className="bg-yellow-300 py-1 px-2 text-center rounded-lg">
          1
        </button>
      </Link>

      <Link to="/user-permisson-role-1">
        <button className="bg-yellow-300 px-2 py-1 rounded-lg">2</button>
      </Link>

      <Link to="/user-permisson-role-3">
        <button className="bg-yellow-300 px-2 py-1 rounded-lg">3</button>
      </Link>
      <button className="bg-yellow-300 p-2 rounded-lg">
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default UserPegination

