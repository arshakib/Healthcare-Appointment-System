"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FiHome, FiBell, FiUser, FiLogOut, FiSearch, FiMenu, FiCalendar, FiPlus } from "react-icons/fi";


const DashboardNav = () => {
    const {data: session} = useSession();
    
    return (
        <header className="sticky top-0 z-40  w-full h-[61px] bg-white border-b">
            <div className="px-4 flex items-center justify-between h-full">

                {/* **Right Side - User Controls ** */}

                {/* **Search Bar (Hidden on Mobile) ** */}
                <div className="flex items-center">
                    <FiSearch className="absolute ml-[15px] text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search patients, records..."
                        className="pl-10 pr-4 py-2 w-[180px] md:w-64  rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 bg-white/80 text-gray-700"
                    />
                </div>

                {/* **User Profile (Animated Dropdown) ** */}
                <div className="flex items-center gap-2 md:gap-4 cursor-pointer">

                    {/* **Notifications (With Indicator) ** */}
                    <button className="p-2 relative text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all">
                        <FiBell size={20} />
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    </button>

                    <div className="flex gap-2">
                        <div className="">
                            {session?.user?.image && <Image src={session?.user?.image} width={10} height={10} alt="profile" className="rounded-full w-10 h-10" />}
                        </div>
                        <div className="">
                            <p className="text-sm font-medium text-gray-800">Dr. Sarah</p>
                            <p className="text-xs text-gray-500">Cardiologist</p>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default DashboardNav;