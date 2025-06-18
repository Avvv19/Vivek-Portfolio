'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import { Mic } from 'lucide-react'

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [listening, setListening] = useState(false)

  // 🎤 Voice Recognition
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser.')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-IN' // or 'en-US' based on preference
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setForm(prev => ({ ...prev, message: prev.message + ' ' + transcript }))
    }

    recognition.start()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!recaptchaRef.current) {
        alert('reCAPTCHA not loaded')
        return
      }

      const token = await recaptchaRef.current.executeAsync()
      recaptchaRef.current.reset()

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      })

      const data = await res.json()
      alert(data.message || data.error)
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto relative">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        required
        onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full p-3 border border-gray-600 bg-transparent rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        required
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full p-3 border border-gray-600 bg-transparent rounded"
      />
      
      <div className="relative">
        <textarea
          placeholder="Message"
          value={form.message}
          required
          rows={5}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 pr-12 border border-gray-600 bg-transparent rounded"
        />
        
        {/* 🎤 Mic Button */}
        <button
          type="button"
          onClick={handleVoiceInput}
          className="absolute top-3 right-3 text-blue-400 hover:text-blue-300"
          title="Speak message"
        >
          <Mic className={`w-5 h-5 ${listening ? 'animate-pulse text-pink-400' : ''}`} />
        </button>
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        size="invisible"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
