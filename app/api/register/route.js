
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { connectToDatabase } from "@/app/lib/db";
import User from "@/models/user";

export async function POST(request) {
    try {
        const body =  await request.json();
        console.log('body',body)
        const { name, email, role, password } = body;
        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, role, password: hashedPassword });
console.log('new user',newUser)
        await newUser.save();

        return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });
    } catch (error) {
        console.error("🔥 Registration Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
