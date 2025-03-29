"use client";

import React, { useState } from "react";
import Image from "next/image";

const DoctorAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");

  const dates = [1, 2, 3, 4, 5, 7, 8]; // Example dates
  const slots = ["11:30 AM", "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Doctor Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto flex gap-6">
        <Image
          src="/doctor.jpg" // Replace with actual doctor image
          alt="Doctor Image"
          width={150}
          height={150}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-2xl text-black font-semibold">Dr Ajit Kumar Surin</h2>
          <p className="text-blue-600">16+ Years Experience</p>
          <p className="text-gray-600">
            MD (Medicine), PDF in Clinical Immunology and Rheumatology | Rheumatologist
          </p>
          <p className="text-gray-600">Languages: English | Hindi | Bangla | Oriya</p>
          <p className="text-blue-600 font-semibold">
            Apollo Hospitals, Bhubaneswar
          </p>
          <p className="text-gray-600">
            Plot No. 251, Sainik School Road, Unit 15, Bhubaneswar, OD, 751005
          </p>
          <a href="#" className="text-blue-500 underline">
            Get Hospital Directions
          </a>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-6">
        <h3 className="text-lg text-black font-semibold">Select Date</h3>
        <div className="flex gap-3 mt-3">
          {dates.map((date) => (
            <button
              key={date}
              className={`px-4 py-2 rounded-lg ${
                selectedDate === date ? "bg-yellow-400 text-white" : "bg-gray-600"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {`Tue ${date}`}
            </button>
          ))}
        </div>

        <h3 className="text-lg text-black font-semibold mt-6">Available Slots</h3>
        <div className="flex gap-3 mt-3">
          {slots.map((slot) => (
            <button
              key={slot}
              className={`px-4 py-2 rounded-lg ${
                selectedSlot === slot ? "bg-yellow-400 text-white" : "bg-gray-600"
              }`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorAppointment;
