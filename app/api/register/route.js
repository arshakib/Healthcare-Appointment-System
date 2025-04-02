
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { connectToDatabase } from "@/app/lib/db";
import User from "@/models/user";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
