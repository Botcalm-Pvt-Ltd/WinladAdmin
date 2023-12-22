import React, { useRef, useState } from "react";
import DragFile from "../../components/DragAndDropArea/DragFile";
import InputField from "../../components/Settings/InputField";
import PaymentSwitch from "../../components/Settings/PaymentSwitch";
import RadioSelect from "../../components/Settings/RadioSelect";

const Settings = () => {
  return (

    <>
      <h5 className="mb-5 text-xl px-3">
        Appearance Configuration
      </h5>
      <div className="bg-white pt-5">
        {/* Section 1 */}
        <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10">
          <div className="w-1/3">
            <DragFile />
            <select
              name="font"
              id="font"
              className="ring-1 bg-gray-200 px-3 py-3 rounded-2xl mt-4 w-full text-gray-500"
            >
              <option value="font">Font</option>
            </select>
          </div>
          <div className="w-2/3 relative text-right p-0 bottom-8">
            <button className="text-black  bg-gray-200 rounded-2xl px-5 py-2 ml-auto">
              Save
            </button>
          </div>
        </div>
        <div className="my-8" />
        {/* Section 2 */}
        <h5 className="mb-5 text-xl font-semibold lg:px-5">
          Email Gateway Configaration
        </h5>
        <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10 ">
          <div className="w-1/3">
            <InputField label={"Host Name"} name={"hostname"} />
            <InputField label={"SMTP User Name"} name={"smtp"} />
            <InputField
              label={"Encryption Type"}
              name={"enctype"}
              type="select"
            />
          </div>
          <div className="w-1/3">
            <InputField label={"Port Number"} name={"port"} />
            <InputField label={"SMTP Password"} name={"smtpwd"} />
            <InputField label={"Sender Name"} name={"sender"} />
          </div>
          <div className="w-1/3">
            <InputField label={"Email"} name={"email"} />
          </div>
          <div className="w-auto text-right">
            <button className=" bg-gray-200 px-5 py-1 rounded-xl mb-4">
              Test
            </button>
            <button className="bg-black px-5 py-1 text-white rounded-xl mb-4">
              Save
            </button>
          </div>
        </div>
        <hr className="my-8 bg-gray-200 w-4/5 mx-auto" />
        {/* Section 3 */}
        <h5 className="mb-5 text-xl font-semibold lg:px-5">
          Payment Gateway & Type Configaration
        </h5>
        <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10">
          <div className="w-1/3">
            {/* Payment type switch */}
            <PaymentSwitch />
          </div>
          <div className="w-1/3">
            <InputField label={"Publish Key"} name={"publish"} />
            <InputField label={"Secret Key"} name={"secret"} />
          </div>
          <div className="w-1/3"></div>
          <div className="w-auto text-right">
            <button className=" bg-gray-200 px-5 py-1 rounded-xl mb-4">
              Test
            </button>
            <button className="bg-black px-5 py-1 text-white rounded-xl mb-4">
              Save
            </button>
          </div>
        </div>
        <hr className="my-8 bg-gray-200 w-4/5 mx-auto" />

        {/* Section 4 */}
        <h5 className="text-xl font-semibold lg:px-5">
          SMS Gateway Configaration
        </h5>
        <div>
          <div className="flex w-full">
            <div className="flex flex-col flex-1 py-10 gap-5">
              <div className="w-full px-3 flex-1">
                <InputField label={"Account SID"} name={"Account"} />
              </div>
              <div className="w-full px-3 flex-1">
                <InputField
                  label={"SMS Gateway Request Type"}
                  name={"SMS Gateway"}
                />
              </div>
              {/* radio select */}
              <div className="w-full px-3 flex justify-start items-center flex-1">
                <RadioSelect />
              </div>
              <div className="w-full px-3 flex-1">
                <InputField
                  label={"SMS Gateway URL"}
                  name={"SMS Gateway URL"}
                />
              </div>
              <div className="w-full px-3 flex flex-col flex-1 gap-3">
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Gateway Post Parametter
                  </label>
                </div>
                <div className="flex flex-col gap-4 max-xl:w-[210%]">
                  <div className="flex gap-5">
                    <label className="w-1/4  block  rounded-2xl py-3 px-4 leading-tight focus:outline-none  placeholder-black  text-center">
                      To
                    </label>
                    <input
                      className="w-3/4  block bg-gray-200 border rounded-2xl py-3 px-4 leading-tight focus:outline-none  placeholder-black  text-left placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="flex gap-5">
                    <label className="w-1/4  block rounded-2xl py-3 px-4 leading-tight focus:outline-none  placeholder-black text-center">
                      Body
                    </label>
                    <input
                      className="w-3/4  block rounded-2xl py-3 px-4 leading-tight focus:outline-none bg-gray-200 placeholder-black text-left placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="flex gap-5">
                    <label className="w-1/4  block rounded-2xl py-3 px-4 leading-tight focus:outline-none  placeholder-black  text-center">
                      From
                    </label>
                    <input
                      className="w-3/4  block rounded-2xl py-3 px-4 leading-tight focus:outline-none bg-gray-200 placeholder-black  text-left placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 py-10 gap-5 z-10">
              <div className="w-full px-3 flex-1">
                <InputField label={"Auth Token"} name={"Auth Token"} />
              </div>
            </div>
            {/* <div className="flex justify-end items-end flex-1 py-10 gap-5">
                <div className="w-full px-3 flex-1">
                  <div className="-z-10">
                    <img
                      src={Maincar}
                      alt="Maincar"
                      className="absolute bottom-80 right-52 w-[60%] max-xl:left-56 max-xl:w-[75%] max-xl:bottom-[500px]"
                    />
                  </div>
                </div>
              </div> */}
            <div className="flex justify-end text-right items-end flex-col flex-1 py-10 gap-5 z-10">
              <button className="text-black bg-gray-200 rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Test
              </button>
              <button className="text-white bg-black rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Save
              </button>
            </div>
          </div>
        </div>
        <hr className="my-8 bg-gray-200 w-4/5 mx-auto" />

        {/* Section 5 */}
        <div className="px-4">
          <div className="text-2xl">Subscription Configuration</div>
          <div className="flex w-full">
            <div className="flex flex-col flex-1 py-10 gap-5">
              <div className="w-full px-3 flex justify-start items-center flex-1 gap-20">
                <label className="flex justify-center items-center uppercase tracking-wide text-gray-700 text-base">
                  Subscription Method
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
                </label>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-5"></div>
            <div className="flex justify-end items-end flex-1 gap-5"></div>
            <div className="flex justify-end items-end flex-col flex-1 gap-5 text-right">
              <button className="text-white bg-black rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Settings;
