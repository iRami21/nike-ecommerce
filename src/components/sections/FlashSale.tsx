'use client'

import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'

const DEALS = [
  { id:1, name:"Air Force 1 '07", emoji:'👟', price:5620, was:7495, stock:72,  max:200 },
  { id:2, name:"Blazer Mid '77",  emoji:'🥿', price:4190, was:5995, stock:41,  max:150 },
  { id:3, name:'React Vision',    emoji:'👟', price:6395, was:7995, stock:88,  max:200 },
  { id:4, name:'Pegasus 40',      emoji:'👟', price:5995, was:9995, stock:23,  max:100 },
]

function useTimer(init: number) {
  const [s, setS] = useState(init)
  useEffect(() => {
    const t = setInterval(() => setS(p => (p > 0 ? p - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])
  return {
    h: String(Math.floor(s / 3600)).padStart(2, '0'),
    m: String(Math.floor((s % 3600) / 60)).padStart(2, '0'),
    s: String(s % 60).padStart(2, '0'),
  }
}

export default function FlashSale() {
  const cd = useTimer(3 * 3600 + 47 * 60 + 22)

  return (
    <section className="px-7 py-7">
      <div className="bg-[#0f0f0f] border border-[#ff1a1a]/25 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff1a1a] via-[#ff6644] to-[#ff1a1a]" />

        <div className="flex items-center gap-4 mb-5 flex-wrap">
          <h2 className="font-bebas text-[26px] tracking-[2px] text-white flex items-center gap-2">
            <Zap size={20} fill="#ff1a1a" className="text-[#ff1a1a]" />
            FLASH SALE
          </h2>
          <div className="flex items-center gap-1.5">
            {[cd.h, cd.m, cd.s].map((v, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="bg-[#ff1a1a] text-white font-bebas text-[22px] min-w-[44px] text-center px-2.5 py-1.5 rounded-lg leading-none shadow-lg shadow-[#ff1a1a]/20">
                  {v}
                </div>
                {i < 2 && <span className="font-bebas text-[18px] text-[#ff1a1a]">:</span>}
              </div>
            ))}
          </div>
          <a href="/flash-sale" className="ml-auto font-cond text-[11px] tracking-[2px] uppercase text-[#ff1a1a] no-underline hover:opacity-70 transition-opacity">
            Quick Buy →
          </a>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {DEALS.map(d => {
            const disc = Math.round((1 - d.price / d.was) * 100)
            const pct  = Math.round((d.stock / d.max) * 100)
            const low  = pct < 20
            return (
              <div key={d.id} className="bg-[#161616] border border-[#252525] hover:border-[#ff1a1a]/40 rounded-xl p-3.5 relative cursor-pointer transition-all duration-200 group">
                <span className="absolute top-2.5 right-2.5 bg-[#ff1a1a] text-white text-[8px] font-extrabold tracking-[1px] px-1.5 py-0.5 rounded-md">
                  -{disc}%
                </span>
                <div className="text-[44px] text-center leading-none mb-2.5 group-hover:scale-110 transition-transform duration-200 select-none">
                  {d.emoji}
                </div>
                <p className="text-[12px] font-semibold text-white mb-1 truncate">{d.name}</p>
                <div className="flex items-baseline gap-2 mb-2.5">
                  <span className="font-cond text-[17px] font-bold text-[#ff1a1a]">₱{d.price.toLocaleString()}</span>
                  <span className="text-[11px] text-[#444] line-through">₱{d.was.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-[#555] mb-1">{d.stock} remaining</p>
                <div className="h-[2px] bg-[#222] rounded-full">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: low ? '#f0a500' : '#ff1a1a' }} />
                </div>
                {low && <p className="text-[9px] text-[#f0a500] font-bold mt-1">Almost sold out!</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}