"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      fetchSummary(parsed.email);
    }
  }, []);

  const fetchSummary = async (email) => {
    const res = await fetch(`/api/summary?email=${email}`);
    const result = await res.json();
    if (result.success) {
      setData(result.summary);
      toast.success("Mood summary loaded");
    } else {
      toast.error("Could not load summary");
    }
  };

  return (
    <div className="min-h-screen bg-[#c18f85] pt-20">
      <div className="text-center max-w-4xl mx-auto py-3">
        <h1 className="text-3xl font-bold text-[#3f2a25]">Your Dashboard 📊</h1>
        <p className="text-[#3f2a25] py-3 font-semibold">See a summary of your recent moods</p>
      </div>

      <div className="rounded-2xl bg-[#c18f85] hover:bg-[#c18f85] p-4 max-w-4xl mx-auto ">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mood" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#3f2a25" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-300 font-semibold">No entries found. Start journaling!</p>
        )}
      </div>
    </div>
  );
}