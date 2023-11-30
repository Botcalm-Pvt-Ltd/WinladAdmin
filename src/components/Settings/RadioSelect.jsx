import React from "react";

const RadioSelect = () => {
  return (
    <div>
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
  );
};

export default RadioSelect;
