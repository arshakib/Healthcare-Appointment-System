"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import doctorImg from "@/public/about-us-img-1.jpg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const DoctorAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);

  const startTime = 9; // 9 AM
  const endTime = 18; // 6 PM
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = startTime; hour < endTime; hour++) {
      // Adjusted for 9 AM - 6 PM
      for (let minute of [0, 30]) {
        const time = new Date(0);
        time.setHours(hour, minute);
        options.push({
          value: time.toISOString().substr(11, 5),
          label: time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
        });
      }
    }
    return options;
  };

  useEffect(() => {
    try {
      fetch("/api/appointment")
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server:", data);
          setBookedSlots(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      selectedDate: selectedDate.toISOString().split("T")[0],
      selectedTime,
    };
    console.log("Appointment Data:", appointmentData);
    try {
      fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const slots = generateTimeOptions();
  const isSlotBooked = (date, time) => {
    return bookedSlots.some(
      (slot) => slot.selectedDate === date && slot.selectedTime === time
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      {/* Doctor Info Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto flex gap-8 transform transition-all duration-300 hover:shadow-xl border-2 border-[#1cb289]/20">
        <div className="w-1/3 relative group">
          <div className="absolute inset-0 bg-[#1cb289] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <Image
            src={doctorImg}
            alt="Doctor Image"
            className="rounded-xl transform transition-transform duration-500 hover:scale-105 object-cover h-full"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-[#033137] animate-fadeIn">
            Dr. Ajit Kumar Surin
            <span className="block text-lg mt-2 text-[#f9be00]">
              ⭐ 4.9 (120 Reviews)
            </span>
          </h2>
          <div className="space-y-2">
            <p className="text-[#1cb289] font-medium bg-[#1cb289]/10 px-3 py-1 rounded-full w-fit">
              16+ Years Experience
            </p>
            <p className="text-[#1d7261] font-semibold">
              MD (Medicine), PDF in Clinical Immunology and Rheumatology
            </p>
            <div className="border-l-4 border-[#f9be00] pl-3 mt-3">
              <p className="text-[#1d7261]">
                Languages: English | Hindi | Bangla | Oriya
              </p>
              <p className="text-[#033137] font-semibold mt-2">
                Apollo Hospitals, Bhubaneswar
              </p>
              <p className="text-[#1d7261]">
                Plot No. 251, Sainik School Road, Unit 15, Bhubaneswar, OD,
                751005
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-[#1cb289] hover:text-[#1d7261] transition-colors duration-300 mt-3 group"
            >
              <span className="mr-2">Get Hospital Directions</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mt-8 border-2 border-[#1cb289]/20">
        <h2 className="text-3xl font-bold text-[#033137] mb-6">
          Book Your Appointment
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Date & Time Selection */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#1d7261] mb-4">
                Select Date
              </h3>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                inline
                className="border-2 border-[#1cb289]/20 rounded-lg p-2"
                dayClassName={(date) =>
                  date.getDate() === selectedDate?.getDate()
                    ? "bg-[#1cb289] text-white rounded-full"
                    : undefined
                }
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#1d7261] mb-4">
                Available Slots
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {slots.map((slot) => {
                  const slotDate = selectedDate?.toISOString().split("T")[0];
                  const isBooked = isSlotBooked(slotDate, slot.value);
                  return (
                    <button
                      key={slot.value}
                      onClick={() => setSelectedTime(slot.value)}
                      disabled={isBooked}
                      className={`p-3 rounded-lg text-center transition-all ${
                        isBooked
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : selectedTime === slot.value
                          ? "bg-[#1cb289] text-white"
                          : "bg-[#1cb289]/10 text-[#1d7261] hover:bg-[#1cb289]/20"
                      }`}
                    >
                      {slot.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div>
            <div className="bg-[#f9be00]/10 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-[#1d7261] mb-4">
                Appointment Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#033137]">Consultation Fee:</span>
                  <span className="text-[#1cb289] font-bold">₹800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#033137]">Duration:</span>
                  <span className="text-[#1cb289] font-bold">30 Minutes</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1cb289]/10 p-6 rounded-xl border-l-4 border-[#f9be00]">
              <h3 className="text-lg font-semibold text-[#1d7261] mb-3">
                Important Note
              </h3>
              <p className="text-[#033137] text-sm leading-relaxed">
                Please note that this is a tentative appointment and is subject
                to confirmation by the doctor. The doctor may have other
                commitments or emergencies that could affect the appointment
                time.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full mt-8 py-4 rounded-xl bg-[#1cb289] hover:bg-[#1d7261] 
                text-white font-semibold transition-colors duration-300 shadow-lg 
                hover:shadow-[#1cb289]/30"
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
