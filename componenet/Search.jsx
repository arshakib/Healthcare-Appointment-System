"use client";
import React, { useState } from "react";
import DemoArea from "./DemoArea";
import Link from "next/link";

const Search = () => {
  const [response, setResponse] = useState({
    prescription: "",
    specialist: "",
    doctors: [],
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const symptoms = form.symptoms.value;
    const area = form.area.value;
    console.log({ symptoms, area }); // Log area value
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/ai", {
        // Use relative path
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
  symptom: symptoms,
  area: area
})
      });

      console.log(res);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      setResponse({
        prescription: data.prescription || "No prescription available",
        specialist: data.specialist || "Consult a general physician",
        doctors: data.doctors || [],
      });
    } catch (err) {
      console.error(err);
      setResponse("Error fetching response.");
    }

    setLoading(false);
  };

  console.log("Response:", response); // Log the response state
  return (
    <div
      id="search-section"
      className="w-full px-4 md:px-8 lg:w-10/12 mx-auto mt-16"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Symptoms Input */}
          <div className="w-full lg:w-1/2">
            <fieldset className="border-2 border-[#1d7261] rounded-xl p-2 focus-within:border-[#f9be00]">
              <legend className="px-2 text-[#f9be00] text-sm font-medium">
                Enter your symptoms
              </legend>
              <input
                type="text"
                name="symptoms"
                required
                className="w-full h-14 px-4 text-[#033137] bg-white rounded-lg focus:outline-none"
                placeholder="e.g. headache, fever, cough..."
              />
            </fieldset>
          </div>

          {/* Area Select */}
          <div className="w-full lg:w-1/2">
            <fieldset className="border-2 border-[#1d7261] rounded-xl p-2 focus-within:border-[#f9be00]">
              <legend className="px-2 text-[#f9be00] text-sm font-medium">
                Select your Area
              </legend>
              <select
                name="area"
                required
                defaultValue="" // Fix for default option
                className="w-full h-14 px-4 text-[#033137] bg-white rounded-lg focus:outline-none"
              >
                <option value="" disabled>
                  Choose your location
                </option>
                <option>Bagerhat</option>
                <option>Bandarban</option>
                <option>Barguna</option>
                <option>Barisal</option>
                <option>Bhola</option>
                <option>Bogura</option>
                <option>Brahmanbaria</option>
                <option>Chandpur</option>
                <option>Chattogram</option>
                <option>Chuadanga</option>
                <option>Cumilla</option>
                <option>Cox's Bazar</option>
                <option>Dhaka</option>
                <option>Dinajpur</option>
                <option>Faridpur</option>
                <option>Feni</option>
                <option>Gaibandha</option>
                <option>Gazipur</option>
                <option>Gopalganj</option>
                <option>Habiganj</option>
                <option>Jamalpur</option>
                <option>Jashore</option>
                <option>Jhalokati</option>
                <option>Jhenaidah</option>
                <option>Joypurhat</option>
                <option>Khagrachhari</option>
                <option>Khulna</option>
                <option>Kishoreganj</option>
                <option>Kurigram</option>
                <option>Kushtia</option>
                <option>Lakshmipur</option>
                <option>Lalmonirhat</option>
                <option>Madaripur</option>
                <option>Magura</option>
                <option>Manikganj</option>
                <option>Meherpur</option>
                <option>Moulvibazar</option>
                <option>Munshiganj</option>
                <option>Mymensingh</option>
                <option>Naogaon</option>
                <option>Narail</option>
                <option>Narayanganj</option>
                <option>Narsingdi</option>
                <option>Natore</option>
                <option>Nawabganj</option>
                <option>Netrokona</option>
                <option>Nilphamari</option>
                <option>Noakhali</option>
                <option>Pabna</option>
                <option>Panchagarh</option>
                <option>Patuakhali</option>
                <option>Pirojpur</option>
                <option>Rajbari</option>
                <option>Rajshahi</option>
                <option>Rangamati</option>
                <option>Rangpur</option>
                <option>Satkhira</option>
                <option>Shariatpur</option>
                <option>Sherpur</option>
                <option>Sirajganj</option>
                <option>Sunamganj</option>
                <option>Sylhet</option>
                <option>Tangail</option>
                <option>Thakurgaon</option>
              </select>
            </fieldset>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white text-lg px-12 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            {loading ? "Analyzing..." : "Search by symptoms"}
          </button>
        </div>
      </form>

      {/* Response Section */}
      <div className="w-full lg:w-11/12 mx-auto mt-16 px-4 md:px-6">
        <div className="border-2 border-[#1d7261] rounded-xl shadow-lg hover:border-[#f9be00]">
          <div className="bg-[#033137] px-6 py-3 rounded-t-lg flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#f9be00]"></div>
              <div className="w-3 h-3 rounded-full bg-[#1cb289]"></div>
              <div className="w-3 h-3 rounded-full bg-[#1d7261]"></div>
            </div>
            <span className="ml-4 text-[#f9be00] font-medium">
              AI Symptom Analysis
            </span>
          </div>
          <div className="bg-white min-h-[200px] p-8 rounded-b-xl text-center">
            {loading ? (
              <div className="flex justify-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-[#1cb289] animate-pulse"></div>
                <div className="w-6 h-6 rounded-full bg-[#f9be00] animate-pulse delay-100"></div>
                <div className="w-6 h-6 rounded-full bg-[#1d7261] animate-pulse delay-200"></div>
              </div>
            ) : (
              <div className="text-lg text-[#1d7261] space-y-4 text-left">
                {response.prescription || response.specialist ? (
                  <div className="space-y-6">
                    {/* Prescription Section */}
                    {response.prescription && (
                      <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#1d7261]/20">
                        <h3 className="text-lg lg:text-2xl font-bold text-[#033137] mb-4">
                          Recommendations
                        </h3>
                        {response.prescription
                          .split("\n")
                          .map((line, index) => (
                            <p
                              key={`prescription-${index}`}
                              className={`mb-3 ${
                                line.startsWith("*")
                                  ? "ml-4 pl-2 border-l-4 border-[#f9be00]"
                                  : ""
                              } ${
                                line.includes("IMPORTANT:")
                                  ? "text-red-600 font-semibold"
                                  : ""
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: line
                                  .replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<strong>$1</strong>"
                                  )
                                  .replace(/\*/g, "•"),
                              }}
                            />
                          ))}
                      </div>
                    )}

                    {/* Specialist Section */}
                    {response.specialist && (
                      <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#1d7261]/20">
                        <h3 className="text-xl lg:text-2xl font-bold text-[#033137] mb-4">
                          Recommended Specialists
                        </h3>
                        {response.specialist.split(".").map(
                          (specialty, index) =>
                            specialty.trim() && (
                              <div
                                key={`specialist-${index}`}
                                className="flex items-center mb-2 text-[#1d7261]"
                              >
                                <span className="w-2 h-2 bg-[#f9be00] rounded-full mr-3" />
                                <span className="text-lg">
                                  {specialty.trim()}.
                                </span>
                              </div>
                            )
                        )}
                      </div>
                    )}

                    {/* Doctors Section */}
                    {response.doctors && (
                      <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#1d7261]/20">
                        <h3 className="text-2xl font-bold text-[#033137] mb-4">
                          Recommended Doctors
                        </h3>
                        {response.doctors.length > 0 ? (
                          response.doctors.map((doctor, index) => (
                            <div
                              className="card shadow-xl mt-6 transition-all duration-300 hover:shadow-2xl overflow-hidden bg-gradient-to-r from-[#02282c] to-[#033137]"
                              style={{
                                border: "2px solid #1d7261",
                                borderRadius: "1rem",
                                boxShadow:
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
                              }}
                              key={index}
                            >
                              {/* Mobile design (stacked layout) */}
                              <div className="flex flex-col md:hidden">
                                <div className="flex justify-center pt-6">
                                  <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f9be00] to-[#f5a700] p-1 shadow-lg">
                                      <img
                                        src={doctor.profilePhoto}
                                        alt={`Dr. ${doctor.fullName}`}
                                        className="w-full h-full object-cover rounded-full"
                                      />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-[#1cb289] rounded-full p-1 shadow-md">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className="card-body px-4 py-4 text-center">
                                  <div className="flex flex-col items-center">
                                    <h2
                                      className="card-title text-xl font-bold"
                                      style={{ color: "#f9be00" }}
                                    >
                                      {doctor.fullName}
                                    </h2>
                                    <span className="text-xs font-normal px-2 py-1 rounded-full bg-[#1d7261] text-white mt-1 uppercase tracking-wider">
                                      Available
                                    </span>

                                    <div className="flex items-center mt-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        style={{ color: "#1cb289" }}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                      </svg>
                                      <p
                                        className="text-base font-medium"
                                        style={{ color: "#1cb289" }}
                                      >
                                        {doctor.specialty}
                                      </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-3 text-gray-300 text-xs">
                                      <div className="flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                          />
                                        </svg>
                                        Next available: Today
                                      </div>
                                      <div className="flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                        15-30 min
                                      </div>
                                    </div>

                                    <div className="flex items-center mt-3">
                                      <div className="flex -space-x-1 mr-2">
                                        <div className="w-6 h-6 rounded-full border-2 border-[#033137] bg-yellow-300 flex items-center justify-center text-xs font-bold text-[#033137]">
                                          5
                                        </div>
                                        <div className="w-6 h-6 rounded-full border-2 border-[#033137] bg-[#1cb289] text-white flex items-center justify-center text-xs">
                                          ★
                                        </div>
                                      </div>
                                      <span className="text-gray-300 text-xs">
                                        5.0 (124 reviews)
                                      </span>
                                    </div>
                                  </div>

                                  <div className="card-actions justify-center mt-4">
                                    <Link
                                      href={`/allDoctor/${doctor?._id}`}
                                      className="w-full"
                                    >
                                      <button
                                        className="btn font-bold tracking-wide flex items-center justify-center gap-2 relative overflow-hidden group w-full"
                                        style={{
                                          backgroundColor: "#1d7261",
                                          color: "white",
                                          border: "none",
                                          borderRadius: "0.5rem",
                                          padding: "0.5rem 1rem",
                                          transition: "all 0.3s ease",
                                        }}
                                      >
                                        <span className="absolute right-full w-12 h-32 -mt-12 bg-white opacity-10 transform rotate-12 transition-all duration-1000 origin-left group-hover:right-0"></span>
                                        Book Appointment
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              {/* Tablet/Laptop/Desktop design (side by side layout) */}
                              <div className="hidden md:flex md:flex-row">
                                <div className="pl-4 lg:pl-6 flex items-center relative">
                                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-24 h-48 bg-[#1d7261] opacity-20 rounded-r-full blur-md"></div>
                                  <div className="relative">
                                    <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-[#f9be00] to-[#f5a700] p-1 shadow-lg">
                                      <img
                                        src={doctor.profilePhoto}
                                        alt={`Dr. ${doctor.fullName}`}
                                        className="w-full h-full object-cover rounded-full"
                                      />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-[#1cb289] rounded-full p-1 shadow-md">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 lg:h-5 lg:w-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812a3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className="card-body py-4 pl-4 lg:pl-6 pr-4 flex-1">
                                  <div className="flex flex-col">
                                    <div className="flex flex-col lg:flex-row lg:items-center">
                                      <h2
                                        className="card-title text-lg lg:text-2xl font-bold"
                                        style={{ color: "#f9be00" }}
                                      >
                                        {doctor.fullName}
                                      </h2>
                                      <span className="text-xs font-normal px-2 py-1 rounded-full bg-[#1d7261] text-white mt-1 lg:mt-0 lg:ml-2 uppercase tracking-wider w-fit">
                                        Available
                                      </span>
                                    </div>

                                    <div className="flex items-center mt-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 lg:h-5 lg:w-5 mr-1"
                                        style={{ color: "#1cb289" }}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                      </svg>
                                      <p
                                        className="text-base lg:text-lg font-medium"
                                        style={{ color: "#1cb289" }}
                                      >
                                        {doctor.specialty}
                                      </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 mt-3 text-gray-300 text-xs">
                                      <div className="flex items-center mb-1 sm:mb-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                          />
                                        </svg>
                                        Next available: Today
                                      </div>
                                      <div className="flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                        15-30 min
                                      </div>
                                    </div>

                                    <div className="flex items-center mt-3">
                                      <div className="flex -space-x-1 mr-2">
                                        <div className="w-6 h-6 rounded-full border-2 border-[#033137] bg-yellow-300 flex items-center justify-center text-xs font-bold text-[#033137]">
                                          5
                                        </div>
                                        <div className="w-6 h-6 rounded-full border-2 border-[#033137] bg-[#1cb289] text-white flex items-center justify-center text-xs">
                                          ★
                                        </div>
                                      </div>
                                      <span className="text-gray-300 text-xs">
                                        5.0 (124 reviews)
                                      </span>
                                    </div>
                                  </div>

                                  <div className="card-actions justify-end mt-2">
                                    <Link href={`/allDoctor/${doctor?._id}`}>
                                      <button
                                        className="btn font-bold tracking-wide flex items-center gap-2 relative overflow-hidden group"
                                        style={{
                                          backgroundColor: "#1d7261",
                                          color: "white",
                                          border: "none",
                                          borderRadius: "0.5rem",
                                          padding: "0.5rem 1.5rem",
                                          transition: "all 0.3s ease",
                                        }}
                                      >
                                        <span className="absolute right-full w-12 h-32 -mt-12 bg-white opacity-10 transform rotate-12 transition-all duration-1000 origin-left group-hover:right-0"></span>
                                        Book Appointment
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-lg text-[#1d7261]">
                            No doctors found for the selected specialty.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <DemoArea />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
