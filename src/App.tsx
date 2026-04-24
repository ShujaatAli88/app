import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyMe from './sections/WhyMe';
import TechStack from './sections/TechStack';
import UseCases from './sections/UseCases';
import DataSample from './sections/DataSample';
import Testimonials from './sections/Testimonials';
import Process from './sections/Process';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff9a6c]"
        style={{ width: '0%', transition: 'width 0.1s linear' }}
      />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: visible ? 'linear-gradient(135deg,#ff6b35,#ff4a00)' : 'transparent',
        boxShadow: visible ? '0 4px 24px rgba(255,107,53,0.45)' : 'none',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}

function App() {
  useEffect(() => {
    ScrollTrigger.defaults({ toggleActions: 'play none none none' });
    ScrollTrigger.refresh();
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <TechStack />
        <UseCases />
        <DataSample />
        <Testimonials />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
