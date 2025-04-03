
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    providerAccountId: { type: String, unique: false },
    provider: { type: String },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    image: { type: String },
    password: { type: String },
}, { timestamps: true });

const User = models.User || mongoose.model("User", userSchema);

export default User;
