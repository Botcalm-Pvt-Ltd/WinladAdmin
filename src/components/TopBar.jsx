import React from "react";
import Inputsearch from "./Inputsearch";
import UserIcon from "./UserIcon";
import RoundIcon from "./roundIcon";

const TopBar = () => {
  return (
    <div className="flex items-center justify-end gap-3 w-full mb-3 px-3 lg:px-0">
      <Inputsearch />
      <UserIcon />
      <RoundIcon />
    </div>
  );
};

export default TopBar;
