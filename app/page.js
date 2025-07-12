'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (userId) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#c18f85]">
      <section className="grid grid-cols-2 h-dvh">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl font-extrabold text-center ">😉Cheers from MoodMod😉</h1>
          <p className="font-bold text-2xl text-center">
            MoodMod is a calming journal and mood tracker that suggests music to match your vibe. 🎶✨
          </p>
          <div className="gap-4 flex text-white">
            <button
              onClick={() => router.push('/signup')}
              className="cursor-pointer text-white hover:bg-[#c18f85] bg-[#3f2a25] px-4 py-2 rounded font-semibold"
            >
              Signup
            </button>
            <button
              onClick={() => router.push('/login')}
              className="cursor-pointer text-white hover:bg-[#c18f85] bg-[#3f2a25] px-4 py-2 rounded font-semibold"
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-start">
          <Image className="mix-blend-normal" alt="image" src="/wok.png" width={900} height={400} />
        </div>

      </section>
    </main>
  );
}
