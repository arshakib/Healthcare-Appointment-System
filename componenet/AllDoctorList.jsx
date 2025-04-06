"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const AllDoctorList = () => {
    const [doctorData, setAllDoctorData] = useState([]);
    
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await axios.get("/api/doctordata");
                setAllDoctorData(res.data);
            } catch (error) {
                console.error("Error fetching doctor data:", error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="">
            
            <div className="overflow-x-auto text-gray-800">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="py-3 px-4 border-b text-left">Photo</th>
                            <th className="py-3 px-4 border-b text-left">Name</th>
                            <th className="py-3 px-4 border-b text-left">Specialty</th>
                            <th className="py-3 px-4 border-b text-left">Email</th>
                            <th className="py-3 px-4 border-b text-left">Phone</th>
                            <th className="py-3 px-4 border-b text-left">Hospital</th>
                            <th className="py-3 px-4 border-b text-left">Availability</th>
                            <th className="py-3 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorData.map((doctor) => (
                            <tr key={doctor._id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 border-b">
                                    <Image 
                                        src={doctor?.profilePhoto || "/default-doctor.jpg"} 
                                        alt={doctor?.fullName}
                                        width={10}
                                        height={10}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4 border-b">
                                    <div className="text-sm font-medium">{doctor.fullName}</div>
                                    <div className="text-sm text-gray-500">{doctor.medicalDegree}</div>
                                </td>
                                <td className="py-3 px-4 border-b">{doctor.specialty}</td>
                                <td className="py-3 px-4 border-b">{doctor.email}</td>
                                <td className="py-3 px-4 border-b">{doctor.phone}</td>
                                <td className="py-3 px-4 border-b">
                                    <div>{doctor.currentHospital}</div>
                                    <div className="text-sm text-gray-500">{doctor.hospitalAffiliation}</div>
                                </td>
                                <td className="py-3 px-4 border-b">
                                    <div className="flex flex-wrap gap-1">
                                        {doctor.selectedDays?.map((day) => (
                                            <span 
                                                key={day} 
                                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                                            >
                                                {day}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-sm mt-1">
                                        {doctor.startingHours}:00 - {doctor.endingHours}:00
                                    </div>
                                </td>
                                <td className="py-3 px-4 border-b">
                                    
                                    <button className="text-red-600 hover:text-red-800">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDoctorList;