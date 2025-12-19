"use client";
import { useMemo, useState } from "react";

type Palette = [string, string, string];

const palettes: Palette[] = [
  ["#3EECAC", "#EE74E1", "#2B2D42"],
  ["#FF9A8B", "#FF6A88", "#FF99AC"],
  ["#00DBDE", "#FC00FF", "#0F1021"],
  ["#F6D365", "#FDA085", "#1F2937"],
  ["#a1c4fd", "#c2e9fb", "#111827"],
  ["#5ee7df", "#b490ca", "#0b0f16"],
  ["#84fab0", "#8fd3f4", "#0d1b2a"],
  ["#f093fb", "#f5576c", "#0f172a"],
];

const quotes = [
  "Make it work. Make it right. Make it fast.",
  "Ship small, ship often.",
  "Perfect is the enemy of done.",
  "Wake up and code something delightful.",
  "Keep it simple, keep it joyful.",
  "Today’s a great day to try ideas.",
  "Small steps lead to big wins.",
  "Play, experiment, learn.",
  "A tiny test project with big vibes.",
  "Creativity is intelligence having fun.",
];

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Home() {
  const [seed, setSeed] = useState<number>(() => Date.now() ^ Math.floor(Math.random() * 1_000_000));
  const rand = useMemo(() => mulberry32(seed), [seed]);

  const palette = useMemo(() => palettes[Math.floor(rand() * palettes.length)], [rand]);
  const quote = useMemo(() => quotes[Math.floor(rand() * quotes.length)], [rand]);
  const emojis = useMemo(() => {
    const set = Array.from("🔥✨🎉🚀🌈🍀🍩🧠🦄🎮🎧⚡️🌟🍕🐱🐶🧩🔮🧋🍪🍉☕️🥑🧁");
    return new Array(64).fill(0).map(() => set[Math.floor(rand() * set.length)]);
  }, [rand]);

  const bg = `radial-gradient(1200px circle at 20% -10%, ${palette[0]} 0%, transparent 60%),
              radial-gradient(1200px circle at 90% 10%, ${palette[1]} 0%, transparent 60%),
              ${palette[2]}`;

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white transition-all duration-500"
      style={{ background: bg }}
    >
      <main className="w-full max-w-6xl mx-6 bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
        <header className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Welcome Home
            </h1>
            <p className="text-white/80 text-lg">
              A playful, randomized Next.js experience ✨
            </p>
          </div>
          <button
            onClick={() => setSeed(Date.now() ^ Math.floor(Math.random() * 1_000_000))}
            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all active:scale-95"
          >
            🎲 Shuffle
          </button>
        </header>

        <section className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 mb-8">
          <blockquote className="text-2xl font-medium text-center italic text-white/90">
            “{quote}”
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            Random Emoji Grid
          </h2>
          <div className="grid grid-cols-8 gap-2">
            {emojis.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-14 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 transition-all cursor-pointer border border-white/5 shadow-lg"
              >
                <span className="text-2xl">{e}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            Current Color Palette
          </h2>
          <div className="flex gap-4">
            {palette.map((color, i) => (
              <div key={i} className="flex-1">
                <div 
                  className="h-24 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer border-2 border-white/20"
                  style={{ background: color }}
                />
                <p className="text-center mt-2 text-sm text-white/70 font-mono">{color}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex gap-3 flex-wrap">
          <a
            href="/gallery"
            className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-xl font-semibold border border-pink-500/30 hover:scale-105 transition-all"
          >
            🖼️ Gallery
          </a>
          <a
            href="/play"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 rounded-xl font-semibold border border-cyan-500/30 hover:scale-105 transition-all"
          >
            🎮 Play
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 rounded-xl font-semibold border border-purple-500/30 hover:scale-105 transition-all"
          >
            ℹ️ About
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 rounded-xl font-semibold border border-emerald-500/30 hover:scale-105 transition-all"
          >
            📧 Contact
          </a>
        </footer>
      </main>
    </div>
  );
}
