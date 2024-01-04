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

const RadioSubscription = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };
  return (
    <div className="flex flex-col gap-5">
      {[{ label: "Subscription Method", key: "Subscription Method" }].map(
        (option) => (
          <div
            key={option.key}
            className="flex justify-start items-center gap-5"
            onClick={() => handleOptionClick(option.key)}
          >
            {selectedOption === option.key ? (
              <Ticked />
            ) : (
              <div className="Tick cursor-pointer"></div>
            )}
            <span className="text-black">{option.label}</span>
          </div>
        )
      )}
    </div>
  );
};
export default RadioSubscription;
