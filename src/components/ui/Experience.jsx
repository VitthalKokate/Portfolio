import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal, Award } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 z-10 bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest">
            <Briefcase size={13} />
            <span>CAREER TRACK & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            WORK <span className="text-[#00f0ff]">EXPERIENCE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Detailed breakdown of production engineering achievements, fintech platform integrations, and microservices automation.
          </p>
        </div>

        {/* Cyberpunk Animated Vertical Timeline */}
        <div className="relative border-l-2 border-[#00f0ff]/30 ml-4 md:ml-32 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#07070a] border-2 border-[#00ff88] flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,136,0.6)]">
                <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
              </div>

              {/* Company & Date Header */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#00ff88]/50 transition-all duration-300 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#00ff88] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-[#00f0ff] font-mono">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar size={13} className="text-[#00ff88]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <MapPin size={13} className="text-[#00f0ff]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-normal">
                  {exp.description}
                </p>

                {/* Projects Conducted under Role */}
                <div className="space-y-4 pt-2">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="glass-panel p-4 rounded-xl border border-[#00f0ff]/20 bg-[#07070a]/60 space-y-2">
                      <div className="text-sm font-bold text-white flex items-center justify-between">
                        <span>{proj.name}</span>
                        <span className="text-[11px] font-mono text-[#00ff88] font-normal">
                          {proj.category}
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {proj.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <ChevronRight size={14} className="text-[#00f0ff] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
