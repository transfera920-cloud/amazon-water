import React from 'react';
import { Droplets, ShieldCheck, AlertTriangle, ArrowDown, ChevronRight, CheckCircle2 } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Subtle Mountain & River Contour Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-25">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-emerald-700/20 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[350px] bg-cyan-900/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <a 
            href="https://amazon-hike.com/intro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            亞馬遜國家山岳協會
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <a 
            href="https://amazon-hike.com/intro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            登山入門指南
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-300 font-medium">水源判斷與淨化</span>
        </nav>

        {/* Topic Tag & Authority Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
            <Droplets className="w-3.5 h-3.5 text-emerald-400" />
            登山安全技術專題教案
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-400">
            野外水質學與微生物防禦
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6">
          登山飲用水處理與水源判斷
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
          從高山溪澗、岩壁伏流、黑水塘到山屋雨水桶。建立以科學為依歸的野外水源觀察、過濾技術、熱力與化學消毒防線，杜絕高山急性腸胃炎風險。
        </p>

        {/* Core Philosophical Principle Banner - User Highlighted */}
        <div className="bg-[#111a24] border-l-4 border-emerald-500 rounded-r-xl p-5 md:p-6 mb-10 shadow-lg shadow-black/30">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block mb-1">
                教案最高核心原則
              </span>
              <p className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
                「不是問哪一種飲水處理方式最好，而是先判斷現在面對的是什麼水，再決定需要做到哪一層處理。」
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                裝備永遠只是工具，盲信單一設備是高山水生意外的主因。高風險水源應優先考慮更換水源，而非盲目增加過濾設備。
              </p>
            </div>
          </div>
        </div>

        {/* 12 Vital Scientific Reality Checks - High information density */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 mb-8">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            野外飲水客觀科學認知（破除常見迷思）
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-[13px] text-slate-300">
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>水透明</strong>不代表一定安全（微米級病原菌肉眼不可見）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>水混濁</strong>不代表一定有毒（懸浮泥沙為主，但需前處理）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>水有顏色</strong>不代表有特定污染物（常為植物單寧酸溶出）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>濾水器不是萬能</strong>（無法阻斷病毒與溶解性農藥/重金屬）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>活性碳不是除毒器</strong>（孔隙容量極有限，不能殺菌消毒）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>淨水錠不能代前處理</strong>（濁水微粒會消耗游離氯致滅菌失敗）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>煮沸無法除化學毒素</strong>（水分蒸發反而濃縮重金屬濃度）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>濾得快不等於過濾好</strong>（流速取決於膜面積、幾何孔徑分佈）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>流速慢不代表已損壞</strong>（水溫 2°C 黏度激增，或表面有泥餅）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>壽命不能只看時間</strong>（高濁度水可在數公升內徹底堵死濾芯）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>微孔受凍即報廢</strong>（水結冰膨脹 9% 撐破毛細管，隱形失效）</span>
            </div>
            <div className="flex items-start gap-2 bg-[#0b0f17] p-2.5 rounded-lg border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>高風險直接放棄</strong>（面對化學或油污，換水源勝過加裝備）</span>
            </div>
          </div>
        </div>

        {/* Action Buttons to Jump */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#decision-table"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-emerald-950/40"
          >
            <span>查閱水源判斷決策表</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#toc"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-colors border border-slate-700"
          >
            閱讀 20 大章節全文
          </a>
          <a
            href="#sop-workflow"
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors border border-emerald-900/60"
          >
            標準作業六步 SOP
          </a>
        </div>
      </div>
    </section>
  );
};
