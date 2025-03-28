import React from 'react';

const SettingForm = () => {
    return (
        <>
            <div>
                {/* password setting */}
                <div className=" bg-white rounded-md p-6 text-black">
                    <h2 className="text-lg font-semibold mb-4 text-gray-500">Security Settings</h2>

                    {/* Username */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-4 border rounded-md mb-8 focus:outline-none "
                    />

                    {/* Current Password */}
                    <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full p-4 border rounded-md mb-8 focus:outline-none "
                    />

                    {/* New Password */}
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full p-4 border rounded-md mb-8 focus:outline-none "
                    />

                    {/* Save Button */}
                    <button className="bg-white border border-gray-300 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
                        Save
                    </button>
                </div>

                {/* account setting */}
                <div className=" bg-white rounded-md p-6 text-black mt-10">
                    <h2 className="text-lg font-semibold mb-4 text-gray-500">Account Settings</h2>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {/* First name */}
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                        {/* Last Name */}
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />
                    </div>

                    <div className='grid grid-cols-1  lg:grid-cols-3 gap-5'>
                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                        {/* country */}
                        <input
                            type="country"
                            placeholder="Country"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                        {/* City */}
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {/* birth */}
                        <input
                            type="date"
                            placeholder="Date Of Birth"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                        {/* Mobile */}
                        <input
                            type="number"
                            placeholder="Number"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                        {/* blood */}
                        <input
                            type="text"
                            placeholder="Blood Group"
                            className="w-full p-4 border rounded-md mb-8 focus:outline-none " />

                    </div>
                    {/* address */}
                    <input
                        type="text"
                        placeholder="Address"
                        className="w-full p-4 border rounded-md mb-8 focus:outline-none"
                    />

                    {/* Save Button */}
                    <button className="bg-white border border-gray-300 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default SettingForm;