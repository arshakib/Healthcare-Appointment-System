"use client";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const PatientProfile = () => {
    const [patientData, setPatientData] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    
    useEffect(() => {
        if (!session?.user?.email) return; 

        const fetchData = async () => {
            setLoading(true);
            try {
                
                const response = await axios.get(`/api/patient?email=${session.user.email}`);
                setPatientData(response.data);
               
                const appointmentRes = await axios.get(`/api/appointment?patientEmail=${session.user.email}`);
                setAppointments(appointmentRes.data);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [session?.user?.email]); 

    if (loading) return <div className='text-gray-800'>Loading...</div>;
    if (!patientData) return <div className='text-gray-800'>No patient data available.</div>;

    return (
        <div className='lg:flex gap-5 space-y-10 lg:space-0'>
            <div className=''>
                {/* patient picture */}
                <div className='mb-8 '>
                    <Image src={patientData?.profilePhoto} width={400} height={300} alt='patient profile' className="w-[400px] h-[400px] rounded-md"/>
                </div>
                {/* about patient */}
                <div className="lg:max-w-[400px] bg-white rounded-md p-6">
                    <h2 className="text-xl font-semibold text-gray-600 mb-6">About Patient</h2>
                    <div className=" pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Name:</p>
                        <p className="text-gray-800 text-sm">{patientData?.name}</p>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Email address:</p>
                        <p className="text-gray-800 text-sm">{patientData?.email}</p>
                    </div>
                    <div className="border-t border-gray-300 pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Phone:</p>
                        <p className="text-gray-800 text-sm">{patientData?.phone}</p>
                    </div>
                    <div className="border-t border-b border-gray-300 pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Address:</p>
                        <p className="text-gray-800 text-sm">{patientData?.address}</p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                {/* about section */}
                <div className='text-black bg-white p-6 '>
                    <h4 className='text-gray-600 mb-6'>Medical History</h4>
                    <p className='text-gray-500 '>{patientData?.medicalHistory}</p>
                </div>

                {/* past visit history */}
                <div className="mt-8 bg-white rounded-md p-6">
                    <h2 className="text-xl font-semibold text-gray-600 mb-6">Past Visit History</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-center">
                                    <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Doctor</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Treatment</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments?.map((visit, index) => (
                                    <tr key={index} className="border-t border-gray-300 even:bg-gray-100">
                                        <td className="p-4 text-gray-800">{visit?.selectedDate}</td>
                                        <td className="p-4 text-gray-800">{visit?.doctorName}</td>
                                        <td className="p-4 text-gray-800">Fever</td>
                                        
                                        <td className="p-4 ">
                                            
                                            <button className="text-red-500 hover:text-red-700">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;