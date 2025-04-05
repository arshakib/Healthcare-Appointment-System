
import { connectToDatabase } from "@/app/lib/db";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    // Check if email is provided
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Fetch doctor data by email
    const doctorData = await Doctor.findOne({ email }).lean();

    if (!doctorData) {
      return NextResponse.json({ message: "Doctor not found" }, { status: 404 });
    }

    return NextResponse.json(doctorData, { status: 200 });
  } catch (err) {
    console.log("Data loading failed", err);
    return NextResponse.json(err, { status: 500 });
  }
}
