import { connectToDatabase } from "@/app/lib/db";
import User from "@/models/user";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        await connectToDatabase();
        const {email,password} = await request.json();
        console.log({email,password})
        const userExistence = await User.findOne({email});
        if(!userExistence){
            return NextResponse.json({error: 'user not existing'})
        }
        const checkPassword = await bcrypt.compare(password, userExistence.password);
        
        if(!checkPassword){
            return NextResponse.json({error: 'wrong password'},{status: 401});
        }
        return NextResponse.json({message: 'success'},{status: 201});

    } catch (error) {
        return NextResponse.json({error, status: 500})
    }
}