import React, { useState, Fragment } from "react";
import SideNavComponent from "../SideNavComponent/SideNavComponent";
import TopBar from "../TopBar";
import SettingBlackSquare from "./SettingBlackSquare";
import Wheel from "@uiw/react-color-wheel";
import Alpha from "@uiw/react-color-alpha";
import ShadeSlider from "@uiw/react-color-shade-slider";
import Swatch from "@uiw/react-color-swatch";
import { hsvaToHex, getContrastingColor } from "@uiw/color-convert";
import settingBg from "../../assets/setting/setting-bg.png";

function Point(props) {
  if (!props.checked) return null;
  return (
    <div
      style={{
        height: 5,
        width: 5,
        borderRadius: "50%",
        backgroundColor: getContrastingColor(props.color || "#fff"),
      }}
    />
  );
}

const Setting = () => {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("#fff");
  const handleColorChange = (hsvColor) => {
    setHex(hsvaToHex(hsvColor));
    setHsva(hsvColor);
  };

  const [isChecked, setIsChecked] = useState("get");

  const handleRadioChange = (value) => {
    setIsChecked(value);
  };

  return (
    <div className="flex lg:flex-row flex-row items-start justify-between">
      <SideNavComponent />
      <div className="w-full lg:w-full bg-white">
        <SettingBlackSquare />
        <div className="lg:p-5 p-1">
          <TopBar />
          <div className="absolute right-10 max-xl:top-[30%] top-[40%]">
            <button className="text-black bg-white rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 z-10">
              Save
            </button>
          </div>
          <div className="">
            <div>
              <h1 className="text-2xl px-4 max-md:pt-20 pb-10">
                Appearance Configaration
              </h1>
            </div>

            <div className="flex gap-20">
              <div className=" flex flex-col gap-10">
                <div className="flex flex-col gap-2 ml-[-8px] w-96 max-xl:w-80 h-48 justify-center items-center bg-[#FFECA8] rounded-xl py-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1182_2018)">
                      <path
                        d="M24.0081 12.9673L24.0081 19.6109C24.0081 21.4164 22.5377 22.8813 20.7377 22.8813L4.72606 22.8813C2.92056 22.8813 1.45563 21.4109 1.45563 19.6109L1.45563 12.8592C1.45563 12.4537 1.13128 12.1294 0.725859 12.1294C0.320434 12.1294 -0.00390625 12.4537 -0.00390625 12.8592L-0.00390625 19.6109C-0.00390625 22.2218 2.12052 24.3408 4.72606 24.3408L20.7377 24.3408C23.3486 24.3408 25.4676 22.2164 25.4676 19.6109L25.4676 12.9673C25.4676 12.5619 25.1433 12.2375 24.7379 12.2375C24.3324 12.2375 24.0081 12.5673 24.0081 12.9673Z"
                        fill="black"
                      />
                      <path
                        d="M12.2162 0.945148L7.57816 5.58321C7.29166 5.86971 7.29166 6.3292 7.57816 6.6157C7.86466 6.9022 8.32414 6.9022 8.61064 6.6157L12.0054 3.22093L12.0054 18.0271C12.0054 18.4325 12.3297 18.7568 12.7352 18.7568C13.1406 18.7568 13.4649 18.4325 13.4649 18.0271L13.4649 3.22093L16.8597 6.6157C17.1462 6.9022 17.6057 6.9022 17.8922 6.6157C18.0327 6.47515 18.1084 6.28595 18.1084 6.10216C18.1084 5.91837 18.0381 5.72917 17.8922 5.58862L13.2541 0.950554C12.9622 0.658647 12.4973 0.658647 12.2162 0.945148Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1182_2018">
                        <rect
                          width="24.3529"
                          height="25.5126"
                          fill="white"
                          transform="matrix(0 -1 1 0 0 24.3535)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <input id="imageUpload" type="file" className="hidden" />
                  <div>Drag & Drop File</div>
                  <button className="text-white bg-black rounded-lg background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    <label className="cursor-pointer">Browse</label>
                  </button>
                </div>
                <div>
                  <select
                    name="filter"
                    className="shadow border rounded-full w-[102%] ml-[-8px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFECA8]"
                  >
                    <option value="" className="text-center">
                      Font
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex gap-20 bg-[#C3C3C3] p-10 rounded-3xl z-10">
                <div>
                  <Fragment>
                    <Wheel
                      color={hsva}
                      onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                      style={{
                        filter:
                          "drop-shadow(0px 13.01156997680664px 18.43305778503418px rgba(0, 0, 0, 0.25))",
                      }}
                    />
                  </Fragment>
                </div>
                <div className="flex flex-col justify-center gap-5">
                  <div>
                    <Alpha
                      hsva={hsva}
                      onChange={(newAlpha) => {
                        setHsva({ ...hsva, ...newAlpha });
                      }}
                      style={{
                        borderRadius: "25px",
                      }}
                    />
                  </div>
                  <div>
                    <ShadeSlider
                      hsva={hsva}
                      onChange={(newShade) => {
                        setHsva({ ...hsva, ...newShade });
                      }}
                      style={{
                        borderRadius: "200",
                        width: "4",
                        height: "4",
                      }}
                    />
                  </div>
                  <div>
                    {" "}
                    <Swatch
                      colors={[
                        "#6091FF",
                        "#69FEFF",
                        "#7FFF6F",
                        "#BF4B26",
                        "#F43135",
                        "#C73760",
                        "#FFD43C",
                      ]}
                      color={hex}
                      rectProps={{
                        children: <Point />,
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "30px",
                          height: "30px",
                        },
                      }}
                      onChange={handleColorChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="text-2xl">Email Gateway Configaration</div>
              <div className="flex w-full">
                <div className="flex flex-col flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Host Name
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Host Name"
                    />
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      SMTP User Name
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="SMTP User Name"
                    />
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Encryption Type
                    </label>
                    <select
                      name="filter"
                      className="shadow border rounded-full w-[102%] ml-[-8px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FFECA8]"
                    >
                      <option value="" className="text-center">
                        Encryption Type
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Port Number
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Port Number"
                    />
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      SMTP Password
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="SMTP Password"
                    />
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Sender Name
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Sender Name"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-end flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center flex-col flex-1 py-10 gap-5">
                  <button className="text-black bg-[#FF6363] rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Test
                  </button>
                  <button className="text-[#FFDF37] bg-black rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="text-2xl">Email Gateway Configaration</div>
              <div className="flex w-full">
                <div className="flex flex-col flex-1 py-10 gap-5">
                  <div className="bg-[#FFECA8] rounded-3xl p-6">
                    <div className="flex justify-center pb-5 font-medium text-black">
                      Payment Type
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-black">
                          Card Payment
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
                        </label>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-black">
                          Crypto Payment
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
                        </label>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-black">
                          Local Diestel
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
                        </label>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-black">
                          Wallet Payment
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="w-full px-3 flex-1"></div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Publish Key
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Publish Key"
                    />
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Secret Key
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Secret Key"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-end flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex-1"></div>
                </div>
                <div className="flex justify-end items-center flex-col flex-1 py-10 gap-5">
                  <button className="text-black bg-[#FF6363] rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Test
                  </button>
                  <button className="text-[#FFDF37] bg-black rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="text-2xl">SMS Gateway Configaration</div>
              <div className="flex w-full">
                <div className="flex flex-col flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Account SID
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Account SID"
                    />
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      SMS Gateway Request Type
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="SMS Gateway Request Type"
                    />
                  </div>

                  <div className="w-full px-3 flex justify-start items-center flex-1">
                    <div>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Select Gateway URL Method
                      </label>
                    </div>

                    <div className="flex">
                      <div className="flex items-center mb-4">
                        <div className="flex gap-10">
                          <div className="inline-flex items-center">
                            <label
                              className="relative flex cursor-pointer items-center rounded-full p-3"
                              data-ripple-dark="true"
                            >
                              <input
                                id="html"
                                name="type"
                                type="radio"
                                className="before:content[''] bg-[#EBDFD7] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-md before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                              />
                              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                </svg>
                              </div>
                            </label>
                            <label className="mt-px cursor-pointer select-none text-black">
                              Get
                            </label>
                          </div>
                          <div className="inline-flex items-center">
                            <label
                              className="relative flex cursor-pointer items-center rounded-full p-3"
                              data-ripple-dark="true"
                            >
                              <input
                                id="react"
                                name="type"
                                type="radio"
                                className="before:content[''] bg-[#EBDFD7] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 text-green-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-md before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                              />
                              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3.5 w-3.5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                </svg>
                              </div>
                            </label>
                            <label className="mt-px cursor-pointer select-none text-black">
                              Post
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      SMS Gateway URL
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="SMS Gateway URL"
                    />
                  </div>
                  <div className="w-full px-3 flex flex-col flex-1 gap-3">
                    <div>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Gateway Post Parametter
                      </label>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-5">
                        <label className="w-1/4 appearance-none block text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center">
                          To
                        </label>
                        <input
                          className="w-3/4 appearance-none block text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                          id="grid-last-name"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="flex gap-5">
                        <label className="w-1/4 appearance-none block text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center">
                          Body
                        </label>
                        <input
                          className="w-3/4 appearance-none block text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                          id="grid-last-name"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="flex gap-5">
                        <label className="w-1/4 appearance-none block text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center">
                          From
                        </label>
                        <input
                          className="w-3/4 appearance-none block text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Auth Token
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-black bg-[#FFECA8] text-center placeholder-center"
                      id="grid-last-name"
                      type="text"
                      placeholder="Auth Token"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-end flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex-1">
                    <div className="-z-10">
                      <img
                        src={settingBg}
                        alt="settingBg"
                        className="absolute w-3/5 top-[140%] right-[10%] max-xl:top-[100%]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center flex-col flex-1 py-10 gap-5 z-10">
                  <button className="text-black bg-[#FF6363] rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Test
                  </button>
                  <button className="text-[#FFDF37] bg-black rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="text-2xl">Subscription Configaration</div>
              <div className="flex w-full">
                <div className="flex flex-col flex-1 py-10 gap-5">
                  <div className="w-full px-3 flex justify-start items-center flex-1 gap-20">
                    <label className="flex justify-center items-center uppercase tracking-wide text-gray-700 text-base">
                      Subscription Method
                    </label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-0 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FFF6F] peer-checked:shadow-none"></div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col flex-1 py-10 gap-5"></div>
                <div className="flex justify-end items-end flex-1 py-10 gap-5"></div>
                <div className="flex justify-end items-center flex-col flex-1 py-10 gap-5">
                  <button className="text-[#FFDF37] bg-black rounded-lg background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
