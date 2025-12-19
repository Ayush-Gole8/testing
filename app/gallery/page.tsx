"use client";
import Link from "next/link";
import { useMemo } from "react";

export default function GalleryPage() {
  const items = useMemo(() => {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2"];
    return new Array(24).fill(0).map((_, i) => ({
      id: i,
      color: colors[i % colors.length],
      height: 120 + (i % 3) * 40,
    }));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, color: "#fff" }}>Gallery</h1>
            <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.9)" }}>A masonry-style grid showcase.</p>
          </div>
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
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
            gridAutoFlow: "dense",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                background: item.color,
                borderRadius: 16,
                height: item.height,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 32,
                fontWeight: 800,
                transition: "transform 200ms ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {item.id + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
