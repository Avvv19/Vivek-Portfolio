'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SendHorizonal, Sun, Moon, ThumbsUp, ThumbsDown } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setLoading(true);

    try {
      if (input.toLowerCase().includes('contact') || input.toLowerCase().includes('email')) {
        const reply = {
          role: 'assistant',
          content:
            "📬 You can contact Vivek at: a.v.vivekvarma@gmail.com\nAlternatively, use the contact form on the site."
        };
        setMessages((prev) => [...prev, reply]);
        setLoading(false);
        return;
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: messages })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message || 'Sorry, I had trouble responding.' }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '⚠️ Something went wrong. Please try again later.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-lg shadow-lg border transition-colors ${
        isDark ? 'bg-zinc-900 border-zinc-700 text-white' : 'bg-white border-gray-300 text-black'
      }`}
    >
      <div
        className={`p-4 font-semibold flex justify-between items-center ${
          isDark ? 'bg-gradient-to-r from-purple-700 to-blue-600 text-white' : 'bg-blue-100 text-black'
        }`}
      >
        <span>💬 Ask Vivek</span>
        <button onClick={toggleTheme} title="Toggle theme">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 text-sm space-y-2 max-h-80">
        {messages.map((msg, i) => (
          <div key={i} className="flex flex-col">
            <div
              className={`p-2 rounded-md whitespace-pre-wrap max-w-[90%] ${
                msg.role === 'user'
                  ? isDark
                    ? 'bg-blue-800 text-white self-end'
                    : 'bg-blue-100 text-black self-end'
                  : isDark
                  ? 'bg-zinc-700 text-white self-start'
                  : 'bg-gray-200 text-black self-start'
              }`}
            >
              {msg.content}
            </div>

            {msg.role === 'assistant' && (
              <div className="flex gap-2 mt-1 text-xs self-start">
                <button
                  className="flex items-center gap-1 px-2 py-1 rounded hover:bg-green-500/10"
                  onClick={() => alert('Thanks for your feedback!')}
                >
                  <ThumbsUp size={14} />
                  Like
                </button>
                <button
                  className="flex items-center gap-1 px-2 py-1 rounded hover:bg-red-500/10"
                  onClick={() => alert('Thanks! We’ll improve this.')}
                >
                  <ThumbsDown size={14} />
                  Dislike
                </button>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div
        className={`flex items-center p-2 border-t ${
          isDark ? 'border-zinc-700' : 'border-gray-300'
        }`}
      >
        <textarea
          className={`flex-1 resize-none px-2 py-1 outline-none bg-transparent text-sm ${
            isDark ? 'text-white' : 'text-black'
          }`}
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className={`p-2 ${isDark ? 'text-blue-400' : 'text-blue-600'} disabled:opacity-50`}
          title="Send message"
        >
          <SendHorizonal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
