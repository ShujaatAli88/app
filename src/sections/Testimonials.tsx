import { useEffect, useRef } from 'react';
import { Star, RefreshCw, Zap } from 'lucide-react';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PlatformIcon({ platform, color }: { platform: string; color: string }) {
  if (platform === 'Upwork') return <SiUpwork style={{ color, fontSize: 13, flexShrink: 0 }} />;
  if (platform === 'Fiverr') return <SiFiverr style={{ color, fontSize: 13, flexShrink: 0 }} />;
  // Freelancer — inline SVG compass-arrow mark (simplified brand shape)
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }} aria-label="Freelancer">
      <path d="M22.5 0h-21C.67 0 0 .67 0 1.5v21c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5v-21C24 .67 23.33 0 22.5 0zM14.11 17.54L12 15.43l-2.11 2.11-1.42-1.42L10.59 14 8.48 11.89l1.42-1.42L12 12.58l2.11-2.11 1.42 1.42L13.42 14l2.11 2.11-1.42 1.43zM18 9h-5l2-4h-6l-3 6h5l-2 4 9-6z"/>
    </svg>
  );
}

const reviews = [
  {
    name: 'murofiel',
    location: 'Mexico',
    flag: '🇲🇽',
    badge: 'Repeat Client',
    platform: 'Upwork',
    platformColor: '#14a800',
    rating: 5,
    timeAgo: '2 months ago',
    project: 'Lead Generation System',
    text: 'Incredible experience! He is a true expert in Python, Docker, and automation. He built a complex Lead Generation system that exceeded my expectations. I really appreciate his patience and the extra effort he put into creating a video tutorial to explain the workflow. Highly recommended!',
    avatar: 'MR',
    avatarGrad: 'linear-gradient(135deg,#1a6fb5,#0d47a1)',
    span: 'lg:col-span-2',
    accentColor: '#14a800',
  },
  {
    name: 'Matthew Chen',
    location: 'Canada',
    flag: '🇨🇦',
    badge: null,
    platform: 'Fiverr',
    platformColor: '#1dbf73',
    rating: 5,
    timeAgo: '4 months ago',
    project: 'Amazon Product CSV — 6,000 records',
    text: 'I hired this seller to generate a large Amazon-style product CSV, and they delivered exactly what I needed. I received a well-structured file with 6,000 unique product records, each with its own SKU, item name, product ID, brand, price, quantity, and detailed description. The data is clean, realistic, and ready to use.',
    avatar: 'MC',
    avatarGrad: 'linear-gradient(135deg,#1dbf73,#0d8a50)',
    span: 'lg:col-span-1',
    accentColor: '#1dbf73',
  },
  {
    name: 'James Hartley',
    location: 'United States',
    flag: '🇺🇸',
    badge: null,
    platform: 'Freelancer',
    platformColor: '#29b2fe',
    rating: 5,
    timeAgo: 'Mar 9, 2026',
    project: 'Python VS Code Setup Assistance',
    text: 'Shujaat is a very experienced and knowledgeable software engineer and he had no problem recommending solutions to the numerous problems I had when I installed Python. It was a pleasure working with him.',
    avatar: 'JH',
    avatarGrad: 'linear-gradient(135deg,#29b2fe,#0d6eaa)',
    span: 'lg:col-span-1',
    accentColor: '#29b2fe',
  },
  {
    name: 'Marco De Luca',
    location: 'Italy',
    flag: '🇮🇹',
    badge: null,
    platform: 'Freelancer',
    platformColor: '#29b2fe',
    rating: 5,
    timeAgo: 'Dec 2024 – May 2025',
    project: 'Large-Scale Web Scraping',
    text: 'Shujaat did a flawless large scale scrape job with detailed delivery. Very satisfied.',
    reply: 'Thank you so much for the great feedback! It was a pleasure working with you on this project. I really appreciate your clear communication and professionalism throughout.',
    avatar: 'MD',
    avatarGrad: 'linear-gradient(135deg,#ff6b35,#c0392b)',
    span: 'lg:col-span-2',
    accentColor: '#ff6b35',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.t-header',
        start: 'top 82%',
        onEnter: () => {
          gsap.fromTo('.t-header', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: '.t-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.t-card', { y: 60, opacity: 0, rotateX: 8 }, { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.13, ease: 'power3.out' });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-28 lg:py-36 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 120% 60% at 50% 0%, #0d0600 0%, #000 60%)' }}
    >
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,107,53,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,53,0.04) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Giant quote mark watermark */}
        <div
          className="absolute -top-8 left-8 lg:left-24 text-[220px] lg:text-[320px] font-serif leading-none select-none"
          style={{ color: 'rgba(255,107,53,0.04)', lineHeight: 1 }}
        >
          "
        </div>
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(255,107,53,0.06)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(41,178,254,0.05)' }} />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">

          {/* ── Header ── */}
          <div className="t-header text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#ff6b35]/10 border border-[#ff6b35]/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-[#ff6b35]" />
              <span className="mono text-xs text-[#ff6b35] tracking-widest uppercase">Client Reviews</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trusted by clients<br />
              <span style={{ background: 'linear-gradient(90deg,#ff6b35,#ff9a6c,#ff6b35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                across the globe
              </span>
            </h2>

            {/* Rating row */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff6b35] text-[#ff6b35]" />
                  ))}
                </div>
                <span className="text-white font-bold text-xl">5.0</span>
              </div>
              <div className="w-px h-5 bg-[#333]" />
              {[
                { label: 'Upwork', color: '#14a800' },
                { label: 'Fiverr', color: '#1dbf73' },
                { label: 'Freelancer', color: '#29b2fe' },
              ].map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 text-xs mono font-semibold px-3 py-1 rounded-full"
                  style={{ color: p.color, background: `${p.color}18`, border: `1px solid ${p.color}35` }}
                >
                  <PlatformIcon platform={p.label} color={p.color} />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Bento grid ── */}
          <div className="t-grid grid lg:grid-cols-3 gap-5 lg:gap-6" style={{ perspective: '1000px' }}>
            {reviews.map((r, i) => (
              <div key={i} className={`t-card ${r.span} group`}>
                {/* Gradient border wrapper */}
                <div
                  className="relative h-full rounded-2xl p-px transition-all duration-500 group-hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${r.accentColor}40 0%, #1a1a1a 50%, ${r.accentColor}20 100%)`,
                    boxShadow: `0 0 0 0 ${r.accentColor}00`,
                    transition: 'box-shadow 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 60px -10px ${r.accentColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${r.accentColor}00`;
                  }}
                >
                  {/* Card inner */}
                  <div
                    className="relative h-full rounded-2xl p-6 lg:p-8 overflow-hidden flex flex-col"
                    style={{ background: 'linear-gradient(160deg,#121212 0%,#0a0a0a 100%)' }}
                  >
                    {/* Spotlight on hover */}
                    <div
                      className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                      style={{ background: `${r.accentColor}20` }}
                    />

                    {/* Oversized quote */}
                    <div
                      className="absolute top-4 right-6 text-8xl font-serif leading-none select-none pointer-events-none"
                      style={{ color: `${r.accentColor}12` }}
                    >
                      "
                    </div>

                    {/* Platform + time */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs mono font-semibold px-3 py-1 rounded-full"
                        style={{ color: r.platformColor, background: `${r.platformColor}15`, border: `1px solid ${r.platformColor}30` }}
                      >
                        <PlatformIcon platform={r.platform} color={r.platformColor} />
                        {r.platform}
                      </span>
                      <span className="text-gray-600 text-xs mono">{r.timeAgo}</span>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({ length: r.rating }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-[#ff6b35] text-[#ff6b35]" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 leading-relaxed flex-1 mb-6" style={{ fontSize: i === 0 || i === 3 ? '1rem' : '0.9rem' }}>
                      "{r.text}"
                    </p>

                    {/* Freelancer reply */}
                    {r.reply && (
                      <div
                        className="mb-6 p-4 rounded-xl"
                        style={{ background: `${r.accentColor}08`, border: `1px solid ${r.accentColor}20` }}
                      >
                        <p className="text-xs mono mb-1.5" style={{ color: r.accentColor }}>↩ Shujaat replied</p>
                        <p className="text-gray-400 text-sm leading-relaxed">"{r.reply}"</p>
                      </div>
                    )}

                    {/* Project tag */}
                    <div className="mb-5">
                      <span className="text-xs mono text-gray-600 bg-[#1a1a1a] border border-[#222] rounded-md px-2.5 py-1">
                        📁 {r.project}
                      </span>
                    </div>

                    {/* Reviewer footer */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]">
                      {/* Avatar */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ring-2"
                        style={{ background: r.avatarGrad, outline: `2px solid ${r.accentColor}40` }}
                      >
                        {r.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-white font-semibold text-sm">{r.name}</span>
                          {r.badge && (
                            <span
                              className="flex items-center gap-1 text-xs rounded-full px-2 py-0.5"
                              style={{ color: r.accentColor, background: `${r.accentColor}15`, border: `1px solid ${r.accentColor}30` }}
                            >
                              <RefreshCw className="w-2.5 h-2.5" />
                              {r.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-gray-500 text-xs">{r.flag} {r.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom social proof ── */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-3">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-black"
                  style={{ background: r.avatarGrad }}
                >
                  {r.avatar[0]}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-gray-400 text-xs font-bold ring-2 ring-black">
                +46
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold">50+ satisfied clients</p>
              <p className="text-gray-500 text-sm">Across Upwork · Fiverr · Freelancer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
