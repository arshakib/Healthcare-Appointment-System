import { connectToDatabase } from "@/app/lib/db";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";

// single doctor data
export async function GET(request, { params }) {
  try {
    await connectToDatabase();

    const { id } = await params;

    const doctor = await Doctor.findById(id).lean();

    if (!doctor) {
      return NextResponse.json(
        { message: "Doctor not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(doctor, { status: 200 });
  } catch (err) {
    console.error("Error fetching doctor data:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
