import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { HERO_METRICS, HEADLINE_OPTIONS } from '../data/opraleData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 border-b border-white/10 overflow-hidden subtle-grid">
      {/* Decorative background grid line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#141414] border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 bg-[#7C6CFF]"></span>
            <span className="font-mono text-xs tracking-widest text-[#F0F0F0] uppercase">
              OPRALE / CREATOR GROWTH SYSTEM
            </span>
          </div>

          {/* Headline with Operator Toggle */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F0F0] leading-[1.08]">
              {HEADLINE_OPTIONS[headlineIndex]}
            </h1>
            
            {/* Operator switch selector for headlines */}
            <div className="flex items-center space-x-2 pt-2">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                HEADLINE MODE:
              </span>
              {HEADLINE_OPTIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeadlineIndex(idx)}
                  className={`px-2 py-0.5 font-mono text-[10px] transition-all cursor-pointer border ${
                    headlineIndex === idx
                      ? 'bg-[#7C6CFF]/20 border-[#7C6CFF] text-[#F0F0F0]'
                      : 'bg-[#141414] border-white/10 text-white/40 hover:text-white'
                  }`}
                >
                  [0{idx + 1}]
                </button>
              ))}
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 font-normal">
            OPRALE helps creators and creator agencies scale with structured short-form systems, stronger content positioning, and monetization infrastructure designed for long-term growth.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-3">
            <a
              href="mailto:workwithoprale@gmail.com?subject=OPRALE%20Scale%20Protocol%20Inquiry&body=Hey%20OPRALE%20team%2C%0A%0AI%20run%20a%20creator%20business%20%2F%20agency%20and%20want%20to%20scale%20short-form%20output%20into%20owned%20revenue.%0A%0AName%3A%0AChannel%20%2F%20Roster%3A%0AMonthly%20long-form%20hours%3A%0ACurrent%20monetization%20goal%3A%0A%0A%E2%80%94%0ASent%20via%20oprale.com"
              className="px-7 py-4 bg-[#7C6CFF] hover:bg-[#6A5AE6] text-white font-mono text-xs tracking-wider font-semibold transition-all flex items-center justify-center space-x-2.5 cursor-pointer uppercase shadow-[0_0_20px_rgba(124,108,255,0.2)]"
            >
              <Mail className="w-4 h-4" />
              <span>Email OPRALE</span>
            </a>

            <a
              href="https://instagram.com/oprale.ops"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#141414] hover:bg-[#1E1E28] text-white border border-white/20 hover:border-[#7C6CFF] font-mono text-xs tracking-wider font-semibold transition-all flex items-center justify-center space-x-2.5 cursor-pointer uppercase"
            >
              <span>DM on Instagram</span>
              <ArrowUpRight className="w-4 h-4 text-[#7C6CFF]" />
            </a>
          </div>

          {/* Trust-focused microcopy under CTAs */}
          <div className="mb-16 space-y-2">
            <p className="font-mono text-xs text-white/40 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
              <span>Not a generic editing service. Built exclusively for creators and agencies targeting scalable, owned revenue.</span>
            </p>
            <p className="font-mono text-[11px] text-white/30 pl-3.5">
              Prefer encrypted form dispatch?{' '}
              <button onClick={onOpenContact} className="text-[#7C6CFF] hover:text-white underline underline-offset-4 cursor-pointer">
                Open secure dispatch terminal →
              </button>
              <span className="ml-3 text-white/20">• workwithoprale@gmail.com • @oprale.ops</span>
            </p>
          </div>

          {/* 3 Compact Proof Cards / Metric Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="system-panel p-5 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#7C6CFF] tracking-widest px-1.5 py-0.5 bg-[#7C6CFF]/10 border border-[#7C6CFF]/30">
                    {metric.code}
                  </span>
                  <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#7C6CFF] transition-colors"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="font-mono text-xs text-white/80 font-semibold mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};