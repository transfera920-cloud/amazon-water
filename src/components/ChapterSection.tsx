import React from 'react';
import { ChapterItem } from '../types';
import { CheckCircle2, AlertTriangle, AlertOctagon, Info, ShieldCheck, ArrowRight } from 'lucide-react';

interface ChapterSectionProps {
  chapter: ChapterItem;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({ chapter }) => {
  return (
    <article
      id={chapter.id}
      className="py-12 md:py-16 border-b border-slate-800/80 scroll-mt-20"
    >
      {/* Chapter Meta & Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
            CHAPTER {chapter.number}
          </span>
          <span className="text-xs text-slate-400">亞馬遜國家山岳協會・登山飲用水教案</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          {chapter.number}｜{chapter.title}
        </h2>
        
        <p className="text-base sm:text-lg text-emerald-400/90 font-medium mt-1">
          {chapter.subtitle}
        </p>
      </div>

      {/* Chapter Executive Summary Box */}
      <div className="bg-[#0e1420] border-l-2 border-emerald-500 rounded-r-xl p-4 sm:p-5 mb-8 text-sm text-slate-300 leading-relaxed">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
          章節核心要義：
        </span>
        {chapter.summary}
      </div>

      {/* Key Takeaways Badges */}
      <div className="mb-8 bg-[#090d14] rounded-xl p-4 border border-slate-800/80">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          本章必記關鍵認知
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-300">
          {chapter.keyPoints.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2 bg-[#0d131e] p-2.5 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chapter Main Content Blocks */}
      <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
        {chapter.content.map((block, idx) => (
          <div key={idx} className="space-y-5">
            {block.heading && (
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-6">
                {block.heading}
              </h3>
            )}

            {block.paragraphs && block.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-300 leading-relaxed font-normal">
                {p}
              </p>
            ))}

            {/* Special Callout Box */}
            {block.callout && (
              <div
                className={`p-4 sm:p-5 rounded-xl border my-6 text-xs sm:text-sm leading-relaxed ${
                  block.callout.type === 'critical'
                    ? 'bg-rose-950/20 border-rose-900/60 text-rose-200'
                    : block.callout.type === 'warning'
                    ? 'bg-amber-950/20 border-amber-900/60 text-amber-200'
                    : block.callout.type === 'principle'
                    ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-2">
                  {block.callout.type === 'critical' && <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0" />}
                  {block.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
                  {block.callout.type === 'principle' && <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />}
                  {block.callout.type === 'info' && <Info className="w-4 h-4 text-cyan-400 shrink-0" />}
                  <span className="tracking-wide">{block.callout.title}</span>
                </div>
                <p>{block.callout.text}</p>
              </div>
            )}

            {/* Subsections Grid/List */}
            {block.subsections && (
              <div className="space-y-4 my-6">
                {block.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-[#0e1420] p-4 sm:p-5 rounded-xl border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        {sub.title}
                      </h4>
                      {sub.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sub.content.map((sc, scIdx) => (
                        <p key={scIdx}>{sc}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Checklists */}
            {block.checklists && (
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 my-4">
                <span className="font-bold text-xs uppercase tracking-wider text-emerald-400 block mb-2">
                  {block.checklists.title}
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {block.checklists.items.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Quick Jump back or forward */}
      <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <a href="#toc" className="hover:text-emerald-400 transition-colors">
          ↑ 返回二十大章節目錄
        </a>
        <a href="#decision-table" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
          <span>對照水源判斷決策表</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
};
