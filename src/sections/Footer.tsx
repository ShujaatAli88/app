import { Linkedin, Github, Mail, Phone, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Web Scraping', href: '#services' },
      { label: 'Anti-Bot Bypass', href: '#services' },
      { label: 'Cloud Deployment', href: '#services' },
      { label: 'Data Pipelines', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Process', href: '#process' },
      { label: 'Tech Stack', href: '#tech-stack' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-black border-t border-[#222]">
      {/* Main Footer */}
      <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#hero');
                }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="logo-bracket shrink-0 p-3">
                  <div className="logo-bracket-inner">
                    <span className="corner-tr" />
                    <span className="corner-bl" />
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="logo-breathe object-contain relative z-10"
                      style={{ height: '80px', width: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
                <div>
                  <p
                    className="font-bold text-lg leading-tight"
                    style={{
                      background: 'linear-gradient(90deg,#fff 0%,#ff6b35 55%,#fff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Shujaat Ali
                  </p>
                  <p className="text-xs mono tracking-widest uppercase text-[#ff6b35]/70">
                    Senior Data Engineer
                  </p>
                </div>
              </a>
              <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
                Building production-grade data extraction systems that transform 
                the unstructured web into structured intelligence. Available for 
                freelance projects and long-term engagements.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/shujaat-ali-824253155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#0077B5]/60 hover:bg-[#0077B5]/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0077B5] transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/ShujaatAli88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="mailto:shujaatalee888@gmail.com"
                  className="group w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#EA4335]/60 hover:bg-[#EA4335]/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#EA4335] transition-colors duration-300" />
                </a>
                <a
                  href="tel:+923185097422"
                  className="group w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#25D366]/60 hover:bg-[#25D366]/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="text-gray-400 hover:text-[#ff6b35] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#222]">
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Shujaat Ali. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-[#ff6b35]" /> for data excellence by Shujaat!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
