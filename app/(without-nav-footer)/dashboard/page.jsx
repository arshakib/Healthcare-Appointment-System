"use client";
import AppointmentTable from "@/componenet/AppointmentTable";
import Image from "next/image";

export default function DoctorDashboard() {
  return (
    <>

      <div className="px-4 py-10">
        <div className="bg-white rounded-md lg:p-6 p-4  flex flex-col md:flex-row w-full">
          {/* Left Section */}
          <div className="lg:flex-1 space-y-3 w-full py-8">
            <p className="text-gray-500 text-lg">Welcome back</p>
            <h2 className="text-2xl font-bold text-blue-600">
              DR. Sarah Smith!
            </h2>
            <p className="text-gray-500 text-md">Gynecologist, MBBS, MD</p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold">Appointments</p>
                <p className="text-blue-600 text-xl font-bold">12+</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold">Surgeries</p>
                <p className="text-red-600 text-xl font-bold">3+</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-gray-600 font-semibold">Room Visit</p>
                <p className="text-green-600 text-xl font-bold">12+</p>
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
      </div>

      {/* appointment table */}
      <div className="px-4 pb-10">
        <AppointmentTable/>
      </div>
    </>
  );
}