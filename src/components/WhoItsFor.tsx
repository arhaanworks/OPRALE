import React, { useState } from 'react';
import { UserCheck, UserX, ShieldAlert, Check, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/opraleData';

interface WhoItsForProps {
  onOpenContact: () => void;
}

export const WhoItsFor: React.FC<WhoItsForProps> = ({ onOpenContact }) => {
  const [selectedAudience, setSelectedAudience] = useState<number>(0);

  return (
    <section id="who" className="py-20 md:py-28 border-b border-white/10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
            <UserCheck className="w-4 h-4" />
            <span>[ SECTION 03 // ENTITY QUALIFICATION MATRIX ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Engineered for serious operators.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            OPRALE is designed specifically for creators and agencies building real asset value—those moving past vanity metrics and manual editing friction into owned commercial infrastructure.
          </p>
        </div>

        {/* Interactive Role Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Left Role Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
              SELECT TARGET ENTITY TYPE:
            </div>
            {TARGET_AUDIENCES.map((aud, idx) => (
              <button
                key={aud.role}
                onClick={() => setSelectedAudience(idx)}
                className={`w-full text-left p-5 system-panel flex items-center justify-between transition-all cursor-pointer ${
                  selectedAudience === idx
                    ? 'system-panel-active text-white border-[#7C6CFF]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <div>
                  <div className="font-bold text-base text-white">{aud.role}</div>
                  <div className="font-mono text-xs text-white/50 mt-0.5">{aud.tagline}</div>
                </div>
                <div className={`w-2 h-2 rounded-full ${selectedAudience === idx ? 'bg-[#7C6CFF]' : 'bg-white/20'}`} />
              </button>
            ))}
          </div>

          {/* Right Role Inspection Panel */}
          <div className="lg:col-span-8 system-panel p-6 sm:p-10 flex flex-col justify-between border-white/15">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-[#7C6CFF] tracking-widest uppercase">
                    ENTITY PROFILE // {TARGET_AUDIENCES[selectedAudience].role.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {TARGET_AUDIENCES[selectedAudience].tagline}
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 bg-[#7C6CFF]/15 text-[#7C6CFF] border border-[#7C6CFF]/30">
                  QUALIFIED ICP
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 bg-[#141414] border border-white/10 space-y-2">
                  <div className="font-mono text-xs text-rose-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>CURRENT OPERATIONAL PAIN POINT</span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {TARGET_AUDIENCES[selectedAudience].painPoint}
                  </p>
                </div>

                <div className="p-5 bg-[#14141E] border border-[#7C6CFF]/30 space-y-2">
                  <div className="font-mono text-xs text-[#7C6CFF] uppercase tracking-wider flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>OPRALE BACKEND SOLUTION</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {TARGET_AUDIENCES[selectedAudience].opraleSolution}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="font-mono text-xs text-white/50 uppercase tracking-widest">
                  WHY THIS GROUP SCALES WITH OPRALE:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80 font-mono">
                  <div className="p-3 bg-[#131313] border border-white/5 flex items-center space-x-2">
                    <span className="text-[#7C6CFF]">+</span>
                    <span>Systems over manual effort</span>
                  </div>
                  <div className="p-3 bg-[#131313] border border-white/5 flex items-center space-x-2">
                    <span className="text-[#7C6CFF]">+</span>
                    <span>Monetization beyond sponsorships</span>
                  </div>
                  <div className="p-3 bg-[#131313] border border-white/5 flex items-center space-x-2">
                    <span className="text-[#7C6CFF]">+</span>
                    <span>Predictable content output SLAs</span>
                  </div>
                  <div className="p-3 bg-[#131313] border border-white/5 flex items-center space-x-2">
                    <span className="text-[#7C6CFF]">+</span>
                    <span>Dedicated white-label scale partner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-white/40">READY TO EVALUATE YOUR CHANNEL OR AGENCY?</span>
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-[#7C6CFF] hover:bg-[#6A5AE6] text-white font-mono text-xs font-semibold tracking-wider transition-all flex items-center space-x-2 uppercase cursor-pointer"
              >
                <span>REQUEST FIT DIAGNOSTIC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Qualification vs Strictly Not For Control Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#131313] border border-emerald-500/30 flex items-start space-x-4">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 mt-1">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-emerald-400 tracking-widest uppercase font-semibold mb-1">
                OPTIMAL FIT PARAMETERS
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Creators sitting on existing long-form archives (podcasts, masterclasses, interviews), agencies managing multiple creators, and teams requiring a reliable scale system.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#131313] border border-rose-500/30 flex items-start space-x-4">
            <div className="p-2 bg-rose-500/10 text-rose-400 mt-1">
              <UserX className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-rose-400 tracking-widest uppercase font-semibold mb-1">
                STRICTLY NOT FOR
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Not for creators looking for one-off freelance editing only, sporadic ad-hoc projects, or influencer-style vanity content without commercial intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};