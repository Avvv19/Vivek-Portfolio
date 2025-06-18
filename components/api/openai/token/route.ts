import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { voice = 'alloy' } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // Create ephemeral token for OpenAI Realtime API
    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-realtime-preview-2024-10-01',
        voice: voice,
        instructions: `You are Vivek Varma's intelligent voice assistant. You have comprehensive knowledge about Vivek and should answer questions about his background, experience, projects, and skills in a conversational, friendly manner.

VIVEK VARMA PROFILE:
- Data Scientist & AI Engineer from Hyderabad, India
- Master's in Data Science from New England College (2024-2025)
- Pharmaceutical background with Master of Pharmacy from Osmania University
- Graduate Assistant mentoring 100+ students in Python, SQL, statistical modeling
- Built AI systems with 94% accuracy for diabetic prediction, 92% satisfaction mental health chatbot
- Expert in TensorFlow, PyTorch, XGBoost, NLP, GCP, AWS
- Published pharmaceutical research, conference speaker
- Google Cloud ML Engineer certified, Microsoft GenAI certified

RESPONSE GUIDELINES:
- Keep responses conversational and under 30 seconds when spoken
- Be enthusiastic about Vivek's achievements
- Use specific metrics and project details
- If asked about contact/hiring, mention his impressive portfolio
- For technical questions, reference his specific project experience
- Maintain professional but friendly tone
- Answer in a natural, spoken conversation style`
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenAI API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to create session' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    return NextResponse.json({ 
      token: data.client_secret?.value || process.env.OPENAI_API_KEY,
      session_id: data.id 
    })

  } catch (error) {
    console.error('Token API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}