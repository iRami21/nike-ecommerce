'use client'

import {
  LayoutDashboard, Home, Sparkles, Mars, Venus, Baby,
  Footprints, Shirt, Zap, Layers, Crown, TrendingUp, Tag,
  Package, Heart, Star, Headphones, Settings, LogOut
} from 'lucide-react'

interface SidebarProps {
  isExpanded: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const NAV = [
  {
    section: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard',    href: '/dashboard' },
      { icon: Home,            label: 'Home',         href: '/',          active: true },
      { icon: Sparkles,        label: 'New Arrivals', href: '/new',       badge: 'NEW' },
    ],
  },
  {
    section: 'Shop By',
    items: [
      { icon: Mars,  label: 'Men',   href: '/men' },
      { icon: Venus, label: 'Women', href: '/women' },
      { icon: Baby,  label: 'Kids',  href: '/kids' },
    ],
  },
  {
    section: 'Categories',
    items: [
      { icon: Footprints, label: 'Shoes',          href: '/shoes' },
      { icon: Shirt,      label: 'Apparel',         href: '/apparel' },
      { icon: Zap,        label: 'Sportswear',      href: '/sportswear' },
      { icon: Layers,     label: 'Collections',     href: '/collections' },
      { icon: Crown,      label: 'Limited Edition', href: '/limited',      badge: 'HOT' },
      { icon: TrendingUp, label: 'Best Sellers',    href: '/best-sellers' },
      { icon: Tag,        label: 'Promotions',      href: '/promotions' },
    ],
  },
  {
    section: 'Account',
    items: [
      { icon: Package,    label: 'Orders',          href: '/orders',  badge: '3' },
      { icon: Heart,      label: 'Wishlist',        href: '/wishlist' },
      { icon: Star,       label: 'Reviews',         href: '/reviews' },
      { icon: Headphones, label: 'Customer Support',href: '/support' },
    ],
  },
]

const FOOTER_NAV = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: LogOut,   label: 'Logout',   href: '/logout' },
]

export default function Sidebar({ isExpanded, onMouseEnter, onMouseLeave }: SidebarProps) {
  return (
    <nav
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: isExpanded ? 240 : 64, minWidth: isExpanded ? 240 : 64 }}
      className="flex flex-col flex-shrink-0 bg-[#111] border-r border-[#222] z-50 overflow-hidden transition-all duration-300 ease-in-out"
    >
      {/* Logo */}
      <div className="h-[60px] flex items-center px-4 border-b border-[#222] flex-shrink-0">
        <svg width="34" height="34" viewBox="0 0 50 50" fill="none" className="flex-shrink-0">
          <path d="M5 32C10 22 20 14 35 10C45 8 48 12 46 16C44 20 35 22 25 24C15 26 10 28 5 32Z" fill="#ff1a1a"/>
        </svg>
        <span
          className="font-bebas text-[22px] tracking-[4px] text-white ml-3 whitespace-nowrap sidebar-nav-label"
          style={{ opacity: isExpanded ? 1 : 0 }}
        >
          NIKE<span className="text-[#ff1a1a]">X</span>
        </span>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2">
        {NAV.map(({ section, items }) => (
          <div key={section} className="py-1">
            <div
              className="text-[9px] font-bold tracking-[2.5px] uppercase text-[#444] px-5 pt-2 pb-1 whitespace-nowrap sidebar-nav-label"
              style={{ opacity: isExpanded ? 1 : 0 }}
            >
              {section}
            </div>
            {items.map(({ icon: Icon, label, href, active, badge }: any) => (
              <a
                key={label}
                href={href}
                className={[
                  'flex items-center h-[42px] px-[15px] border-l-[3px] whitespace-nowrap no-underline transition-all duration-150 group',
                  active
                    ? 'bg-[#1c1c1c] border-[#ff1a1a] text-white'
                    : 'border-transparent text-[#666] hover:bg-[#1a1a1a] hover:text-white',
                ].join(' ')}
              >
                <Icon size={18} className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span
                  className="text-[13px] font-medium ml-3 sidebar-nav-label whitespace-nowrap"
                  style={{ opacity: isExpanded ? 1 : 0 }}
                >
                  {label}
                </span>
                {badge && (
                  <span
                    className="ml-auto text-[8px] font-extrabold tracking-[1px] bg-[#ff1a1a] text-white px-[6px] py-[2px] rounded-full sidebar-badge"
                    style={{ opacity: isExpanded ? 1 : 0 }}
                  >
                    {badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-[#222] py-1 flex-shrink-0">
        {FOOTER_NAV.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center h-[42px] px-[15px] border-l-[3px] border-transparent text-[#666] hover:bg-[#1a1a1a] hover:text-white no-underline transition-all duration-150 group whitespace-nowrap"
          >
            <Icon size={18} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span
              className="text-[13px] font-medium ml-3 sidebar-nav-label"
              style={{ opacity: isExpanded ? 1 : 0 }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}