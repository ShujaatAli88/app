import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  CheckCircle,
  Terminal
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      ScrollTrigger.create({
        trigger: '.contact-title',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.contact-title',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Form animation
      ScrollTrigger.create({
        trigger: '.contact-form',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.contact-form',
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Info animation
      ScrollTrigger.create({
        trigger: '.contact-info',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            '.contact-info',
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name} - Data Engineering Inquiry`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:shujaatalee888@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-24 lg:py-32 bg-black"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#ff6b35]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="contact-title text-center mb-16 lg:mb-20">
            <p className="mono text-sm text-[#ff6b35] tracking-wider uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Extract <span className="text-gradient">Value?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Let's discuss your data needs. I'll analyze your requirements and 
              propose a solution that fits your timeline and budget.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Terminal-style Form */}
            <div className="contact-form">
              <div className="bg-[#0a0a0a] border border-[#333] rounded-xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-[#111] border-b border-[#333] px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 ml-4 text-gray-500 text-sm mono">
                    <Terminal className="w-4 h-4" />
                    <span>contact.sh</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 lg:p-8">
                  {/* Welcome message */}
                  <div className="mb-6 text-sm mono">
                    <p className="text-green-500">$ ./init_contact.sh</p>
                    <p className="text-gray-400 mt-2">Welcome! Let's start a conversation.</p>
                    <p className="text-gray-500">Fill in the fields below to send me a message.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm mono text-[#ff6b35]">
                        <span className="text-green-500">$</span>
                        <span>name:</span>
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Enter your name"
                          required
                          className="bg-[#111] border-[#333] text-white placeholder:text-gray-600 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 mono"
                        />
                        {focusedField === 'name' && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-[#ff6b35] animate-pulse" />
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm mono text-[#ff6b35]">
                        <span className="text-green-500">$</span>
                        <span>email:</span>
                      </label>
                      <div className="relative">
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Enter your email"
                          required
                          className="bg-[#111] border-[#333] text-white placeholder:text-gray-600 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 mono"
                        />
                        {focusedField === 'email' && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-[#ff6b35] animate-pulse" />
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm mono text-[#ff6b35]">
                        <span className="text-green-500">$</span>
                        <span>message:</span>
                      </label>
                      <div className="relative">
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Describe your project or data needs..."
                          required
                          rows={5}
                          className="bg-[#111] border-[#333] text-white placeholder:text-gray-600 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 mono resize-none"
                        />
                        {focusedField === 'message' && (
                          <span className="absolute right-3 bottom-3 w-2 h-4 bg-[#ff6b35] animate-pulse" />
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className={`w-full group relative overflow-hidden transition-all duration-300 ${
                          isSubmitted
                            ? 'bg-green-600 hover:bg-green-600'
                            : 'bg-[#ff6b35] hover:bg-[#e55a2b]'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="mono">Processing...</span>
                            </>
                          ) : isSubmitted ? (
                            <>
                              <CheckCircle className="w-5 h-5" />
                              <span className="mono">Message Sent!</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span className="mono">Execute Send Command</span>
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="contact-info space-y-8">
              {/* Direct Contact */}
              <div className="bg-[#111] border border-[#222] rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff6b35] rounded-full" />
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+923185097422"
                    className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#ff6b35]/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center group-hover:border-[#ff6b35]/50 group-hover:bg-[#ff6b35]/10 transition-all">
                      <Phone className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mono">Phone</p>
                      <p className="text-white group-hover:text-[#ff6b35] transition-colors">+92 318 5097422</p>
                    </div>
                  </a>

                  <a
                    href="mailto:shujaatalee888@gmail.com"
                    className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#ff6b35]/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center group-hover:border-[#ff6b35]/50 group-hover:bg-[#ff6b35]/10 transition-all">
                      <Mail className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mono">Email</p>
                      <p className="text-white group-hover:text-[#ff6b35] transition-colors">shujaatalee888@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg">
                    <div className="w-12 h-12 bg-[#111] border border-[#333] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mono">Location</p>
                      <p className="text-white">Remote / Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#111] border border-[#222] rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff6b35] rounded-full" />
                  Connect Online
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://linkedin.com/in/shujaat-ali-824253155/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#ff6b35]/30 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/ShujaatAli88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#ff6b35]/30 transition-all group"
                  >
                    <Github className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                  </a>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/5 border border-[#ff6b35]/30 rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Free Data Strategy Call
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Book a 30-minute consultation to discuss your data needs and get a custom proposal.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#ff6b35]">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="mono">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
