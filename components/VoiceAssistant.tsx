'use client'

import { useEffect, useRef, useState } from 'react'
import { Mic } from 'lucide-react'

export default function VoiceAssistant() {
  const [transcript, setTranscript] = useState('')
  const [greeting, setGreeting] = useState('')
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [language, setLanguage] = useState(() => localStorage.getItem('voiceLang') || 'en-IN')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Dynamic greeting based on time
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning! How can I assist you today?')
    else if (hour < 18) setGreeting('Good afternoon! What would you like to explore?')
    else setGreeting('Good evening! Ready to dive into Vivek’s portfolio?')
  }, [])

  // Persist language preference
  useEffect(() => {
    localStorage.setItem('voiceLang', language)
  }, [language])

  const handleClick = async () => {
    const res = await fetch('/api/openai/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ voice: 'onyx' })
    })

    const { token, session_id } = await res.json()

    const ws = new WebSocket(`wss://api.openai.com/v1/realtime/sessions/${session_id}/stream?key=${token}`)
    ws.onopen = () => {
      ws.send(JSON.stringify({ event: 'start', data: { language } })) // 👈 language used dynamically
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)

      if (data.event === 'transcript') {
        setTranscript(data.text)
      }

      if (data.event === 'audio') {
        const audioData = data.audio
        const blob = new Blob([new Uint8Array(audioData)], { type: 'audio/mpeg' })
        const url = URL.createObjectURL(blob)

        if (audioRef.current) audioRef.current.src = url
        else {
          audioRef.current = new Audio(url)
          audioRef.current.play()
        }
      }
    }

    ws.onerror = (err) => console.error('WebSocket Error:', err)
    ws.onclose = () => setSocket(null)

    setSocket(ws)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-xs">
      <p className="text-sm text-blue-300 mb-2">{greeting}</p>

      {/* 🌍 Language Toggle */}
      <select
        aria-label="Select language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-3 p-2 text-sm bg-white/20 text-white rounded w-full"
      >
        <option value="en-IN">Indian English 🇮🇳</option>
        <option value="en-US">US English 🇺🇸</option>
      </select>

      <div className="flex items-center space-x-3">
        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Mic className="w-4 h-4" />
          Talk to Vivek AI
        </button>
      </div>

      {transcript && (
        <p className="mt-4 text-sm text-cyan-300 truncate">
          🎧 Heard: <span className="italic">{transcript}</span>
        </p>
      )}

      <audio ref={audioRef} hidden />
    </div>
  )
}
