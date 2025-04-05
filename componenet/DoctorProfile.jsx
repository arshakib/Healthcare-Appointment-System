"use client";

import Image from 'next/image';
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const DoctorProfile = () => {
    const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {data: session} = useSession();

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

  if (loading) return <div className='text-gray-800'>Loading...</div>;
  if (!doctorData) return <div className='text-gray-800'>No doctor data available.</div>;

  const singleDoctor = doctorData[0];
  console.log(singleDoctor)

    return (
        <div className='lg:flex gap-4 space-y-10 lg:space-y-0'>
            {/* Left Side - Profile Overview */}
            <div className="lg:w-[300px]">
                <div className="bg-[#212529] h-[150px]">
                    <div className='text-white text-center pt-6 h-full'>
                        <h2 className="text-xl font-bold ">{singleDoctor?.fullName}</h2>
                        <p className="text-sm">Senior Doctor</p>
                    </div>
                </div>
                <div className='bg-white rounded-b-md'>
                    <div className="flex justify-center">
                        <Image
                            className="w-[110px] h-[110px] rounded-full border-2 border-white -mt-[60px]"
                            width={96}
                            height={96}
                            src={singleDoctor?.profilePhoto}
                           
                            alt="Profile"
                        />
                    </div>
                    <div className="text-center mt-3 px-6">
                        <p className="text-gray-600 text-sm">
                            {singleDoctor?.address}
                        </p>
                        <p className="mt-6 text-gray-700 font-semibold flex items-center justify-center">
                            264-625-2583
                        </p>
                    </div>
                    <div className=" mt-10 pb-6 flex justify-around  text-gray-700">
                        <div className="text-center">
                            <p className="font-bold text-lg">564</p>
                            <p className="text-sm">Following</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-lg">18k</p>
                            <p className="text-sm">Followers</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-lg">565</p>
                            <p className="text-sm">Post</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="flex-1 bg-white rounded-md p-6">
                {/* Header */}
                <div className="flex justify-between border-b pb-3">
                    <div
                        className={`flex items-center gap-2 cursor-pointer text-gray-800`}>
                        <FaUser />
                        <span className='font-semibold'>About Me</span>
                    </div>

                </div>

                {/* Content */}

                <div className="mt-6">
                    <div className="grid grid-cols-2 gap-4 text-gray-600 mt-4">
                        <p><span className="font-semibold">Full Name:</span> {singleDoctor?.fullName}</p>
                        <p><span className="font-semibold">Mobile:</span> {singleDoctor?.phone}</p>
                        <p><span className="font-semibold">Email:</span>{singleDoctor?.email}</p>
                        <p><span className="font-semibold">Location:</span>{singleDoctor?.address}</p>
                    </div>

                    <p className="text-gray-700  mt-6">
                        {singleDoctor?.bio}
                    </p>

                    {/* education */}
                    <h3 className="text-lg font-semibold mt-6 text-gray-800">medicalDegree</h3>
                    <ul className="list-disc text-gray-800 mt-4 ">
                        <p><span>{singleDoctor?.medicalDegree}</span> | <span>{singleDoctor?.specialty}</span></p> 
                        
                    </ul>

                    {/* experience */}
                    <h3 className="text-lg font-semibold mt-6 text-gray-800">Experience</h3>
                    <p className="text-gray-700 mt-4">One year rotatory internship from April-2009 to march-2010 at B. J. Medical College, Ahmedabad.
                        Three year residency at V.S. General Hospital as a resident in orthopedics from April - 2008 to April - 2011.
                        I have worked as a part time physiotherapist in Apang manav mandal from 1st june 2004 to 31st jan 2005.
                        Clinical and Research fellowship in Scoliosis at Shaurashtra University and Medical Centre (KUMC) , Krishna Hospital , Rajkot from April 2013 to June 2013.
                        2.5 Years Worked at Mahatma Gandhi General Hospital, Surendranagar.
                        Consultant Orthopedics Surgeon Jalna 2 years.</p>
                </div>


            </div>

        </div>
    );
};

export default DoctorProfile;