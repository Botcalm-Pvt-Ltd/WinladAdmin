import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Ticked = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="9"
        stroke="#0A7AFF"
        strokeWidth="2"
      />
      <rect x="5" y="5" width="10" height="10" rx="5" fill="#0A7AFF" />
    </svg>
  );
};

const RadioUserPermisson = ({ roleValue, typeValue }) => {
  const [page, setPage] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const getDataBasedOnRoleAndType = () => {
    return [
      ...(roleValue === "user" &&
      (typeValue === "level01" || typeValue === "level02")
        ? [
            { label: "Home", key: "Home" },
            { label: "Subscription Purchases", key: "Subscription Purchases" },
            {
              label: "Raffle Purchases/Join For Raffle",
              key: "Raffle Purchases/Join For Raffle",
            },
            { label: "News", key: "News" },
            { label: "Business Card", key: "Business Card" },
            { label: "Raffle Broadcast", key: "Raffle Broadcast" },
            { label: "Transaction History", key: "Transaction History" },
            { label: "Fund Transfer", key: "Fund Transfer" },
            { label: "FAQ", key: "FAQ" },
            { label: "Support", key: "Support" },
            { label: "Local Diestel", key: "Local Diestel" },
            { label: "Wallet Payment", key: "Wallet Payment" },
          ]
        : []),
      ...(roleValue === "admin" &&
      (typeValue === "admin" || (typeValue === "super-admin" && page === 1))
        ? [
            { label: "Admin Dashboard", key: "Admin Dashboard" },
            { label: "View Settings", key: "View Settings" },
            { label: "Edit Settings", key: "Edit Settings" },
            { label: "View User", key: "View User" },
            { label: "View Raffle Details", key: "View Raffle Details" },
            { label: "Edit Raffle Details", key: "Edit Raffle Details" },
            { label: "View Permissions", key: "View Permissions" },
            { label: "Edit Permissions", key: "Edit Permissions" },
            { label: "View FAQ Settings", key: "View FAQ Settings" },
            { label: "Edit FAQ Settings", key: "Edit FAQ Settings" },
            { label: "View Report", key: "View Report" },
            { label: "Export Reports", key: "Export Reports" },
          ]
        : []),
      ...(roleValue === "admin" && typeValue === "super-admin" && page === 2
        ? [
            {
              label: "View Super Admin Settings",
              key: "View Super Admin Settings",
            },
            {
              label: "Edit Super Admin Settings",
              key: "Edit Super Admin Settings",
            },
            { label: "Super Admin Report", key: "Super Admin Report" },
          ]
        : []),
    ];
  };

  return (
    <div className="">
      <div className="flex flex-col gap-5">
        {getDataBasedOnRoleAndType().map((option) => (
          <div
            key={option.key}
            className="flex justify-start items-center gap-5 4xl:text-4xl"
            onClick={() => handleOptionClick(option.key)}
          >
            {selectedOptions.includes(option.key) ? (
              <div className="4xl:scale-150">
                <Ticked />
              </div>
            ) : (
              <div className="Tick cursor-pointer 4xl:w-7 4xl:h-7 4xl:rounded-full"></div>
            )}
            <span className="text-black">{option.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 my-4">
        <button
          className="p-1 4xl:text-4xl"
          onClick={() => setPage((prev) => --prev)}
        >
          <ArrowBackIosIcon className="" />
        </button>
        <button className="p-1 4xl:text-4xl" onClick={() => setPage(1)}>
          1
        </button>
        {typeValue == "super-admin" ? (
          <button className="p-1 4xl:text-4xl" onClick={() => setPage(2)}>
            2
          </button>
        ) : (
          <></>
        )}
        <button className="p-1" onClick={() => setPage((prev) => ++prev)}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default RadioUserPermisson;
