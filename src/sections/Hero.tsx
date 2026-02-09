import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [greetingDecoded, setGreetingDecoded] = useState('');
  const greetingText = "Hi, I'm Shujaat Ali";
  
  // Typewriter decode effect
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iteration = 0;
    const interval = setInterval(() => {
      setGreetingDecoded(
        greetingText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return greetingText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= greetingText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 2;
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    }));
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance
      if (frameCount % 2 === 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const particles = particlesRef.current;
        
        particles.forEach((particle, i) => {
          // Mouse repulsion (only process every 5th particle for performance)
          if (i % 5 === 0) {
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const force = (150 - dist) / 150;
              particle.vx -= (dx / dist) * force * 0.5;
              particle.vy -= (dy / dist) * force * 0.5;
            }
          }
          
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Damping
          particle.vx *= 0.99;
          particle.vy *= 0.99;
          
          // Boundary wrap
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = i % 10 === 0 ? '#ff6b35' : '#444';
          ctx.fill();
        });
        
        // Draw connections (limit to every 3rd particle for performance)
        ctx.strokeStyle = 'rgba(255, 107, 53, 0.08)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i += 3) {
          for (let j = i + 1; j < particles.length; j += 3) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    if (!heroRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(
        '.hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5 }
      )
      .fromTo(
        '.hero-description',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.hero-cta',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo(
        '.hero-social',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      )
      .fromTo(
        imageRef.current,
        { x: 100, opacity: 0, rotateY: -15 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1 },
        '-=1'
      );
    }, heroRef.current);
    
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000 100%)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div ref={textRef} className="space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase data-pulse">
                Senior Web Data Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="typewriter-cursor">{greetingDecoded}</span>
              </h1>
            </div>
            
            {/* Title */}
            <div className="hero-title overflow-hidden">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
                Data Extraction <span className="text-gradient font-semibold">Specialist</span>
              </h2>
            </div>
            
            {/* Description */}
            <div className="hero-description">
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
                I build <span className="text-white font-medium">high-performance data extraction systems</span> and 
                automation pipelines that scale. Turning the unstructured web into 
                <span className="text-[#ff6b35]"> structured intelligence</span>.
              </p>
            </div>
            
            {/* Social Proof */}
            <div className="hero-description flex flex-wrap gap-4 sm:gap-6 text-sm mono text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full"></span>
                3+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full"></span>
                50+ Projects Delivered
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff6b35] rounded-full"></span>
                Production-Grade Systems
              </span>
            </div>
            
            {/* CTA Button */}
            <div className="hero-cta pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group relative bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-6 text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 glow-orange hover:glow-orange-strong"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Data Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+923185097422"
                className="hero-social flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+92 318 5097422</span>
              </a>
              <a
                href="mailto:shujaatalee888@gmail.com"
                className="hero-social flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">shujaatalee888@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/shujaat-ali-824253155/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ShujaatAli88"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social flex items-center gap-2 text-gray-400 hover:text-[#ff6b35] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Right: Image */}
          <div
            ref={imageRef}
            className="relative hidden lg:flex justify-center items-center"
            style={{ perspective: '1000px' }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/20 to-transparent rounded-2xl blur-3xl transform scale-110" />
              
              {/* Image container with scanline effect */}
              <div className="relative scanline rounded-2xl overflow-hidden border border-[#333] glow-orange">
                <img
                  src="/hero-portrait.jpg"
                  alt="Shujaat Ali"
                  className="w-full max-w-md h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
