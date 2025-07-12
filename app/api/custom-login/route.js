import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    return Response.json({ success: true, user: { email: user.email, username: user.username } });
  } catch (err) {
    console.error("Login Error:", err);
    return Response.json({ error: "Server error", detail: err.message }, { status: 500 });
  }
}
