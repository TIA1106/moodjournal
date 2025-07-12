import { connectDB } from "@/lib/db";
import Journal from "@/models/journal";

export async function POST(req) {
  try {
    await connectDB();
    const { mood, journal, song, userEmail } = await req.json();

    const entry = await Journal.create({
  userEmail,
  mood,
  journal,
  song,
  date: new Date()
});

    return Response.json({ success: true, entry });
  } catch (err) {
    return Response.json({ error: "Server error", detail: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const entries = await Entry.find({ userEmail: email }).sort({ date: -1 });

    return Response.json({ success: true, entries });
  } catch (err) {
    return Response.json({ error: "Server error", detail: err.message }, { status: 500 });
  }
}
