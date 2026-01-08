import React from 'react'

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Details</h1>
          <p className="text-white/70">A focused page to show item details, metadata and actions.</p>
        </header>

        <main className="grid md:grid-cols-3 gap-6">
          <section className="md:col-span-2 bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-3">Item Title</h2>
            <p className="text-white/70 mb-4">This is a detailed description area where you can describe the item, show images, stats, or other relevant information.</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold">Primary Action</button>
              <button className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Secondary</button>
            </div>
          </section>

          <aside className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Metadata</h3>
            <ul className="text-white/70 space-y-2">
              <li><strong>Author:</strong> Alex</li>
              <li><strong>Updated:</strong> 2 days ago</li>
              <li><strong>Tags:</strong> demo, ui, sample</li>
            </ul>
          </aside>
        </main>
      </div>
    </div>
  )
}
