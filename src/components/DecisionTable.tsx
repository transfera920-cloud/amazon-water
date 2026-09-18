import React, { useState } from 'react';
import { DECISION_TABLE_DATA } from '../data/curriculum';
import { Table, AlertOctagon, CheckCircle2, ChevronDown, ChevronUp, Search, Info } from 'lucide-react';

export const DecisionTable: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = DECISION_TABLE_DATA.filter(row => 
    row.aspect.includes(searchTerm) ||
    row.lowAlert.includes(searchTerm) ||
    row.warningAlert.includes(searchTerm) ||
    row.nextStep.includes(searchTerm)
  );

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="decision-table" className="py-16 md:py-20 border-b border-slate-800 bg-[#090d14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 mb-3">
            <Table className="w-3.5 h-3.5" />
            核心教學資產・現場檢核表
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            水源判斷決策表
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            取水前的客觀觀察矩陣。請依序檢核水體之顏色、濁度、流動性、表面特徵、氣味、上游周遭環境與近期天候，決定前處理或取水處置。
          </p>
          <div className="mt-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-amber-300/90 flex items-center gap-2">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>特別提醒：表格內容嚴格遵循環境科學，<strong>不得將特定顏色直接等同於某種具體污染物</strong>，需綜合判斷成因。</span>
          </div>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋觀察項目（如：濁度、油膜、暴雨、氣味...）"
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-900 border border-slate-700/80 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          </div>
          <span className="text-xs text-slate-400 self-center">
            點擊各行可展開詳細科學機制與野外應變解說
          </span>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800 bg-[#0d131e] shadow-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-900/90 text-slate-300 font-semibold border-b border-slate-800">
                <th className="py-3.5 px-4 w-[14%]">觀察項目</th>
                <th className="py-3.5 px-4 w-[24%]">正常／低警戒</th>
                <th className="py-3.5 px-4 w-[28%]">警戒訊號</th>
                <th className="py-3.5 px-4 w-[26%]">下一步</th>
                <th className="py-3.5 px-3 w-[8%] text-center">細節</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300">
              {filteredData.map((row, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <React.Fragment key={row.aspect}>
                    <tr 
                      onClick={() => toggleExpand(idx)}
                      className={`hover:bg-slate-800/40 cursor-pointer transition-colors ${
                        isExpanded ? 'bg-slate-800/60' : ''
                      }`}
                    >
                      <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        {row.aspect}
                      </td>
                      <td className="py-4 px-4 text-emerald-300/95 font-medium">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.lowAlert}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-amber-300 font-medium">
                        <div className="flex items-start gap-1.5">
                          <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{row.warningAlert}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-200">
                        <span className="inline-block px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700 text-xs font-medium text-emerald-300">
                          {row.nextStep}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-center">
                        <button
                          type="button"
                          className="p-1 rounded text-slate-400 hover:text-white"
                          aria-label={`展開 ${row.aspect} 詳細解析`}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="bg-slate-900/80 border-b border-slate-800">
                        <td colSpan={5} className="py-4 px-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <div className="bg-[#0b0f17] p-4 rounded-lg border border-slate-800">
                            <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-1.5">
                              【{row.aspect}】科學機制與野外應變重點：
                            </div>
                            <p>{row.detailedAnalysis}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Optimized for handheld readability on trail) */}
        <div className="md:hidden space-y-3.5">
          {filteredData.map((row, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={row.aspect}
                className="rounded-xl border border-slate-800 bg-[#0d131e] p-4 shadow-sm"
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-base font-bold text-white">觀察項目：{row.aspect}</span>
                  </div>
                  <button className="text-slate-400 p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider block mb-0.5">正常／低警戒：</span>
                    <p className="text-emerald-300 font-medium flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      {row.lowAlert}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider block mb-0.5">警戒訊號：</span>
                    <p className="text-amber-300 font-medium flex items-start gap-1.5">
                      <AlertOctagon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      {row.warningAlert}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] uppercase tracking-wider block mb-0.5">下一步處置：</span>
                    <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-emerald-300 font-medium text-xs">
                      {row.nextStep}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 bg-[#0b0f17] p-3 rounded-lg text-xs text-slate-300 leading-relaxed">
                    <span className="font-semibold text-emerald-400 block mb-1">科學成因與技術指引：</span>
                    {row.detailedAnalysis}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
