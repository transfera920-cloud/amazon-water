import React from 'react';
import { Mountain } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#070b10] border-t border-slate-800 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <a 
          id="footer-brand-link"
          href="https://amazon-hike.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white hover:text-emerald-300 transition-colors group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center">
            <Mountain className="w-5 h-5 text-emerald-400 group-hover:scale-105 transition-transform" />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight">亞馬遜國家山岳協會</span>
        </a>
      </div>
    </footer>
  );
};

