import { connectToDatabase } from "@/app/lib/db";
import Appointment from "@/models/appionment";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    connectToDatabase();
    const body = await req.json();
    console.log(body);
    // Validate the incoming data
    if (!body.selectedDate || !body.selectedTime) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }
    // Check if the date and time already exists in the database
    // const existingAppointment = await Appointment.find({
    //   selectedDate: body.selectedDate,
    //   selectedTime: body.selectedTime,
    // });
    // if (existingAppointment.length > 0) {
    //   return NextResponse.json(
    //     { message: "This appointment slot is already booked" },
    //     { status: 400 }
    //   );
    // }
    // Create a new appointment
    const appointmentData = await Appointment.create({
      selectedDate: body.selectedDate,
      selectedTime: body.selectedTime,
      patientName: body.patientName,
      patientEmail: body.patientEmail,
      doctorName: body.doctorName,
      doctorEmail: body.doctorEmail,
    });
    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectToDatabase();
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const patientEmail = searchParams.get("patientEmail");
    const doctorEmail = searchParams.get("doctorEmail");

    // Build the filter object dynamically
    let filter = {};
    if (patientEmail) filter.patientEmail = patientEmail;
    if (doctorEmail) filter.doctorEmail = doctorEmail;

    // Fetch appointments based on filter
    const appointments = await Appointment.find(filter).lean();
    return NextResponse.json(appointments, { status: 200 });
  } catch (err) {
    console.log("Data loading failed", err);
    return NextResponse.json(err, { status: 500 });
  }
}
