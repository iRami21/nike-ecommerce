'use client'

import { useState, useEffect, useRef } from 'react'

export default function LandingPage() {
  const [cartCount, setCartCount] = useState(0)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastText, setToastText] = useState('')
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)
  const [navSolid, setNavSolid] = useState(false)
  const [heroIdx, setHeroIdx] = useState(0)
  const [heroVisible, setHeroVisible] = useState(true)
  const toastTimer = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    { emoji: '👟', tag: 'Summer 2026 · New Drop' },
    { emoji: '🏀', tag: 'Jordan Collection 2026' },
    { emoji: '🥿', tag: 'Limited Edition Drop' },
  ]

  // Navbar scroll
  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero rotation
  useEffect(() => {
    const t = setInterval(() => {
      setHeroVisible(false)
      setTimeout(() => {
        setHeroIdx(i => (i + 1) % slides.length)
        setHeroVisible(true)
      }, 400)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const addCart = (name: string) => {
    const newCount = cartCount + 1
    setCartCount(newCount)
    setToastText(name)
    setToastVisible(true)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastVisible(false), 2800)
  }

  const handleSub = () => {
    if (!email) return
    setEmail('')
    setSubbed(true)
    setTimeout(() => setSubbed(false), 3500)
  }

  const PRODUCTS = [
    { id: 1, name: 'Air Max 270 React',   cat: "Men's Running / Lifestyle",  price: 7495,  old: 9495,  stars: 5, emoji: '👟', badge: 'New Drop',  badgeClass: 'badge-new',     big: true  },
    { id: 2, name: 'Jordan 1 Retro High', cat: 'Basketball / Lifestyle',     price: 11995, old: null,  stars: 5, emoji: '🏀', badge: 'Hot',       badgeClass: 'badge-hot',     big: false },
    { id: 3, name: 'Nike React Infinity', cat: "Women's Running",            price: 8295,  old: 9995,  stars: 4, emoji: '🥿', badge: null,        badgeClass: '',              big: false },
    { id: 4, name: 'Nike Dunk Low Panda', cat: 'Lifestyle / Unisex',         price: 6495,  old: null,  stars: 5, emoji: '👟', badge: 'Limited',   badgeClass: 'badge-limited', big: false },
  ]

  const CATS = [
    { emoji: '👟', name: 'SHOES',       count: '4,200+ styles', big: true  },
    { emoji: '🏃', name: 'RUNNING',     count: '890 products',  big: false },
    { emoji: '🏀', name: 'BASKETBALL',  count: '620 products',  big: false },
    { emoji: '💪', name: 'TRAINING',    count: '1,100 products',big: false },
    { emoji: '🌟', name: 'LIFESTYLE',   count: '2,400 products',big: false },
    { emoji: '🐂', name: 'JORDAN',      count: '380 products',  big: false },
    { emoji: '🎒', name: 'ACCESSORIES', count: '740 products',  big: false },
  ]

  const FEATURES = [
    { icon: '🚀', title: 'Fast Nationwide Delivery',   desc: 'Same-day metro delivery. 2–3 days provincial. Free shipping on orders over ₱2,500.' },
    { icon: '✅', title: '100% Authentic Products',     desc: 'Every item is sourced directly from Nike-authorized distributors. Guaranteed authentic or full refund.' },
    { icon: '🔄', title: 'Easy 30-Day Returns',         desc: 'Not happy? Return it hassle-free within 30 days. No questions asked.' },
    { icon: '💳', title: 'Flexible Payment Options',    desc: 'GCash, Maya, credit card, COD, and buy now pay later via BillEase.' },
  ]

  const TESTIMONIALS = [
    { quote: '"Ordered my Air Max 270 on a Tuesday, arrived Thursday. Quality is insane — feels 100% legit. NikeX is my go-to from now on."', name: 'Marco Reyes',  role: 'Manila, Philippines',  initials: 'MR', color: '#ff1a1a',          textColor: '#fff' },
    { quote: '"The website is so clean and easy to navigate. Found my size in seconds, checkout was smooth, and the packaging was premium."',  name: 'Angela Cruz',  role: 'Cebu, Philippines',    initials: 'AC', color: '#3ecf8e',          textColor: '#000' },
    { quote: '"Got the Jordan 1 Retro during the flash sale. Saved ₱2,000! COD was available and the rider was on time. Will order again."',  name: 'Diego Lim',    role: 'Davao, Philippines',   initials: 'DL', color: '#f0a500',          textColor: '#000' },
  ]

  const CHANNELS = [
    { icon: '🌐', name: 'NikeX Website',       desc: 'Our official website offers the full catalog, exclusive web-only drops, member discounts, and all payment methods.',          tag: 'Full Catalog · Exclusive Drops'   },
    { icon: '🛍️', name: 'Shopee & Lazada',     desc: 'Find us on Southeast Asia\'s biggest marketplaces. Enjoy platform vouchers, flash deals, and integrated buyer protection.',  tag: 'Vouchers · Buyer Protection'      },
    { icon: '📱', name: 'NikeX Mobile App',     desc: 'App-exclusive deals, push notifications for new drops, AR try-on features, and one-tap reorder of your favorites.',          tag: 'AR Try-On · Push Alerts'          },
    { icon: '📘', name: 'Facebook & Instagram', desc: 'Shop via Facebook Shops and Instagram Shopping. Discover styled outfits and DM us for personalized recommendations.',         tag: 'Social Commerce · DM Orders'      },
    { icon: '🏪', name: 'Physical Stores',      desc: 'Visit our flagship stores in SM, Ayala, and Robinsons Malls nationwide. Try before you buy with our style consultants.',     tag: 'Try Before Buy · In-Store Only'   },
    { icon: '📦', name: 'TikTok Shop',          desc: 'Watch live product demos, shop during live streams, and get exclusive TikTok-only coupon codes.',                            tag: 'Live Selling · TikTok Coupons'    },
  ]

  return (
    <>
      <div className="landing-root">

        {/* NAV */}
        <nav className="l-nav" style={{ background: navSolid ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.85)', backdropFilter: 'blur(20px)' }}>
          <a href="/landing" className="l-nav-logo">NIKE<span>X</span></a>
          <ul className="l-nav-links">
            <li><a href="#products">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#why">Why NikeX</a></li>
            <li><a href="#channels">Where to Buy</a></li>
          </ul>
          <div className="l-nav-right">
            <a href="/login" className="btn-ghost">Sign In</a>
            <a href="#products" className="btn-solid">Shop Now</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="l-hero">
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="hero-stripe" />
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-dot" />
              {slides[heroIdx].tag}
            </div>
            <h1 className="hero-title">
              JUST<br />
              <span className="stroke">DO</span><br />
              <span className="red">IT.</span>
            </h1>
            <p className="hero-sub">Air Max Pulse — Engineered for Every Move.<br />Premium gear. Delivered to your door.</p>
            <div className="hero-btns">
              <a href="#products" className="btn-hero-primary">Shop the Collection</a>
              <a href="#categories" className="btn-hero-ghost">Browse Categories</a>
            </div>
          </div>

          <div className="hero-shoe" style={{ opacity: heroVisible ? 1 : 0 }}>
            {slides[heroIdx].emoji}
          </div>

          <div className="hero-stats">
            {[['12K+','Products'],['4.9★','Rating'],['98%','Satisfaction'],['50+','Countries']].map(([n,l]) => (
              <div className="hero-stat" key={l}>
                <div className="num">{n}</div>
                <div className="lbl">{l}</div>
              </div>
            ))}
          </div>

          <div className="hero-scroll">
            <div className="hero-scroll-line" />
            Scroll to explore
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {['AIR MAX 270','JORDAN 1 RETRO','DUNK LOW PANDA','REACT INFINITY','BLAZER MID 77','PEGASUS 40','AIR FORCE 1','FREE RUN 5.0',
              'AIR MAX 270','JORDAN 1 RETRO','DUNK LOW PANDA','REACT INFINITY','BLAZER MID 77','PEGASUS 40','AIR FORCE 1','FREE RUN 5.0'].map((item, i) => (
              <div className="marquee-item" key={i}><span>●</span>{item}</div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <section className="l-section" id="products">
          <div className="products-header reveal">
            <div>
              <div className="eyebrow">This Season&apos;s Drops</div>
              <div className="sec-title">FEATURED <span className="red">PRODUCTS</span></div>
            </div>
            <a href="#" className="view-all">View All Products →</a>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <div key={p.id} className={`product-card reveal reveal-d${i} ${p.big ? 'big' : ''}`}>
                <div className="product-img-wrap">
                  <span style={{ fontSize: p.big ? '140px' : '68px' }}>{p.emoji}</span>
                  <div className="product-img-glow" />
                  {p.badge && <div className={`p-badge ${p.badgeClass}`}>{p.badge}</div>}
                  <WishButton />
                </div>
                <div className="product-info">
                  <div className="p-name">{p.name}</div>
                  <div className="p-cat">{p.cat}</div>
                  <div className="p-stars">{'★'.repeat(p.stars)}{'☆'.repeat(5 - p.stars)}</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:'6px', marginTop:'10px' }}>
                    <span className="p-price">₱{p.price.toLocaleString()}</span>
                    {p.old && <span className="p-old">₱{p.old.toLocaleString()}</span>}
                    {p.old && <span style={{ marginLeft:'auto', fontSize:'10px', fontWeight:700, color:'#3ecf8e' }}>-{Math.round((1-p.price/p.old)*100)}% OFF</span>}
                  </div>
                  <button className="p-cta" onClick={() => addCart(p.name)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" style={{ padding:0, background:'#101010' }}>
          <div style={{ padding:'80px 48px 40px' }} className="reveal">
            <div className="eyebrow">Find Your Style</div>
            <div className="sec-title">SHOP BY <span className="red">CATEGORY</span></div>
          </div>
          <div className="cats-grid">
            {CATS.map((c, i) => (
              <div key={c.name} className={`cat-item ${c.big ? 'big' : ''}`}>
                <div className="cat-bg-el">{c.emoji}</div>
                <div className="cat-overlay" />
                <div className="cat-info">
                  <div className="cat-name">{c.name}</div>
                  <div className="cat-count">{c.count}</div>
                </div>
                <div className="cat-arrow">→</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY NIKEX */}
        <section className="l-section" id="why">
          <div className="features-grid">
            <div>
              <div className="eyebrow reveal">Why Choose NikeX</div>
              <div className="sec-title reveal">BUILT FOR <span className="red">ATHLETES.</span></div>
              <div className="sec-sub reveal">From elite performance gear to streetwear essentials — we deliver premium quality with unmatched style.</div>
              <div className="features-list">
                {FEATURES.map((f, i) => (
                  <div key={f.title} className={`feature-item reveal reveal-d${i}`}>
                    <div className="feature-icon">{f.icon}</div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="features-visual reveal">
              <div className="features-visual-glow" />
              <span style={{ fontSize:'120px', display:'block', marginBottom:'20px' }}>👟</span>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'40px', letterSpacing:'2px', color:'#f5f5f0' }}>AIR MAX 270</div>
              <div style={{ fontSize:'13px', color:'#888', marginTop:'8px' }}>Engineered for maximum comfort & style</div>
              <div style={{ display:'flex', gap:'16px', justifyContent:'center', marginTop:'24px' }}>
                {[['270°','Air Unit'],['32mm','Heel Height'],['12oz','Weight']].map(([v,l], i) => (
                  <div key={l} style={{ display:'flex', alignItems:'center', gap:'16px' }}>
                    {i > 0 && <div style={{ width:'1px', background:'#222' }} />}
                    <div style={{ textAlign:'center' }}>
                      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'28px', color:'#f5f5f0' }}>{v}</div>
                      <div style={{ fontSize:'10px', color:'#555', letterSpacing:'1.5px', textTransform:'uppercase' }}>{l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="l-section-dark" id="reviews">
          <div className="reveal" style={{ textAlign:'center' }}>
            <div className="eyebrow">Customer Love</div>
            <div className="sec-title">WHAT THEY <span className="red">SAY</span></div>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testi-card reveal reveal-d${i}`}>
                <div className="testi-stars">★★★★★</div>
                <div className="testi-quote">{t.quote}</div>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: t.color, color: t.textColor }}>{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHANNELS */}
        <section className="l-section" id="channels">
          <div className="reveal">
            <div className="eyebrow">Multi-Channel Commerce</div>
            <div className="sec-title">WHERE TO <span className="red">BUY</span></div>
            <div className="sec-sub">Shop NikeX across all your favorite platforms — same authentic products, same great prices, wherever you are.</div>
          </div>
          <div className="channels-grid">
            {CHANNELS.map((c, i) => (
              <div key={c.name} className={`channel-card reveal reveal-d${i % 4}`}>
                <span className="channel-icon">{c.icon}</span>
                <div className="channel-name">{c.name}</div>
                <div className="channel-desc">{c.desc}</div>
                <span className="channel-tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-bg" />
          <div className="cta-grid" />
          <div className="cta-content">
            <div className="eyebrow">Don&apos;t Miss Out</div>
            <div className="cta-title">
              MAKE YOUR<br />
              <span className="stroke">MOVE.</span>
            </div>
            <p style={{ fontSize:'16px', color:'#888', marginBottom:'40px', maxWidth:'480px', margin:'0 auto 40px', lineHeight:'1.7' }}>
              Join 120,000+ athletes and sneakerheads who shop with NikeX. Get exclusive access to limited drops and member-only deals.
            </p>
            <div style={{ display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap' }}>
              <a href="/login" className="btn-hero-primary">Create Free Account</a>
              <a href="#products" className="btn-hero-ghost">Browse Products</a>
            </div>
            <div className="cta-email-wrap">
              <input
                type="email"
                placeholder="Enter your email for early access..."
                className="cta-email-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSub()}
              />
              <button className="cta-email-btn" onClick={handleSub}>Subscribe</button>
            </div>
            {subbed && <p style={{ marginTop:'12px', fontSize:'13px', color:'#3ecf8e' }}>✓ You&apos;re on the list! Watch your inbox.</p>}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="l-footer">
          <div className="footer-top">
            <div>
              <div className="footer-logo">NIKE<span>X</span></div>
              <div className="footer-tagline">Born to move. Built to inspire.<br />Premium athletic gear, delivered to you.</div>
              <div className="footer-socials">
                {['📸','🐦','👤','🎵','▶️'].map((s, i) => (
                  <a key={i} href="#" className="social-btn">{s}</a>
                ))}
              </div>
            </div>
            {[
              { title:'Shop',    links:['New Arrivals',"Men's","Women's","Kids'",'Sale'] },
              { title:'Help',    links:['FAQ','Shipping Policy','Returns','Track Order','Size Guide'] },
              { title:'Company', links:['About Us','Careers','Press','Terms & Conditions','Privacy Policy'] },
            ].map(col => (
              <div key={col.title} className="footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 NikeX Store · E-Commerce Subject · Part 5</div>
            <div className="footer-tags">
              <span className="footer-tag">Next.js 14</span>
              <span className="footer-tag">Node.js</span>
              <span className="footer-tag">MongoDB</span>
            </div>
          </div>
        </footer>

        {/* TOAST */}
        <div className="toast" style={{ transform: toastVisible ? 'translateY(0)' : 'translateY(100px)', opacity: toastVisible ? 1 : 0 }}>
          <span style={{ fontSize:'20px' }}>🛒</span>
          <div>
            <div className="toast-text">{toastText} added!</div>
            <div className="toast-sub">{cartCount} item{cartCount !== 1 ? 's' : ''} in your cart</div>
          </div>
        </div>

      </div>
    </>
  )
}

function WishButton() {
  const [wished, setWished] = useState(false)
  return (
    <button className="p-wish" onClick={e => { e.stopPropagation(); setWished(w => !w) }}>
      {wished ? '❤️' : '🤍'}
    </button>
  )
}