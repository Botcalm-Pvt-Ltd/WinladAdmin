import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ModelFilterField = ({ options, defaultSelected, onChange, placeholder }) => {
  const placeholderOption = { id: "placeholder", name: placeholder || "Select an option" };
  const [selected, setSelected] = useState(defaultSelected || null);

  return (
    <>
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          onChange && onChange(value);
        }}
      >
        {({ open }) => (
          <>
            <div className="relative mb-4 w-full placeholder:text-left placeholder:text-gray-500 rounded-lg bg-[#F2F5FB] 4xl:text-3xl pl-6 ">
              <Listbox.Button className="relative bg-[#F2F5FB] rounded-lg w-full text-gray-500 ">
                <span className="flex items-center p-3 px-0 py-3 4xl:py-5">
                  <span className="block truncate">
                    {selected ? selected.name : placeholderOption.name}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <FaAngleDown
                    className="h-5 w-5 text-gray-400 4xl:w-8 4xl:h-8"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center 4xl:text-3xl">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block"
                              )}
                            >
                              {option.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default ModelFilterField;
