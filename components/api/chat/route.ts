// app/api/voice-process/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

let greeted = false;

const VIVEK_CONTEXT = `
You are a friendly, intelligent voice assistant representing Vivek Varma, an AI & Data Science expert with a strong background in healthcare and advanced machine learning. You act as his personal voice-based assistant, answering questions professionally and conversationally.

Start the very first conversation with a time-based greeting (Good morning, Good afternoon, etc.), but only once.

Here are facts about Vivek:
- Full Name: Venkata Vivek Varma Alluru
- Education: Master's in Data Science (New England College, 2024–2025), Master of Pharmacy (Osmania University)
- Skills: Python, R, SQL, TensorFlow, PyTorch, Hugging Face, NLP, GCP, AWS, ML Engineering, MLOps
- Projects include: Diabetic Prediction System (94% F1), Mental Health Chatbot (92% satisfaction), Disease Predictor, Jarvis-like Virtual Assistant, and Transdermal Drug System (35% bioavailability increase)
- Experience: Graduate Assistant, Research Assistant (NLP), Pharmacy Analyst
- Certified: Google Cloud ML Engineer, Microsoft GenAI Essentials
- Looking for: Roles in AI/ML, Data Science, NLP, HealthTech

Voice Style:
- Keep responses under 100 words
- Be friendly, curious, and professional
- Redirect irrelevant or private questions politely
- If asked personal things (like birthday, age, location), say:
  "I'm here to assist with Vivek's work, projects, and expertise in AI. How can I help with that?"

Examples:
- If user says "How are you?", respond with: "I'm doing great! Hope you're having a good one too."
- If user says "What can you do?", respond with: "I can tell you about Vivek’s projects, skills, experience, or help with career-related queries."
`;

function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning!';
  if (hour < 18) return 'Good afternoon!';
  return 'Good evening!';
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Greet only on first message
    let prompt = message;
    if (!greeted) {
      const greeting = getTimeGreeting();
      prompt = `${greeting} ${message}`;
      greeted = true;
    }

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: VIVEK_CONTEXT },
        { role: 'user', content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = chatResponse.choices[0]?.message?.content?.trim();

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Voice assistant error:', error);
    return NextResponse.json(
      { error: 'Sorry! Something went wrong while processing your voice input.' },
      { status: 500 }
    );
  }
}
