'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

const METRICS = [
  { label: 'Total Sales',     value: '₱2.4M', change: '+18.2% this month',  up: true,  fill: 74, barColor: '#ff1a1a' },
  { label: 'Visitors Today',  value: '8,341', change: '+6.4% vs yesterday', up: true,  fill: 62, barColor: '#3ecf8e' },
  { label: 'Conversion Rate', value: '3.7%',  change: '−0.3% this week',    up: false, fill: 37, barColor: '#f0a500' },
  { label: 'Orders Today',    value: '309',   change: '+22 from yesterday',  up: true,  fill: 55, barColor: '#ff1a1a' },
]

const REV_BARS = [38, 55, 70, 45, 82, 100, 63]
const REV_DAYS = ['M','T','W','T','F','S','S']
const REV_PEAK = 5

const TOP_SELLERS = [
  { emoji: '👟', name: 'Air Max 270',    sold: 342, rank: '#1', color: '#3ecf8e' },
  { emoji: '👟', name: 'Jordan 1 Retro', sold: 289, rank: '#2', color: '#f0a500' },
  { emoji: '🥿', name: 'React Infinity', sold: 201, rank: '#3', color: '#555' },
]

const MOST_VIEWED = [
  { name: 'Air Force 1', views: '12.4K', pct: 85 },
  { name: 'Dunk Low',    views: '9.8K',  pct: 68 },
  { name: 'Blazer Mid',  views: '7.2K',  pct: 50 },
]

export default function AnalyticsWidgets() {
  return (
    <section className="px-7 pt-8 pb-0">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-bebas text-[30px] tracking-[2px] text-white">
          ANALYTICS <span className="text-[#ff1a1a]">OVERVIEW</span>
        </h2>
        <span className="font-cond text-[11px] tracking-[1.5px] text-[#444] uppercase">Live · 2026</span>
      </div>

      <div className="grid grid-cols-4 gap-3.5 mb-3.5">
        {METRICS.map(m => (
          <div key={m.label} className="bg-[#131313] border border-[#222] rounded-xl p-4 hover:border-[#333] transition-colors duration-200">
            <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#444] mb-2">{m.label}</p>
            <p className="font-bebas text-[28px] text-white leading-none mb-1">{m.value}</p>
            <div className={`flex items-center gap-1 text-[11px] font-semibold ${m.up ? 'text-[#3ecf8e]' : 'text-[#ff4444]'}`}>
              {m.up ? <TrendingUp size={11}/> : <TrendingDown size={11}/>}
              {m.change}
            </div>
            <div className="mt-3 h-[2px] bg-[#222] rounded-full">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${m.fill}%`, background: m.barColor }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-3.5 mb-7">
        <div className="col-span-2 bg-[#131313] border border-[#222] rounded-xl p-4 hover:border-[#333] transition-colors duration-200">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#444] mb-1">Revenue Graph</p>
              <p className="font-bebas text-[22px] text-white leading-none">₱284,910</p>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#3ecf8e]">
              <TrendingUp size={11}/> This Week
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-[52px]">
            {REV_BARS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm cursor-pointer transition-colors duration-150"
                style={{ height: `${h}%`, background: i === REV_PEAK ? '#ff1a1a' : '#252525' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.background = '#ff1a1a')}
                onMouseLeave={e => ((e.target as HTMLElement).style.background = i === REV_PEAK ? '#ff1a1a' : '#252525')}
              />
            ))}
          </div>
          <div className="flex gap-1.5 mt-1.5">
            {REV_DAYS.map((d, i) => (
              <div key={i} className="flex-1 text-[9px] text-[#444] text-center">{d}</div>
            ))}
          </div>
        </div>

        <div className="bg-[#131313] border border-[#222] rounded-xl p-4 hover:border-[#333] transition-colors duration-200">
          <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#444] mb-3">Top Selling</p>
          <div className="flex flex-col gap-3">
            {TOP_SELLERS.map(t => (
              <div key={t.name} className="flex items-center gap-2.5">
                <span className="text-[20px] leading-none">{t.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-white truncate">{t.name}</p>
                  <p className="text-[10px] text-[#444]">{t.sold} sold</p>
                </div>
                <span className="text-[10px] font-bold flex-shrink-0" style={{ color: t.color }}>{t.rank}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#131313] border border-[#222] rounded-xl p-4 hover:border-[#333] transition-colors duration-200">
          <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#444] mb-3">Most Viewed</p>
          <div className="flex flex-col gap-3.5">
            {MOST_VIEWED.map(v => (
              <div key={v.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-[12px] text-white">{v.name}</span>
                  <span className="text-[10px] text-[#444]">{v.views}</span>
                </div>
                <div className="h-[2px] bg-[#222] rounded-full">
                  <div className="h-full bg-[#ff1a1a] rounded-full" style={{ width: `${v.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}