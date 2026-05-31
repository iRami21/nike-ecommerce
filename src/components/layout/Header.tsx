'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, Bell, Heart, ShoppingCart, ChevronDown, User, Package, Settings, LogOut, X } from 'lucide-react'

export default function Header() {
  const [query, setQuery] = useState('')
  const [profileOpen, setProfileOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="h-[60px] bg-[#111] border-b border-[#222] flex items-center gap-4 px-5 flex-shrink-0 z-50 relative">
      <div className="font-bebas text-[28px] tracking-[4px] text-white flex-shrink-0 select-none">
        NIKE<span className="text-[#ff1a1a]">X</span>
      </div>

      <div className="flex-1 max-w-[420px] mx-4">
        <div className="flex items-center bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#444] focus-within:border-[#ff1a1a]/50 rounded-lg px-3.5 h-9 gap-2.5 transition-colors duration-200">
          <Search size={14} className="text-[#555] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search shoes, apparel, collections..."
            className="flex-1 bg-transparent border-none outline-none text-white text-[13px] font-bar placeholder:text-[#444] min-w-0"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-[#555] hover:text-white transition-colors">
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-0.5">
        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#666] hover:text-white hover:bg-[#1a1a1a] transition-all duration-150">
          <Bell size={17} />
          <span className="absolute top-[8px] right-[8px] w-[7px] h-[7px] bg-[#ff1a1a] rounded-full border-[1.5px] border-[#111]" />
        </button>

        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#666] hover:text-white hover:bg-[#1a1a1a] transition-all duration-150">
          <Heart size={17} />
        </button>

        <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#666] hover:text-white hover:bg-[#1a1a1a] transition-all duration-150">
          <ShoppingCart size={17} />
          <span className="absolute top-[6px] right-[6px] min-w-[16px] h-[16px] px-[4px] bg-[#ff1a1a] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-[1.5px] border-[#111]">
            3
          </span>
        </button>

        <div className="w-px h-6 bg-[#222] mx-2" />

        <div className="relative" ref={dropRef}>
          <button
            onClick={() => setProfileOpen(p => !p)}
            className="flex items-center gap-2 px-1 py-1 rounded-lg hover:bg-[#1a1a1a] transition-all duration-150"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff1a1a] to-[#cc0000] text-white text-[11px] font-bold flex items-center justify-center tracking-wide select-none">
              JP
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[12px] font-semibold text-white leading-none">Juan P.</p>
              <p className="text-[10px] text-[#555] mt-0.5">Customer</p>
            </div>
            <ChevronDown
              size={13}
              className="text-[#555] transition-transform duration-200"
              style={{ transform: profileOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] w-52 bg-[#161616] border border-[#2a2a2a] rounded-xl py-1.5 z-[100] shadow-2xl shadow-black/60 animate-fade-in">
              <div className="px-4 py-2.5 border-b border-[#222]">
                <p className="text-[13px] font-semibold text-white">Juan Dela Cruz</p>
                <p className="text-[11px] text-[#555] mt-0.5">juan@gmail.com</p>
              </div>
              {[
                { icon: User,     label: 'My Profile' },
                { icon: Package,  label: 'My Orders' },
                { icon: Heart,    label: 'Wishlist' },
                { icon: Settings, label: 'Settings' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="flex items-center gap-3 px-4 py-2 text-[13px] text-[#888] hover:text-white hover:bg-[#1e1e1e] no-underline transition-colors duration-150">
                  <Icon size={14} />
                  {label}
                </a>
              ))}
              <div className="border-t border-[#222] mt-1 pt-1">
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-[13px] text-[#ff4444] hover:bg-[#1e1e1e] no-underline transition-colors duration-150">
                  <LogOut size={14} /> Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}