import { useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  PenTool, 
  Rocket, 
  Database, 
  RefreshCw 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Understand Data Goals',
    description: 'We start with a deep dive into your business objectives. What data do you need? Where is it? How will you use it? This shapes everything that follows.',
    details: ['Requirements Gathering', 'Source Identification', 'Data Schema Design', 'Success Metrics'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design Scraping Architecture',
    description: 'I architect a robust extraction system tailored to your sources. Anti-bot strategy, proxy rotation, rate limiting—all planned upfront.',
    details: ['Technical Architecture', 'Bot Evasion Strategy', 'Scalability Planning', 'Error Handling'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy & Monitor',
    description: 'Your scraper goes live on cloud infrastructure with 24/7 monitoring. Sentry alerts, logging, and dashboards keep everything visible.',
    details: ['Cloud Deployment', 'Docker Containerization', 'Sentry Monitoring', 'Performance Tracking'],
  },
  {
    number: '04',
    icon: Database,
    title: 'Deliver Clean Data',
    description: 'Raw data is transformed, validated, and delivered in your preferred format—API, database, CSV, or direct integration.',
    details: ['ETL Processing', 'Data Validation', 'Format Conversion', 'API Delivery'],
  },
  {
    number: '05',
    icon: RefreshCw,
    title: 'Ongoing Optimization',
    description: 'Websites change. I continuously monitor, adapt, and optimize your scrapers to ensure uninterrupted data flow.',
    details: ['Source Monitoring', 'Adaptive Scraping', 'Performance Tuning', 'Regular Updates'],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const signalRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titleTrigger = ScrollTrigger.create({
        trigger: '.process-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.process-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(titleTrigger);

      // Circuit path animation
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        const pathTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 70%',
          onUpdate: (self) => {
            if (pathRef.current) {
              gsap.to(pathRef.current, {
                strokeDashoffset: pathLength * (1 - self.progress),
                duration: 0.1,
                ease: 'none',
              });
            }
          },
        });
        triggersRef.current.push(pathTrigger);
      }

      // Signal animation following the path
      if (signalRef.current && pathRef.current) {
        const pathTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 70%',
          onUpdate: (self) => {
            if (signalRef.current && pathRef.current) {
              const pathLength = pathRef.current.getTotalLength();
              const point = pathRef.current.getPointAtLength(pathLength * self.progress);
              gsap.to(signalRef.current, {
                x: point.x,
                y: point.y,
                duration: 0.1,
                ease: 'none',
              });
            }
          },
        });
        triggersRef.current.push(pathTrigger);
      }

      // Step cards animation
      const stepsTrigger = ScrollTrigger.create({
        trigger: '.process-steps',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.process-step',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(stepsTrigger);
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
      id="process"
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 10 8 M 10 12 L 10 20 M 0 10 L 8 10 M 12 10 L 20 10" stroke="#ff6b35" strokeWidth="0.5" fill="none"/>
            <circle cx="10" cy="10" r="1.5" fill="#ff6b35"/>
          </pattern>
          <rect width="100" height="100" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Main Circuit Path */}
      <svg
        className="absolute left-1/2 top-0 h-full w-32 -translate-x-1/2 pointer-events-none hidden lg:block"
        viewBox="0 0 128 1000"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 64 0 L 64 1000"
          fill="none"
          stroke="#ff6b35"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Signal dot */}
      <div
        ref={signalRef}
        className="absolute left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ top: '200px' }}
      >
        <div className="w-full h-full bg-[#ff6b35] rounded-full glow-orange-strong animate-pulse" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="process-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A battle-tested workflow that delivers reliable, scalable data systems—every time.
            </p>
          </div>

          {/* Process Steps */}
          <div className="process-steps space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`process-step relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number & Connector */}
                <div className={`hidden lg:flex items-center ${index % 2 === 1 ? 'lg:order-2 lg:justify-start' : 'lg:justify-end'}`}>
                  <div className="relative">
                    {/* Node circle */}
                    <div className="w-20 h-20 bg-[#111] border-2 border-[#ff6b35] rounded-full flex items-center justify-center glow-orange">
                      <span className="text-2xl font-bold text-[#ff6b35]">{step.number}</span>
                    </div>
                    {/* Connection line to card */}
                    <div 
                      className={`absolute top-1/2 w-16 h-px bg-gradient-to-r from-[#ff6b35] ${
                        index % 2 === 1 ? 'left-full' : 'right-full'
                      }`}
                      style={{ 
                        background: index % 2 === 1 
                          ? 'linear-gradient(to right, #ff6b35, transparent)' 
                          : 'linear-gradient(to left, #ff6b35, transparent)' 
                      }}
                    />
                  </div>
                </div>

                {/* Step Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="group bg-[#111] border border-[#222] rounded-xl p-6 lg:p-8 hover:border-[#ff6b35]/30 transition-all duration-500">
                    {/* Mobile step number */}
                    <div className="lg:hidden flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#111] border-2 border-[#ff6b35] rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-[#ff6b35]">{step.number}</span>
                      </div>
                      <div className="w-10 h-px bg-gradient-to-r from-[#ff6b35] to-transparent" />
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1a1a1a] border border-[#333] rounded-lg flex items-center justify-center group-hover:border-[#ff6b35]/50 group-hover:bg-[#ff6b35]/10 transition-all">
                        <step.icon className="w-6 h-6 text-[#ff6b35]" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-[#ff6b35] transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-xs text-gray-500 mono"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="inline-flex items-center gap-4 bg-[#111] border border-[#333] rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">
                Ready to start? <span className="text-white font-medium">Let's talk.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
