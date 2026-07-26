import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Database, Server, Terminal, Lock, Award } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export function About() {
  return (
    <section id="about" className="relative py-24 z-10 bg-[#07070a]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
            <Terminal size={13} />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            ABOUT <span className="text-[#00ff88]">VITTHAL KOKATE</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on Full Stack Java Engineer with project-driven experience building secure, scalable microservices and automation engines across Fintech and MarTech domains.
          </p>
        </div>

        {/* Grid: Resume Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Comprehensive Story from Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                <ShieldCheck className="text-[#00ff88]" size={24} />
                Full Stack & Backend Microservices Developer
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently working as a <strong className="text-white">Software Engineer at mPHATEK Systems Pvt Ltd</strong>, I engineer production-grade payment orchestrators, hybrid cryptographic security protocols, and high-concurrency automation engines.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My architectural focus centers on building zero-downtime, resilient backend systems leveraging <strong className="text-[#00f0ff]">Java 17, Spring Boot, Spring Security (JWT, RBAC, HMAC)</strong>, alongside asynchronous processing queues (<strong className="text-[#00ff88]">RabbitMQ</strong>), fast caching layers (<strong className="text-[#ff2a5f]">Redis</strong>), and cloud storage (<strong className="text-[#fcc624]">AWS S3</strong>).
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  <span>Domain Focus: Fintech & MarTech</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  <span>Polyglot: Java + Python (FastAPI)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#ff2a5f]" />
                  <span>VAPT Security Remediation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#fcc624]" />
                  <span>Resilience4j Circuit Breakers</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Principles Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel p-5 rounded-xl border border-[#00ff88]/30 glass-panel-hover flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-[#00ff88]/10 text-[#00ff88]">
                <Lock size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">Security Hardened Architecture</h4>
                <p className="text-xs text-slate-300 mt-1">
                  AES/RSA hybrid encryption, HMAC validation flow, JWT domain separation, and VAPT vulnerability fixes.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-[#00f0ff]/30 glass-panel-hover flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff]">
                <Server size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">Asynchronous & Event-Driven</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Decoupled payment invoice queues via RabbitMQ reducing transaction wait time by 40%.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-xl border border-[#ff2a5f]/30 glass-panel-hover flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-[#ff2a5f]/10 text-[#ff2a5f]">
                <Cpu size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">High-Concurrency Engine Design</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Multithreaded bot execution engine partitioning 50+ accounts into concurrent worker blocks.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
