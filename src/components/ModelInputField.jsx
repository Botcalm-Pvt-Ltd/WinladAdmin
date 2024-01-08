import React from "react";

const ModelInputField = ({ label, readOnly, value, name, onChange, type = "text" }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={label}
        className="pl-6 py-3 w-full placeholder:text-left placeholder:text-gray-500 rounded-lg mb-4 bg-[#F2F5FB] 4xl:text-3xl 4xl:placeholder:4xl:text-3xl 4xl:py-5"
      />
    </>
  );
};

export default ModelInputField;
