'use client'

export default function CampaignSection() {
  return (
    <section className="px-7 pb-7">
      <div className="relative bg-[#0f0f0f] border border-[#222] rounded-2xl overflow-hidden min-h-[210px] group">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,26,26,0.03) 39px, rgba(255,26,26,0.03) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,26,26,0.03) 39px, rgba(255,26,26,0.03) 40px)
          `,
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(90deg, #0f0f0f 40%, rgba(26,0,0,0.7) 100%)',
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff1a1a]" />
        <div className="relative z-10 p-10 pb-12">
          <p className="font-cond text-[10px] font-bold tracking-[3px] uppercase text-[#ff1a1a] mb-3">
            Featured Athlete · Summer 2026
          </p>
          <h2 className="font-bebas text-[54px] text-white leading-[0.92] tracking-[2px] mb-5">
            BUILT TO<br />MOVE YOU.
          </h2>
          <button className="bg-[#ff1a1a] hover:bg-[#e01515] text-white font-cond font-bold text-[13px] tracking-[2px] uppercase px-7 py-3 rounded-lg transition-all duration-150 shadow-lg shadow-[#ff1a1a]/20 hover:-translate-y-0.5">
            Explore Campaign
          </button>
        </div>
        <div className="absolute right-12 bottom-0 text-[120px] leading-none select-none opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500">
          🏃‍♂️
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(255,26,26,0.1) 0%, transparent 70%)',
        }} />
      </div>
    </section>
  )
}