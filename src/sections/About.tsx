import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiPython, SiSelenium, SiScrapy, SiPostgresql,
  SiDocker, SiFastapi, SiShieldsdotio, SiApacheairflow,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const coreSkills = [
  { name: 'Python',         Icon: SiPython,       color: '#3776AB' },
  { name: 'Selenium',       Icon: SiSelenium,     color: '#43B02A' },
  { name: 'Scrapy',         Icon: SiScrapy,       color: '#60A839' },
  { name: 'PostgreSQL',     Icon: SiPostgresql,   color: '#336791' },
  { name: 'AWS',            Icon: FaAws,          color: '#FF9900' },
  { name: 'Docker',         Icon: SiDocker,       color: '#2496ED' },
  { name: 'FastAPI',        Icon: SiFastapi,      color: '#009688' },
  { name: 'Anti-Bot',       Icon: SiShieldsdotio, color: '#58CA00' },
  { name: 'Data Pipelines', Icon: SiApacheairflow,color: '#017CEE' },
];

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Briefcase, label: 'Experience', value: '3+ Years' },
  { icon: Calendar, label: 'Availability', value: 'Full-time' },
  { icon: MapPin, label: 'Location', value: 'Remote / Worldwide' },
  { icon: GraduationCap, label: 'Focus', value: 'Data Engineering' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [decodedText, setDecodedText] = useState('');
  const fullText = `I'm a Senior Web Data Engineer with 3+ years of experience building production-grade data extraction systems. I specialize in turning the chaotic, unstructured web into clean, actionable intelligence.

My expertise spans the entire data pipeline—from bypassing anti-bot measures and CAPTCHAs to deploying scalable scrapers on AWS and GCP. I've extracted millions of records across real estate, e-commerce, finance, and SaaS industries.

I don't just write scripts. I engineer resilient systems that monitor themselves, heal from failures, and deliver consistent results. Every project is built with scalability, security, and long-term maintainability in mind.

When you work with me, you get more than a scraper. You get a data partner who understands business goals, technical constraints, and the importance of reliable delivery.`;

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iteration = 0;
    const maxIterations = fullText.length * 2;
    
    const interval = setInterval(() => {
      setDecodedText(
        fullText
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char;
            if (index < iteration / 2) return fullText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      iteration++;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDecodedText(fullText);
      }
    }, 15);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: '.about-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.about-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Image animation
      ScrollTrigger.create({
        trigger: '.about-image',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.about-image',
            { x: -80, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Content animation
      ScrollTrigger.create({
        trigger: '.about-content',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.about-content',
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Highlights animation
      ScrollTrigger.create({
        trigger: '.about-highlights',
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            '.highlight-item',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 lg:py-32 bg-[#0a0a0a]"
    >
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff6b35]/5 to-transparent" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="about-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              Background
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="about-image relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent rounded-2xl blur-2xl transform scale-105" />
                
                {/* Image */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-[#333] scanline">
                  <img
                    src="/about-portrait.jpg"
                    alt="Shujaat Ali"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#111] border border-[#ff6b35]/50 rounded-xl px-6 py-4 glow-orange">
                  <p className="text-[#ff6b35] font-bold text-lg">3+ Years</p>
                  <p className="text-gray-500 text-sm">Experience</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="about-content space-y-8">
              {/* Bio text with decode effect */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Senior Web Data Engineer
                </h3>
                <div className="text-gray-400 leading-relaxed whitespace-pre-line mono text-sm">
                  {decodedText}
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="about-highlights grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="highlight-item group bg-[#111] border border-[#222] rounded-xl p-4 hover:border-[#ff6b35]/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#1a1a1a] border border-[#333] rounded-lg flex items-center justify-center group-hover:border-[#ff6b35]/50 group-hover:bg-[#ff6b35]/10 transition-all">
                        <item.icon className="w-4 h-4 text-[#ff6b35]" />
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="text-xs text-gray-500 mono uppercase">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Skills tags */}
              <div className="space-y-3">
                <p className="text-sm text-gray-500 mono uppercase">Core Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map(({ name, Icon, color }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-sm text-gray-400 hover:text-white hover:border-[#ff6b35]/30 transition-all cursor-default"
                    >
                      <Icon size={15} color={color} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
