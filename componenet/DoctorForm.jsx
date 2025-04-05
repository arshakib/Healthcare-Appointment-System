"use client";

import { imageUploadToImgbb } from "@/app/utils/uploadImage";
import { useSession } from "next-auth/react";
import { useState } from "react";

const DoctorForm = () => {
  const { data: session } = useSession();
  console.log("session data", session?.user?.email, session?.user);
  const LoginUserEmail = session?.user?.email;
  const [selectedDays, setSelectedDays] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDays([...selectedDays, value]);
    } else {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value;
    const age = form.age.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const address = form.address.value;
    const bio = form.bio.value;
    const licenseNumber = form.licenseNumber.value;
    const yearsOfExperience = form.yearsOfExperience.value;
    const medicalDegree = form.medicalDegree.value;
    const specialty = form.specialty.value;
    const currentHospital = form.currentHospital.value;
    const hospitalAffiliation = form.hospitalAffiliation.value;
    const patientPerDay = form.patientPerDay.value;
    const startingHours = parseInt(form.startingHours.value, 10);
    const endingHours = parseInt(form.endingHours.value, 10);
    const profilePhoto = session?.user?.image || "";

    // doctor form data collect
    const doctorFormData = {
      fullName,
      age,
      email,
      phone,
      gender,
      address,
      bio,
      licenseNumber,
      yearsOfExperience,
      medicalDegree,
      specialty,
      currentHospital,
      hospitalAffiliation,
      patientPerDay,
      startingHours,
      endingHours,
      profilePhoto,
      selectedDays,
    };

    try {
      const response = await fetch("/api/doctordata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorFormData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error saving data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }

    console.log(doctorFormData);
  };

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "General Practice",
    "Oncology",
    "Psychiatry",
    "Allergy and Immunology",
    "Anesthesiology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Infectious Disease",
    "Nephrology",
    "Obstetrics and Gynecology (OB/GYN)",
    "Ophthalmology",
    "Otolaryngology (ENT - Ear, Nose, and Throat)",
    "Pathology",
    "Plastic Surgery",
    "Pulmonology (Lung Specialist)",
    "Radiology",
    "Rheumatology",
    "Sports Medicine",
    "Urology",
    "Geriatrics (Elderly Care)",
    "Emergency Medicine",
    "Pain Management",
    "Sleep Medicine",
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className=" px-4 sm:px-6 lg:px-8 pt-10">
      <div className="max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden">
        <div className="bg-[#033137] py-4 px-6">
          <h2 className="text-2xl font-bold text-white">
            Doctor Registration Request
          </h2>
          <p className="text-blue-100">Join our healthcare network</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 text-black">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* full name field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  value={session?.user?.name || ""}
                  readOnly
                  name="fullName"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Dr. John Doe"
                />
              </div>

              {/* age field */}
              <div>
                <label
                  htmlFor="number"
                  className="block font-medium text-gray-700"
                >
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="35"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={session?.user?.email || ""}
                  readOnly
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="doctor@example.com"
                />
              </div>

              {/* phone number field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+8801XXXXXXXXX"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* gender filed */}
              <div>
                <label
                  htmlFor="gender"
                  className="block font-medium text-gray-700"
                >
                  Gender *
                </label>
                <select
                  name="gender"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* address field */}
              <div>
                <label
                  htmlFor="Address"
                  className="block font-medium text-gray-700"
                >
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Medical Street, Dhaka"
                />
              </div>
            </div>

            {/* textarea field */}
            <div>
              <label htmlFor="bio" className="block font-medium text-gray-700">
                Professional Bio *
              </label>
              <textarea
                name="bio"
                rows={3}
                required
                className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Briefly describe your professional background and approach to patient care"
              />
            </div>
          </div>

          {/* Professional Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Professional Information
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* medical license field */}
              <div>
                <label
                  htmlFor="licenseNumber"
                  className="block font-medium text-gray-700"
                >
                  Medical License Number *
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="BMDC-12345"
                />
              </div>

              {/* experience field */}
              <div>
                <label
                  htmlFor="yearsOfExperience"
                  className="block font-medium text-gray-700"
                >
                  Years of Experience *
                </label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  min="0"
                  max="50"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* medical degree field */}
              <div>
                <label
                  htmlFor="medicalDegree"
                  className="block font-medium text-gray-700"
                >
                  Medical Degree *
                </label>
                <select
                  name="medicalDegree"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select degree</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD">MD</option>
                  <option value="MS">MS</option>
                  <option value="FCPS">FCPS</option>
                  <option value="FRCS">FRCS</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* specialty field */}
              <div>
                <label
                  htmlFor="specialty"
                  className="block font-medium text-gray-700"
                >
                  Specialty *
                </label>
                <select
                  name="specialty"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select specialty</option>
                  {specialties.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* current workplace */}
              <div>
                <label
                  htmlFor="currentHospital"
                  className="block font-medium text-gray-700"
                >
                  Current Workplace *
                </label>
                <input
                  type="text"
                  name="currentHospital"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Dhaka Medical College Hospital"
                />
              </div>

              {/* affiliation field */}
              <div>
                <label
                  htmlFor="hospitalAffiliation"
                  className="block  font-medium text-gray-700"
                >
                  Additional Affiliations
                </label>
                <input
                  type="text"
                  name="hospitalAffiliation"
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Square Hospital, Apollo Clinic"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* patient per day field */}
              <div>
                <label
                  htmlFor="patientPerDay"
                  className="block font-medium text-gray-700"
                >
                  Patients Per Day *
                </label>
                <input
                  type="number"
                  name="patientPerDay"
                  min="1"
                  max="100"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="30"
                />
              </div>

              {/* hours field */}
              <div>
                <label
                  htmlFor="consultationHours"
                  className="block  font-medium text-gray-700"
                >
                  Consultation Starting Hours * [Type international format like
                  9 or 15 ]
                </label>
                <input
                  type="text"
                  name="startingHours"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="9"
                />
                <label
                  htmlFor="consultationHours"
                  className="block  font-medium text-gray-700"
                >
                  Consultation Ending Hours * [Type international format like 9
                  or 15 ]
                </label>
                <input
                  type="text"
                  name="endingHours"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="15"
                />
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Availability
            </h3>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Available Days *
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {daysOfWeek.map((day) => (
                  <div key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      value={day}
                      checked={selectedDays.includes(day)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`day-${day}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {day}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Photo */}

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md  text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;
