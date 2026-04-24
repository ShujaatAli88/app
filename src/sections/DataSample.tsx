import { useEffect, useRef } from 'react';
import { Home, DollarSign, Bed, Bath, Maximize, Building2, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const listings = [
  { address: '2103 N Silverton St', city: 'Mesa, AZ', price: 325000, beds: 3, baths: 2, sqft: 1510, broker: 'My Home Group Real Estate' },
  { address: '2211 Palomino Dr', city: 'San Antonio, TX', price: 150000, beds: 3, baths: 4, sqft: 2073, broker: 'eXp Realty' },
  { address: '7710 Green Lawn Dr', city: 'Houston, TX', price: 230000, beds: 3, baths: 2, sqft: 1494, broker: 'Realty of America' },
  { address: '1214 Fury St', city: 'Davenport, FL', price: 330000, beds: 4, baths: 3, sqft: 2041, broker: 'Independent' },
  { address: '13713 Sarah Circle Dr', city: 'Willis, TX', price: 296000, beds: 3, baths: 2, sqft: 2088, broker: 'Independent' },
  { address: '2749 Mayo Rd', city: 'Augusta, GA', price: 269900, beds: 3, baths: 2, sqft: 1631, broker: 'eXp Realty' },
];

const formatPrice = (p: number) =>
  '$' + p.toLocaleString('en-US');

const priceColor = (price: number) => {
  if (price >= 320000) return '#ff6b35';
  if (price >= 260000) return '#f59e0b';
  return '#22c55e';
};

export default function DataSample() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.datasample-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.datasample-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: '.datasample-table',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.listing-row', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' });
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: '.datasample-stats',
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo('.stat-card', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)' });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="data-sample" className="relative w-full py-24 lg:py-32 bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="datasample-title text-center mb-14">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
              Live Output Sample
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Real Estate Data <span className="text-gradient">Pipeline</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Live property listings scraped from <span className="text-white font-medium">Zillow</span> — structured, clean, and ready for analysis. This is what your data deliverable looks like.
            </p>
          </div>

          {/* Stats row */}
          <div className="datasample-stats grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Records', value: '6', sub: 'in this preview', icon: Home, color: '#ff6b35' },
              { label: 'Avg Price', value: '$266K', sub: 'across listings', icon: DollarSign, color: '#22c55e' },
              { label: 'States', value: '5', sub: 'AZ TX FL GA', icon: Building2, color: '#3b82f6' },
              { label: 'Fields', value: '6', sub: 'per record', icon: Maximize, color: '#a855f7' },
            ].map((s) => (
              <div key={s.label} className="stat-card bg-[#111] border border-[#222] rounded-xl p-4 flex items-center gap-3 hover:border-[#ff6b35]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">{s.value}</p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="datasample-table relative rounded-2xl overflow-hidden border border-[#222] bg-[#0a0a0a]">
            {/* Terminal header bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#111] border-b border-[#222]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="mono text-xs text-gray-500">zillow_listings.csv — 6 records</span>
              <div className="flex items-center gap-1 text-xs text-[#ff6b35] mono">
                <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                LIVE
              </div>
            </div>

            {/* Desktop table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    {['#', 'Address', 'City / State', 'Price', 'Bed', 'Bath', 'Sqft', 'Broker'].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-gray-500 mono text-xs uppercase tracking-wider whitespace-nowrap font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {listings.map((l, i) => (
                    <tr key={i} className="listing-row border-b border-[#111] hover:bg-[#111] transition-colors group">
                      <td className="px-4 py-4 mono text-gray-600 text-xs">{String(i + 1).padStart(2, '0')}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Home className="w-3.5 h-3.5 text-[#ff6b35] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-white font-medium">{l.address}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-400 mono text-xs">{l.city}</td>
                      <td className="px-4 py-4">
                        <span className="font-bold mono" style={{ color: priceColor(l.price) }}>
                          {formatPrice(l.price)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1 text-gray-300">
                          <Bed className="w-3.5 h-3.5 text-gray-500" />
                          <span className="mono">{l.beds}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1 text-gray-300">
                          <Bath className="w-3.5 h-3.5 text-gray-500" />
                          <span className="mono">{l.baths}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-300 mono text-xs">
                        {l.sqft.toLocaleString()} ft²
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-xs text-gray-400 mono">
                          {l.broker}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#111] border-t border-[#1a1a1a]">
              <span className="mono text-xs text-gray-600">Scraped via Python · Selenium · BeautifulSoup · Pandas</span>
              <div className="flex items-center gap-1.5 text-xs text-[#ff6b35] mono hover:text-white transition-colors cursor-pointer">
                <ExternalLink className="w-3 h-3" />
                Want this for your project?
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-center text-gray-600 text-sm mono mt-8">
            Scale this to <span className="text-[#ff6b35]">10,000+</span> records · Any city · Any filter · Delivered clean
          </p>
        </div>
      </div>
    </section>
  );
}
