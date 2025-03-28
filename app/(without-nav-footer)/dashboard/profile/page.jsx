import { FiMail, FiPhone, FiMapPin, FiUser, FiSettings } from 'react-icons/fi';

import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

//https://www.einfosoft.com/templates/admin/cliniva/source/light/#/admin/doctors/doctor-profile

const Profile = () => {
    return (
        <div className="px-4 mx-auto py-10">

            <div className='lg:flex gap-4 space-y-10 lg:space-y-0'>
                {/* Left Side - Profile Overview */}
                <div className="lg:max-w-[400px]">
                    <div className="bg-[#212529] h-[150px]">
                        <div className='text-white text-center pt-6 h-full'>
                            <h2 className="text-xl font-bold ">DR. John Smith</h2>
                            <p className="text-sm">Senior Doctor</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-b-md'>
                        <div className="flex justify-center">
                            <Image
                                className="w-[110px] h-[110px] rounded-full border-2 border-white -mt-[60px]"
                                width={96}
                                height={96}
                                src="/self3.jpg"
                                alt="Profile"
                            />
                        </div>
                        <div className="text-center mt-3 px-6">
                            <p className="text-gray-600 text-sm">
                                456, Estern Avenue, Courtage Area, New York
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
                            <p><span className="font-semibold">Full Name:</span> Emily Smith</p>
                            <p><span className="font-semibold">Mobile:</span> (123) 456 7890</p>
                            <p><span className="font-semibold">Email:</span> johndeo@example.com</p>
                            <p><span className="font-semibold">Location:</span> India</p>
                        </div>

                        <p className="text-gray-700  mt-6">
                            Completed my graduation in Arts from the well known and renowned institution of India –
                            SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University. SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was affiliated to M.S. University.
                        </p>

                        {/* education */}
                        <h3 className="text-lg font-semibold mt-6 text-gray-800">Education</h3>
                        <ul className="list-disc text-gray-800 mt-4 ">
                            <p>M.B.B.S., Gujarat University, Ahmedabad, India.</p>
                            <p>M.S., Gujarat University, Ahmedabad, India.</p>
                            <p>SPINAL FELLOWSHIP Dr. John Adam, Germany.</p>
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
        </div>
    );
};

export default Profile;