// components/api/text-to-speech/route.ts

import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { text, voice = 'onyx' } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid text' }, { status: 400 })
    }

    // Only allow valid voice options
    const allowedVoices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer']
    if (!allowedVoices.includes(voice)) {
      return NextResponse.json({ error: 'Invalid voice selected' }, { status: 400 })
    }

    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voice as OpenAI.Audio.SpeechCreateParams['voice'],
      input: text,
      speed: 1.0,
    })

    const buffer = Buffer.from(await mp3.arrayBuffer())

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('[TTS Error]', error)
    return NextResponse.json({ error: 'Failed to generate speech' }, { status: 500 })
  }
}
