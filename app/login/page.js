"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/custom-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
  localStorage.setItem("user", JSON.stringify(data.user));
  toast.success("Login successful!");
  setTimeout(() => {
    window.location.href = "/dashboard";
  }, 1500);
} else {
  toast.error("Login failed");
}
  };

  return (
    <div className="min-h-screen bg-[#c18f85] text-[#3f2a25] pt-20">
      <h1 className="text-center text-2xl font-bold underline py-3">Login</h1>
      <div className="justify-center items-center flex flex-col gap-3 p-3">
      <input className="py-1.5 px-6" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="py-1.5 px-6" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      
      <button className="cursor-pointer text-white font-semibold bg-[#3f2a25] hover:bg-[#c18f85]  py-2 px-4 rounded w-fit " onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}