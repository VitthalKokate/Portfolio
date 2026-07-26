import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export function HologramPortrait() {
  return (
    <div className="relative group max-w-sm mx-auto md:max-w-md w-full">
      {/* Cyber Glow Outer Backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00ff88] via-[#00f0ff] to-[#ff2a5f] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 animate-hologram"></div>

      {/* Futuristic Glass Card Container */}
      <div className="relative glass-panel rounded-2xl p-4 sm:p-5 border border-[#00f0ff]/30 overflow-hidden shadow-2xl">
        {/* Corner Cyber Accents */}
        <div className="corner-accent-tl"></div>
        <div className="corner-accent-br"></div>

        {/* Top Hologram Status Header */}
        <div className="flex items-center justify-between border-b border-[#00f0ff]/20 pb-3 mb-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#00ff88]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping"></span>
            <span className="font-semibold tracking-wider">PORTRAIT // HOLOGRAPHIC</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Terminal size={13} className="text-[#00f0ff]" />
            <span>SYS_OK</span>
          </div>
        </div>

        {/* Full Face Image Container (Uncropped, Full Face Visible) */}
        <div className="relative rounded-xl overflow-hidden bg-[#070913] border border-[#00f0ff]/20 aspect-[4/5]">
          {/* Cyber Scanline Laser Effect */}
          <motion.div
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent z-20 shadow-[0_0_15px_#00ff88]"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Hologram Overlay Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-cyan-950/20 z-10 pointer-events-none" />

          {/* Profile Image - Full face strictly preserved */}
          <img
            src={personalData.contact.profileImg}
            alt={personalData.name}
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
          />

          {/* Bottom Card Cyber Badge */}
          <div className="absolute bottom-3 left-3 right-3 z-20 glass-panel bg-[#07070a]/90 p-3 rounded-lg border border-[#00ff88]/30 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-[#00ff88] font-semibold tracking-wider flex items-center gap-1">
                <Shield size={12} />
                FULL STACK ENGINEER
              </div>
              <div className="text-sm font-bold text-white tracking-wide">
                VITTHAL KOKATE
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-800">
              <Sparkles size={10} className="animate-spin text-[#00ff88]" />
              VERIFIED
            </div>
          </div>
        </div>

        {/* Bottom Card Metadata */}
        <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>DOMAIN: FINTECH / MARTECH</span>
          <span className="text-[#00ff88]">JAVA & CLOUD</span>
        </div>
      </div>
    </div>
  );
}
