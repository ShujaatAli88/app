import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyMe from './sections/WhyMe';
import TechStack from './sections/TechStack';
import UseCases from './sections/UseCases';
import Process from './sections/Process';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <TechStack />
        <UseCases />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
