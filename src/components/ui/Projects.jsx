import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Cpu, Lock, CheckCircle2, Layers, Server } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

export function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section id="projects" className="relative py-24 z-10 bg-[#07070a]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
            <Layers size={13} />
            <span>FEATURED ENGINEERING PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            SYSTEM <span className="text-[#00ff88]">ARCHITECTURES</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real production systems extracted directly from my resume showcasing Fintech gateways, multithreaded engines, and security hardening.
          </p>
        </div>

        {/* Project Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-300 ${
                activeProject.id === project.id
                  ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)] font-bold'
                  : 'glass-panel text-slate-400 hover:text-white border-white/10'
              }`}
            >
              {project.title.split(' - ')[0]}
            </button>
          ))}
        </div>

        {/* Main Active Project Futuristic Glass Card */}
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-3xl border border-[#00f0ff]/30 p-6 sm:p-10 bg-[#0c101d]/90 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Side: Overview & Architecture */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#00ff88]/15 border border-[#00ff88]/40 text-xs font-mono text-[#00ff88] uppercase tracking-wider">
                    {activeProject.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeProject.domain}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white">
                  {activeProject.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeProject.summary}
                </p>

                {/* System Architecture */}
                <div className="glass-panel p-4 rounded-xl border border-white/10 bg-[#07070a]/60 space-y-2 font-mono text-xs">
                  <div className="text-[#00f0ff] font-semibold uppercase tracking-wider flex items-center gap-2">
                    <Server size={14} />
                    <span>SYSTEM ARCHITECTURE:</span>
                  </div>
                  <div className="text-slate-200">
                    {activeProject.architecture}
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
                  {activeProject.metrics?.map((m, idx) => (
                    <div key={idx} className="glass-panel p-3 rounded-lg border border-white/10 text-center">
                      <div className="text-xl font-bold text-[#00ff88]">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Security Features & Tech Stack */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Security & Implementation Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-[#ff2a5f] uppercase tracking-widest flex items-center gap-2">
                    <Lock size={14} />
                    <span>KEY SECURITY & ENGINEERING FEATURES</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.securityFeatures?.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 glass-panel p-2.5 rounded-lg border border-white/5">
                        <CheckCircle2 size={15} className="text-[#00ff88] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    TECH STACK & TOOLS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-200 glass-panel border border-white/20 hover:border-[#00ff88] hover:text-[#00ff88] transition-colors flex items-center gap-2"
                  >
                    <Github size={15} />
                    <span>GITHUB REPO</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
