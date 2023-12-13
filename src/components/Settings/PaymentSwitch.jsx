import React from "react";

const PaymentSwitch = () => {
  return (
    <div className="flex flex-col flex-1 py-4 gap-5">
      <div className="bg-gray-200 rounded-3xl p-6">
        <div className="flex justify-center pb-5  text-black">
          Payment Type
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className=" text-black">Card Payment</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className=" text-black">Crypto Payment</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className=" text-black">Local Diestel</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className=" text-black">Wallet Payment</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSwitch;
