// import connectToDatabase from "@/app/lib/db";
// import user from "@/models/user";
// import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

// import mongoose from "mongoose";
import { connectToDatabase } from "@/app/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        connectToDatabase();
        const {name,email,password} = await request.json();
        const userExistence = await User.findOne({email});
        if(userExistence){
            return NextResponse.json({error: 'user already exist'})
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name,email,password: hashPassword});
        await newUser.save();
        return NextResponse.json({massage: 'User Registered'},{status: 201});
    } catch (error) {
        return NextResponse.json({message: 'something is wrong'},{status: 500})
    }
}

// export async function POST(request){
//     const payload = await request.json();
//     await mongoose.connect(connectToDatabase);
//     const hashedPassword = await bcrypt.hash(payload.password, 10);
//     const user = new User({ ...payload, password: hashedPassword });
//     // let user = new User(payload);
//     const result = await user.save();
//     return NextResponse.json({result, success: true});
// }

// export async function GET(){

//     let data = [];
//     try {
//         await mongoose.connect(connectionSrt)
//         data = await User.find();
//     } catch (error) {
//         console.log(error.massage)
//     }

//     return NextResponse.json({result: data})
// }