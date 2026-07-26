import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Menu, X, Cpu } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export function Navbar({ activeSection, scrollProgress }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: '3D Journey', href: '#scroll-story-container' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Progress Bar */}
      <div className="h-1 bg-slate-900 w-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-[#ff2a5f] transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="glass-panel rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between border border-[#00f0ff]/20 bg-[#07070a]/80 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          {/* Brand Logo / Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00f0ff] p-0.5 flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.4)] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.8)] transition-all duration-300">
              <div className="w-full h-full bg-[#07070a] rounded-[7px] flex items-center justify-center">
                <Cpu size={18} className="text-[#00ff88]" />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-white group-hover:text-[#00ff88] transition-colors font-heading">
                VITTHAL KOKATE
              </div>
              <div className="text-[10px] font-mono text-[#00f0ff] tracking-widest uppercase">
                JAVA FULL STACK
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeSection === link.name.toLowerCase().replace(/\s+/g, '')
                    ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40 shadow-[0_0_10px_rgba(0,255,136,0.2)] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button: Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.contact.resumePdf}
              download="Vitthal_Kokate_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-[#07070a] bg-gradient-to-r from-[#00ff88] to-[#00f0ff] hover:from-[#00f0ff] hover:to-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.4)] hover:shadow-[0_0_25px_rgba(0,255,136,0.7)] transition-all duration-300 active:scale-95"
            >
              <Download size={14} />
              <span>RESUME PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 glass-panel rounded-2xl p-4 border border-[#00f0ff]/30 bg-[#07070a]/95 flex flex-col gap-2 font-mono text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-slate-200 hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href={personalData.contact.resumePdf}
                download="Vitthal_Kokate_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-[#07070a] bg-[#00ff88]"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
