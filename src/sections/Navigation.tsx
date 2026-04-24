import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Live Data', href: '#data-sample' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-lg border-b border-[#222]'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3 group"
            >
              {/* Exquisite corner-bracket logo frame */}
              <div className="logo-bracket shrink-0 p-3">
                <div className="logo-bracket-inner">
                  <span className="corner-tr" />
                  <span className="corner-bl" />
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="logo-breathe object-contain relative z-10"
                    style={{ height: '72px', width: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div className="hidden sm:block">
                <p
                  className="font-bold text-base leading-tight tracking-tight"
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
                  Data Engineer
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#ff6b35] group-hover:w-1/2 transition-all" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6"
              >
                Get a Free Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-4 right-4 bg-[#111] border border-[#333] rounded-xl p-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#333]">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
            >
              Get a Free Data Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
