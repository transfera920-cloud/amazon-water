import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { TableOfContents } from './components/TableOfContents';
import { DecisionTable } from './components/DecisionTable';
import { MethodComparison } from './components/MethodComparison';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { ChapterSection } from './components/ChapterSection';
import { Footer } from './components/Footer';
import { CHAPTERS_DATA } from './data/curriculum';
import { ArrowUp, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 selection:bg-emerald-700 selection:text-white flex flex-col font-sans">
      
      {/* Fixed Sticky Header with Brand Link */}
      <Header />

      <main className="flex-1">
        {/* Hero Section & Core Philosophy */}
        <HeroBanner />

        {/* 20 Chapters Table of Contents Quick Navigation */}
        <TableOfContents />

        {/* Mandatory Water Source Assessment Decision Table */}
        <DecisionTable />

        {/* 5 Treatment Methods Capability Boundary Comparison */}
        <MethodComparison />

        {/* 6-Step SOP Workflow */}
        <WorkflowDiagram />

        {/* Full 20 Chapters Content Stream */}
        <section className="py-12 bg-[#0b0f17]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                Curriculum In-Depth Lessons
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                二十大章節技術全詳解
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                由亞馬遜國家山岳協會技術委員會編纂，涵蓋從水生病原、微孔物理學到高山防凍之全方位實戰知識。
              </p>
            </div>

            <div className="space-y-4">
              {CHAPTERS_DATA.map((chapter) => (
                <ChapterSection key={chapter.id} chapter={chapter} />
              ))}
            </div>

            {/* Crucial Final Educational CTA */}
            <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#0e1624] border border-emerald-800/60 text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-700 mx-auto flex items-center justify-center text-emerald-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                飲水安全是登山自律與技術素養的體現
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                在偏遠山區，預防永遠勝於治療。隨時秉持客觀觀察、層層設防的原則，切勿貪圖一時便利而冒險生飲。欲查閱更多登山入門與安全指南，請造訪協會主站。
              </p>
              <div className="pt-2">
                <a
                  href="https://amazon-hike.com/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/50"
                >
                  <span>造訪亞馬遜國家山岳協會登山指南主頁</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Official Footer with links to https://amazon-hike.com/intro */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-xl shadow-black/50 border border-emerald-400/40 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="回到頁面頂部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
