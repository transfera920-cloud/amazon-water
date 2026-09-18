import React, { useState, useEffect } from 'react';
import { Mountain, Compass, BookOpen, Table, ShieldAlert, ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeChapter?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 py-2.5 shadow-xl shadow-black/40' 
          : 'bg-[#0b0f17]/80 backdrop-blur-sm border-b border-slate-800/40 py-3.5'
      }`}
    >
      {/* Top Reading Progress Bar */}
      <div className="absolute top-0 left-0 h-[2.5px] bg-emerald-500 transition-all duration-150 ease-out z-50"
           style={{ width: `${scrollProgress}%` }} 
           aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Logo Block - Fixed destination to https://amazon-hike.com/intro */}
          <a 
            id="brand-logo-link"
            href="https://amazon-hike.com/intro" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1 transition-all"
            title="前往 亞馬遜國家山岳協會 主站介紹"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-slate-900 flex items-center justify-center border border-emerald-500/40 shadow-inner group-hover:border-emerald-400 transition-colors">
              <Mountain className="w-5 h-5 text-emerald-300 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                亞馬遜國家山岳協會
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-400 group-hover:text-slate-300">
                Amazon Alpine Association
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-slate-300">
            <a 
              id="nav-link-toc"
              href="#toc"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>二十大章節</span>
            </a>
            <a 
              id="nav-link-decision-table"
              href="#decision-table"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Table className="w-4 h-4 text-emerald-400" />
              <span>水源判斷決策表</span>
            </a>
            <a 
              id="nav-link-methods"
              href="#methods-comparison"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>淨水技術橫評</span>
            </a>
            <a 
              id="nav-link-workflow"
              href="#sop-workflow"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>六步決策SOP</span>
            </a>

            {/* SEO Authority Link back to main intro */}
            <div className="h-4 w-[1px] bg-slate-700 mx-1" />
            <a
              id="nav-link-intro-return"
              href="https://amazon-hike.com/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-900/30 hover:bg-emerald-800/40 border border-emerald-700/50 text-emerald-300 hover:text-white transition-all flex items-center gap-1 text-xs"
              title="返回亞馬遜國家山岳協會登山入門指南"
            >
              <span>登山入門指南</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-intro-btn"
              href="https://amazon-hike.com/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-xs font-medium flex items-center gap-1"
            >
              <span>主站</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="切換目錄導覽"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#0e1420] border-b border-slate-800 px-4 py-4 space-y-2 text-sm shadow-2xl">
          <a
            href="#toc"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-800"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>教案二十大章節目錄</span>
          </a>
          <a
            href="#decision-table"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-800"
          >
            <Table className="w-4 h-4 text-emerald-400" />
            <span>水源判斷決策表（必讀）</span>
          </a>
          <a
            href="#methods-comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-800"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>過濾／煮沸／淨水錠比較表</span>
          </a>
          <a
            href="#sop-workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-800"
          >
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>取水至飲用六步 SOP</span>
          </a>
          <a
            href="https://amazon-hike.com/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 font-medium"
          >
            <span>亞馬遜國家山岳協會・登山入門系列</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
