'use client'

import { useEffect, useState } from 'react'

const SLIDES = [
  {
    tag: 'Summer 2026 · New Drop',
    line1: 'JUST',
    line2: 'DO IT.',
    redWord: 'IT.',
    sub: 'Air Max Pulse — Engineered for Speed',
    emoji: '👟',
    accentRgb: '255,26,26',
  },
  {
    tag: 'Jordan Collection 2026',
    line1: 'RISE',
    line2: 'ABOVE.',
    redWord: 'ABOVE.',
    sub: 'Air Jordan 1 — Born to Dominate',
    emoji: '🏀',
    accentRgb: '255,120,26',
  },
  {
    tag: 'Limited Edition Drop',
    line1: 'NO',
    line2: 'LIMITS.',
    redWord: 'LIMITS.',
    sub: 'Nike Dunk Low — Exclusive Colorway',
    emoji: '🥿',
    accentRgb: '26,180,255',
  },
]

export default function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIdx(i => (i + 1) % SLIDES.length); setVisible(true) }, 400)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const s = SLIDES[idx]

  return (
    <section className="relative h-[420px] bg-[#0f0f0f] flex items-center px-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)
        `,
      }} />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none" style={{
        background: `radial-gradient(circle, rgba(${s.accentRgb},0.12) 0%, transparent 70%)`,
        transition: 'background 0.6s ease',
      }} />

      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff1a1a]" />

      <div
        className="relative z-10 max-w-[520px]"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 0.4s ease, transform 0.4s ease' }}
      >
        <div className="inline-flex items-center gap-2 border border-[#ff1a1a]/40 bg-[#ff1a1a]/10 text-[#ff1a1a] text-[10px] font-bold tracking-[2.5px] uppercase px-3.5 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a] animate-pulse-dot" />
          {s.tag}
        </div>

        <h1 className="font-bebas leading-[0.9] tracking-[2px] text-white mb-3" style={{ fontSize: 'clamp(60px, 7vw, 84px)' }}>
          {s.line1}<br />
          <span className="text-[#ff1a1a]">{s.redWord}</span>
        </h1>

        <p className="font-cond text-[15px] font-normal text-[#666] tracking-[2.5px] uppercase mb-8">{s.sub}</p>

        <div className="flex items-center gap-3">
          <button className="bg-[#ff1a1a] hover:bg-[#e01515] text-white font-cond font-bold text-[13px] tracking-[2px] uppercase px-7 py-3 rounded-lg transition-all duration-150 shadow-lg shadow-[#ff1a1a]/20">
            Shop Now
          </button>
          <button className="bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5 font-cond font-bold text-[13px] tracking-[2px] uppercase px-6 py-[11px] rounded-lg transition-all duration-150">
            View Collection
          </button>
        </div>
      </div>

      <div
        className="absolute right-14 bottom-[-16px] select-none pointer-events-none"
        style={{
          fontSize: 'clamp(120px, 14vw, 170px)',
          lineHeight: 1,
          filter: `drop-shadow(0 0 50px rgba(${s.accentRgb},0.25))`,
          animation: 'float 4s ease-in-out infinite',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        {s.emoji}
      </div>

      <div className="absolute bottom-6 right-14 flex gap-8 z-10">
        {[['12K+', 'Products'], ['4.9★', 'Rating'], ['98%', 'Satisfaction']].map(([v, l]) => (
          <div key={l} className="text-center">
            <div className="font-bebas text-[26px] text-white leading-none">{v}</div>
            <div className="text-[9px] font-semibold tracking-[2px] text-[#555] uppercase mt-0.5">{l}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-14 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true) }, 300) }}
            className="h-[3px] rounded-full transition-all duration-300"
            style={{ width: i === idx ? 28 : 8, background: i === idx ? '#ff1a1a' : '#333' }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,100% { transform: rotate(-15deg) translateY(0px); }
          50%      { transform: rotate(-15deg) translateY(-14px); }
        }
      `}</style>
    </section>
  )
}