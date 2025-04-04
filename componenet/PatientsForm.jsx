"use client";
import { imageUploadToImgbb } from "@/app/utils/uploadImage";

export default function PatientsForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const photo = form.profilePhoto.files[0];
    const profilePhoto = await imageUploadToImgbb(photo);
    const phone = form.phone.value;
    const email = form.email.value;
    const address = form.address.value;
    const emergencyContact = form.emergencyContact.value;
    const emergencyPhone = form.emergencyPhone.value;
    const symptoms = form.symptoms.value;
    const currentMedications = form.currentMedications.value;
    const medicalHistory = form.medicalHistory.value;
    const allergies = form.allergies.value;

    const patientFormData = {
      name,
      age,
      gender,
      profilePhoto,
      phone,
      email,
      address,
      emergencyContact,
      emergencyPhone,
      symptoms,
      currentMedications,
      medicalHistory,
      allergies,
      role: "patient", // Automatically assign role
    };

    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientFormData),
      });

      const data = await response.json(); // moved here

      if (response.ok) {
        console.log(data);
        alert("Data saved successfully");
        form.reset();
      } else {
        alert(data.message || "Error saving data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data");
    }
  };

  const inputStyle =
    "w-full p-3 border border-indigo-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-black bg-white placeholder-gray-400";
  const labelStyle = "block text-sm font-medium text-indigo-900 mb-1";

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg my-8">
      <div className="bg-[#033137] py-6 rounded-t-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Patients Admission Form
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
            </svg>
            Personal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Name</label>
              <input type="text" name="name" className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Age</label>
              <input type="number" name="age" className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Gender</label>
              <select name="gender" className={inputStyle} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>Upload Professional Photo</label>
              <div className="">
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  className={inputStyle}
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                A professional headshot (JPEG or PNG, max 5MB)
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Phone Number</label>
              <input type="tel" name="phone" className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                className={inputStyle}
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className={labelStyle}>Address</label>
            <textarea
              name="address"
              className={`${inputStyle} h-24`}
              required
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path>
            </svg>
            Emergency Contact
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContact"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Emergency Contact Phone</label>
              <input
                type="tel"
                name="emergencyPhone"
                className={inputStyle}
                required
              />
            </div>
          </div>
        </div>

        {/* Medical Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            Medical Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className={labelStyle}>Current Symptoms</label>
              <textarea
                name="symptoms"
                className={`${inputStyle} h-24`}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Medical History</label>
              <textarea
                name="medicalHistory"
                className={`${inputStyle} h-24`}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Current Medications</label>
              <textarea
                name="currentMedications"
                className={`${inputStyle} h-24`}
              />
            </div>
            <div>
              <label className={labelStyle}>Allergies</label>
              <textarea name="allergies" className={`${inputStyle} h-24`} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-4 px-6 rounded-lg 
                   hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                   shadow-lg transform hover:scale-[1.01] font-semibold text-lg"
        >
          Submit Admission Form
        </button>
      </form>
    </div>
  );
}
