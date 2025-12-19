export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-3">Fast & Modern</h2>
            <p className="text-white/70">
              Built with Next.js 15, leveraging the latest React features for optimal performance and developer experience.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="text-4xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold mb-3">Beautiful Design</h2>
            <p className="text-white/70">
              Carefully crafted UI with Tailwind CSS, featuring smooth animations and eye-catching gradients.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-3">Responsive</h2>
            <p className="text-white/70">
              Fully responsive design that looks great on any device, from mobile phones to large desktop screens.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-2xl font-bold mb-3">Developer Friendly</h2>
            <p className="text-white/70">
              Clean code structure with TypeScript, making it easy to understand, maintain, and extend.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We believe in creating web experiences that are not only functional but also delightful to use. 
            Every pixel matters, every interaction counts, and every user deserves the best.
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
