import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Cpu } from 'lucide-react';
import { TechLogo } from '../common/TechLogos';

export function ScrollStoryOverlay({ nodes, activeIndex, isFinalScene, isInsideStory }) {
  // CRITICAL FIX: Hide completely when user scrolls past the 3D scroll story section
  if (!isInsideStory || activeIndex < 0) return null;

  const currentNode = nodes[activeIndex];

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-8">
      {/* Top HUD Bar */}
      <div className="flex justify-between items-start">
        {/* Active Node Indicator Badge */}
        <div className="glass-panel px-4 py-2.5 rounded-xl border border-[#00f0ff]/30 bg-[#07070a]/90 font-mono text-xs text-[#00f0ff] flex items-center gap-3 shadow-lg">
          <Terminal size={14} className="text-[#00ff88]" />
          <span>
            {isFinalScene ? (
              <span className="text-[#00ff88] font-bold">ECOSYSTEM // FINAL REVEAL</span>
            ) : (
              `NODE [${String(activeIndex + 1).padStart(2, '0')} / ${String(nodes.length).padStart(2, '0')}]`
            )}
          </span>
        </div>

        {/* Scroll Instruction */}
        <div className="glass-panel px-4 py-2 rounded-xl border border-white/10 bg-[#07070a]/80 font-mono text-xs text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span>SCROLL TO FLY THROUGH UNIVERSE</span>
        </div>
      </div>

      {/* Main Bottom Technology HUD Info Card */}
      <div className="w-full max-w-xl mx-auto pointer-events-auto">
        <AnimatePresence mode="wait">
          {isFinalScene ? (
            <motion.div
              key="final-scene"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#00ff88]/50 bg-[#07070a]/95 shadow-[0_0_40px_rgba(0,255,136,0.3)] text-center space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 font-mono text-xs text-[#00ff88]">
                <Sparkles size={14} />
                <span>MY COMPLETE ENGINEERING ECOSYSTEM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-wider">
                13 INTEGRATED TECHNOLOGIES CONNECTED
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                From core Java fundamentals to Spring Boot microservices, security filters, async RabbitMQ queues, Redis caching, AWS cloud, and Docker containers—all engineered to deliver high-availability, scalable systems.
              </p>
              <div className="pt-2 flex justify-center gap-4 text-xs font-mono">
                <span className="text-[#00ff88]">✓ ZERO MONOLITH DEBT</span>
                <span className="text-[#00f0ff]">✓ PRODUCTION HARDENED</span>
              </div>
            </motion.div>
          ) : (
            currentNode && (
              <motion.div
                key={currentNode.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#00f0ff]/30 bg-[#07070a]/95 shadow-[0_0_30px_rgba(0,0,0,0.9)] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider flex items-center gap-1.5">
                    <TechLogo id={currentNode.id} size={14} />
                    <span>{currentNode.category}</span>
                  </span>
                  <span className="text-xs font-mono text-[#00ff88]">
                    {currentNode.details?.experience}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                    <TechLogo id={currentNode.id} size={24} />
                    {currentNode.name}
                    <span className="text-sm font-normal text-slate-400">
                      — {currentNode.subtitle}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {currentNode.desc}
                  </p>
                </div>

                {currentNode.details && (
                  <div className="pt-2 border-t border-white/10 text-xs space-y-1.5 font-mono">
                    <div className="text-[#00ff88] flex items-center gap-1.5">
                      <Cpu size={12} />
                      <span className="font-semibold">Used In Projects:</span>
                      <span className="text-slate-200">
                        {currentNode.details.projects.join(', ')}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
