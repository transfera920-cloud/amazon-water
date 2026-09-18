import React from 'react';
import { Eye, Droplets, Filter, ShieldCheck, Flame, CheckCircle, ArrowRight } from 'lucide-react';

export const WorkflowDiagram: React.FC = () => {
  const steps = [
    {
      step: '01',
      name: '水源判斷',
      icon: Eye,
      tag: '環境與水文',
      action: '抬頭檢視上游集水區有無排遺、露營地或動物屍體；檢查水色（綠/褐/黑）、濁度、流動狀態、油膜與氣味。',
      risk: '若有石化油膜、持久厚泡沫或農藥腐屍異味，立即放棄。'
    },
    {
      step: '02',
      name: '科學取水',
      icon: Droplets,
      tag: '物理採樣',
      action: '優先取岩壁裂隙水或湍急活水。容器口朝上游以 45° 切入水面下 5–10 公分中層，避開表面浮渣與底層翻砂。',
      risk: '切忌在步道下方取水，禁止踩入水中擾動底泥。'
    },
    {
      step: '03',
      name: '強制前處理',
      icon: Filter,
      tag: '去濁與沉澱',
      action: '若水質帶濁或含落葉碎屑，靜置 30–60 分鐘沉澱重顆粒；以咖啡濾紙或高密度魔術頭巾進行粗濾倒出上清液。',
      risk: '嚴禁拿高濁度泥水直接硬擠微孔濾芯，否則數公升即報廢。'
    },
    {
      step: '04',
      name: '物理過濾',
      icon: ShieldCheck,
      tag: '0.1–0.2 µm',
      action: '使用中空絲膜濾水器截留 99.9% 細菌與原生寄生蟲卵囊（梨形鞭毛蟲、隱孢子蟲）。平穩加壓，切勿暴力硬推。',
      risk: '注意防凍！若氣溫降至冰點以下，必須收進內層衣物保溫。'
    },
    {
      step: '05',
      name: '二次消毒',
      icon: Flame,
      tag: '滅病毒防線',
      action: '若取自死水、山屋雨水桶或人為熱門營地下游，濾後水持續滾沸 1–3 分鐘，或投入二氧化氯錠按規定時間靜置。',
      risk: '一般微孔濾水器無法阻擋病毒，高風險水源需此道防禦。'
    },
    {
      step: '06',
      name: '安全分裝飲用',
      icon: CheckCircle,
      tag: '防交叉污染',
      action: '落實生熟分離。生水袋與飲用水瓶嚴格分色；懸空 3–5 公分傾倒，雙手乾燥，出水嘴絕不碰觸水壺內部。',
      risk: '一滴外壁生水滑入瓶內，整壺水立刻破功感染。'
    }
  ];

  return (
    <section id="sop-workflow" className="py-16 md:py-20 border-b border-slate-800 bg-[#090d14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            野外標準作業流程 SOP
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            水源判斷至飲用六步決策流程
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            嚴格遵守「水源判斷 → 取水 → 前處理 → 過濾 → 消毒 → 飲用」閉環，每一步皆有明確動作指標與禁止事項。
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-xl border border-slate-800 bg-[#0d131e] p-5 shadow-lg flex flex-col justify-between hover:border-emerald-500/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                      STEP {item.step}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {item.action}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] text-amber-300 font-medium leading-normal bg-amber-950/20 border border-amber-900/40 p-2 rounded">
                    <strong>警戒點：</strong>{item.risk}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flow Connective Note */}
        <div className="mt-8 flex items-center justify-center text-xs text-slate-400 gap-2 flex-wrap text-center">
          <span className="font-semibold text-emerald-400">完整閉環原則：</span>
          <span>跳過前處理會毀掉濾芯</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span>忽略消毒會漏掉病毒</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span>分裝碰觸會引發二次交叉感染</span>
        </div>

      </div>
    </section>
  );
};
