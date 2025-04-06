import { connectToDatabase } from "@/app/lib/db";
import Doctor from "@/models/doctor";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const Data = body;
    // console.log(Data);

    const DoctorData = await Doctor.create({
      fullName: Data.fullName,
      age: Data.age,
      email: Data.email,
      phone: Data.phone,
      gender: Data.gender,
      address: Data.address,
      area: Data.area,
      bio: Data.bio,
      licenseNumber: Data.licenseNumber,
      yearsOfExperience: Data.yearsOfExperience,
      medicalDegree: Data.medicalDegree,
      specialty: Data.specialty,
      currentHospital: Data.currentHospital,
      hospitalAffiliation: Data.hospitalAffiliation,
      patientPerDay: Data.patientPerDay,
      startingHours: Data.startingHours,
      endingHours: Data.endingHours,
      profilePhoto: Data.profilePhoto,
      selectedDays: Data.selectedDays,
    });

    // console.log(DoctorData);

    // Update the user's role to 'doctor'
    const updatedUser = await User.findOneAndUpdate(
      { email: body.email },
      { role: "doctor" },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Doctor data saved and user role updated successfully",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}

// all doctor data get from mongodb database

export async function GET() {
  try {
    await connectToDatabase();
    const allDoctorData = await Doctor.find().lean();

    return NextResponse.json(allDoctorData, { status: 200 });
  } catch (err) {
    console.log("Data loading failed", err);
    return NextResponse.json(err, { status: 500 });
  }
}
