import Image from 'next/image';
import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const PatientProfile = () => {
    const visits = [
        { date: "11/05/2017", doctor: "Dr. Rajesh", treatment: "Check up", charges: "14$" },
        { date: "13/05/2017", doctor: "Dr. Rajesh", treatment: "X-Ray", charges: "16$" },
        { date: "13/05/2017", doctor: "Dr. Rajesh", treatment: "Blood Test", charges: "24$" },
        { date: "14/05/2017", doctor: "Dr. Rajesh", treatment: "Admit", charges: "14$" },
        { date: "15/05/2017", doctor: "Dr. Rajesh", treatment: "Operation", charges: "14$" },
        { date: "18/05/2017", doctor: "Dr. Rajesh", treatment: "Discharge", charges: "14$" },
    ];
    return (
        <div className='lg:flex gap-5 space-y-10 lg:space-0'>
            <div className=''>
                {/* patient picture */}
                <div className='mb-8 '>
                    <Image src="/self3.jpg" width={400} height={300} alt='patient profile' className="w-[400px] h-[400px] rounded-md" />
                </div>
                {/* about patient */}
                <div className="lg:max-w-[400px] bg-white rounded-md p-6">
                    <h2 className="text-xl font-semibold text-gray-600 mb-6">About Patient</h2>
                    <p className="text-gray-600 text-sm mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.
                    </p>
                    <div className=" pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Email address:</p>
                        <p className="text-gray-800 text-sm">john@gmail.com</p>
                    </div>
                    <div className="border-t border-gray-300 pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Phone:</p>
                        <p className="text-gray-800 text-sm">+91 1234567890</p>
                    </div>
                    <div className="border-t border-b border-gray-300 pt-5 pb-5">
                        <p className="text-gray-500 text-sm font-medium mb-1">Address:</p>
                        <p className="text-gray-800 text-sm">345, Sarju Appt., Mota Varacha, Surat Gujarat, India.</p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                {/* about section */}
                <div className='text-black bg-white p-6 '>
                    <h4 className='text-gray-600 mb-6'>About</h4>
                    <p className='text-gray-500 '>It is also used to identify any abnormal tissue in the uterine cavity, such as uterine fibroids, endometrial polyps, scar tissue, or retained pregnancy tissue, the presence of which may be suggested by history or previous tests such as a hysterosalpingogram (x-ray of the uterus and tubes). This procedure is done in the office here at IVF New England, and is done by one of the physicians. Approximately an hour before the exam we suggest that you take Ibuprofen 600 mg (Motrin/Advil) or a similar medication to minimize some mild to moderate cramping that you may experience during the procedure.
                    </p>
                </div>

                {/* past visit history */}
                <div className="mt-8 bg-white rounded-md p-6">
                    <h2 className="text-xl font-semibold text-gray-600 mb-6">Past Visit History</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 text-left text-gray-800 font-semibold">Date</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Doctor</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Treatment</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Charges($)</th>
                                    <th className="p-3 text-left text-gray-800 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visits.map((visit, index) => (
                                    <tr key={index} className="border-t border-gray-300 even:bg-gray-100">
                                        <td className="p-4 text-gray-800">{visit.date}</td>
                                        <td className="p-4 text-gray-800">{visit.doctor}</td>
                                        <td className="p-4 text-gray-800">{visit.treatment}</td>
                                        <td className="p-4 text-gray-800">{visit.charges}</td>
                                        <td className="p-4 flex gap-3">
                                            <button className="text-blue-500 hover:text-blue-700">
                                                <FaEdit />
                                            </button>
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