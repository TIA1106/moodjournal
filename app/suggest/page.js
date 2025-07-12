"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const songOptions = {
  happy: [
    "Ilahi – Arijit Singh",
    "On Top of the World – Imagine Dragons",
    "Zinda – Siddharth Mahadevan",
    "Happy – Pharrell Williams",
    "Aaj Kal Zindagi – Rahat Fateh Ali Khan"
  ],
  sad: [
    "Tujhe Bhula Diya – Mohit Chauhan",
    "Channa Mereya – Arijit Singh",
    "Fix You – Coldplay",
    "Let Her Go – Passenger",
    "Binte Dil – Arijit Singh"
  ],
  lofi: [
    "Lofi Hindi Vibes – YouTube",
    "Lofi Chill Beats – Spotify",
    "Rainy Lofi – Chillhop",
    "Midnight Jazzhop – YouTube",
    "Focus Flow – Apple Music"
  ],
  romantic: [
    "Tum Hi Ho – Arijit Singh",
    "Perfect – Ed Sheeran",
    "Shayad – Arijit Singh",
    "Raabta – Arijit Singh",
    "Love Me Like You Do – Ellie Goulding"
  ],
  chill: [
    "Cold/Mess – Prateek Kuhad",
    "Ocean Eyes – Billie Eilish",
    "Sunset Lover – Petit Biscuit",
    "Coffee – Beabadoobee",
    "Jeene Mein Aaye Maza – Andhadhun"
  ],
  hindi: [
    "Kun Faya Kun – AR Rahman",
    "Tera Yaar Hoon Main – Arijit Singh",
    "Agar Tum Saath Ho – Alka Yagnik",
    "Galliyan – Ankit Tiwari",
    "Dil Diyan Gallan – Atif Aslam"
  ],
  english: [
    "Someone Like You – Adele",
    "Let Me Down Slowly – Alec Benjamin",
    "Shivers – Ed Sheeran",
    "Blinding Lights – The Weeknd",
    "Photograph – Ed Sheeran"
  ]
};

export default function SuggestPage() {
  const [email, setEmail] = useState("");
  const [vibe, setVibe] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      setEmail(parsed.email);
    }
  }, []);

  const handleSuggest = () => {
    if (!vibe) return toast.error("Please select a category");
    const picked = songOptions[vibe] || [];
    setSongs(picked);
    toast.success("Suggestions ready!");
  };

  return (
    <div className="pt-20 min-h-screen bg-[#c18f85] text-[#3f2a25] rounded-xl">
      <div className="max-w-md mx-auto ">
      <h1 className="text-2xl font-bold py-3">Get Songs by Mood or Genre</h1>

      <select
        value={vibe}
        onChange={(e) => setVibe(e.target.value)}
        className="w-full border bg-[#604038] border-gray-900 p-2 rounded-xl text-white"
      >
        <option value="">Select a category</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="lofi">Lofi</option>
        <option value="romantic">Romantic</option>
        <option value="chill">Chill</option>
        <option value="hindi">Hindi</option>
        <option value="english">English</option>
      </select>

      <button
        onClick={handleSuggest}
        className="cursor-pointer my-3 text-white justify-center text-center font-semibold bg-[#3f2a25] hover:bg-[#c18f85]  py-2 px-4 rounded"
      >
        Suggest Songs
      </button>

      {songs.length > 0 && (
        <ul className="mt-4 space-y-2">
          {songs.map((song, idx) => (
            <li
              key={idx}
              className=" px-4 py-2 rounded-xl bg-[#c18f85] text-[#3f2a25]">
              🎵 {song}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}