import { useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Server, 
  Activity, 
  Shield, 
  Zap,
  Clock,
  Database
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { icon: XCircle, text: 'Scrapers breaking every week' },
  { icon: XCircle, text: 'Constant CAPTCHA blocks' },
  { icon: XCircle, text: 'Dirty, unstructured data' },
  { icon: XCircle, text: 'No monitoring or alerts' },
  { icon: XCircle, text: 'Slow, unreliable delivery' },
];

const solutions = [
  { icon: CheckCircle2, text: 'Resilient, self-healing systems' },
  { icon: CheckCircle2, text: 'Advanced bot evasion' },
  { icon: CheckCircle2, text: 'Clean, validated datasets' },
  { icon: CheckCircle2, text: '24/7 monitoring with Sentry' },
  { icon: CheckCircle2, text: 'On-time, every time' },
];

const stats = [
  { icon: Server, value: '99.9%', label: 'Uptime SLA' },
  { icon: Activity, value: '50M+', label: 'Records Extracted' },
  { icon: Shield, value: '100%', label: 'Data Security' },
  { icon: Zap, value: '<24h', label: 'Avg Setup Time' },
  { icon: Clock, value: '3+', label: 'Years Experience' },
  { icon: Database, value: '50+', label: 'Projects Delivered' },
];

export default function WhyMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titleTrigger = ScrollTrigger.create({
        trigger: '.whyme-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.whyme-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(titleTrigger);

      // Problem/Solution cards animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: '.comparison-container',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            '.problem-card',
            { x: -80, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
          gsap.fromTo(
            '.solution-card',
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(cardsTrigger);

      // Stats animation
      const statsTrigger = ScrollTrigger.create({
        trigger: '.stats-container',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.stat-item',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(statsTrigger);
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
      id="why-me"
      className="relative w-full py-24 lg:py-32 bg-[#0a0a0a]"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="whyme-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Work <span className="text-gradient">With Me</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I don't just write scrapers. I engineer production-grade data systems 
              designed for reliability, scale, and long-term success.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="comparison-container grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* Problems Card */}
            <div className="problem-card relative">
              <div className="h-full bg-gradient-to-br from-[#1a0a0a] to-[#111] border border-[#332222] rounded-xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#331111] border border-[#552222] rounded-lg flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-400">
                    The Problem
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Frustrated by broken scrapers and unreliable data?
                </p>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-gray-500"
                    >
                      <problem.icon className="w-5 h-5 text-red-500/70 flex-shrink-0" />
                      <span>{problem.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solutions Card */}
            <div className="solution-card relative">
              <div className="h-full bg-gradient-to-br from-[#0a1a0a] to-[#111] border border-[#223322] rounded-xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#113311] border border-[#225522] rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">
                    The Solution
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  I build systems that last.
                </p>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <solution.icon className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                      <span>{solution.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item group relative bg-[#111] border border-[#222] rounded-xl p-6 text-center hover:border-[#ff6b35]/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-[#1a1a1a] border border-[#333] rounded-lg flex items-center justify-center group-hover:border-[#ff6b35]/50 group-hover:bg-[#ff6b35]/10 transition-all">
                    <stat.icon className="w-5 h-5 text-[#ff6b35]" />
                  </div>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Built for <span className="text-white font-semibold">businesses</span>, not demos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mono text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Production-Grade Systems
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Scalable & Monitored
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Ethical & Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
