import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    address: { type: String, required: true },
    bio: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    yearsOfExperience: { type: Number, required: true, min: 0 },
    medicalDegree: { type: String, required: true },
    specialty: { type: String, required: true },
    currentHospital: { type: String, required: true },
    hospitalAffiliation: { type: String },
    patientPerDay: { type: Number, required: true, min: 1 },
    consultationHours: { type: String, required: true },
    selectedDays: {
      type: [String],
      required: true,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    profilePhoto: { type: String },
  },
  { timestamps: true }
);

const Doctor =
  mongoose.models.doctors || mongoose.model("doctors", doctorSchema);

export default Doctor;
