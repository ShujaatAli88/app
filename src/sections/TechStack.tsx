import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    name: 'Languages',
    items: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Bash', level: 80 },
    ],
  },
  {
    name: 'Frameworks & Tools',
    items: [
      { name: 'Selenium', level: 95 },
      { name: 'Scrapy', level: 90 },
      { name: 'Playwright', level: 85 },
      { name: 'BeautifulSoup', level: 90 },
      { name: 'PyDoll', level: 80 },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'BigQuery', level: 80 },
      { name: 'Airtable', level: 85 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', level: 85 },
      { name: 'GCP', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    name: 'APIs & Integration',
    items: [
      { name: 'Flask', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    name: 'Automation',
    items: [
      { name: 'Zapier', level: 90 },
      { name: 'Make.com', level: 85 },
      { name: 'n8n', level: 80 },
    ],
  },
];

const orbitTechs = [
  { name: 'Python', orbit: 1 },
  { name: 'Selenium', orbit: 2 },
  { name: 'AWS', orbit: 3 },
  { name: 'PostgreSQL', orbit: 2 },
  { name: 'Docker', orbit: 3 },
  { name: 'Scrapy', orbit: 1 },
  { name: 'MongoDB', orbit: 2 },
  { name: 'GCP', orbit: 3 },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titleTrigger = ScrollTrigger.create({
        trigger: '.tech-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.tech-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(titleTrigger);

      // Orbit animation
      const orbitTrigger = ScrollTrigger.create({
        trigger: orbitRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            orbitRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(orbitTrigger);

      // Tech categories animation
      const categoriesTrigger = ScrollTrigger.create({
        trigger: '.tech-categories',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.tech-category',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggersRef.current.push(categoriesTrigger);
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
      id="tech-stack"
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6b35]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="tech-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              Technology
            </p>
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
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#111] border-2 border-[#ff6b35] rounded-full flex items-center justify-center z-10">
              <span className="text-[#ff6b35] font-bold text-lg">DATA</span>
            </div>

            {/* Orbit rings */}
            {[1, 2, 3].map((orbit) => (
              <div
                key={orbit}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#222]"
                style={{
                  width: `${orbit * 200}px`,
                  height: `${orbit * 200}px`,
                }}
              >
                {/* Orbiting techs */}
                {orbitTechs
                  .filter((tech) => tech.orbit === orbit)
                  .map((tech, index) => (
                      <div
                        key={tech.name}
                        className="absolute top-1/2 left-1/2 w-0 h-0"
                        style={{
                          animation: `orbit${orbit} ${15 + orbit * 5}s linear infinite`,
                          animationDelay: `${index * -3}s`,
                        }}
                      >
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#111] border border-[#333] rounded-lg px-3 py-2 text-xs mono text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35]/50 transition-colors cursor-default"
                          style={{
                            transform: `translate(-50%, -50%) rotate(0deg)`,
                          }}
                        >
                          {tech.name}
                        </div>
                      </div>
                    ))}
              </div>
            ))}

            {/* Orbit animations */}
            <style>{`
              @keyframes orbit1 {
                from { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg); }
              }
              @keyframes orbit2 {
                from { transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg); }
              }
              @keyframes orbit3 {
                from { transform: translate(-50%, -50%) rotate(0deg) translateX(300px) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg) translateX(300px) rotate(-360deg); }
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
                        <span className="text-sm text-gray-400">{item.name}</span>
                        <span className="text-xs mono text-[#ff6b35]">{item.level}%</span>
                      </div>
                      <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c5a] rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tools */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mono mb-4">ADDITIONAL TOOLS & PLATFORMS</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Requests', 'Pandas', 'NumPy', 'Git', 'Cron', 'Sentry',
                'Webshare', '2Captcha', 'Google Sheets', 'PDFMiner', 'OCR',
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-lg text-sm text-gray-400 hover:text-[#ff6b35] hover:border-[#ff6b35]/30 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
