import { NextResponse } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export async function POST(req) {
  if (!process.env.OPENROUTER_API_KEY) {
  console.warn("⚠️ Missing API key. AI features may not work.");
  return NextResponse.json({ error: "API key missing. AI temporarily unavailable." }, { status: 500 });
}

  try {
    const { input } = await req.json();

    const model = new ChatOpenAI({
      temperature: 0.7,
      modelName: 'mistralai/mistral-7b-instruct', 
      openAIApiKey: process.env.OPENROUTER_API_KEY,
      configuration: {
        baseURL: 'https://openrouter.ai/api/v1',
      },
    });

    const messages = [
      new SystemMessage("You are the user's playful, kind, super-supportive best friend. Your tone is casual, warm, comforting, and full of positive vibes. You cheer them up, give friendly advice, and talk like someone who truly cares. Use many emojis, light humor, and be real — like a BFF would."),
      new HumanMessage(input)
    ];

    const res = await model.invoke(messages);
    return NextResponse.json({ reply: res.content });
  } catch (err) {
    console.error("Therapist API Error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
