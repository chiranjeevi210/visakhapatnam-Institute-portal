"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

export default function CampusChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm the Apex Campus AI Assistant. Ask me about admissions, fees, placements, or hostel facilities!",
    },
  ]);

  const quickQuestions = [
    "Admission eligibility?",
    "Highest placement package?",
    "Tuition & hostel fees?",
  ];

  const getBotReply = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("admission") || q.includes("eligibility") || q.includes("apply")) {
      return "Admissions for 2026–27 are open! B.Tech requires 60%+ in 10+2 (PCM) and a valid entrance rank. You can submit an inquiry right on the Home page.";
    }
    if (q.includes("placement") || q.includes("package") || q.includes("job")) {
      return "Apex Institute achieved a 96.4% placement rate in 2026, with a highest package of 42 LPA and an average package of 8.5 LPA across 140+ recruiters.";
    }
    if (q.includes("fee") || q.includes("hostel") || q.includes("scholarship")) {
      return "Annual B.Tech tuition is ₹1,45,000, and AC/Non-AC hostel accommodation starts at ₹75,000/year. Up to 100% merit scholarships are available!";
    }
    if (q.includes("course") || q.includes("program") || q.includes("branch")) {
      return "We offer B.Tech (CSE-AI, ECE), MBA (FinTech & Analytics), and B.Sc. (Hons) Data Science. Filter all programs in the Academics section.";
    }
    return "Great question! For detailed counseling, call +91 891-234-5678 or email admissions@apexinstitute.edu.in.";
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: "user", text: query };
    const botMsg = { sender: "bot", text: getBotReply(query) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    if (!textToSend) setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-indigo-950 text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="bg-amber-500 text-slate-950 p-1.5 rounded-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none">Apex AI Assistant</h3>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3" /> Online • Instant Answers
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-indigo-200 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-indigo-700 text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="shrink-0 text-[11px] font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-2.5 py-1 rounded-full transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about admissions, fees..."
              className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-lg transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-4 py-3.5 rounded-full shadow-xl transition hover:scale-105"
        >
          <MessageSquare className="w-5 h-5 text-amber-400" />
          <span className="text-sm">Ask Campus AI</span>
        </button>
      )}
    </div>
  );
}
