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
        body: JSON.stringify({ symptom: symptoms, area: area }),
      });

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
      <div className="w-10/12 mx-auto mt-16 px-4 md:px-6">
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
                        <h3 className="text-2xl font-bold text-[#033137] mb-4">
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
                        <h3 className="text-2xl font-bold text-[#033137] mb-4">
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
                              className="card card-side shadow-lg mt-4 transition-all duration-300 hover:shadow-xl"
                              style={{
                                backgroundColor: "#033137",
                                border: "2px solid #1d7261",
                                borderRadius: "1rem",
                              }}
                              key={index}
                            >
                              <figure className="pl-4">
                                <img
                                  src={doctor.profilePhoto}
                                  alt="Doctor"
                                  className="w-24 h-24 rounded-full border-4"
                                  style={{ borderColor: "#f9be00" }}
                                />
                              </figure>
                              <div className="card-body py-4">
                                <h2
                                  className="card-title text-2xl"
                                  style={{ color: "#f9be00" }}
                                >
                                  {doctor.fullName}
                                </h2>
                                <p
                                  className="text-lg mb-2"
                                  style={{ color: "#1cb289" }}
                                >
                                  {doctor.specialty}
                                </p>
                                <div className="card-actions justify-end">
                                  <Link href={`/allDoctor/${doctor?._id}`}>
                                    <button
                                      className="btn font-bold tracking-wide"
                                      style={{
                                        backgroundColor: "#1d7261",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "0.5rem",
                                        padding: "0.5rem 2rem",
                                        transition: "all 0.3s ease",
                                      }}
                                      onMouseOver={(e) =>
                                        (e.target.style.backgroundColor =
                                          "#1cb289")
                                      }
                                      onMouseOut={(e) =>
                                        (e.target.style.backgroundColor =
                                          "#1d7261")
                                      }
                                    >
                                      Book Appointment
                                    </button>
                                  </Link>
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
