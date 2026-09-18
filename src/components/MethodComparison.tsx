import React from 'react';
import { METHOD_COMPARISON_DATA } from '../data/curriculum';
import { Compass, ShieldCheck, Check, AlertCircle } from 'lucide-react';

export const MethodComparison: React.FC = () => {
  return (
    <section id="methods-comparison" className="py-16 md:py-20 border-b border-slate-800 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 mb-3">
            <Compass className="w-3.5 h-3.5" />
            淨水技術客觀橫評
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            五大飲水處理技術能力邊界
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            絕無「最強」的單一技術。每一種方法皆有其物理殺滅邊界與致命短板，理解其工作原理方能在山區因地制宜。
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-slate-800 bg-[#0e1420] shadow-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 text-slate-200 border-b border-slate-800">
                <th className="py-3.5 px-4 font-bold text-white w-[18%]">處理方式</th>
                <th className="py-3.5 px-3 font-semibold text-slate-300 w-[14%]">原蟲囊胞</th>
                <th className="py-3.5 px-3 font-semibold text-slate-300 w-[14%]">致病細菌</th>
                <th className="py-3.5 px-3 font-semibold text-slate-300 w-[14%]">病毒威脅</th>
                <th className="py-3.5 px-3 font-semibold text-slate-300 w-[13%]">濁水影響</th>
                <th className="py-3.5 px-3 font-semibold text-slate-300 w-[13%]">化學毒素</th>
                <th className="py-3.5 px-4 font-semibold text-slate-300 w-[14%]">最佳適用情境</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {METHOD_COMPARISON_DATA.map((row) => (
                <tr key={row.method} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 font-bold text-white">
                    <div className="text-sm text-emerald-400 mb-1">{row.method}</div>
                    <div className="text-[11px] text-slate-400 font-normal leading-snug">
                      <strong className="text-amber-400/90">限制：</strong>{row.keyLimitation}
                    </div>
                  </td>
                  <td className="py-4 px-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.protozoa.includes('優異') ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60' :
                      row.protozoa.includes('良好') ? 'bg-blue-950 text-blue-300 border border-blue-800/60' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {row.protozoa}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.bacteria.includes('優異') ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {row.bacteria}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.virus.includes('優異') ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60' :
                      row.virus.includes('無效') ? 'bg-rose-950 text-rose-300 border border-rose-800/60' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {row.virus}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-slate-300">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.turbidityImpact.includes('致命') ? 'bg-rose-950 text-rose-300 border border-rose-800' :
                      row.turbidityImpact.includes('極高') ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {row.turbidityImpact}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.chemicalRemoval.includes('良好') ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {row.chemicalRemoval}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-300 leading-relaxed font-medium">
                    {row.bestScenario}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {METHOD_COMPARISON_DATA.map((row) => (
            <div key={row.method} className="rounded-xl border border-slate-800 bg-[#0e1420] p-4 text-xs">
              <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {row.method}
              </h3>
              
              <div className="grid grid-cols-2 gap-2 my-3">
                <div className="bg-[#0b0f17] p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">原蟲囊胞</span>
                  <span className="font-semibold text-slate-200">{row.protozoa}</span>
                </div>
                <div className="bg-[#0b0f17] p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">致病細菌</span>
                  <span className="font-semibold text-slate-200">{row.bacteria}</span>
                </div>
                <div className="bg-[#0b0f17] p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">病毒威脅</span>
                  <span className="font-semibold text-slate-200">{row.virus}</span>
                </div>
                <div className="bg-[#0b0f17] p-2 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">濁度干擾</span>
                  <span className="font-semibold text-slate-200">{row.turbidityImpact}</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] leading-relaxed">
                <p><strong className="text-amber-400">關鍵限制：</strong>{row.keyLimitation}</p>
                <p><strong className="text-emerald-400">最佳適用：</strong>{row.bestScenario}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-barrier combo callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block mb-0.5">
              高風險水體的「組合式雙防線（Multi-barrier Defense）」原則：
            </span>
            <p>
              面對無法確認上游是否有人為糞便污染的水體（如山屋周邊死水、熱門營地下游），單純依賴 0.1 µm 濾水器可能遺漏病毒；單純依賴淨水錠又容易被濁度微粒消耗。<strong>最穩妥的作法是「中空絲膜濾水（除泥沙、細菌與原蟲）＋ 二氧化氯或煮沸（徹底消滅病毒）」。</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
