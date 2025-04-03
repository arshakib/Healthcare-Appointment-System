import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    selectedDate: {
      type: String,
      required: true,
    },
    selectedTime: { type: String, required: true },
  },
  { timestamps: true }
);

const Appointment =
  mongoose.models.appointments ||
  mongoose.model("appointments", appointmentSchema);

export default Appointment;
