"use client";

import React, { useState } from "react";
import Image from "next/image";
import doctorImg from "@/public/about-us-img-1.jpg";

const DoctorAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");

  const dates = [1, 2, 3, 4, 5, 7, 8];
  const slots = ["11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM"];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      {/* Doctor Info Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto flex gap-8 transform transition-all duration-300 hover:shadow-xl">
        <div className="w-1/3 relative group">
          <div className="absolute inset-0 bg-[#1cb289] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <Image
            src={doctorImg}
            alt="Doctor Image"
            className="rounded-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-[#033137] animate-fadeIn">
            Dr. Ajit Kumar Surin
          </h2>
          <p className="text-[#1cb289] font-medium">16+ Years Experience</p>
          <p className="text-[#1d7261]">
            MD (Medicine), PDF in Clinical Immunology and Rheumatology |
            Rheumatologist
          </p>
          <div className="border-t border-[#033137]/10 pt-4">
            <p className="text-[#1d7261]">
              Languages: English | Hindi | Bangla | Oriya
            </p>
            <p className="text-[#033137] font-semibold mt-2">
              Apollo Hospitals, Bhubaneswar
            </p>
            <p className="text-[#1d7261]">
              Plot No. 251, Sainik School Road, Unit 15, Bhubaneswar, OD, 751005
            </p>
            <a
              href="#"
              className="text-[#1cb289] hover:text-[#1d7261] transition-colors duration-300 inline-block mt-2"
            >
              Get Hospital Directions →
            </a>
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mt-8 animate-slideUp">
        <h3 className="text-xl font-bold text-[#033137] mb-4">Select Date</h3>
        <div className="flex gap-3 overflow-x-auto pb-4">
          {dates.map((date) => (
            <button
              key={date}
              className={`px-5 py-3 rounded-xl transform transition-all duration-300 ${
                selectedDate === date
                  ? "bg-[#f9be00] scale-105 shadow-md"
                  : "bg-[#033137]/10 hover:bg-[#1cb289]/20"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <span
                className={`font-medium ${
                  selectedDate === date ? "text-[#033137]" : "text-[#1d7261]"
                }`}
              >
                Tue {date}
              </span>
            </button>
          ))}
        </div>

        <h3 className="text-xl font-bold text-[#033137] mt-8 mb-4">
          Available Slots
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {slots.map((slot) => (
            <button
              key={slot}
              className={`py-3 rounded-xl transform transition-all duration-300 ${
                selectedSlot === slot
                  ? "bg-[#1cb289] scale-105 shadow-md text-white"
                  : "bg-[#033137]/10 hover:bg-[#1cb289]/30 text-[#1d7261]"
              }`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <button
          className="mt-8 w-full bg-[#1cb289] hover:bg-[#1d7261] text-white py-4 rounded-xl text-lg font-bold 
                   transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl
                   animate-pulse animate-infinite animate-duration-1000"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorAppointment;
