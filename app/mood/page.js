'use client';
import { useState } from 'react';

export default function MoodTherapyPage() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!input) return;
    setLoading(true);

    const res = await fetch('/api/therapist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#c18f85] pt-20 p-6 text-center items-center flex flex-col">
      <h1 className="text-3xl font-bold p-3">How are you feeling today?</h1>
      <textarea
        rows={6}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type how you're feeling..."
        className="w-full max-w-2xl p-4 rounded border mx-auto my-3"
      />
      <button
        onClick={handleChat}
        disabled={loading}
        className="px-6 py-3 rounded text-[#c18f85] bg-[#3f2a25]"
      >
        {loading ? 'Thinking...' : 'Talk to Therapist'}
      </button>

      {reply && (
        <div className="max-w-2xl my-3 mx-auto bg-[#3f2a25] text-[#c18f85] p-4 rounded text-left">
          <p><strong>AI Therapist:</strong> {reply}</p>
        </div>
      )}
    </div>
  );
}
