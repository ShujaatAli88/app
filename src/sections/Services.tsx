import { useEffect, useRef } from 'react';
import { 
  Globe, 
  Shield, 
  Cloud, 
  Workflow, 
  FileText, 
  Bot 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: 'Web Scraping & Data Extraction',
    description: 'Production-grade scraping of static and dynamic websites using Selenium, Scrapy, and Playwright. Extract data at scale with intelligent retry logic and rate limiting.',
    features: ['Static & Dynamic Sites', 'JavaScript Rendering', 'Infinite Scroll Handling', 'AJAX Request Interception'],
  },
  {
    icon: Shield,
    title: 'Anti-Bot & CAPTCHA Bypass',
    description: 'Advanced evasion techniques to bypass bot detection, CAPTCHAs, and rate limiting. Using residential proxies, fingerprint rotation, and human-like behavior simulation.',
    features: ['2Captcha Integration', 'Proxy Rotation', 'Fingerprint Spoofing', 'Behavioral Mimicry'],
  },
  {
    icon: Cloud,
    title: 'Cloud-Deployed Scrapers',
    description: 'Deploy scrapers on AWS, GCP, or VPS with Docker containerization. Auto-scaling, load balancing, and 99.9% uptime with monitoring and alerting.',
    features: ['AWS/GCP Deployment', 'Docker Containers', 'Auto-scaling', 'Sentry Monitoring'],
  },
  {
    icon: Workflow,
    title: 'Data Pipelines & APIs',
    description: 'Build custom REST APIs with Flask and FastAPI. Design ETL pipelines that transform raw data into clean, structured formats ready for analysis.',
    features: ['Flask/FastAPI', 'ETL Pipelines', 'Real-time Streaming', 'Webhook Integration'],
  },
  {
    icon: FileText,
    title: 'PDF & Document Parsing',
    description: 'Extract structured data from PDFs, scanned documents, and images using OCR and intelligent parsing. Handle tables, forms, and complex layouts.',
    features: ['OCR Extraction', 'Table Parsing', 'Form Recognition', 'Batch Processing'],
  },
  {
    icon: Bot,
    title: 'Automation & AI Workflows',
    description: 'Connect systems with Zapier, Make.com, and n8n. Build AI-powered workflows that automate repetitive tasks and decision-making processes.',
    features: ['Zapier/Make.com/n8n', 'AI Integration', 'Scheduled Workflows', 'Notification Systems'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titleTrigger = ScrollTrigger.create({
        trigger: '.services-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.services-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(titleTrigger);

      // Cards staggered animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const cardTrigger = ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              card,
              { 
                y: 60, 
                opacity: 0,
                scale: 0.95,
              },
              { 
                y: 0, 
                opacity: 1,
                scale: 1,
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'power3.out',
              }
            );
          },
          once: true,
        });
        triggersRef.current.push(cardTrigger);
      });
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
      id="services"
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ff6b35 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="services-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              End-to-end data infrastructure engineering. From extraction to delivery, 
              I build systems that transform raw web data into business intelligence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative"
              >
                <div className="relative h-full bg-[#111] border border-[#222] rounded-xl p-6 lg:p-8 transition-all duration-500 hover:border-[#ff6b35]/50 hover:glow-orange overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 bg-[#1a1a1a] border border-[#333] rounded-lg flex items-center justify-center group-hover:border-[#ff6b35]/50 group-hover:bg-[#ff6b35]/10 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-[#ff6b35]" />
                    </div>
                    {/* Animated ring on hover */}
                    <div className="absolute inset-0 w-14 h-14 rounded-lg border border-[#ff6b35]/30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff6b35] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li 
                          key={feature}
                          className="flex items-center gap-2 text-xs text-gray-500 mono"
                        >
                          <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#ff6b35]/50 to-transparent transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-[#ff6b35]/50 to-transparent transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
