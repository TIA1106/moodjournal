"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lang, setLang] = useState("hindi");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/custom-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          username: email.split("@")[0],
          preferredLanguage: lang,
        }),
      });

      const data = await res.json();
      console.log("Signup response:", data);

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Signup successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } else {
        toast.error(data.error || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#c18f85] text-[#3f2a25]">
      <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold p-3 text-center">Signup</h1>
      <input
        className="w-full border p-2 rounded my-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="w-full border p-2 rounded my-3"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <select
        className="w-full border my-3 bg-[#604038] text-white p-2 rounded"
        onChange={(e) => setLang(e.target.value)}
        value={lang}
      >
        <option value="hindi">Hindi</option>
        <option value="english">English</option>
      </select>
      <button
        onClick={handleSubmit}
        className="cursor-pointer my-3 text-white justify-center text-center font-semibold bg-[#3f2a25] hover:bg-[#c18f85]  py-2 px-4 rounded"
      >
        Sign Up
      </button>
      </div>
    </div>
  );
}
