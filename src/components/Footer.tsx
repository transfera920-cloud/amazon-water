import React from 'react';
import { Mountain, ArrowUpRight, ShieldCheck, Compass, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#070b10] border-t border-slate-800 text-slate-400 text-xs sm:text-sm py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission Column */}
          <div className="space-y-4">
            <a 
              id="footer-brand-link"
              href="https://amazon-hike.com/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-emerald-300 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center">
                <Mountain className="w-5 h-5 text-emerald-400 group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <span className="font-bold text-base block tracking-tight">亞馬遜國家山岳協會</span>
                <span className="text-xs text-slate-400 tracking-wider">Amazon Alpine Association</span>
              </div>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              致力於野外山岳安全技術、無痕山林倫理與自主風險管理之環境教育。本教案為協會「登山入門指南系列」之核心水質安全標準文獻。
            </p>

            <div className="pt-1">
              <a
                id="footer-intro-cta"
                href="https://amazon-hike.com/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 text-xs font-semibold transition-all"
              >
                <span>前往協會主站簡介</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Curriculum Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              教案核心模組
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#toc" className="hover:text-emerald-400 transition-colors">
                  二十大章節目錄總覽
                </a>
              </li>
              <li>
                <a href="#decision-table" className="hover:text-emerald-400 transition-colors">
                  水源判斷決策表（七維觀察矩陣）
                </a>
              </li>
              <li>
                <a href="#methods-comparison" className="hover:text-emerald-400 transition-colors">
                  過濾、煮沸、淨水錠、活性碳、UV 橫向比較
                </a>
              </li>
              <li>
                <a href="#sop-workflow" className="hover:text-emerald-400 transition-colors">
                  野外取水至飲用六步標準作業 SOP
                </a>
              </li>
              <li>
                <a href="#chap-16" className="hover:text-emerald-400 transition-colors">
                  高山低溫與微孔濾芯結冰破壞防範
                </a>
              </li>
              <li>
                <a href="#chap-20" className="hover:text-emerald-400 transition-colors">
                  何時必須直接果斷放棄該水源
                </a>
              </li>
            </ul>
          </div>

          {/* Authority & SEO Network Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" />
              相關登山入門系列資源
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              本教案為亞馬遜國家山岳協會正式發布之高山野外技術專題。若需進一步了解高山氣候、裝備打包、無痕山林與緊急避難技術，請參考：
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://amazon-hike.com/intro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <span>亞馬遜國家山岳協會・完整入門指南目錄</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://amazon-hike.com/intro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-slate-300 flex items-center gap-1 transition-colors text-slate-400"
                >
                  <span>協會技術委員會安全守則規範</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} 亞馬遜國家山岳協會 Amazon Alpine Association. All rights reserved.
            </p>
            <p className="text-slate-400">
              正式公開網址：<span className="font-mono text-slate-300">https://topic02.amazon-hike.com/</span>
            </p>
          </div>

          <div className="text-center md:text-right max-w-md text-slate-400">
            <p>
              免責聲明：本教案內容係野外環境科學之客觀技術指引。野外水文環境瞬息萬變，從業者須恪守風險自負原則，隨時以生命安全為最高準繩。
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
