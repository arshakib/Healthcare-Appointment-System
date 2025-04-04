"use server";
import dbConnect, { collectionNameObj } from '@/app/lib/dbConnect';
import bcrypt from 'bcrypt';

export const registerUser = async (payload) => {
    // console.log(payload)
    const userCollection = dbConnect(collectionNameObj.userCollection)
    
    // validation
    const {email, password} = payload;
    if(!email || !password) return null;

    const user = await userCollection.findOne({email: payload.email});
    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
        const result = await userCollection.insertOne(payload);
        
        const {acknowledged, insertedId} = result;
        return {acknowledged, insertedId}
        // result.insertedId = result.insertedId.toString();
        // return result;
    }
    
    return null;
};