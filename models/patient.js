import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    profilePhoto: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    address: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    emergencyPhone: {
      type: String,
      required: true,
    },
    symptoms: {
      type: String,
      required: true,
    },
    currentMedications: {
      type: String,
      default: "",
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    allergies: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["patient"],
      default: "patient",
    },
  },
  {
    timestamps: true,
  }
);

const Patient =
  mongoose.model.patients || mongoose.model("patients", patientSchema);

export default Patient;
