import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    address: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    licenseNumber: {
      type: String,
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    medicalDegree: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    currentHospital: {
      type: String,
      required: true,
    },
    hospitalAffiliation: {
      type: String,
    },
    patientPerDay: {
      type: Number,
      required: true,
    },
    startingHours: {
      type: Number,
      required: true,
    },
    endingHours: {
      type: Number,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    selectedDays: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Doctor =
  mongoose.models.doctors || mongoose?.model("doctors", doctorSchema);

export default Doctor;
