import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Next App",
  description: "A beautifully designed Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
                ✨ Modern App
              </Link>
              <div className="flex gap-1">
                <Link href="/" className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  Home
                </Link>
                <Link href="/about" className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  About
                </Link>
                <Link href="/gallery" className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  Gallery
                </Link>
                <Link href="/play" className="px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  Play
                </Link>
                <Link href="/contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
