import React, { useState } from 'react';
import { Mail, ArrowUpRight, Terminal, Shield } from 'lucide-react';

interface MidPageCtaProps {
  onOpenContact: () => void;
}

export const MidPageCta: React.FC<MidPageCtaProps> = ({ onOpenContact }) => {
  const [headlineToggle, setHeadlineToggle] = useState(false);

  return (
    <section className="py-20 md:py-24 border-b border-white/10 bg-[#101017] relative overflow-hidden">
      {/* Background accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C6CFF] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="system-panel p-8 sm:p-14 border-[#7C6CFF]/40 bg-[#13121C]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-black/60 border border-white/10 font-mono text-xs text-[#7C6CFF]">
                <Terminal className="w-3.5 h-3.5" />
                <span>MID-PAGE CONVERSION ARCHITECTURE</span>
              </div>

              <h2 
                onClick={() => setHeadlineToggle(!headlineToggle)}
                className="text-3xl sm:text-5xl font-bold tracking-tight text-white cursor-pointer select-none"
                title="Click to toggle operator headline view"
              >
                {headlineToggle 
                  ? "Start with content. Scale into monetization."
                  : "Build your next growth layer with OPRALE."}
              </h2>

              <p className="text-base text-white/70 leading-relaxed">
                Whether you are a solo creator sitting on 20 hours of podcast footage or an agency managing a roster of 10 talent channels, OPRALE provides the structured backend to scale output and revenue.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="mailto:workwithoprale@gmail.com?subject=OPRALE%20Growth%20Layer%20Inquiry&body=Hey%20OPRALE%2C%0A%0AI%20want%20to%20build%20my%20next%20growth%20layer.%0A%0AEntity%3A%0ARole%3A%20Creator%20%2F%20Agency%20%2F%20Operator%0AMonthly%20footage%3A%0AGoal%3A%0A%0A%E2%80%94%0ASecure%20via%20oprale.com"
                  className="px-7 py-4 bg-[#7C6CFF] hover:bg-[#6A5AE6] text-white font-mono text-xs tracking-wider font-semibold transition-all flex items-center justify-center space-x-2.5 cursor-pointer uppercase shadow-[0_0_20px_rgba(124,108,255,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email OPRALE</span>
                </a>

                <a
                  href="https://instagram.com/oprale.ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-[#181818] hover:bg-[#222222] text-white border border-white/20 hover:border-[#7C6CFF] font-mono text-xs tracking-wider font-semibold transition-all flex items-center justify-center space-x-2.5 cursor-pointer uppercase"
                >
                  <span>DM on Instagram</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7C6CFF]" />
                </a>
              </div>
              <div className="text-center sm:text-right">
                <button
                  onClick={onOpenContact}
                  className="font-mono text-[11px] text-white/40 hover:text-[#7C6CFF] underline underline-offset-4 transition-colors cursor-pointer inline-flex items-center space-x-1"
                >
                  <Shield className="w-3 h-3" />
                  <span>Or open secure encrypted dispatch terminal →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};