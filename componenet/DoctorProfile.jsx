"use client";

import Image from 'next/image';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHospital, FaCalendarAlt, FaStethoscope, FaIdCard, FaClock, FaUserFriends } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const DoctorProfile = () => {
    const [doctorData, setDoctorData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await axios.get(`/api/doctordata?email=${session?.user?.email}`);
                setDoctorData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching doctor data", error);
                setLoading(false);
            }
        };

        fetchDoctorData();
    }, [session?.user?.email]);

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
    
    if (!doctorData) return <div className="text-center py-10 text-gray-600">No doctor data available.</div>;

    const doctor = doctorData[0];

    return (
        <div className="text-gray-800">
            {/* Profile Header */}
            <div className="bg-[#033137] rounded-t-xl p-6 text-white">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-6">
                        <Image
                            src={session?.user?.image}
                            alt={doctor?.fullName}
                            fill
                            className="rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold">{doctor?.fullName}</h1>
                        <p className="text-lg md:text-xl">{doctor?.medicalDegree}</p>
                        <p className="text-blue-100">{doctor?.specialty} Specialist</p>
                        <div className="flex justify-center md:justify-start mt-2 space-x-2">
                            {doctor.selectedDays?.map((day, index) => (
                                <span key={index} className="bg-[#1d7261] bg-opacity-30 px-2 py-1 rounded text-xs">
                                    {day}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Left Column - Basic Info */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1d7261]">
                        <FaUser className="mr-2" /> Personal Information
                    </h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <FaIdCard className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">License Number</h3>
                                <p className="text-gray-600">{doctor.licenseNumber}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaStethoscope className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Specialty</h3>
                                <p className="text-gray-600">{doctor.specialty}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaUserFriends className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Years of Experience</h3>
                                <p className="text-gray-600">{doctor.yearsOfExperience} years</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaClock className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Consultation Hours</h3>
                                <p className="text-gray-600">
                                    {doctor.startingHours}:00 - {doctor.endingHours}:00
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaUserFriends className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Patients Per Day</h3>
                                <p className="text-gray-600">{doctor.patientPerDay}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Column - Contact & Hospital Info */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1d7261]">
                        <FaHospital className="mr-2" /> Hospital & Contact
                    </h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <FaHospital className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Current Hospital</h3>
                                <p className="text-gray-600">{doctor.currentHospital}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaHospital className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Hospital Affiliation</h3>
                                <p className="text-gray-600">{doctor.hospitalAffiliation}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaPhone className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-gray-600">{doctor.phone}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaEnvelope className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-gray-600">{doctor.email}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="mt-1 mr-3 text-gray-500" />
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p className="text-gray-600">{doctor.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Bio & Availability */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1d7261]">
                        <FaUser className="mr-2" /> Professional Bio
                    </h2>
                    
                    <p className="text-gray-700 mb-6">{doctor.bio}</p>
                    
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1d7261]">
                        <FaCalendarAlt className="mr-2" /> Availability
                    </h2>
                    
                    <div className="space-y-3">
                        {doctor.selectedDays?.map((day, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                <span className="font-medium">{day}</span>
                                <span className="text-sm bg-blue-100 text-[#1d7261] px-2 py-1 rounded">
                                    {doctor.startingHours}:00 - {doctor.endingHours}:00
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
                <button className="px-4 py-2 bg-[#033137] text-white rounded cursor-pointer">
                    Edit Profile
                </button>
                
            </div>
        </div>
    );
};

export default DoctorProfile;