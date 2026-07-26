import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Shield, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { HologramPortrait } from './HologramPortrait';

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalData.subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Lighting Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (Guaranteed Unobscured Typography) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00ff88]/40 bg-[#00ff88]/10 text-xs font-mono text-[#00ff88]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
              <span>AVAILABLE FOR FULL STACK & BACKEND ROLES</span>
            </motion.div>

            {/* Large Name Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                {personalData.name}
              </h1>
            </motion.div>

            {/* Animated Subtitle / Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start"
            >
              <div className="text-xl sm:text-3xl font-bold font-mono text-[#00f0ff] flex items-center gap-2 text-glow-cyan">
                <Code2 size={24} className="text-[#00ff88]" />
                <motion.span
                  key={subtitleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {personalData.subtitles[subtitleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              {personalData.tagline}
            </motion.p>

            {/* Quick Metrics Bar - Updated as requested by user */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 font-mono text-center"
            >
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <div className="text-xl font-bold text-[#00ff88]">2+ YRS</div>
                <div className="text-[10px] text-slate-400">ENGINEERING</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <div className="text-xl font-bold text-[#ff2a5f]">45%+</div>
                <div className="text-[10px] text-slate-400">SECURITY BOOST</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <div className="text-xl font-bold text-[#00f0ff]">50%+</div>
                <div className="text-[10px] text-slate-400">PERFORMANCE IMPROVEMENT</div>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#scroll-story-container"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-[#07070a] bg-gradient-to-r from-[#00ff88] to-[#00f0ff] hover:from-[#00f0ff] hover:to-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:shadow-[0_0_30px_rgba(0,255,136,0.8)] transition-all duration-300 flex items-center gap-2"
              >
                <span>EXPLORE 3D TECH JOURNEY</span>
                <ArrowDown size={16} className="animate-bounce" />
              </a>

              <a
                href={personalData.contact.resumePdf}
                download="Vitthal_Kokate_CV.pdf"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-slate-200 glass-panel border border-[#00f0ff]/40 hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} />
                <span>DOWNLOAD CV</span>
              </a>
            </motion.div>
          </div>

          {/* Right Hologram Portrait Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HologramPortrait />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
