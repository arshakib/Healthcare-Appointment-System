"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";


export default function DoctorDashboard() {
  const {data} = useSession();
  const doctorEmail = data?.user?.email;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!doctorEmail) return;
        const res = await axios.get(`/api/appointment?doctorEmail=${doctorEmail}`);
        setAppointments(res.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctorEmail]);

  if (loading) return <p>Loading...</p>;

  // console.log(appointments)



  return (
    <>
      <div className="">
        {/* welcome card */}
       
          <div className="bg-white rounded-md lg:p-6 p-4  flex flex-col md:flex-row w-full mb-10">
            {/* Left Section */}
            <div className="lg:flex-1 space-y-3 w-full py-8">
              <p className="text-gray-500 text-lg">Welcome back</p>
              <h2 className="text-2xl font-bold text-blue-600">
                {data?.user?.name}
              </h2>
              <p className="text-gray-500 text-md">Gynecologist, MBBS, MD</p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-gray-600 font-semibold">Appointments</p>
                  <p className="text-blue-600 text-xl font-bold">{appointments?.length}+</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-gray-600 font-semibold">Surgeries</p>
                  <p className="text-red-600 text-xl font-bold">0</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-gray-600 font-semibold">Room Visit</p>
                  <p className="text-green-600 text-xl font-bold">{appointments?.length}+</p>
                </div>
              </div>
            </div>

            {/* Right Section - Doctor Illustration */}
            <div className="lg:h-[280px]">
              <Image
                src="/doctors.svg"
                width={300}
                height={400}
                alt="Doctor Illustration"
                className="h-full w-full"
              />
            </div>
          </div>
       
        {/* appointment table */}
        <div className="bg-white rounded-md p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Appointments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Gender</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Disease</th>
                  <th className="py-3 px-4">Time Slot</th>
                  
                </tr>
              </thead>
              <tbody>
                {appointments?.map((appt) => (
                  <tr key={appt._id} className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-3 px-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span>{appt?.patientName}</span>
                    </td>
                    <td className="py-3 px-4">Male</td>
                    <td className="py-3 px-4">{appt?.selectedDate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 border rounded-full text-xs font-medium ${appt.color}`}>
                        fever
                      </span>
                    </td>
                    <td className="py-3 px-4 text-lg">{appt?.selectedTime}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

