'use client'

import { useState } from 'react'
import { MessageCircle, Heart, Star, Sparkles, Send } from 'lucide-react'

const LINKS = {
  Help:    ['FAQ', 'Shipping Policy', 'Returns', 'Track Order', 'Size Guide'],
  Company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Investors'],
  Legal:   ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Accessibility'],
}

const SOCIALS = [
  { Icon: MessageCircle, label: 'Community' },
  { Icon: Heart, label: 'Favorites' },
  { Icon: Star, label: 'Reviews' },
  { Icon: Sparkles, label: 'New Drops' },
]

export default function FooterSection() {
  const [email, setEmail]   = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleSub = () => {
    if (!email) return
    setSubbed(true)
    setEmail('')
    setTimeout(() => setSubbed(false), 3000)
  }

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1e1e1e] px-7 py-8">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="font-bebas text-[34px] tracking-[4px] text-white leading-none mb-1">
            NIKE<span className="text-[#ff1a1a]">X</span>
          </div>
          <p className="text-[12px] text-[#444] mb-4 tracking-wide">Born to move. Built to inspire.</p>
          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, label }) => (
              <button key={label} aria-label={label} className="w-8 h-8 bg-[#161616] border border-[#222] rounded-lg flex items-center justify-center text-[#555] hover:border-[#ff1a1a]/60 hover:text-[#ff1a1a] transition-all duration-150">
                <Icon size={14} />
              </button>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-[#1e1e1e]">
            <p className="text-[9px] font-bold tracking-[2px] uppercase text-[#444] mb-2">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSub()}
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-[#161616] border border-[#222] focus:border-[#444] text-white text-[12px] px-3 py-2 rounded-lg outline-none placeholder:text-[#333] transition-colors"
              />
              <button
                onClick={handleSub}
                className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-150 ${subbed ? 'bg-[#3ecf8e]' : 'bg-[#ff1a1a] hover:bg-[#e01515]'}`}
              >
                <Send size={13} className="text-white" />
              </button>
            </div>
            {subbed && <p className="text-[10px] text-[#3ecf8e] mt-1.5">✓ Subscribed!</p>}
          </div>
        </div>

        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-[10px] font-bold tracking-[2px] uppercase text-white mb-4">{title}</h4>
            <ul className="space-y-2 list-none m-0 p-0">
              {items.map(item => (
                <li key={item}>
                  <a href="#" className="text-[12px] text-[#444] hover:text-white no-underline transition-colors duration-150 block">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-[#1e1e1e] flex items-center justify-between flex-wrap gap-2">
        <p className="text-[11px] text-[#333]">© 2026 NikeX Store · E-Commerce Subject Project</p>
        <p className="text-[11px] text-[#333]">Built with Next.js + Tailwind CSS</p>
      </div>
    </footer>
  )
}