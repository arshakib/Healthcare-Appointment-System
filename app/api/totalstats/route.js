import { connectToDatabase } from "@/app/lib/db";
import Appointment from "@/models/appionment";
import Doctor from "@/models/doctor";
import Patient from "@/models/patient";
import { NextResponse } from "next/server";


// API route to get total stats (patients, doctors, appointments)
export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Get total number of patients
    const totalPatients = await Patient.estimatedDocumentCount();

    // Get total number of doctors
    const totalDoctors = await Doctor.estimatedDocumentCount();

    // Get total number of appointments
    const totalAppointments = await Appointment.estimatedDocumentCount();

    const today = new Date().toISOString().split('T')[0];
    
    const todayAppointments = await Appointment.find({ selectedDate: today }).lean();

    // Return the statistics as JSON
    return NextResponse.json({
      totalPatients,
      totalDoctors,
      totalAppointments,
      todayAppointments,
    });
  } catch (error) {
    console.error("Error fetching total stats:", error);
    console.error(error.stack);
    return NextResponse.json({ message: "Error fetching total stats" }, { status: 500 });
  }
}
