'use client'

const CATEGORIES = [
  { id: 1, title: 'Running', subtitle: 'Speed & endurance', items: 86, emoji: '🏃‍♂️', accent: '#ff1a1a', fill: 78, href: '/running' },
  { id: 2, title: 'Basketball', subtitle: 'Court control', items: 42, emoji: '🏀', accent: '#f0a500', fill: 64, href: '/basketball', badge: 'HOT' },
  { id: 3, title: 'Lifestyle', subtitle: 'Everyday essentials', items: 110, emoji: '🧢', accent: '#3ecf8e', fill: 88, href: '/lifestyle' },
  { id: 4, title: 'Training', subtitle: 'Gym & HIIT', items: 58, emoji: '🏋️‍♀️', accent: '#26b4ff', fill: 52, href: '/training' },
]

export default function CategoriesSection() {
  return (
    <section className="px-7 py-8">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-bebas text-[30px] tracking-[2px] text-white">
          SHOP BY <span className="text-[#ff1a1a]">CATEGORY</span>
        </h2>
        <a href="/categories" className="font-cond text-[11px] tracking-[2px] uppercase text-[#ff1a1a] no-underline hover:opacity-70 transition-opacity">
          Browse All →
        </a>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {CATEGORIES.map(c => (
          <a
            key={c.id}
            href={c.href}
            className="relative bg-[#131313] border border-[#222] rounded-xl p-4 overflow-hidden group hover:border-[#333] hover:-translate-y-0.5 transition-all duration-200"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(circle at 100% 0%, ${c.accent}1a 0%, transparent 55%)` }}
            />
            {c.badge && (
              <span className="absolute top-2.5 left-2.5 text-white text-[8px] font-extrabold tracking-[1px] uppercase px-2 py-1 rounded-md bg-[#ff1a1a]">
                {c.badge}
              </span>
            )}
            <div className="absolute right-4 top-4 text-[32px] group-hover:scale-110 transition-transform duration-200 select-none">
              {c.emoji}
            </div>

            <p className="text-[9px] font-bold tracking-[2.5px] uppercase text-[#555] mb-2">Category</p>
            <p className="text-[16px] font-semibold text-white mb-1">{c.title}</p>
            <p className="text-[11px] text-[#555] mb-3">{c.subtitle}</p>

            <div className="flex items-center gap-2 text-[10px] text-[#666] uppercase tracking-[1.5px]">
              <span className="text-white font-bold">{c.items}</span> items
            </div>
            <div className="mt-3 h-[2px] bg-[#222] rounded-full">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${c.fill}%`, background: c.accent }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
