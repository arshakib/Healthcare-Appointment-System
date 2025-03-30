import { connectToDatabase } from "@/app/lib/db";
import Doctor from "@/models/doctor";
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
      bio: Data.bio,
      licenseNumber: Data.licenseNumber,
      yearsOfExperience: Data.yearsOfExperience,
      medicalDegree: Data.medicalDegree,
      specialty: Data.specialty,
      currentHospital: Data.currentHospital,
      hospitalAffiliation: Data.hospitalAffiliation,
      patientPerDay: Data.patientPerDay,
      consultationHours: Data.consultationHours,
      profilePhoto: Data.profilePhoto,
      selectedDays: Data.selectedDays,
    });
    // console.log(DoctorData);

    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}
