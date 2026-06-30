import React, { useState } from 'react';
import { Layers, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { CORE_OFFERS } from '../data/opraleData';

interface WhatOpraleDoesProps {
  onOpenContact: () => void;
}

export const WhatOpraleDoes: React.FC<WhatOpraleDoesProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="what" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
            <Layers className="w-4 h-4" />
            <span>[ SECTION 02 // CORE OPERATING ARCHITECTURE ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Structured output meets owned monetization.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            OPRALE operates across two core layers: transforming existing long-form archives into a daily short-form velocity machine, and engineering the conversion infrastructure behind the content.
          </p>
        </div>

        {/* Two Column Split Control Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CORE_OFFERS.map((offer, idx) => {
            const isSelected = activeTab === idx;
            return (
              <div
                key={offer.code}
                onClick={() => setActiveTab(idx)}
                className={`system-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected ? 'border-[#7C6CFF]/60 bg-[#12121A]' : 'hover:border-white/20'
                }`}
              >
                {/* Top Module Header */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <span className="font-mono text-xs text-[#7C6CFF] tracking-widest uppercase font-semibold">
                      {offer.layer}
                    </span>
                    <span className="font-mono text-[11px] text-white/40 bg-[#1A1A1A] px-2.5 py-1 border border-white/10">
                      {offer.code}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-sm font-mono text-white/80 mb-6 text-[#7C6CFF]/90">
                    // {offer.subtitle}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    {offer.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="font-mono text-xs text-white/50 tracking-wider uppercase mb-4">
                      SYSTEM SPECIFICATIONS & CAPABILITIES:
                    </div>
                    {offer.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start space-x-3 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#7C6CFF] mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Module Action */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40">
                    {idx === 0 ? 'STATUS: HIGH-VELOCITY REPURPOSING' : 'STATUS: CONVERSION INFRASTRUCTURE'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContact();
                    }}
                    className="font-mono text-xs text-[#7C6CFF] hover:text-white flex items-center space-x-1 transition-colors uppercase group/btn"
                  >
                    <span>ACTIVATE {offer.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Framing micro-note */}
        <div className="mt-8 p-4 bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-white/60">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Terminal className="w-4 h-4 text-[#7C6CFF]" />
            <span>OPERATIONAL PRINCIPLE: Output without conversion is leakage. Conversion without output is stagnation.</span>
          </div>
          <span className="text-white/40">[ SYNCHRONIZED DEPLOYMENT ]</span>
        </div>
      </div>
    </section>
  );
};