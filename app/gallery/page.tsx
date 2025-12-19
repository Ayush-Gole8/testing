"use client";
import { useMemo, useState } from "react";

export default function GalleryPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const items = useMemo(() => {
    const gradients = [
      "from-pink-500 via-rose-500 to-orange-500",
      "from-cyan-500 via-blue-500 to-purple-500",
      "from-emerald-500 via-teal-500 to-cyan-500",
      "from-violet-500 via-purple-500 to-pink-500",
      "from-amber-500 via-orange-500 to-red-500",
      "from-blue-500 via-indigo-500 to-purple-500",
      "from-green-500 via-emerald-500 to-teal-500",
      "from-fuchsia-500 via-pink-500 to-rose-500",
    ];
    const emojis = ['🎉', '🌈', '✨', '🚀', '🎨', '🎵', '💎', '🌟', '🔥', '🌺', '🌊', '🎄'];
    return new Array(24).fill(0).map((_, i) => ({
      id: i,
      gradient: gradients[i % gradients.length],
      emoji: emojis[i % emojis.length],
      height: 160 + (i % 4) * 40,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Visual Gallery
          </h1>
          <p className="text-xl text-white/70">
            A beautiful collection of gradient cards with hover effects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group`}
              style={{ height: item.height }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <div className="relative h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {item.emoji}
                </div>
                <div className="text-white/90 font-bold text-2xl">
                  Card {item.id + 1}
                </div>
                {hoveredId === item.id && (
                  <div className="mt-4 text-white/70 text-sm animate-fade-in">
                    Click to explore
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex gap-4 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {items.length}
              </div>
              <div className="text-white/60 text-sm mt-1">Items</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                8
              </div>
              <div className="text-white/60 text-sm mt-1">Gradients</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                12
              </div>
              <div className="text-white/60 text-sm mt-1">Emojis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
