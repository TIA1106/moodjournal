
---

## 🌙 2. MoodJournal – Mental Health Tracker + AI Therapist

```md
# 🌙 MoodJournal – Track Your Mood, Talk to AI

MoodJournal is a full-stack mental wellness tracker built with empathy and simplicity. Users can log their mood daily, write reflections, get music recommendations, and even chat with an AI therapist.

This app was built during a personal 15-day AI sprint to combine LLMs, MongoDB, and frontend storytelling in a single meaningful product.

---

## 🚀 Features

- 💬 Record your mood and a journal entry
- 📈 Dashboard with dynamic mood graphs (per week/month)
- 🎵 Smart suggestions: music based on mood
- 🧠 AI Therapist chatbot for emotional support
- 🔐 Login/signup with sessions
- 📦 MongoDB-backed data storage

---

## 🧠 Tech Stack

| Layer       | Tech                           |
|-------------|--------------------------------|
| Frontend    | Next.js 14, Tailwind CSS       |
| Backend     | MongoDB (Mongoose)             |
| AI Layer    | LangChain + OpenAI             |

---

## ⚠️ Known Limitation: API Key Issues

This project uses OpenRouter API (free tier). Sometimes you may experience:

- `401 No Auth Credentials` errors
- AI features not working
- Random failures after pushing to GitHub

### 🔑 Why This Happens
- Free API keys can **expire**, be **revoked**, or hit **rate limits**
- `.env.local` is required and must have a working key
- The project does NOT ship with a production-grade API key

### ✅ How to Fix It
1. Create `.env.local` file in root
2. Add your own valid OpenRouter API key:
```env
OPENROUTER_API_KEY=your_key_here
3.
Restart your dev server

⚠️ Tip: You can get a new free key from https://openrouter.ai


## 🛠️ How to Run Locally

```bash
git clone https://github.com/TIA1106/moodjournal.git
cd moodjournal
npm install
npm run dev

👩‍💻 Author
Tia Sukhnanni
🎓 BTech Student @ JKLU Jaipur
🧠 AI x Full Stack Explorer

