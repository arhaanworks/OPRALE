import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / System Ident */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-[#181818] border border-white/20 group-hover:border-[#7C6CFF] flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-[#7C6CFF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base leading-none group-hover:text-white transition-colors">
                OPRALE
              </span>
              <span className="font-mono text-[9px] text-white/40 tracking-widest mt-0.5">
                // CREATOR OS
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#what" className="font-mono text-xs text-white/60 hover:text-white transition-colors flex items-center space-x-1">
              <span className="text-[#7C6CFF]/60">[01]</span>
              <span>ARCHITECTURE</span>
            </a>
            <a href="#who" className="font-mono text-xs text-white/60 hover:text-white transition-colors flex items-center space-x-1">
              <span className="text-[#7C6CFF]/60">[02]</span>
              <span>QUALIFICATION</span>
            </a>
            <a href="#why" className="font-mono text-xs text-white/60 hover:text-white transition-colors flex items-center space-x-1">
              <span className="text-[#7C6CFF]/60">[03]</span>
              <span>ADVANTAGES</span>
            </a>
            <a href="#process" className="font-mono text-xs text-white/60 hover:text-white transition-colors flex items-center space-x-1">
              <span className="text-[#7C6CFF]/60">[04]</span>
              <span>WORKFLOW</span>
            </a>
            <a href="#tiers" className="font-mono text-xs text-white/60 hover:text-white transition-colors flex items-center space-x-1">
              <span className="text-[#7C6CFF]/60">[05]</span>
              <span>OFFERS</span>
            </a>
          </nav>

          {/* Right Action & Status */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 px-2.5 py-1 bg-[#141414] border border-white/10 rounded font-mono text-[10px] text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>SYS.STATUS: ACTIVE</span>
            </div>

            <button
              onClick={onOpenContact}
              className="group px-4 py-2 bg-[#1A1A24] hover:bg-[#7C6CFF] text-white border border-[#7C6CFF]/40 hover:border-[#7C6CFF] font-mono text-xs tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <span>INITIATE DISPATCH</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};