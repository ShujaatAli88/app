import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiPython, SiSelenium, SiPostgresql, SiDocker,
  SiMongodb, SiGooglecloud, SiScrapy,
  SiFlask, SiFastapi, SiGraphql,
  SiApachekafka, SiRedis,
  SiJavascript, SiGnubash, SiLinux,
  SiMake, SiN8N, SiZapier,
  SiGooglebigquery, SiGooglechrome, SiOpenapiinitiative,
  SiPandas, SiNumpy, SiGit, SiSentry, SiGooglesheets,
  SiCloudflare, SiShieldsdotio, SiIlovepdf, SiClockify,
  SiAiohttp,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { IoScanOutline } from 'react-icons/io5';
import type { IconType } from 'react-icons';

gsap.registerPlugin(ScrollTrigger);

interface OrbitTech {
  name: string;
  orbit: 1 | 2 | 3;
  Icon: IconType;
  color: string;
}

const orbitTechs: OrbitTech[] = [
  { name: 'Python',     orbit: 1, Icon: SiPython,      color: '#3776AB' },
  { name: 'Scrapy',     orbit: 1, Icon: SiScrapy,      color: '#60A839' },
  { name: 'Selenium',   orbit: 2, Icon: SiSelenium,    color: '#43B02A' },
  { name: 'PostgreSQL', orbit: 2, Icon: SiPostgresql,  color: '#336791' },
  { name: 'MongoDB',    orbit: 2, Icon: SiMongodb,     color: '#47A248' },
  { name: 'AWS',        orbit: 3, Icon: FaAws,         color: '#FF9900' },
  { name: 'Docker',     orbit: 3, Icon: SiDocker,      color: '#2496ED' },
  { name: 'GCP',        orbit: 3, Icon: SiGooglecloud, color: '#4285F4' },
];

const techCategories = [
  {
    name: 'Languages',
    items: [
      { name: 'Python',     Icon: SiPython,      color: '#3776AB', level: 95 },
      { name: 'SQL',        Icon: SiPostgresql,  color: '#336791', level: 90 },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E', level: 85 },
      { name: 'Bash',       Icon: SiGnubash,     color: '#4EAA25', level: 80 },
    ],
  },
  {
    name: 'Frameworks & Tools',
    items: [
      { name: 'Selenium',      Icon: SiSelenium,   color: '#43B02A', level: 95 },
      { name: 'Scrapy',        Icon: SiScrapy,     color: '#60A839', level: 90 },
      { name: 'Playwright',    Icon: SiGooglechrome, color: '#4285F4', level: 85 },
      { name: 'Flask',         Icon: SiFlask,      color: '#ffffff', level: 90 },
      { name: 'FastAPI',       Icon: SiFastapi,    color: '#009688', level: 85 },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'PostgreSQL', Icon: SiPostgresql,  color: '#336791', level: 90 },
      { name: 'MongoDB',    Icon: SiMongodb,     color: '#47A248', level: 85 },
      { name: 'Redis',      Icon: SiRedis,       color: '#DC382D', level: 80 },
      { name: 'BigQuery',   Icon: SiGooglebigquery, color: '#4285F4', level: 80 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS',    Icon: FaAws,         color: '#FF9900', level: 85 },
      { name: 'GCP',    Icon: SiGooglecloud, color: '#4285F4', level: 80 },
      { name: 'Docker', Icon: SiDocker,      color: '#2496ED', level: 85 },
      { name: 'Linux',  Icon: SiLinux,        color: '#FCC624', level: 90 },
    ],
  },
  {
    name: 'APIs & Integration',
    items: [
      { name: 'GraphQL',   Icon: SiGraphql, color: '#E10098', level: 80 },
      { name: 'FastAPI',   Icon: SiFastapi, color: '#009688', level: 85 },
      { name: 'REST APIs', Icon: SiOpenapiinitiative, color: '#6BA539', level: 95 },
      { name: 'Kafka',     Icon: SiApachekafka,       color: '#c0c0c0', level: 75 },
    ],
  },
  {
    name: 'Automation',
    items: [
      { name: 'Playwright', Icon: SiGooglechrome, color: '#4285F4', level: 85 },
      { name: 'Make.com',   Icon: SiMake,         color: '#6D00CC', level: 85 },
      { name: 'n8n',        Icon: SiN8N,          color: '#EA4B71', level: 80 },
      { name: 'Zapier',     Icon: SiZapier,       color: '#FF4A00', level: 90 },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleTrigger = ScrollTrigger.create({
        trigger: '.tech-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.tech-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
        },
        once: true,
      });
      triggersRef.current.push(titleTrigger);

      const orbitTrigger = ScrollTrigger.create({
        trigger: orbitRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(orbitRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' });
        },
        once: true,
      });
      triggersRef.current.push(orbitTrigger);

      const categoriesTrigger = ScrollTrigger.create({
        trigger: '.tech-categories',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.tech-category', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' });
        },
        once: true,
      });
      triggersRef.current.push(categoriesTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(t => t.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6b35]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="tech-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">Technology</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A battle-tested arsenal of tools and technologies for extracting,
              processing, and delivering data at scale.
            </p>
          </div>

          {/* Orbital Visualization */}
          <div
            ref={orbitRef}
            className="relative w-full max-w-lg mx-auto mb-20 aspect-square hidden lg:block"
          >
            {/* Center node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#111] border-2 border-[#ff6b35] rounded-full flex items-center justify-center z-10"
              style={{ boxShadow: '0 0 24px rgba(255,107,53,0.3)' }}>
              <span className="text-[#ff6b35] font-bold text-lg">DATA</span>
            </div>

            {/* Orbit rings + nodes */}
            {[1, 2, 3].map((orbit) => (
              <div
                key={orbit}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1a1a1a]"
                style={{ width: `${orbit * 200}px`, height: `${orbit * 200}px` }}
              >
                {orbitTechs
                  .filter(t => t.orbit === orbit)
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className="absolute top-1/2 left-1/2 w-0 h-0"
                      style={{
                        animation: `orbit${orbit} ${15 + orbit * 5}s linear infinite`,
                        animationDelay: `${index * -4}s`,
                      }}
                    >
                      {/* Icon pill — logo only, no text */}
                      <div
                        className="absolute -translate-x-1/2 -translate-y-1/2 group/node"
                        style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}
                        title={tech.name}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-default"
                          style={{
                            background: '#0d0d0d',
                            border: `1px solid ${tech.color}35`,
                            boxShadow: `0 0 0px ${tech.color}00`,
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${tech.color}60`;
                            (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}90`;
                            (e.currentTarget as HTMLElement).style.background = `${tech.color}15`;
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${tech.color}00`;
                            (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}35`;
                            (e.currentTarget as HTMLElement).style.background = '#0d0d0d';
                          }}
                        >
                          <tech.Icon size={28} color={tech.color} />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}

            <style>{`
              @keyframes orbit1 {
                from { transform: translate(-50%,-50%) rotate(0deg)   translateX(100px) rotate(0deg); }
                to   { transform: translate(-50%,-50%) rotate(360deg) translateX(100px) rotate(-360deg); }
              }
              @keyframes orbit2 {
                from { transform: translate(-50%,-50%) rotate(0deg)   translateX(200px) rotate(0deg); }
                to   { transform: translate(-50%,-50%) rotate(360deg) translateX(200px) rotate(-360deg); }
              }
              @keyframes orbit3 {
                from { transform: translate(-50%,-50%) rotate(0deg)   translateX(300px) rotate(0deg); }
                to   { transform: translate(-50%,-50%) rotate(360deg) translateX(300px) rotate(-360deg); }
              }
            `}</style>
          </div>

          {/* Tech Categories Grid */}
          <div className="tech-categories grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category) => (
              <div
                key={category.name}
                className="tech-category group bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#ff6b35]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff6b35] rounded-full" />
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {item.Icon
                            ? <item.Icon size={14} color={item.color} />
                            : <span className="w-3.5 h-3.5 rounded-sm inline-block" style={{ background: item.color }} />
                          }
                          <span className="text-sm text-gray-400">{item.name}</span>
                        </div>
                        <span className="text-xs mono text-[#ff6b35]">{item.level}%</span>
                      </div>
                      <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${item.level}%`,
                            background: `linear-gradient(90deg, ${item.color}cc, ${item.color})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional tools */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mono mb-4">ADDITIONAL TOOLS & PLATFORMS</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Requests',      Icon: SiAiohttp,       color: '#2C5BB4' },
                { name: 'Pandas',        Icon: SiPandas,        color: '#9B59B6' },
                { name: 'NumPy',         Icon: SiNumpy,         color: '#4DABCF' },
                { name: 'Git',           Icon: SiGit,           color: '#F05032' },
                { name: 'Cron',          Icon: SiClockify,      color: '#03A9F4' },
                { name: 'Sentry',        Icon: SiSentry,        color: '#A855F7' },
                { name: 'Webshare',      Icon: SiCloudflare,    color: '#F38020' },
                { name: '2Captcha',      Icon: SiShieldsdotio,  color: '#58CA00' },
                { name: 'Google Sheets', Icon: SiGooglesheets,  color: '#34A853' },
                { name: 'PDFMiner',      Icon: SiIlovepdf,      color: '#E91E63' },
                { name: 'OCR',           Icon: IoScanOutline,   color: '#ff6b35' },
              ].map(({ name, Icon, color }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-sm text-gray-400 hover:text-white hover:border-[#ff6b35]/30 transition-all cursor-default group"
                >
                  <Icon size={16} color={color} />
                  {name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
