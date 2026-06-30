import React, { useState } from 'react';
import { Sliders, Terminal, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

interface OutputSimulatorProps {
  onOpenContact: () => void;
}

export const OutputSimulator: React.FC<OutputSimulatorProps> = ({ onOpenContact }) => {
  const [footageHours, setFootageHours] = useState<number>(15);
  const [rosterCount, setRosterCount] = useState<number>(1);

  // Calculations
  const totalRawHours = footageHours * rosterCount;
  const projectedClipsMonthly = Math.round(totalRawHours * 2.8);
  const projectedWeeklyClips = Math.round(projectedClipsMonthly / 4);
  const estimatedHoursSaved = Math.round(totalRawHours * 3.5);
  const conversionRoutingMultiplier = rosterCount > 1 ? '4.8x' : '3.2x';

  return (
    <section id="simulator" className="py-20 md:py-28 border-b border-white/10 bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#7C6CFF] mb-3">
            <Sliders className="w-4 h-4" />
            <span>[ OPERATOR TOOL // VELOCITY & YIELD SIMULATOR ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Model your system output and capacity.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Input your current raw archive volume or agency roster size below to see projected weekly short-form cadence and estimated time recovered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center system-panel p-6 sm:p-10 border-white/15">
          {/* Left Sliders Controls */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-mono text-xs text-white/80 tracking-wider uppercase">
                  MONTHLY LONG-FORM ARCHIVE HOURS PER CREATOR:
                </label>
                <span className="font-mono text-base font-bold text-[#7C6CFF] bg-[#171724] px-3 py-1 border border-[#7C6CFF]/30">
                  {footageHours} HRS / MO
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={footageHours}
                onChange={(e) => setFootageHours(parseInt(e.target.value))}
                className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#7C6CFF]"
              />
              <div className="flex justify-between font-mono text-[10px] text-white/40 mt-2">
                <span>5 HRS (MINIMAL)</span>
                <span>30 HRS (PODCAST ENGINE)</span>
                <span>60 HRS (HEAVY STREAMING)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-mono text-xs text-white/80 tracking-wider uppercase">
                  ACTIVE CREATORS ON ROSTER:
                </label>
                <span className="font-mono text-base font-bold text-[#7C6CFF] bg-[#171724] px-3 py-1 border border-[#7C6CFF]/30">
                  {rosterCount} {rosterCount === 1 ? 'CREATOR (SOLO)' : 'CREATORS (AGENCY)'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={rosterCount}
                onChange={(e) => setRosterCount(parseInt(e.target.value))}
                className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#7C6CFF]"
              />
              <div className="flex justify-between font-mono text-[10px] text-white/40 mt-2">
                <span>1 (SOLO CREATOR)</span>
                <span>5 (MULTI-ROSTER POD)</span>
                <span>15 (AGENCY ENTERPRISE)</span>
              </div>
            </div>

            <div className="p-4 bg-[#141414] border border-white/5 font-mono text-xs text-white/60 flex items-start space-x-3">
              <Terminal className="w-4 h-4 text-[#7C6CFF] shrink-0 mt-0.5" />
              <span>
                Based on OPRALE’s 2.8x retention-verified clip extraction ratio and standard 3.5 hr/clip post-production benchmark.
              </span>
            </div>
          </div>

          {/* Right Live Telemetry Output Console */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div className="font-mono text-xs text-[#7C6CFF] tracking-widest uppercase mb-4 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>PROJECTED SYSTEM TELEMETRY REPORT:</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-[#14141A] border border-white/10">
                <div className="font-mono text-[10px] text-white/50 tracking-wider uppercase mb-1">
                  PROJECTED SHORT-FORM CLIPS
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  ~{projectedClipsMonthly} <span className="text-sm font-mono text-[#7C6CFF] font-normal">/ mo</span>
                </div>
                <div className="font-mono text-xs text-white/70 mt-1">
                  ({projectedWeeklyClips} high-retention clips weekly)
                </div>
              </div>

              <div className="p-5 bg-[#14141A] border border-white/10">
                <div className="font-mono text-[10px] text-white/50 tracking-wider uppercase mb-1">
                  RECOVERED CREATIVE HOURS
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">
                  {estimatedHoursSaved} <span className="text-sm font-mono text-white/60 font-normal">hrs</span>
                </div>
                <div className="font-mono text-xs text-white/70 mt-1">
                  Saved from manual review & editing
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#13121D] border border-[#7C6CFF]/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7C6CFF] uppercase font-bold flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MONETIZATION ROUTING INDEX</span>
                </span>
                <span className="font-mono text-sm font-bold text-white">{conversionRoutingMultiplier} Boost</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                By injecting structured retention hooks and bio conversion loops across ~{projectedClipsMonthly} monthly clips, your funnel lead velocity scales systematically without increasing ad spend.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-4 bg-[#7C6CFF] hover:bg-[#6A5AE6] text-white font-mono text-xs tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(124,108,255,0.2)]"
            >
              <span>LOCK IN THIS OUTPUT CONFIGURATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};