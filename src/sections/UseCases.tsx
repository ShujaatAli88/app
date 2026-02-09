import { useEffect, useRef } from 'react';
import { 
  Building2, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  LineChart, 
  Layers 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Extract property listings, pricing trends, agent contacts, and market data from MLS platforms, Zillow, and local real estate websites.',
    examples: ['Property Listings', 'Price History', 'Agent Database', 'Market Analysis'],
    color: '#ff6b35',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Monitor competitor pricing, product catalogs, reviews, and inventory across Amazon, eBay, Shopify stores, and niche marketplaces.',
    examples: ['Price Monitoring', 'Product Catalogs', 'Review Analysis', 'Stock Tracking'],
    color: '#22c55e',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Build targeted prospect lists from LinkedIn, industry directories, and company websites with verified contact information.',
    examples: ['LinkedIn Prospecting', 'Company Data', 'Contact Enrichment', 'Email Verification'],
    color: '#3b82f6',
  },
  {
    icon: TrendingUp,
    title: 'Market Research',
    description: 'Gather competitive intelligence, industry trends, and consumer sentiment from news sites, forums, and social platforms.',
    examples: ['Competitor Analysis', 'Trend Tracking', 'Sentiment Analysis', 'Industry Reports'],
    color: '#a855f7',
  },
  {
    icon: LineChart,
    title: 'Financial Data',
    description: 'Extract stock prices, crypto data, economic indicators, and financial statements from exchanges and financial platforms.',
    examples: ['Stock Prices', 'Crypto Data', 'Economic Indicators', 'SEC Filings'],
    color: '#f59e0b',
  },
  {
    icon: Layers,
    title: 'SaaS Data Aggregation',
    description: 'Consolidate data from multiple SaaS platforms, APIs, and dashboards into unified reporting systems.',
    examples: ['API Integration', 'Dashboard Aggregation', 'Unified Reporting', 'Data Sync'],
    color: '#06b6d4',
  },
];

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titleTrigger = ScrollTrigger.create({
        trigger: '.usecases-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.usecases-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(titleTrigger);

      // Pipeline line animation
      if (lineRef.current) {
        const lineLength = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: lineLength,
          strokeDashoffset: lineLength,
        });

        const lineTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          onUpdate: (self) => {
            if (lineRef.current) {
              gsap.to(lineRef.current, {
                strokeDashoffset: lineLength * (1 - self.progress),
                duration: 0.1,
                ease: 'none',
              });
            }
          },
        });
        triggersRef.current.push(lineTrigger);
      }

      // Use case cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: '.usecases-grid',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.usecase-card',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(cardsTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      className="relative w-full py-24 lg:py-32 bg-[#0a0a0a]"
    >
      {/* Pipeline SVG Background */}
      <svg
        className="absolute left-8 lg:left-24 top-0 h-full w-4 pointer-events-none hidden lg:block"
        viewBox="0 0 16 1000"
        preserveAspectRatio="none"
      >
        <path
          ref={lineRef}
          d="M 8 0 L 8 1000"
          fill="none"
          stroke="url(#pipelineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0" />
            <stop offset="20%" stopColor="#ff6b35" stopOpacity="1" />
            <stop offset="80%" stopColor="#ff6b35" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="usecases-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              Applications
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Use <span className="text-gradient">Cases</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From real estate to fintech, I've helped businesses across industries 
              harness the power of web data.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="usecases-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="usecase-card group relative"
              >
                <div className="h-full bg-[#111] border border-[#222] rounded-xl p-6 lg:p-8 transition-all duration-500 hover:border-[#ff6b35]/30 hover:glow-orange overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top right, ${useCase.color}, transparent)` }}
                  />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div 
                      className="w-14 h-14 bg-[#1a1a1a] border border-[#333] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: `${useCase.color}30` }}
                    >
                      <useCase.icon 
                        className="w-7 h-7 transition-colors" 
                        style={{ color: useCase.color }}
                      />
                    </div>
                    {/* Node indicator for pipeline */}
                    <div 
                      className="absolute -left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 hidden lg:block"
                      style={{ borderColor: useCase.color, backgroundColor: '#0a0a0a' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff6b35] transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    {/* Examples */}
                    <div className="flex flex-wrap gap-2">
                      {useCase.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-xs text-gray-500 mono"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="absolute bottom-0 right-0 w-24 h-24 opacity-20"
                    style={{ 
                      background: `radial-gradient(circle at bottom right, ${useCase.color}, transparent)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">
              Have a unique data challenge?
            </p>
            <p className="text-sm text-gray-500 mono">
              I build custom solutions for any industry or use case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
