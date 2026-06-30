import React from 'react';
import { Cpu } from 'lucide-react';
import { WHY_OPRALE_WORKS } from '../data/opraleData';

export const WhyOpraleWorks: React.FC = () => {
  return (
    <section id="why" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
            <Cpu className="w-4 h-4" />
            <span>[ SECTION 04 // OPERATIONAL ADVANTAGES ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Why the system outcompetes traditional editing agencies.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Generic editing services focus on cuts and captions. OPRALE operates on velocity, positioning, and conversion economics—designed to scale output while lowering internal chaos.
          </p>
        </div>

        {/* 6 Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_OPRALE_WORKS.map((block) => (
            <div
              key={block.id}
              className="system-panel p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top micro identifier */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <span className="font-mono text-xs text-white/40 group-hover:text-[#7C6CFF] transition-colors">
                    ADVANTAGE // {block.id}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-[#171717] text-[#7C6CFF] border border-white/10 group-hover:border-[#7C6CFF]/40 transition-colors">
                    {block.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#7C6CFF] transition-colors">
                  {block.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Bottom decorative telemetry */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/30">
                <span>VERIFIED BACKEND PROTOCOL</span>
                <span className="text-[#7C6CFF]/70">/// SYSTEM OPTIMIZED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lower comparison bar */}
        <div className="mt-12 p-6 bg-[#121216] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-mono">
          <div className="space-y-1">
            <div className="text-white/40 text-xs">TRADITIONAL FREELANCERS</div>
            <div className="text-white font-semibold">Inconsistent quality • Missed deadlines • Zero strategic input</div>
          </div>
          <div className="space-y-1">
            <div className="text-white/40 text-xs">INTERNAL HIRES</div>
            <div className="text-white font-semibold">High fixed payroll • Management burden • Slower iteration</div>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="text-[#7C6CFF] text-xs font-bold">OPRALE OPERATING SYSTEM</div>
            <div className="text-white font-semibold">Predictable SLAs • Built-in conversion hooks • Turnkey scale</div>
          </div>
        </div>
      </div>
    </section>
  );
};