"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PlayPage() {
  const [seed, setSeed] = useState(() => Date.now());
  const rand = useMemo(() => {
    let s = seed | 0;
    return () => {
      // tiny xorshift for a quick demo
      s ^= s << 13;
      s ^= s >>> 17;
      s ^= s << 5;
      return ((s >>> 0) % 1000) / 1000;
    };
  }, [seed]);

  const hue = Math.floor(rand() * 360);
  const size = 8 + Math.floor(rand() * 32);
  const dots = useMemo(() => new Array(120).fill(0).map((_, i) => ({ i, o: rand() })), [rand]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(1200px circle at 20% -10%, hsl(${(hue + 40) % 360} 90% 60%) 0%, transparent 60%),\n                     radial-gradient(1200px circle at 90% 10%, hsl(${(hue + 320) % 360} 90% 60%) 0%, transparent 60%),\n                     hsl(${hue} 30% 8%)`,
        color: "#fff",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
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
            <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Playground</h1>
            <p style={{ margin: "8px 0 0", opacity: 0.9 }}>Little visual toys for a test project.</p>
          </div>
          <button
            aria-label="Shuffle"
            onClick={() => setSeed(Date.now())}
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
          <h2 style={{ margin: 0, fontSize: 18, opacity: 0.9 }}>Bouncy Dots</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 10,
              marginTop: 12,
            }}
          >
            {dots.map(({ i, o }) => (
              <div
                key={i}
                style={{
                  height: 40,
                  borderRadius: 999,
                  background: `hsl(${hue} 80% ${40 + Math.floor(o * 30)}%)`,
                  transform: `translateY(${Math.floor((o - 0.5) * 12)}px)`,
                  transition: "transform 400ms ease, background 400ms ease",
                }}
              />
            ))}
          </div>
        </section>

        <footer style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              color: "#111827",
              textDecoration: "none",
              background: "#ffffff",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 700,
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
          >
            ← Back Home
          </Link>
        </footer>
      </main>
    </div>
  );
}
