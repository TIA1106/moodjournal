"use client";
import Link from "next/link";
import React from "react";

const Navbar=()=>{
  return (
    
    <nav className="bg-[#3f2a25] flex items-center w-full p-4 fixed justify-between ">
            <div><Link href="/"><button className='font-extrabold text-2xl cursor-pointer text-[#c3a17b]'>☕MoodMod</button></Link></div>
            <div>
            <ul className='flex gap-8 items-center'>
                    <li><Link href="/login"><button className=' cursor-pointer text-[#c3a17b] hover:bg-[#ad776d] bg-[#3f2a25] font-semibold px-4 py-2 rounded'>🔐 Login</button></Link></li>
                    <li><Link href="/signup"><button  className="cursor-pointer text-[#c3a17b] hover:bg-[#ad776d] bg-[#3f2a25] px-4 py-2 rounded font-semibold">✍️ Signup</button></Link></li>
                    <li><Link href="/journal"><button className='cursor-pointer text-[#c3a17b] font-semibold bg-[#3f2a25] hover:bg-[#ad776d]  py-2 px-4 rounded'>📝 Journal</button></Link></li>
                    <li><Link href="/dashboard"><button className='cursor-pointer text-[#c3a17b] font-semibold bg-[#3f2a25]  hover:bg-[#ad776d] py-2 px-4 rounded'>📊 Dashboard</button></Link></li>
                    <li><Link href="/suggest"><button className='cursor-pointer text-[#c3a17b] font-semibold bg-[#3f2a25] hover:bg-[#ad776d]  py-2 px-4 rounded'>🎶 Suggest</button></Link></li>
                    <li><Link href="/about"><button className='cursor-pointer text-[#c3a17b] font-semibold bg-[#3f2a25] hover:bg-[#ad776d]  py-2 px-4 rounded'>ℹ️ About Us</button></Link></li>
                    <li><Link href="/mood"><button className='cursor-pointer text-[#c3a17b] font-semibold bg-[#3f2a25] hover:bg-[#ad776d]  py-2 px-4 rounded'>🧠 Talk to AI Therapist</button></Link></li>
                    <li><Link href="/"><button
              onClick={() => {
                localStorage.removeItem('user');
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer font-semibold"
            >
              🚪Logout
            </button></Link></li>
                    </ul>
                    </div>
    
        </nav>
  );
}
export default Navbar