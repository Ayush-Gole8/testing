"use client";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-white/70">
            Have a question or want to work together? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/70">hello@example.com</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-all">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-white/70">San Francisco, CA</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['💬', '🐦', '📸', '💼'].map((emoji, i) => (
                  <button key={i} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-xl transition-all hover:scale-110">
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-white/40"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-white/40"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-white/40 resize-none"
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message ✨
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
