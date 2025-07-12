import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function PATCH(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, newUsername, newPassword } = body;

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    if (newUsername) user.username = newUsername;
    if (newPassword) user.password = await bcrypt.hash(newPassword, 10);

    await user.save();

    return Response.json({
      success: true,
      user: {
        email: user.email,
        username: user.username,
        preferredLanguage: String, 
preferredGenre: String  
      }
    });
  } catch (err) {
    console.error("Profile Update Error:", err);
    return Response.json({
      error: "Server error",
      detail: err.message
    }, { status: 500 });
  }
}
