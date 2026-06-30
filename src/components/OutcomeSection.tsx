import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import { OUTCOME_STATEMENTS } from '../data/opraleData';

export const OutcomeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 border-b border-white/10 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>[ SECTION 07 // SYSTEM OUTCOME VERIFICATION ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            The commercial reality of operating with systems.
          </h2>
        </div>

        {/* Compact, visually strong statement grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {OUTCOME_STATEMENTS.map((item) => (
            <div
              key={item.code}
              className="system-panel p-6 flex flex-col justify-between group hover:border-[#7C6CFF]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-[11px] text-[#7C6CFF]">
                  <span>{item.code}</span>
                  <Check className="w-3.5 h-3.5 text-white/40 group-hover:text-[#7C6CFF] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#7C6CFF] transition-colors">
                  {item.statement}
                </h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed pt-2">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};