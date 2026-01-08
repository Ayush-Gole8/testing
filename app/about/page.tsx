import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Crafting beautiful, performant web experiences with care and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-3">Fast & Modern</h2>
            <p className="text-white/70">Leveraging modern React and Next.js patterns for speed and developer productivity.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all">
            <div className="text-4xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold mb-3">Beautiful Design</h2>
            <p className="text-white/70">Clean, responsive UI built with Tailwind CSS and thoughtful interactions.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-3">Responsive</h2>
            <p className="text-white/70">Optimized layouts that adapt beautifully across devices and screen sizes.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-2xl font-bold mb-3">Developer Friendly</h2>
            <p className="text-white/70">TypeScript-first approach and clear structure for maintainability and growth.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We design web products that feel polished and perform reliably — making things that people enjoy using.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow-md">← Back Home</Link>
            <Link href="/contact" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/10">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
