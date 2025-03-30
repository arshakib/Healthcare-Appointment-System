"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";


const DoctorsPage = () => {
  const [allDoctorData, setAllDoctorData] = useState([]);
  // Enhanced static doctor data with more professional details
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: 12,
      rating: 4.8,
      reviews: 124,
      image: '/self3.jpg',
      available: true,
      nextAvailable: 'Today, 4:30 PM',
      location: 'Dhaka Medical Center',
      education: 'MD, Harvard Medical School',
      languages: ['English', 'Bengali'],
      consultationFee: '৳1,200'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      experience: 8,
      rating: 4.6,
      reviews: 89,
      image: '/self3.jpg',
      available: false,
      nextAvailable: 'Tomorrow, 10:00 AM',
      location: 'Chittagong Neuro Center',
      education: 'PhD Neurology, Johns Hopkins',
      languages: ['English', 'Mandarin', 'Bengali'],
      consultationFee: '৳1,500'
    },
    {
      id: 3,
      name: 'Dr. Lisa Rahman',
      specialty: 'Pediatrics',
      experience: 15,
      rating: 4.9,
      reviews: 215,
      image: '/self3.jpg',
      available: true,
      nextAvailable: 'Today, 3:00 PM',
      location: 'Dhaka Children\'s Hospital',
      education: 'MBBS, BSMMU',
      languages: ['Bengali', 'English'],
      consultationFee: '৳1,000'
    },
    {
      id: 4,
      name: 'Dr. David Smith',
      specialty: 'Orthopedic Surgery',
      experience: 10,
      rating: 4.7,
      reviews: 156,
      image: '/self3.jpg',
      available: true,
      nextAvailable: 'Today, 5:30 PM',
      location: 'Sylhet Ortho Care',
      education: 'MS Ortho, AIIMS Delhi',
      languages: ['English', 'Hindi'],
      consultationFee: '৳1,800'
    },
    {
      id: 5,
      name: 'Dr. Fatima Ahmed',
      specialty: 'Dermatology',
      experience: 7,
      rating: 4.5,
      reviews: 72,
      image: '/self3.jpg',
      available: false,
      nextAvailable: 'Friday, 9:00 AM',
      location: 'Dhaka Skin Clinic',
      education: 'MD Dermatology, DU',
      languages: ['Bengali', 'English', 'Arabic'],
      consultationFee: '৳1,300'
    },
    {
      id: 6,
      name: 'Dr. Robert Williams',
      specialty: 'Cardiology',
      experience: 20,
      rating: 4.9,
      reviews: 302,
      image: '/self3.jpg',
      available: true,
      nextAvailable: 'Today, 6:00 PM',
      location: 'Khulna Cardiac Center',
      education: 'DM Cardiology, CMC Vellore',
      languages: ['English', 'Bengali'],
      consultationFee: '৳2,000'
    },
  ];

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

  console.log(allDoctorData)


  return (
    <div className=" py-10">
      <div className="w-11/12 mx-auto text-black">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Find Your Doctor</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book appointments with our highly qualified specialists. We have 6 doctors across 6 centers.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Doctors
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input type="text" id="search"
                  placeholder="Search by name, specialty..."
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            {/* Specialty Filter */}
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Specialty
              </label>
              <div className="relative">
                <select id="specialty"
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-8">
                  {/* {specialties?.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty === 'all' ? 'All Specialties' : specialty}
                    </option>
                  ))} */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <select
                  id="location"
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-8">
                  {/* {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))} */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sort Option */}
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort"
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-8">
                  <option value="rating-desc">Highest Rating</option>
                  <option value="experience-desc">Most Experienced</option>
                  <option value="fee-asc">Price: Low to High</option>
                  <option value="fee-desc">Price: High to Low</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Availability:</span>
            <div className="flex space-x-2">
              <button
                type="button"
                className={`px-3 py-1.5 rounded-full text-sm font-medium `}>
                {/* {availabilityFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} */}
                All
              </button>
              <button
                type="button"
                className={`px-3 py-1.5 rounded-full text-sm font-medium `}>
                {/* {availabilityFilter === 'available' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} */}
                Available Now
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold">6</span> of <span className="font-semibold">6</span> doctors
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">View:</span>
            <button className="p-1.5 rounded-md bg-blue-100 text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <button className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Doctor Cards */}
        {allDoctorData?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allDoctorData?.map((doctor) => (
              <div key={doctor?._id} className=" rounded-md shadow-sm  overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="relative">
                  {/* Doctor Image */}
                  <div className="h-[350px] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full ">
                      <Image src={doctor?.profilePhoto} width={56} height={56} alt="doctor image" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Availability Badge */}
                  {/* <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${doctor.available ? 'bg-green-100 text-[#033137]' : 'bg-red-100 text-red-800'}`}>
                    {doctor.available ? 'Available Today' : 'Available ' + doctor.nextAvailable}
                  </div> */}
                </div>

                <div className="p-5">
                  {/* Doctor Name and Rating */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#033137] transition-colors duration-300">{doctor.fullName}</h2>
                      <p className="text-[#033137] font-medium">{doctor?.specialty}</p>
                    </div>
                    <div className="flex items-center bg-blue-50 px-2.5 py-1 rounded-lg">
                      <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">76</span>
                      <span className="text-xs text-gray-500 ml-1">(86)</span>
                    </div>
                  </div>

                  {/* Education */}
                  <p className="text-sm text-gray-600 mb-3 flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {doctor?.medicalDegree}
                  </p>

                  {/* Location */}
                  <p className="text-sm text-gray-600 mb-3 flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {doctor?.address}
                  </p>

                  {/* Languages */}
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.languages.map((language, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {language}
                      </span>
                    ))}
                  </div> */}

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-4"></div>

                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Consultation Fee</p>
                      <p className="text-lg font-bold text-gray-900">34545</p>
                    </div>
                    <button className="px-4 py-2.5 bg-[#033137] text-white text-sm font-medium rounded-md transition-colors duration-300 flex items-center">
                      Book Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-900">No doctors found</h3>
            <p className="mt-2 text-gray-500 max-w-md mx-auto">
              We couldn't find any doctors matching your criteria. Try adjusting your filters or search term.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-[#033137] text-white font-medium rounded-lg transition-colors duration-300">
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DoctorsPage;