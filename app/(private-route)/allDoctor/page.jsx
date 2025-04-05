"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DoctorsPage = () => {
  const [allDoctorData, setAllDoctorData] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/api/doctordata");
        setAllDoctorData(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = allDoctorData.filter((doctor) => {
    const name = doctor.fullName?.toLowerCase() || "";
    const specialty = doctor.specialty?.toLowerCase() || "";
    const location = doctor.area?.toLowerCase() || "";

    const matchesSearch =
      name.includes(searchQuery.toLowerCase()) ||
      specialty.includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty
      ? specialty === selectedSpecialty.toLowerCase()
      : true;
    const matchesLocation = selectedLocation
      ? location === selectedLocation.toLowerCase()
      : true;

    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "General Practice",
    "Oncology",
    "Psychiatry",
    "Allergy and Immunology",
    "Anesthesiology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Infectious Disease",
    "Nephrology",
    "Obstetrics and Gynecology (OB/GYN)",
    "Ophthalmology",
    "Otolaryngology (ENT - Ear, Nose, and Throat)",
    "Pathology",
    "Plastic Surgery",
    "Pulmonology (Lung Specialist)",
    "Radiology",
    "Rheumatology",
    "Sports Medicine",
    "Urology",
    "Geriatrics (Elderly Care)",
    "Emergency Medicine",
    "Pain Management",
    "Sleep Medicine",
  ];

  const locations = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cumilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokati",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Nawabganj",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  return (
    <div className=" py-10">
      <div className="w-11/12 mx-auto text-black">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find Your Doctor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book appointments with our highly qualified specialists. We have 6
            doctors across 6 centers.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search Doctors
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name, specialty..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  // ...other props
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <div>
              <label
                htmlFor="specialty"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Specialty
              </label>
              <div className="relative">
                <select
                  id="specialty"
                  value={selectedSpecialty}
                  onChange={handleSpecialtyChange}
                  className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Specialties</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></div>
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <div className="relative">
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  // ...other props
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></div>
              </div>
            </div>

            {/* Sort Option */}
          </div>

          {/* Availability Filter */}
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">
              Availability:
            </span>
            <div className="flex space-x-2">
              <button
                type="button"
                className={`px-3 py-1.5 rounded-full text-sm font-medium `}
              >
                All
              </button>
              <button
                type="button"
                className={`px-3 py-1.5 rounded-full text-sm font-medium `}
              >
                Available Now
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold">6</span> of{" "}
            <span className="font-semibold">6</span> doctors
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">View:</span>
            <button className="p-1.5 rounded-md bg-blue-100 text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Doctor Cards */}
        {filteredDoctors?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3 ">
            {filteredDoctors?.map((doctor) => (
              <div
                key={doctor?._id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:items-center sm:flex-row gap-4 p-3 lg:p-2">
                  {/* Left Side - Image */}
                  <div className="md:w-1/3 flex justify-center bg-gray-50">
                    {doctor?.profilePhoto && (
                      <div className="">
                        <Image
                          src={doctor?.profilePhoto}
                          width={200}
                          height={150}
                          alt={`Dr. ${doctor.fullName}`}
                          className="object-cover rounded-md w-full h-[180px]"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Side - Info */}
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-[17px] font-semibold text-gray-900">
                          {doctor.fullName}
                        </h2>
                        <p className="text-[#033137] text-[15px] font-medium">
                          {doctor?.specialty} | {doctor?.medicalDegree}
                        </p>
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="space-y-2">
                      <p className="flex items-start text-sm text-gray-600">
                        {doctor?.currentHospital}
                      </p>

                      <p className="flex items-start text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        {doctor?.hospitalAffiliation}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-bottom mt-2">
                      <Link href={`/allDoctor/${doctor?._id}`}>
                        <button className="px-4 py-2 bg-[#033137] text-white text-sm font-medium rounded-md transition-colors duration-300 flex items-center cursor-pointer">
                          Book Now
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              No doctors found
            </h3>
            <p className="mt-2 text-gray-500 max-w-md mx-auto">
              We couldn't find any doctors matching your criteria. Try adjusting
              your filters or search term.
            </p>
            <button className="mt-4 px-4 py-2 bg-[#033137] text-white font-medium rounded-lg transition-colors duration-300">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
