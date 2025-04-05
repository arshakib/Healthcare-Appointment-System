import { connectToDatabase } from "@/app/lib/db";
import Patient from "@/models/patient";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    console.log(body);
    const patientData = await Patient.create({
      name: body.name,
      age: body.age,
      gender: body.gender,
      profilePhoto: body.profilePhoto,
      phone: body.phone,
      email: body.email,
      address: body.address,
      emergencyContact: body.emergencyContact,
      emergencyPhone: body.emergencyPhone,
      symptoms: body.symptoms,
      currentMedications: body.currentMedications,
      medicalHistory: body.medicalHistory,
      allergies: body.allergies,
      role: body.role,
    });
    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}


export async function GET(req) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    // Check if email is provided
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Fetch patient data by email
    const patientData = await Patient.findOne({ email });

    if (!patientData) {
      return NextResponse.json({ message: "Patient not found" }, { status: 404 });
    }

    return NextResponse.json(patientData, { status: 200 });
  } catch (err) {
    console.log("Data loading failed", err);
    return NextResponse.json(err, { status: 500 });
  }
}
