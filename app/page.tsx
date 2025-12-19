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
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        color: "#fff",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        transition: "background 500ms ease",
      }}
    >
      <main
        style={{
          width: "min(960px, 92vw)",
          borderRadius: 24,
          backdropFilter: "blur(8px)",
          background: "rgba(0,0,0,0.35)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          padding: "40px 32px",
        }}
      >
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Random Test Home</h1>
            <p style={{ margin: "8px 0 0", opacity: 0.9 }}>A playful, randomized Next.js landing for experiments.</p>
          </div>
          <button
            aria-label="Shuffle"
            onClick={() => setSeed(Date.now() ^ Math.floor(Math.random() * 1_000_000))}
            style={{
              appearance: "none",
              border: "none",
              background: "#ffffff",
              color: "#111827",
              borderRadius: 999,
              padding: "12px 18px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
          >
            Shuffle ✨
          </button>
        </header>

        <section style={{ marginTop: 28 }}>
          <blockquote style={{ fontSize: 20, lineHeight: 1.5, opacity: 0.95 }}>
            “{quote}”
          </blockquote>
        </section>

        <section style={{ marginTop: 28 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: 8,
            }}
          >
            {emojis.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 46,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.12)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span style={{ fontSize: 22 }}>{e}</span>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/gallery"
            style={{
              color: "#fff",
              textDecoration: "none",
              background: "rgba(255,255,255,0.12)",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            Gallery →
          </a>
          <a
            href="/play"
            style={{
              color: "#fff",
              textDecoration: "none",
              background: "rgba(255,255,255,0.12)",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            Play Page →
          </a>
          <a
            href="/about"
            style={{
              color: "#fff",
              textDecoration: "none",
              background: "rgba(255,255,255,0.12)",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            About Page →
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              background: "rgba(255,255,255,0.12)",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            Learn Next.js →
          </a>
          <a
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              background: "rgba(255,255,255,0.12)",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            Explore Templates →
          </a>
        </footer>
      </main>
    </div>
  );
}
