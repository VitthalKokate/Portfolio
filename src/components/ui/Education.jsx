import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="relative py-24 z-10 bg-[#07070a]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION & DEGREES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            EDUCATION & <span className="text-[#00ff88]">CERTIFICATIONS</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified academic credentials and professional industry certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-[#00ff88]/30 space-y-6 shadow-2xl"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <div className="p-3.5 rounded-2xl bg-[#00ff88]/10 text-[#00ff88]">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                  BACHELOR'S DEGREE
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  {educationData.degree.title}
                </h3>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="font-semibold text-slate-200">
                {educationData.degree.institution}
              </div>
              <div className="text-slate-400">
                {educationData.degree.university}
              </div>
              <div className="flex items-center justify-between pt-2 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar size={13} className="text-[#00ff88]" />
                  {educationData.degree.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#00ff88]/20 border border-[#00ff88] text-[#00ff88] font-bold">
                  {educationData.degree.score}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-xs font-mono text-[#00ff88] uppercase tracking-wider">
                CORE CURRICULUM HIGHLIGHTS
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {educationData.degree.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#00ff88]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications Deck */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest flex items-center gap-2 mb-2">
              <Award size={15} />
              <span>VERIFIED PROFESSIONAL CERTIFICATIONS</span>
            </div>

            {educationData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-300 space-y-2"
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-bold font-heading text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-[#00ff88]" />
                    {cert.title}
                  </h4>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-slate-300">
                    {cert.date}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#00f0ff]">
                  {cert.issuer}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
