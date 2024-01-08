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

const RadioSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };
  return (
    <div className="">
    <div className="flex justify-start font-bold pb-50 py-10 text-black 4xl:text-3xl">
    Gateway URL Method
    </div>
    <div className="flex flex-col gap-5 4xl:text-3xl">
      {[
        { label: "Get", key: "Get" },
        { label: "Post", key: "Post" },
      ].map((option) => (
        <div
          key={option.key}
          className="flex justify-start items-center gap-5"
          onClick={() => handleOptionClick(option.key)}
        >
          {selectedOption === option.key ? <Ticked /> : <div className="Tick cursor-pointer"></div>}
          <span className="text-black">{option.label}</span>
        </div>
      ))}
    </div>
  </div>
);
};

export default RadioSelect;
