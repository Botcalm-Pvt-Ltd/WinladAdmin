import React, { useState } from "react";

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

const PaymentSwitch = () => {
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

  return (
    <div className="">
      <div className="flex justify-start font-bold pb-5 text-black 4xl:text-4xl">
        Payment Type
      </div>
      <div className="flex flex-col gap-5 4xl:text-3xl">
        {[
          { label: "Card Payment", key: "card" },
          { label: "Crypto Payment", key: "crypto" },
          { label: "Local Diestel", key: "local" },
          { label: "Wallet Payment", key: "wallet" },
        ].map((option) => (
          <div
            key={option.key}
            className="flex justify-start items-center gap-5"
            onClick={() => handleOptionClick(option.key)}
          >
            {selectedOptions.includes(option.key) ? (
              <Ticked />
            ) : (
              <div className="Tick cursor-pointer"></div>
            )}
            <span className="text-black">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSwitch;
