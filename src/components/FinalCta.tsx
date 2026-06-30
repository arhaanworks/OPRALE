import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Terminal } from 'lucide-react';

interface FinalCtaProps {
  onOpenContact: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 relative">
      {/* Main Final CTA Block */}
      <div className="py-20 md:py-32 border-b border-white/10 subtle-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#141414] border border-white/15 font-mono text-xs text-[#7C6CFF]">
              <span className="w-2 h-2 rounded-full bg-[#7C6CFF]"></span>
              <span>FINAL DEPLOYMENT PROTOCOL</span>
            </div>

            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              For creators and creator agencies ready to scale with systems.
            </h2>

            <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
              OPRALE is built to act as a long-term scale partner—replacing ad-hoc freelancers and chaotic internal pipelines with systematic short-form execution and structured monetization infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="mailto:workwithoprale@gmail.com?subject=OPRALE%20Scale%20Partner%20Inquiry%20—%20Final%20CTA&body=Hey%20OPRALE%20team%2C%0A%0AI%27m%20ready%20to%20scale%20with%20systems.%0A%0A—%0AName%20%2F%20Entity%3A%0AChannel%20%2F%20Agency%3A%0AMonthly%20long-form%20volume%3A%0ACurrent%20monetization%20stack%3A%0ATarget%20outcome%3A%0A%0A%E2%80%94%0ASent%20securely%20via%20oprale.com"
                className="px-8 py-5 bg-[#7C6CFF] hover:bg-[#6A5AE6] text-white font-mono text-xs tracking-wider font-semibold transition-all flex items-center justify-center space-x-3 cursor-pointer uppercase shadow-[0_0_25px_rgba(124,108,255,0.25)]"
              >
                <Mail className="w-4 h-4" />
                <span>Email OPRALE</span>
              </a>

              <a
                href="https://instagram.com/oprale.ops"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#141414] hover:bg-[#1C1C1C] text-white border border-white/20 hover:border-[#7C6CFF] font-mono text-xs tracking-wider font-semibold transition-all flex items-center justify-center space-x-3 cursor-pointer uppercase"
              >
                <span>DM on Instagram</span>
                <ArrowUpRight className="w-4 h-4 text-[#7C6CFF]" />
              </a>
            </div>
            <div className="pt-1">
              <button
                onClick={onOpenContact}
                className="font-mono text-xs text-white/50 hover:text-[#7C6CFF] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Prefer secure encrypted form? Open OPRALE Dispatch Terminal →
              </button>
            </div>

            {/* Direct Contact Handles Card */}
            <div className="p-6 bg-[#121212] border border-white/10 max-w-2xl mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-white/40 block text-[10px] uppercase mb-1">DIRECT SYSTEM CORRESPONDENCE:</span>
                <div className="text-white flex items-center space-x-4">
                  <span>EMAIL: workwithoprale@gmail.com</span>
                  <span>•</span>
                  <span>IG: @oprale.ops</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => handleCopy('workwithoprale@gmail.com', 'email')}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  {copied === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Email</span>
                </button>
                <button
                  onClick={() => handleCopy('@oprale.ops', 'ig')}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  {copied === 'ig' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Handle</span>
                </button>
              </div>
            </div>

            {/* Small Contact Line exactly as requested */}
            <p className="font-mono text-xs text-white/40 pt-2 border-t border-white/10 max-w-2xl">
              For creator growth, partnerships, or agency scaling inquiries, reach out via email or Instagram.
            </p>
          </div>
        </div>
      </div>

      {/* Swiss Operator Footer Bottom Bar */}
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
        <div className="flex items-center space-x-3">
          <Terminal className="w-4 h-4 text-[#7C6CFF]" />
          <span className="text-white font-bold">OPRALE</span>
          <span>// CREATOR GROWTH OPERATING SYSTEM</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#what" className="hover:text-white transition-colors">ARCHITECTURE</a>
          <a href="#who" className="hover:text-white transition-colors">QUALIFICATION</a>
          <a href="#process" className="hover:text-white transition-colors">WORKFLOW</a>
          <a href="#tiers" className="hover:text-white transition-colors">TIERS</a>
          <a href="#simulator" className="hover:text-white transition-colors">SIMULATOR</a>
        </div>

        <div>
          © {new Date().getFullYear()} OPRALE SYSTEM CORP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};