'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, Star } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  oldPrice?: number
  stars: number
  emoji: string
  badge?: string
  badgeColor?: string
}

const PRODUCTS: Product[] = [
  { id:1, name:'Air Max 270',         category:"Men's Running",         price:7495,  oldPrice:9495, stars:5, emoji:'👟', badge:'New',     badgeColor:'#3ecf8e' },
  { id:2, name:'Jordan 1 Retro High', category:'Basketball / Lifestyle', price:11995,               stars:5, emoji:'👟', badge:'Hot',     badgeColor:'#ff1a1a' },
  { id:3, name:'Nike React Infinity', category:"Women's Running",        price:8295,  oldPrice:9995, stars:4, emoji:'🥿' },
  { id:4, name:'Nike Dunk Low Panda', category:'Lifestyle / Unisex',     price:6495,                stars:5, emoji:'👟', badge:'Limited', badgeColor:'#f0a500' },
]

function Card({ p }: { p: Product }) {
  const [loved, setLoved] = useState(false)
  const [added, setAdded] = useState(false)

  return (
    <div className="bg-[#131313] border border-[#222] rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:border-[#333] hover:shadow-xl hover:shadow-black/40 transition-all duration-200">
      <div className="h-[150px] bg-[#181818] flex items-center justify-center relative overflow-hidden">
        <span className="text-[68px] group-hover:scale-110 transition-transform duration-300 select-none">{p.emoji}</span>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,26,26,0.08) 0%, transparent 60%)' }} />
        {p.badge && (
          <span className="absolute top-2.5 left-2.5 text-white text-[8px] font-extrabold tracking-[1.5px] uppercase px-2 py-1 rounded-md" style={{ background: p.badgeColor }}>
            {p.badge}
          </span>
        )}
        <button
          onClick={e => { e.stopPropagation(); setLoved(l => !l) }}
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center transition-all duration-150 hover:scale-110"
        >
          <Heart size={13} fill={loved ? '#ff1a1a' : 'none'} stroke={loved ? '#ff1a1a' : '#888'} />
        </button>
      </div>

      <div className="p-3.5">
        <p className="text-[13px] font-semibold text-white mb-0.5 truncate">{p.name}</p>
        <p className="text-[11px] text-[#555] mb-2">{p.category}</p>
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} fill={i < p.stars ? '#f0a500' : 'none'} stroke={i < p.stars ? '#f0a500' : '#333'} />
          ))}
        </div>
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className="font-cond text-[17px] font-bold text-white">₱{p.price.toLocaleString()}</span>
          {p.oldPrice && <span className="text-[11px] text-[#444] line-through">₱{p.oldPrice.toLocaleString()}</span>}
          {p.oldPrice && (
            <span className="ml-auto text-[9px] font-bold text-[#3ecf8e]">
              -{Math.round((1 - p.price / p.oldPrice) * 100)}%
            </span>
          )}
        </div>
        <button
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1600) }}
          className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold tracking-[1px] uppercase transition-all duration-150 ${added ? 'bg-[#3ecf8e] text-white' : 'bg-[#ff1a1a] hover:bg-[#e01515] text-white'}`}
        >
          {added ? '✓ Added to Cart' : <><ShoppingCart size={12} /> Add to Cart</>}
        </button>
      </div>
    </div>
  )
}

export default function TrendingProducts() {
  return (
    <section className="px-7 py-8">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-bebas text-[30px] tracking-[2px] text-white">
          TRENDING <span className="text-[#ff1a1a]">PRODUCTS</span>
        </h2>
        <a href="/products" className="font-cond text-[11px] tracking-[2px] uppercase text-[#ff1a1a] no-underline hover:opacity-70 transition-opacity">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {PRODUCTS.map(p => <Card key={p.id} p={p} />)}
      </div>
    </section>
  )
}