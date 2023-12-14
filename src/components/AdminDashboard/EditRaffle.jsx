import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const EditRaffle = ({ faq, onClose }) => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white bg-opacity-50">
                <div className="relative w-full max-w-screen-xl mx-auto flex items-center justify-center">
                    <div className="border-0 rounded-3xl shadow-2xl relative flex flex-col w-full outline-none focus:outline-none bg-white px-10 max-w-[600px]">
                        <div className='absolute top-6 right-5 cursor-pointer text-lg' onClick={() => onClose()}>
                            <IoMdClose />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-lg py-5 text-black">Edit Giveaways</h1>
                        </div>
                        <div className="w-full mb-4 flex justify-between items-center gap-20">
                            <label className="w-full block text-gray-700 text-lg mb-2">
                                Giveaway Id
                            </label>
                            <input
                                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                                value={faq.name}
                                readOnly
                            />
                        </div>
                        <div className="w-full mb-4 flex justify-between items-center gap-20">
                            <label className="w-full block text-gray-700 text-lg mb-2">
                                Giveaway Name
                            </label>
                            <input
                                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                                value={faq.name}
                                readOnly
                            />
                        </div>
                        <div className="w-full mb-4 flex justify-between items-center gap-20">
                            <label className="w-full block text-gray-700 text-lg mb-2">
                                Category
                            </label>
                            <input
                                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                                value={faq.category}
                                readOnly
                            />
                        </div>
                        <div className="w-full mb-4 flex justify-between items-center gap-20">
                            <label className="w-full block text-gray-700 text-lg mb-2">
                                Schedule Date
                            </label>
                            <input
                                className="shadow  border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                                value={faq.date}
                                readOnly
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <div className='px-3 py-1 rounded-md border border-1 bg-gray-200 w-20 text-black text-center'>Active</div> :
                            <div className='px-3 py-1 rounded-md border border-1  bg-red-200 w-20  text-center text-red-600'>Inactive</div>
                        </div>

                        <button className="bg-black text-white px-3 py-1 rounded-lg w-fit ml-auto my-4">Save</button>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default EditRaffle;
