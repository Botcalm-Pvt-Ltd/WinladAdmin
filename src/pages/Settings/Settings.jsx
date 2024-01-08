import React from "react";
import DragFile from "../../components/DragAndDropArea/DragFile";
import InputField from "../../components/InputField";
import PaymentSwitch from "../../components/Settings/PaymentSwitch";
import RadioSelect from "../../components/Settings/RadioSelect";
import RadioSubscription from "../../components/Settings/RadioSubscription";
import Select from "../../components/Select";

const Font = [
  {
    id: 1,
    name: "Font1",
  },
  {
    id: 2,
    name: "Font2",
  },
  {
    id: 3,
    name: "Font3",
  },
  {
    id: 4,
    name: "Font4",
  },
];
const EncryptionType = [
  {
    id: 1,
    name: "Encryption Type 1",
  },
  {
    id: 2,
    name: "Encryption Type 2",
  },
  {
    id: 3,
    name: "Encryption Type 3",
  },
  {
    id: 4,
    name: "Encryption Type 4",
  },
];

const Settings = () => {
  return (
    <>
      <h5 className="text-2xl font-semibold lg:px-5 4xl:text-6xl max-xl:text-xl max-xl:mt-5">
        Appearance Configuration
      </h5>
      <div className="bg-[#F2F5FB] pt-5">
        {/* Section 1 */}
        <div className="flex items-end gap-10 max-xl:gap-3 mt-0 flex-row px-2 lg:px-5 z-10">
          <div className="w-1/4 max-xl:w-full">
            <DragFile />
          </div>
          <div className="w-1/4 max-xl:w-1/2 self-start">
            <Select options={Font} />
          </div>
          <div className="w-1/4"></div>
          <div className="w-1/4 self-end flex justify-end">
            <button className="text-white bg-black rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-full">
              Save
            </button>
          </div>
        </div>
        <div className="my-8" />
        {/* Section 2 */}
        <h5 className="mb-5 text-2xl font-semibold lg:px-5 4xl:text-5xl max-xl:text-xl">
          Email Gateway Configaration
        </h5>
        <div className="flex items-start gap-10 max-xl:gap-3 mt-0 flex-row px-2 lg:px-5 z-10 ">
          <div className="w-1/4">
            <InputField label={"Host Name"} name={"hostname"} />
            <InputField label={"SMTP Password"} name={"smtpwd"} />
            <InputField label={"Email"} name={"email"} />
          </div>
          <div className="w-1/4">
            <InputField label={"Port Number"} name={"port"} />
            <Select options={EncryptionType} />
          </div>
          <div className="w-1/4">
            <InputField label={"SMTP User Name"} name={"SMTP User Name"} />
            <InputField label={"Sender Name"} name={"Sender Name"} />
          </div>
          <div className="w-1/4 self-end flex flex-col justify-end gap-10 max-xl:gap-3">
            <button className="text-text bg-white rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-1/2">
              Test
            </button>
            <button className=" text-white bg-black rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-1/2">
              Save
            </button>
          </div>
        </div>
        <hr className="my-8 bg-gray-200 w-4/5 mx-auto" />
        {/* Section 3 */}
        <h5 className="mb-5 text-2xl font-semibold lg:px-5 4xl:text-5xl max-xl:text-xl">
          Payment Gateway & Type Configaration
        </h5>
        <div className=" flex items-end justify-between gap-3 mt-0 flex-row px-3 lg:px-5 z-10">
          <div className="w-1/4 max-xl:w-1/2">
            {/* Payment type switch */}
            <PaymentSwitch />
          </div>
          <div className="w-1/4 max-xl:w-1/2">
            <InputField label={"Publish Key"} name={"publish"} />
            <InputField label={"Secret Key"} name={"secret"} />
          </div>
          <div className="w-1/4"></div>
          <div className="w-1/4 self-end flex flex-col justify-end gap-10 max-xl:gap-3">
            <button className="text-text bg-white rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-full">
              Test
            </button>
            <button className=" text-white bg-black rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-full">
              Save
            </button>
          </div>
        </div>
        <hr className="my-8 bg-gray-200 w-4/5 mx-auto" />

        {/* Section 4 */}
        <h5 className="mb-5 text-2xl font-semibold lg:px-5 4xl:text-5xl max-xl:text-xl">
          SMS Gateway Configaration
        </h5>
        <div className="flex items-start gap-10 max-xl:gap-3 mt-0 flex-row px-2 lg:px-5 z-10 ">
          <div className="w-1/4">
            <InputField label={"Account SID"} name={"Account"} />
          </div>
          <div className="w-1/4">
            <InputField label={"Auth Token"} name={"Auth Token"} />
          </div>
          <div className="w-1/4">
            <InputField
              label={"SMS Gateway Request Type"}
              name={"SMS Gateway Request Type"}
            />
          </div>
          <div className="w-1/4 self-end flex flex-col justify-end gap-10 max-xl:gap-3"></div>
        </div>
        <div className="flex items-end gap-10 max-xl:gap-3 mt-0 flex-row px-2 lg:px-5 z-10 ">
          <div className="w-1/4">
            <RadioSelect />
          </div>
          <div className="w-1/4">
            <InputField label={"SMS Gateway URL"} name={"SMS Gateway URL"} />
          </div>
          <div className="w-1/4"></div>
          <div className="w-1/4 self-end flex flex-col justify-end gap-10 max-xl:gap-3"></div>
        </div>
        <div className="flex justify-start items-end font-bold px-5 pt-10 text-black 4xl:text-3xl">
          Gateway URL Method
        </div>
        <div className="flex items-end gap-10 max-xl:gap-3 mt-0 flex-row px-2 lg:px-5 z-10">
          <div className="w-1/4">
            <InputField label={"To"} name={"To"} />
          </div>
          <div className="w-1/4">
            <InputField label={"Body"} name={"Body"} />
          </div>
          <div className="w-1/4">
            <InputField label={"From"} name={"From"} />
          </div>
          <div className="w-1/4 self-end flex flex-col justify-end gap-10 max-xl:gap-3">
            <button className="text-text bg-white rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-1/2">
              Test
            </button>
            <button className=" text-white bg-black rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-1/2">
              Save
            </button>
          </div>
        </div>
        <hr className="my-8 bg-gray-200 w-4/5 mx-auto" />

        {/* Section 5 */}
        <div className="px-3 pb-10">
          <h5 className="mb-5 text-2xl font-semibold lg:px-5 4xl:text-5xl max-xl:text-xl">
            Subscription Configuration
          </h5>
          <div className="flex w-full">
            <div className="flex flex-col flex-1 gap-5">
              <div className="max-xl:w-[200%]">
                <RadioSubscription />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-5"></div>
            <div className="flex justify-end items-end flex-1 gap-5"></div>
            <div className="flex justify-end items-end flex-col flex-1 gap-5 text-right">
              <button className=" text-white bg-black rounded-xl py-2 ml-auto w-1/4 4xl:text-4xl max-xl:w-1/2">
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
