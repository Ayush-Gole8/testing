import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
        color: "#fff",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
      }}
    >
      <main
        style={{
          width: "min(800px, 92vw)",
          padding: "40px",
          borderRadius: 24,
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
        }}
      >
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0 }}>About This Test</h1>
        <p style={{ marginTop: 12, opacity: 0.9 }}>
          This is a simple extra page to prove routing works.
        </p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
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
          <Link
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
            Refresh About
          </Link>
        </div>
      </main>
    </div>
  );
}
