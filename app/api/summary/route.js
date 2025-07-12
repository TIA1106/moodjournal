import { connectDB } from "@/lib/db";
import Journal from "@/models/journal";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    const entries = await Journal.find({ userEmail: email });
    const moodCounts = entries.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {});

    const summary = Object.entries(moodCounts).map(([mood, count]) => ({
      mood,
      count,
    }));

    return Response.json({ success: true, summary });
  } catch (err) {
    return Response.json({ success: false, error: "Failed to load summary." });
  }
}