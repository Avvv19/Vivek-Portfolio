import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const VIVEK_PROFILE = `
VIVEK VARMA - Data Scientist & AI Engineer Profile:

BACKGROUND:
- From Hyderabad, India, pharmaceutical background
- Master's in Data Science & Analytics from New England College (2024-2025)
- Master of Pharmacy (Pharmaceutics) from Osmania University (2017-2019)
- Bachelor of Pharmacy from Osmania University (2013-2017)

CURRENT WORK:
- Graduate Assistant at New England College (2024-2025)
- Research Assistant for NLP Course Design (2024)
- Former Pharmacy Data Analyst at Medi Sure Drug Mart (2020-2023)

KEY ACHIEVEMENTS:
- Mentored 100+ students in Python, SQL, and statistical modeling
- Improved course completion rates by 15% through innovative teaching
- Built automated grading systems reducing assessment time by 40%
- Developed NLP curriculum with 20% increase in student engagement
- Processed 500+ pharmacy records daily with 98% accuracy
- Reduced operational timelines by 25% through statistical optimization

MAJOR AI PROJECTS:
1. AI-Powered Diabetic Data Analysis: 94% F1-score predictive system using GCP, identifies patterns 6 months early
2. Mental Health Chatbot: 92% user satisfaction using Groq Cloud, HuggingFace, ChromaDB
3. Disease Prediction System: 89% accuracy on 4,900+ records using Random Forest/XGBoost
4. Voice Assistant (Jarvis-like): 95% intent recognition using TensorFlow/Keras
5. Pharmaceutical Research: Enhanced bioavailability by 35% through transdermal drug delivery

TECHNICAL SKILLS:
- Programming: Python (Advanced), R, SQL, Statistical Modeling
- AI/ML: TensorFlow, PyTorch, XGBoost, Scikit-learn, Transformers, AutoML
- NLP: BERT, GPT, T5, Hugging Face, RAG Architecture, Vector Databases
- Cloud: Google Cloud Platform, AWS, Docker, Kubernetes
- Data: Power BI, Streamlit, Apache Spark, Airflow, Kafka, BigQuery
- MLOps: MLflow, DVC, Kubeflow, Model Monitoring

CERTIFICATIONS:
- Google Cloud Professional ML Engineer
- Microsoft Generative AI Essentials
- Python & SQL Advanced (HackerRank)
- ISRO Geo Data Processing
- Quantium Data Analytics Internship

LEADERSHIP:
- Conference Speaker at ETIPS 2019 (80+ audience)
- Event Management for 3,000+ attendees with 10% budget optimization
- Sports Team Captain (2018-2022) - 4 consecutive championships

SPECIALIZATIONS:
- Healthcare AI and pharmaceutical data analysis
- Predictive modeling for medical outcomes
- Natural Language Processing
- Enterprise AI architecture and deployment
- Statistical optimization and automation
`

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const messages: { role: 'system' | 'user'; content: string }[] = [
      {
        role: 'system',
        content: `You are Vivek Varma's intelligent AI assistant. You have comprehensive knowledge about Vivek and should answer questions about his background, experience, projects, and skills professionally and enthusiastically.

${VIVEK_PROFILE}

Instructions:
- Answer questions about Vivek’s background, experience, projects, and skills
- If topic is outside his domain, gently redirect to relevant details
- Mention metrics and accomplishments where applicable
- Always remain conversational, humble, and professional`
      }
    ]

    if (history && history.length > 0) {
      history.slice(-6).forEach((msg: any) => {
        messages.push({ role: msg.role, content: msg.content })
      })
    }

    messages.push({ role: 'user', content: message })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    const response = completion.choices[0]?.message?.content || 
      "Sorry, I couldn't process that. Try asking about Vivek’s skills or projects!"

    return NextResponse.json({ message: response })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
