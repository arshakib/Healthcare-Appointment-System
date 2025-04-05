import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import useUserRole from "./hooks/useUserRole";

const AdminProfile = () => {
    const {data: session} = useSession();
    const {role} = useUserRole();

    return (
        <div className=" bg-gray-50 py-10">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Profile</h1>
                    <p className="mt-2 text-gray-600">Manage your account and activities</p>
                </div>

                {/* Profile Card */}
                <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
                    <div className="md:flex">
                        {/* Left Side (Avatar & Basic Info) */}
                        <div className="md:w-2/4 p-6 flex flex-col justify-center items-center">
                            <Image
                                className="h-32 w-32 rounded-full object-cover border-4 border-blue-100"
                                src={session?.user?.image}
                                width={32}
                                height={32}
                                unoptimized
                                alt="Admin pic"
                            />
                            <h2 className="mt-4 text-xl font-semibold text-gray-800">
                                {session?.user?.name}
                            </h2>
                            <p className="text-blue-600">HeathCare {role}</p>
                            
                        </div>

                        {/* Right Side (Details) */}
                        <div className="md:w-2/4 p-6 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col justify-center items-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Contact Information
                            </h3>
                            <div className="space-y-3">
                                <p className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    {session?.user?.email}
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <svg className="h-5 w-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    +8801818186676
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminProfile;