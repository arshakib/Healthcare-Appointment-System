"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

const DoctorAppointment = () => {
  const { data: session } = useSession();
  // console.log("session data", session);
  const params = useParams();
  const { id } = params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`/api/doctordata/${id}`);
        const data = await response.json();
        setDoctorData(data);
        console.log("Doctor data:", data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [id]);

  useEffect(() => {
    if (!session?.user?.email || !doctorData?.email) return; // Ensure values exist before fetching

    const fetchBookedSlots = async () => {
      try {
        const response = await fetch(
          `/api/appointment?patientEmail=${session.user.email}&doctorEmail=${doctorData.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch booked slots");
        }
        const data = await response.json();
        setBookedSlots(data);
        console.log("Booked slots:", data);
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      }
    };

    fetchBookedSlots();
  }, [session?.user?.email, doctorData?.email]); // Added dependencies

  const generateTimeOptions = () => {
    const options = [];
    for (
      let hour = doctorData?.startingHours;
      hour < doctorData?.endingHours;
      hour++
    ) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      selectedDate: selectedDate.toISOString().split("T")[0],
      selectedTime,
      patientName: session?.user?.name,
      patientEmail: session?.user?.email,
      doctorName: doctorData?.fullName,
      doctorEmail: doctorData?.email,
    };

    console.log("Appointment data:", appointmentData);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });
      const data = await response.json();
      console.log("Response from server:", data);
      
      if (response.ok) {
        toast.success("Appointment booked successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(data.message || "Failed to book appointment", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast.error("Error booking appointment. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const slots = generateTimeOptions();
  const isSlotBooked = (date, time) => {
    return bookedSlots.some(
      (slot) => slot.selectedDate === date && slot.selectedTime === time
    );
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      {/* Doctor Info Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Doctor Image */}
        {doctorData?.profilePhoto && (
          <div className="md:w-1/3 p-6 flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src={doctorData?.profilePhoto}
                fill
                alt={`Dr. ${doctorData?.fullName}`}
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        )}

        {/* Doctor Details */}
        <div className=" p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Dr. {doctorData?.fullName}
              </h1>
              <p className="text-blue-600 font-medium">
                {doctorData?.specialty}
              </p>
            </div>
            <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-semibold text-black">4.9</span>
            </div>
          </div>

          <div className="mt-4 flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>{doctorData?.currentHospital}</span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Qualifications
              </h3>
              <p className="text-gray-600">{doctorData?.medicalDegree}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Experience
              </h3>
              <p className="text-gray-600">
                {doctorData?.yearsOfExperience}+ years
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Hospital</h3>
              <p className="text-gray-600">{doctorData?.hospitalAffiliation}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-600">English, Hindi, Bangla</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
            <p className="text-gray-600">
              Dr. {doctorData?.fullName} is a renowned {doctorData?.specialty}{" "}
              with extensive experience in {doctorData?.specialty.toLowerCase()}{" "}
              care.
              {doctorData?.bio ||
                "Committed to providing the highest quality care to all patients."}
            </p>
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
                  const isBooked = isSlotBooked(slotDate, slot.label);
                  return (
                    <button
                      key={slot.value}
                      onClick={() => setSelectedTime(slot.label)}
                      disabled={isBooked}
                      className={`p-3 rounded-lg text-center transition-all ${
                        isBooked
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : selectedTime === slot.label
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
              <p className="text-red-800 text-sm">
                Alert: Friday and Saturday are off days
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
