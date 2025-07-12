import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return Response.json({
      success: true,
      user: {
        username: user.username,
        email: user.email,
        preferredLanguage: String,
preferredGenre: String  
      },
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return Response.json({ error: "Server error", detail: err.message }, { status: 500 });
  }
}
