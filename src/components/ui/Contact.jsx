import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, CheckCircle2, Download, Linkedin, Github, Terminal } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (key, value) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 3000);
  };

  return (
    <section id="contact" className="relative py-28 z-10 bg-[#07070a] overflow-hidden">
      {/* Ambient Red & Cyan Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff2a5f]/10 via-[#00f0ff]/10 to-[#00ff88]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Terminal Header matching User Reference Image */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white flex items-center justify-center gap-3">
            <span className="text-[#ff2a5f]">&lt;</span>
            <span>Let's Connect</span>
            <span className="text-[#ff2a5f]">/&gt;</span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-mono leading-relaxed">
            Currently open for new opportunities. Whether you have a question or just want to say hi, my terminal is always open.
          </p>
        </div>

        {/* Terminal Code Card matching User Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl border border-[#00f0ff]/30 bg-[#070913]/95 p-6 sm:p-8 text-left shadow-[0_0_50px_rgba(0,0,0,0.9)] relative overflow-hidden font-mono max-w-2xl mx-auto"
        >
          {/* Terminal Window Control Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff2a5f]" />
              <span className="w-3 h-3 rounded-full bg-[#fcc624]" />
              <span className="w-3 h-3 rounded-full bg-[#00ff88]" />
              <span className="text-xs text-slate-400 ml-2 font-mono">contact_info.js — 80x24</span>
            </div>
            <div className="text-xs text-[#00f0ff] font-mono flex items-center gap-1.5">
              <Terminal size={14} />
              <span>TERMINAL_ACTIVE</span>
            </div>
          </div>

          {/* Terminal Code Content */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            {/* Comment Line */}
            <div className="text-slate-500 font-semibold">// Contact Info</div>

            {/* Email Code Line */}
            <div className="flex flex-wrap items-center justify-between gap-2 group p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div>
                <span className="text-[#ff2a5f]">const</span>{' '}
                <span className="text-white">email</span> ={' '}
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="text-[#00ff88] hover:underline font-bold"
                >
                  "{personalData.contact.email}"
                </a>
                <span className="text-white">;</span>
              </div>
              <button
                onClick={() => handleCopy('email', personalData.contact.email)}
                className="text-xs text-slate-400 hover:text-[#00ff88] flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 transition-colors"
              >
                {copiedKey === 'email' ? <CheckCircle2 size={13} className="text-[#00ff88]" /> : <Copy size={13} />}
                <span>{copiedKey === 'email' ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Phone Code Line */}
            <div className="flex flex-wrap items-center justify-between gap-2 group p-2 rounded-lg hover:bg-white/5 transition-colors">
              <div>
                <span className="text-[#ff2a5f]">const</span>{' '}
                <span className="text-white">phone</span> ={' '}
                <a
                  href={`tel:${personalData.contact.phone}`}
                  className="text-[#00ff88] hover:underline font-bold"
                >
                  "{personalData.contact.phone}"
                </a>
                <span className="text-white">;</span>
              </div>
              <button
                onClick={() => handleCopy('phone', personalData.contact.phone)}
                className="text-xs text-slate-400 hover:text-[#00ff88] flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 transition-colors"
              >
                {copiedKey === 'phone' ? <CheckCircle2 size={13} className="text-[#00ff88]" /> : <Copy size={13} />}
                <span>{copiedKey === 'phone' ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Location Code Line */}
            <div className="p-2">
              <span className="text-[#ff2a5f]">const</span>{' '}
              <span className="text-white">location</span> ={' '}
              <span className="text-[#00ff88]">"{personalData.contact.location}"</span>
              <span className="text-white">;</span>
            </div>

            {/* Terminal Prompt Line with Blinking Cursor */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-slate-300 font-mono">
              <span className="text-[#00ff88]">root@vitthal:~$</span>
              <span className="w-2.5 h-5 bg-[#00ff88] inline-block animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons: LinkedIn, GitHub, Resume PDF */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 font-mono">
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl glass-panel border border-[#00f0ff]/40 text-slate-200 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
          >
            <Linkedin size={16} />
            <span>LINKEDIN</span>
          </a>

          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl glass-panel border border-white/20 text-slate-200 hover:text-[#00ff88] hover:border-[#00ff88] transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
          >
            <Github size={16} />
            <span>GITHUB</span>
          </a>

          <a
            href={personalData.contact.resumePdf}
            download="Vitthal_Kokate_CV.pdf"
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07070a] bg-gradient-to-r from-[#00ff88] to-[#00f0ff] hover:from-[#00f0ff] hover:to-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all flex items-center gap-2"
          >
            <Download size={16} />
            <span>DOWNLOAD RESUME PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
