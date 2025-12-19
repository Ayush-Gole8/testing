"use client";
import { useMemo, useState } from "react";

export default function PlayPage() {
  const [seed, setSeed] = useState(() => Date.now());
  const [animate, setAnimate] = useState(true);
  
  const rand = useMemo(() => {
    let s = seed | 0;
    return () => {
      s ^= s << 13;
      s ^= s >>> 17;
      s ^= s << 5;
      return ((s >>> 0) % 1000) / 1000;
    };
  }, [seed]);

  const hue = Math.floor(rand() * 360);
  const dots = useMemo(() => new Array(120).fill(0).map((_, i) => ({ i, o: rand(), delay: rand() * 2 })), [rand]);
  const shapes = useMemo(() => new Array(20).fill(0).map((_, i) => ({
    id: i,
    x: rand() * 100,
    y: rand() * 100,
    size: 20 + rand() * 60,
    rotation: rand() * 360,
    color: `hsl(${(hue + rand() * 120) % 360}, 70%, 60%)`,
  })), [rand, hue]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 text-white py-20">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(1200px circle at 20% -10%, hsl(${(hue + 40) % 360} 90% 60%) 0%, transparent 60%),
            radial-gradient(1200px circle at 90% 10%, hsl(${(hue + 320) % 360} 90% 60%) 0%, transparent 60%),
            radial-gradient(800px circle at 50% 100%, hsl(${(hue + 180) % 360} 80% 50%) 0%, transparent 70%)
          `
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full opacity-10 blur-xl"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              background: shape.color,
              animation: animate ? `float ${3 + shape.delay}s ease-in-out infinite` : 'none',
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interactive Playground
              </h1>
              <p className="text-white/70 text-lg">Experiment with colors, animations, and patterns</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setAnimate(!animate)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all hover:scale-105 border border-white/20"
              >
                {animate ? '⏸️ Pause' : '▶️ Play'}
              </button>
              <button
                onClick={() => setSeed(Date.now())}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              >
                🎲 Shuffle
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Bouncy Dots Grid
              </h2>
              <div className="grid grid-cols-12 gap-2">
                {dots.map(({ i, o, delay }) => (
                  <div
                    key={i}
                    className="h-10 rounded-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, hsl(${hue} 80% ${40 + Math.floor(o * 30)}%), hsl(${(hue + 60) % 360} 80% ${50 + Math.floor(o * 20)}%))`,
                      transform: animate ? `translateY(${Math.floor((o - 0.5) * 16)}px) scale(${0.9 + o * 0.2})` : 'none',
                      animation: animate ? `pulse ${1 + delay}s ease-in-out infinite` : 'none',
                      animationDelay: `${delay}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🌈</span>
                Color Spectrum Bars
              </h2>
              <div className="space-y-3">
                {new Array(8).fill(0).map((_, i) => {
                  const barHue = (hue + i * 45) % 360;
                  return (
                    <div
                      key={i}
                      className="h-12 rounded-xl transition-all duration-700 hover:scale-[1.02] cursor-pointer"
                      style={{
                        background: `linear-gradient(90deg, hsl(${barHue} 80% 50%), hsl(${(barHue + 60) % 360} 80% 60%))`,
                        transform: animate ? `translateX(${Math.sin(i) * 10}px)` : 'none',
                        boxShadow: `0 4px 20px hsla(${barHue}, 80%, 50%, 0.3)`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 text-center">
                <div className="text-3xl font-bold text-cyan-400">{dots.length}</div>
                <div className="text-white/60 text-sm mt-1">Active Dots</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 text-center">
                <div className="text-3xl font-bold text-purple-400">{hue}°</div>
                <div className="text-white/60 text-sm mt-1">Base Hue</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30 text-center">
                <div className="text-3xl font-bold text-orange-400">{shapes.length}</div>
                <div className="text-white/60 text-sm mt-1">Bg Shapes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
