export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#c18f85] text-[#3f2a25] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-4">☕ About MoodMod</h1>
      <p className="text-xl max-w-2xl text-center">
        <span className="font-semibold">MoodMod</span> is your personal space to reflect, express, and feel better —
        all in one cozy app. Whether you’re having a gloomy day or vibing high,
        you can write a quick journal, track your mood, and even get real song
        recommendations that match how you feel. 🎵💭
      </p>

      <div className="text-center text-xl max-w-xl p-8">
        Built with 💻 Next.js, Tailwind CSS, and MongoDB — designed with a warm
        aesthetic to help you feel at home. Your thoughts are yours, and your
        vibe matters.😉
      </div>
    </div>
  );
}
