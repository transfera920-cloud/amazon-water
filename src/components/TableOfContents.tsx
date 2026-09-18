import React, { useState } from 'react';
import { CHAPTERS_DATA } from '../data/curriculum';
import { BookOpen, ChevronRight, Compass } from 'lucide-react';

export const TableOfContents: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredChapters = CHAPTERS_DATA.filter(chap => 
    chap.title.includes(filterQuery) ||
    chap.subtitle.includes(filterQuery) ||
    chap.number.includes(filterQuery)
  );

  return (
    <section id="toc" className="py-14 border-b border-slate-800 bg-[#0c111a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 mb-2.5">
              <BookOpen className="w-3.5 h-3.5" />
              專業教案完整結構
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              二十大章節快速導覽
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              點擊任一章節即可直達該技術詳解；長頁面結構適合連續系統性精讀。
            </p>
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="搜尋章節關鍵字（如：結冰、流速、反沖洗...）"
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* Chapters Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredChapters.map((chap) => (
            <a
              key={chap.id}
              href={`#${chap.id}`}
              className="p-3.5 rounded-xl border border-slate-800 bg-[#0e1522] hover:bg-slate-800/60 hover:border-emerald-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    CHAPTER {chap.number}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors leading-snug">
                  {chap.title}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {chap.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
