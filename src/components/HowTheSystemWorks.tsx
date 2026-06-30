import React, { useState } from 'react';
import { Terminal, Check, ArrowRight, Layers } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/opraleData';

interface HowTheSystemWorksProps {
  onOpenContact: () => void;
}

export const HowTheSystemWorks: React.FC<HowTheSystemWorksProps> = ({ onOpenContact }) => {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section id="process" className="py-20 md:py-28 border-b border-white/10 bg-[#0A0A0E]/60 subtle-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
            <Layers className="w-4 h-4" />
            <span>[ SECTION 05 // EXECUTION SYSTEM MAP ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            A precise, repeatable growth architecture.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Every step is engineered to eliminate creative guessing and bottleneck delays. Here is how raw footage and context convert into owned revenue.
          </p>
        </div>

        {/* Workflow System Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Process Steps Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = activePhase === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActivePhase(idx)}
                  className={`p-5 system-panel transition-all cursor-pointer flex items-center justify-between ${
                    isActive ? 'system-panel-active border-l-4 border-l-[#7C6CFF]' : 'hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-mono text-xs font-bold px-2 py-1 ${
                      isActive ? 'bg-[#7C6CFF] text-white' : 'bg-white/5 text-white/40'
                    }`}>
                      {step.step}
                    </span>
                    <div>
                      <div className={`font-bold text-base ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {step.name}
                      </div>
                      <div className="font-mono text-[10px] text-white/40 mt-0.5">
                        // {step.code}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#7C6CFF] translate-x-1' : 'text-white/20'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Phase Deep Inspection Console */}
          <div className="lg:col-span-7 system-panel p-6 sm:p-10 border-white/15 min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-[#7C6CFF] animate-pulse"></span>
                  <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
                    PHASE {WORKFLOW_STEPS[activePhase].step} INSPECTION // {WORKFLOW_STEPS[activePhase].code}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#7C6CFF] px-2.5 py-1 bg-[#141420] border border-[#7C6CFF]/30 w-fit">
                  SLA: GUARANTEED EXECUTION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {WORKFLOW_STEPS[activePhase].name}
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-8">
                {WORKFLOW_STEPS[activePhase].desc}
              </p>

              {/* Deliverables Box */}
              <div className="p-5 bg-[#141414] border border-white/10 space-y-4">
                <div className="font-mono text-xs text-[#7C6CFF] tracking-wider uppercase font-semibold flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>KEY SYSTEM DELIVERABLES & CHECKPOINTS:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WORKFLOW_STEPS[activePhase].deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm text-white/90 bg-[#1A1A1A] p-3 border border-white/5">
                      <Check className="w-4 h-4 text-[#7C6CFF] shrink-0" />
                      <span className="font-mono text-xs">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Console Footer */}
            <div className="pt-6 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-mono text-xs text-white/40">
                <span>PHASE {activePhase + 1} OF 5</span> • <span className="text-white/70">END-TO-END VERIFIED</span>
              </div>

              <div className="flex items-center space-x-3">
                {activePhase > 0 && (
                  <button
                    onClick={() => setActivePhase(activePhase - 1)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 font-mono text-xs text-white transition-colors cursor-pointer"
                  >
                    [ PREV PHASE ]
                  </button>
                )}
                {activePhase < WORKFLOW_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActivePhase(activePhase + 1)}
                    className="px-4 py-2 bg-[#7C6CFF] hover:bg-[#6A5AE6] font-mono text-xs text-white transition-colors flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>NEXT PHASE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2 bg-[#7C6CFF] hover:bg-[#6A5AE6] font-mono text-xs text-white transition-colors flex items-center space-x-1.5 cursor-pointer uppercase font-semibold shadow-[0_0_15px_rgba(124,108,255,0.3)]"
                  >
                    <span>DEPLOY THIS PROTOCOL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};