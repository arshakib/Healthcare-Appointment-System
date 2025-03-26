"use client";

const DoctorForm = () => {
  // const doctorSchema = new mongoose.Schema({
  //     fullName: { type: String, required: true },
  //     age: { type: Number, required: true },
  //     email: { type: String, required: true, unique: true },
  //     phone: { type: String, required: true },
  //     gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  //     address: { type: String, required: true },
  //     bio: { type: String, required: true },
  //     licenseNumber: { type: String, required: true, unique: true },
  //     yearsOfExperience: { type: Number, required: true, min: 0 },
  //     medicalDegree: { type: String, required: true },
  //     specialty: { type: String, required: true },
  //     currentHospital: { type: String, required: true },
  //     hospitalAffiliation: { type: String },
  //     patientPerDay: { type: Number, required: true, min: 1 },
  //     consultationHours: { type: String, required: true },
  //     availableDays: { type: [String], required: true },
  //     profilePhoto: { type: String },
  // }, { timestamps: true });

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "General Practice",
    "Oncology",
    "Psychiatry",
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

        <form className="p-6 space-y-6 text-black">
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
                  name="number"
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
                  name="Address"
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
                  Consultation Hours *
                </label>
                <input
                  type="text"
                  name="consultationHours"
                  required
                  className="mt-1 text-sm block w-full border border-gray-300 rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="9:00 AM - 5:00 PM"
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
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">
              Profile Photo
            </h3>

            <div>
              <label className="block font-medium text-gray-700">
                Upload Professional Photo
              </label>
              <div className="mt-1 flex items-center">
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  className="py-2 px-3 border border-gray-300 rounded-md text-sm cursor-pointer"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                A professional headshot (JPEG or PNG, max 5MB)
              </p>
            </div>
          </div>

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
