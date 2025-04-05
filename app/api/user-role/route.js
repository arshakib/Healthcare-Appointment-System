import { connectToDatabase } from "@/app/lib/db";
import User from "@/models/user";

// GET method with query parameter
export async function GET(req) {
    try {
      await connectToDatabase();
  
      const { searchParams } = new URL(req.url);
      const email = searchParams.get("email");
  
      if (!email) {
        return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
      }
  
      const user = await User.findOne({ email }).select("role");
      
      if (!user) {
        return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
      }
  
      return new Response(JSON.stringify({ role: user.role }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Error", error }), { status: 500 });
    }
  }
