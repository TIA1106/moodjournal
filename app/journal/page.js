"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function JournalPage() {
  const [mood, setMood] = useState("");
  const [journal, setJournal] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      setEmail(parsed.email);
    }
  }, []);

  const handleSubmit = async () => {
    if (!mood || !journal) {
      toast.error("Mood and Journal are required.");
      return;
    }

    const res = await fetch("/api/entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood, journal, userEmail: email }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Journal saved!");
      setMood("");
      setJournal("");
    } else {
      toast.error(data.error || "Failed to save journal.");
    }
  };

  return (
    <div className="pt-20 rounded-xl min-h-screen bg-[#c18f85]">
      <div className="max-w-md mx-auto">
      <h1 className="text-xl py-3 font-bold text-[#3f2a25]">📝New Journal Entry</h1>

      <input
        className="w-full border border-gray-900 rounded my-3 p-2"
        placeholder="Mood (e.g. happy, sad, lofi)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />

      <textarea
        className="w-full border border-gray-900 rounded my-3"
        placeholder="What's on your mind today?"
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="cursor-pointer text-white font-semibold bg-[#3f2a25] hover:bg-[#c18f85]  py-2 px-4 rounded w-fit"
      >
        Save Entry
      </button>
      </div>
    </div>
  );
}
