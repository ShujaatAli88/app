import { Database, Linkedin, Github, Mail, Phone, Heart } from 'lucide-react';

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
                <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Shujaat Ali</p>
                  <p className="text-xs text-gray-500 mono">Senior Data Engineer</p>
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
                  className="w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#ff6b35]" />
                </a>
                <a
                  href="https://github.com/ShujaatAli88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 transition-all"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-[#ff6b35]" />
                </a>
                <a
                  href="mailto:shujaatalee888@gmail.com"
                  className="w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 transition-all"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-[#ff6b35]" />
                </a>
                <a
                  href="tel:+923185097422"
                  className="w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 transition-all"
                >
                  <Phone className="w-5 h-5 text-gray-400 hover:text-[#ff6b35]" />
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
              Built with <Heart className="w-4 h-4 text-[#ff6b35]" /> for data excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
