import React, { useState } from 'react';
import { Layers, Check, Mail, ArrowUpRight, ShieldCheck, Briefcase } from 'lucide-react';
import { OFFER_TIERS } from '../data/opraleData';

interface OfferLadderProps {
  onOpenContact: () => void;
}

export const OfferLadder: React.FC<OfferLadderProps> = ({ onOpenContact }) => {
  const [isAgencyMode, setIsAgencyMode] = useState(false);

  return (
    <section id="tiers" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
              <Layers className="w-4 h-4" />
              <span>[ SECTION 06 // SYSTEM TIERS & LADDER ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Start with content velocity. Scale into owned monetization.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Modular infrastructure engineered to expand alongside your audience volume. Solo creators start at Tier 01 or 02; agencies and enterprise portfolios deploy Tier 03 as a white-label backend scale partner.
            </p>
          </div>

          {/* Agency White-Label Toggle Switch */}
          <div className="p-1.5 bg-[#141414] border border-white/15 flex items-center space-x-1 font-mono text-xs shrink-0 self-start lg:self-end">
            <button
              onClick={() => setIsAgencyMode(false)}
              className={`px-4 py-2 transition-all cursor-pointer ${
                !isAgencyMode
                  ? 'bg-[#7C6CFF] text-white font-semibold shadow-sm'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              CREATOR LADDER
            </button>
            <button
              onClick={() => setIsAgencyMode(true)}
              className={`px-4 py-2 transition-all cursor-pointer flex items-center space-x-1.5 ${
                isAgencyMode
                  ? 'bg-[#7C6CFF] text-white font-semibold shadow-sm'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>AGENCY WHITE-LABEL MODE</span>
            </button>
          </div>
        </div>

        {/* Agency Mode Explainer Banner if active */}
        {isAgencyMode && (
          <div className="mb-10 p-6 bg-[#161520] border border-[#7C6CFF]/50 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-mono text-xs text-[#7C6CFF] tracking-wider uppercase font-bold flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>AGENCY WHITE-LABEL BACKEND PROTOCOL ENGAGED</span>
                </div>
                <p className="text-sm text-white/80 max-w-3xl">
                  Plug OPRALE directly into your agency’s delivery pipeline. We execute under your brand name, maintain your custom QA standards, and handle all short-form extraction and funnel engineering so you can scale client rosters without hiring overhead.
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-[#7C6CFF] hover:bg-[#6A5AE6] font-mono text-xs text-white uppercase font-semibold shrink-0 cursor-pointer"
              >
                DISPATCH AGENCY ROSTER
              </button>
            </div>
          </div>
        )}

        {/* 3 Tier System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {OFFER_TIERS.map((tier) => {
            return (
              <div
                key={tier.tier}
                className={`system-panel p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.highlight ? 'border-[#7C6CFF] bg-[#14131F] shadow-[0_0_30px_rgba(124,108,255,0.1)]' : ''
                }`}
              >
                {/* Top tier badge */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <span className="font-mono text-xs text-[#7C6CFF] font-semibold tracking-widest">
                      {tier.tier}
                    </span>
                    <span className={`font-mono text-[10px] px-2.5 py-1 ${
                      tier.highlight
                        ? 'bg-[#7C6CFF] text-white font-bold'
                        : 'bg-[#181818] text-white/60 border border-white/10'
                    }`}>
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-mono text-xs text-[#7C6CFF] mb-4">
                    // {tier.focus}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="p-3 bg-[#111111] border border-white/5 font-mono text-xs text-white/70 mb-6 flex items-center justify-between">
                    <span>IDEAL FOR:</span>
                    <span className="text-white font-semibold">{tier.target}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="font-mono text-[11px] text-white/40 tracking-wider uppercase mb-3">
                      INCLUDED MODULES & SPECS:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-sm text-white/80">
                        <Check className="w-4 h-4 text-[#7C6CFF] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom action */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <button
                    onClick={onOpenContact}
                    className={`w-full py-4 font-mono text-xs tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      tier.highlight
                        ? 'bg-[#7C6CFF] hover:bg-[#6A5AE6] text-white shadow-[0_0_15px_rgba(124,108,255,0.3)]'
                        : 'bg-[#1C1C1C] hover:bg-[#262626] text-white border border-white/10 hover:border-[#7C6CFF]'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>INQUIRE ABOUT {tier.name.toUpperCase()}</span>
                  </button>

                  <a
                    href="https://instagram.com/oprale.ops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 font-mono text-[11px] text-white/40 hover:text-white flex items-center justify-center space-x-1.5 transition-colors uppercase"
                  >
                    <span>FAST TRACK VIA INSTAGRAM DM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote banner */}
        <div className="mt-12 p-6 bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="text-white/70">
            <span className="text-[#7C6CFF] font-bold">CUSTOM SLA OPTIONS:</span> Managing more than 50 hours of raw footage monthly? Need custom API integrations or revenue share engineering?
          </div>
          <button
            onClick={onOpenContact}
            className="text-[#7C6CFF] hover:text-white underline underline-offset-4 uppercase cursor-pointer shrink-0 font-semibold"
          >
            Request Enterprise Scope &gt;
          </button>
        </div>
      </div>
    </section>
  );
};