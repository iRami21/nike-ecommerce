'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import AnalyticsWidgets from '@/components/dashboard/AnalyticsWidgets'
import TrendingProducts from '@/components/sections/TrendingProducts'
import CategoriesSection from '@/components/sections/CategoriesSection'
import FlashSale from '@/components/sections/FlashSale'
import CampaignSection from '@/components/sections/CampaignSection'
import FooterSection from '@/components/sections/FooterSection'

export default function HomePage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <Sidebar
        isExpanded={expanded}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
          <HeroSection />
          <AnalyticsWidgets />
          <div className="h-px bg-[#222] mx-7" />
          <TrendingProducts />
          <div className="h-px bg-[#222] mx-7" />
          <CategoriesSection />
          <div className="h-px bg-[#222] mx-7" />
          <FlashSale />
          <CampaignSection />
          <FooterSection />
        </main>
      </div>
    </div>
  )
}