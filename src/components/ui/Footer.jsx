import React from 'react';
import { ArrowUp, Terminal, Shield, Heart } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 z-10 bg-[#050508] font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-300">
          <Terminal size={16} className="text-[#00ff88]" />
          <span>© {new Date().getFullYear()} VITTHAL KOKATE. ALL RIGHTS RESERVED.</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#00f0ff] flex items-center gap-1">
            <Shield size={14} />
            JAVA FULL STACK & MICROSERVICES
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-[#00ff88] text-slate-300 hover:text-[#00ff88] transition-all"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
