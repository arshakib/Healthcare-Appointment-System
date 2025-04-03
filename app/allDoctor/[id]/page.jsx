import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhone, FaStar } from 'react-icons/fa';
import img from "../../../public/self3.jpg"

const SingleDoctorDetailsPage = async ({ params }) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/doctordata/${p?.id}`);
    const data = await res.json();
    console.log(data)

    // Mock available time slots (replace with your actual data)
    const timeSlots = [
        '09:00 AM', '10:30 AM', '12:00 PM',
        '02:00 PM', '03:30 PM', '05:00 PM'
    ];

    return (
        <div className="py-10 px-4 max-w-7xl mx-auto">
            {/* Doctor Info Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                {/* Doctor Image */}
                {data?.profilePhoto &&
                    <div className="md:w-1/3 p-6 flex justify-center">
                        <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                            <Image
                                src={data?.profilePhoto}
                                fill
                                alt={`Dr. ${data?.fullName}`}
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                }

                {/* Doctor Details */}
                <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Dr. {data?.fullName}</h1>
                            <p className="text-blue-600 font-medium">{data?.specialty}</p>
                        </div>
                        <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                            <FaStar className="text-yellow-400 mr-1" />
                            <span className="font-semibold text-black">4.9</span>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{data?.currentHospital}</span>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Qualifications</h3>
                            <p className="text-gray-600">{data?.medicalDegree}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Experience</h3>
                            <p className="text-gray-600">{data?.yearsOfExperience}+ years</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Hospital</h3>
                            <p className="text-gray-600">{data?.hospitalAffiliation}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Languages</h3>
                            <p className="text-gray-600">English, Hindi, Bangla</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
                        <p className="text-gray-600">
                            Dr. {data?.fullName} is a renowned {data?.specialty} with extensive experience in {data?.specialty.toLowerCase()} care.
                            {data?.bio || 'Committed to providing the highest quality care to all patients.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Appointment Booking Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Section */}
                <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Appointment</h2>

                    <div className="mb-8">
                        <h3 className="flex items-center text-lg font-semibold text-gray-700 mb-4">
                            <FaCalendarAlt className="mr-2 text-blue-500" />
                            Select Date
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                            {data?.selectedDays?.map((day, index) => (
                                <button
                                    key={index}
                                    className={`py-3 px-2 rounded-lg border text-center transition-all ${index === 0
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"}`}
                                >
                                    <div className="text-sm font-medium">{day.split(' ')[0]}</div>
                                    <div className="text-xs">{day.split(' ')[1]}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="flex items-center text-lg font-semibold text-gray-700 mb-4">
                            <FaClock className="mr-2 text-blue-500" />
                            Available Time Slots
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {timeSlots.map((slot, index) => (
                                <button
                                    key={index}
                                    className={`py-2 px-3 rounded-lg border text-center ${index === 1
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md">
                        Confirm Appointment
                    </button>
                </div>

                {/* Contact & Fees Section */}
                <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Consultation Fees</h3>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Video Consultation</span>
                        <span className="font-semibold text-black">${data?.consultationFee || '800'}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-600">Clinic Visit</span>
                        <span className="font-semibold text-black">${data?.clinicFee || '1000'}</span>
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <FaPhone className="text-blue-500 mr-3" />
                                <div>
                                    <p className="text-sm text-gray-500">Clinic Number</p>
                                    <p className="font-medium text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-500 mr-3" />
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium text-gray-600">{data?.currentHospital}</p>
                                    <a href="#" className="text-blue-600 text-sm underline">Get Directions</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md flex items-center justify-center">
                        <FaPhone className="mr-2" />
                        Call for Emergency
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctorDetailsPage;