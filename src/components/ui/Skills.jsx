import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { techStoryNodes } from '../../data/portfolioData';
import { TechLogo } from '../common/TechLogos';

export function Skills() {
  const [selectedTech, setSelectedTech] = useState(techStoryNodes[0]);

  return (
    <section id="skills" className="relative py-24 z-10 bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest">
            <Cpu size={13} />
            <span>INTERACTIVE TECH MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            ENGINEERING <span className="text-[#00f0ff]">SKILL MATRIX</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Click or hover over any official tech card to inspect real-world implementation rationale, experience duration, and production projects.
          </p>
        </div>

        {/* 13 Glowing Interactive Tech Cards Grid with Official SVG Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {techStoryNodes.map((tech) => {
            const isSelected = selectedTech.id === tech.id;
            return (
              <motion.div
                key={tech.id}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTech(tech)}
                className={`glass-panel cursor-pointer p-4 rounded-xl border transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? 'border-[#00ff88] bg-[#00ff88]/15 shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                    : 'border-white/10 hover:border-[#00f0ff]/50'
                }`}
              >
                {/* Official Tech Logo Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#07070a]/80 border border-white/10 flex items-center justify-center">
                    <TechLogo id={tech.id} size={24} />
                  </div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                  />
                </div>

                <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-1 truncate">
                  {tech.category}
                </div>
                <div className="text-base font-bold font-heading text-white tracking-wide group-hover:text-[#00ff88] transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 truncate">
                  {tech.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Selected Tech Detail Inspection Card */}
        {selectedTech && (
          <motion.div
            key={selectedTech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#00ff88]/40 bg-[#0c101a]/95 shadow-[0_0_30px_rgba(0,255,136,0.15)] max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-[#07070a] border border-white/20 flex items-center justify-center shadow-lg"
                >
                  <TechLogo id={selectedTech.id} size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                    {selectedTech.name}
                  </h3>
                  <div className="text-xs font-mono text-[#00f0ff]">
                    {selectedTech.subtitle} — {selectedTech.category}
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/40 font-mono text-xs text-[#00ff88]">
                {selectedTech.details?.experience}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Why I Use It */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#00ff88] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>WHY I USE IT IN PRODUCTION</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {selectedTech.details?.whyUse}
                </p>
              </div>

              {/* Projects Used In */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={14} />
                  <span>PROJECTS UTILIZED IN</span>
                </div>
                <ul className="space-y-1.5">
                  {selectedTech.details?.projects.map((proj, idx) => (
                    <li key={idx} className="text-sm text-slate-200 flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#00ff88]" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
