import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    selectedDate: {
      type: String,
      required: true,
    },
    selectedTime: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    patientEmail: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    doctorName: {
      type: String,
      required: true,
    },
    doctorEmail: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment =
  mongoose.models.appointments ||
  mongoose.model("appointments", appointmentSchema);

export default Appointment;
