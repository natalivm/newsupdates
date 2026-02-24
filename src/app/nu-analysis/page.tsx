"use client";

import { useState } from "react";
import Link from "next/link";

const TOTAL = 16;

const labels = [
  "",
  "01 / 07", "02 / 07", "03 / 07", "04 / 07", "05 / 07", "06 / 07", "07 / 07",
  "VS", "VS 1/4", "VS 2/4", "VS 3/4",
  "STRESS", "ST 1/3", "ST 2/3", "ST 3/3",
];

export default function NuAnalysis() {
  const [current, setCurrent] = useState(0);
  const [selectedView, setSelectedView] = useState<"bull" | "bear" | null>(null);

  function navigate(dir: number) {
    const next = current + dir;
    if (next < 0 || next >= TOTAL) return;
    setCurrent(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setCurrent(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const pct = (current / (TOTAL - 1)) * 100;

  return (
    <div className="min-h-screen relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/[0.08] z-[100]">
        <div
          className="h-full progress-fill transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Step counter */}
      <div className="fixed top-4 right-4 font-mono text-[11px] text-muted tracking-widest z-[100]">
        {current > 0 ? labels[current] : ""}
      </div>

      {/* Back to home */}
      <Link
        href="/"
        className="fixed top-4 left-4 font-mono text-[11px] text-muted tracking-widest z-[100] hover:text-accent-light transition-colors"
      >
        &larr; HOME
      </Link>

      {/* ═══ SCREEN 0: INTRO ═══ */}
      {current === 0 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="hero-glow absolute inset-0 pointer-events-none" />
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 pt-20 pb-28 max-w-[680px] mx-auto w-full gap-6 relative">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded px-3.5 py-2 self-start">
              <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse-dot" />
              <span className="font-mono text-[13px] tracking-widest">NU · NYSE · NUBANK</span>
            </div>

            <h1 className="font-display text-[clamp(52px,14vw,90px)] leading-[0.9] tracking-wide text-white">
              IS IT<br />
              <span className="text-accent-light" style={{ WebkitTextStroke: "1px rgba(255,0,112,0.5)" }}>
                A BUY?
              </span>
            </h1>

            <div className="divider-gradient" />

            <div className="text-center bg-card rounded-lg border border-card-border p-6">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-2">Поточна ціна</div>
              <div className="font-display text-[clamp(72px,20vw,110px)] leading-none text-accent-light animate-flicker">
                $16.15
              </div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mt-2">
                Forward P/E 27x · ROE 31%
              </div>
            </div>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-accent-light leading-relaxed">
              Фінансова машина десятиліття — чи бомба сповільненої дії?
            </p>

            <p className="text-[15px] text-white/40">3 частини · 15 екранів · Тільки факти.</p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 1: THE NUMBERS ═══ */}
      {current === 1 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 1 / 7 — Реальність</div>
            <h2 className="font-display text-[clamp(40px,10vw,70px)] leading-[0.9] text-white">
              Q3 2025<br /><span className="text-accent-light">Цифри</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { unit: "Клієнтів", num: "127M", cls: "" },
                { unit: "+Квартал", num: "+4M", cls: "text-bull" },
                { unit: "Виручка", num: "$4B", cls: "" },
                { unit: "Прибуток", num: "$783M", cls: "text-base" },
              ].map((s, i) => (
                <div key={i} className="bg-card border border-card-border rounded-md p-4 text-center animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="font-mono text-[11px] text-accent-light tracking-widest uppercase">{s.unit}</div>
                  <div className={`font-display text-[clamp(36px,9vw,56px)] leading-none ${s.cls || "text-white"}`}>{s.num}</div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="font-mono text-xs text-muted tracking-widest uppercase">ROE</div>
                  <div className="font-display text-[52px] leading-none text-bull">31%</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-muted tracking-widest uppercase">Cost-to-Income</div>
                  <div className="font-display text-[52px] leading-none text-accent-light">&lt;28%</div>
                </div>
              </div>
              <div className="divider-gradient" />
              <p className="text-sm text-white/90 mt-3">
                <strong className="text-white">Кредитний портфель $30B</strong> — активно зсувається в менш ризикові сегменти. Тимчасово стискає NIM, але знижує ризик.
              </p>
            </div>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-accent-light leading-relaxed">
              Це не стартап. Це вже масштаб.
            </p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 2: THE MATH ═══ */}
      {current === 2 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 2 / 7 — Математика</div>
            <h2 className="font-display text-[clamp(40px,10vw,70px)] leading-[0.9] text-white">
              Без<br /><span className="text-accent-light">Магії</span>
            </h2>

            <div className="bg-accent/10 border border-accent/30 rounded-md p-5 text-center font-mono text-[clamp(14px,3.5vw,18px)] tracking-wider">
              Ціна <span className="text-accent-light text-[1.4em]">=</span> EPS <span className="text-accent-light text-[1.4em]">×</span> P/E
            </div>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">EPS прогнози</div>
              <div className="flex items-center gap-5 flex-wrap">
                <div>
                  <div className="font-display text-[44px] leading-none text-muted">$0.59</div>
                  <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">EPS 2025</div>
                </div>
                <div className="text-[30px] text-accent-light pb-4">→</div>
                <div>
                  <div className="font-display text-[44px] leading-none text-white">$0.84</div>
                  <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">EPS 2026 ← ключовий</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">Сценарії по P/E для EPS $0.84</div>
              {[
                { pe: "P/E 25", w: "100%", color: "bg-bull", priceColor: "text-bull", price: "$21" },
                { pe: "P/E 20", w: "80%", color: "bg-base", priceColor: "text-base", price: "$16.8" },
                { pe: "P/E 15", w: "60%", color: "bg-bear", priceColor: "text-bear", price: "$12.6" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between py-3.5 border-b border-card-border last:border-b-0 gap-3">
                  <div className="font-mono text-[15px] text-muted w-[60px]">{r.pe}</div>
                  <div className="flex-1 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${r.color} animate-bar-grow`} style={{ width: r.w }} />
                  </div>
                  <div className={`font-display text-[28px] w-[80px] text-right ${r.priceColor}`}>{r.price}</div>
                </div>
              ))}
            </div>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-accent-light leading-relaxed">
              Все залежить від одного: який P/E заслуговує NU?
            </p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 3: CATALYSTS ═══ */}
      {current === 3 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 3 / 7 — Каталізатори</div>
            <h2 className="font-display text-[clamp(36px,9vw,60px)] leading-[0.9] text-accent-light">
              Каталі-<br />затори
            </h2>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              {[
                { num: "01", title: "Mexico — 2-га S-крива", desc: '13M клієнтів. ARPAC майже як у Бразилії. Cost-to-serve ~$1. CEO: "Могли б бути прибутковими вже зараз — але інвестуємо в масштаб."' },
                { num: "02", title: "AI — не для хайпу", desc: "nuFormer дозволяє точніше піднімати кредитні ліміти без росту ризику. Структурна перевага, а не маркетинг." },
                { num: "03", title: "ROE 31%", desc: "Це рівень, який не дають слабкі банки. Підтверджено без зовнішнього боргу, без субсидій." },
                { num: "04", title: "83% активних клієнтів", desc: "Не просто рахунки — люди реально користуються. Retention на рівні tech-компаній, не банків." },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 py-4 border-b border-card-border last:border-b-0">
                  <div className="font-display text-[40px] leading-none text-accent shrink-0 w-10">{c.num}</div>
                  <div>
                    <div className="font-bold text-[18px] text-white mb-1">{c.title}</div>
                    <div className="text-sm text-[#C0BCDB] leading-relaxed">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 4: RISKS ═══ */}
      {current === 4 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 4 / 7 — Ризики</div>
            <h2 className="font-display text-[clamp(36px,9vw,60px)] leading-[0.9] text-white">
              Те, що<br /><span className="text-bear">всі<br />ігно-<br />рують</span>
            </h2>

            <div className="bg-bear/10 border border-bear/30 rounded-md p-4 flex gap-3 items-start">
              <span className="text-[22px] shrink-0 mt-0.5">🇲🇽</span>
              <p className="text-[15px] text-[rgba(255,200,210,0.95)] leading-relaxed">
                <strong className="text-white">Mexico прямо зараз:</strong> масштабні військові операції проти картелів. Дорожні блокади. Сплеск насильства. Національна гвардія.
              </p>
            </div>

            <div className="text-[clamp(16px,4.5vw,20px)] leading-relaxed text-white/90">
              Це не <strong className="text-white">крах-ризик</strong>.<br />
              Це <strong className="text-bear">мультиплікаторний ризик.</strong>
            </div>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              {[
                { icon: "⚖️", title: "Регуляція interchange", desc: "Регулятор активно обговорює обмеження. Б'є по юніт-економіці напряму." },
                { icon: "📉", title: "Кредитний цикл", desc: "Бразилія — високі ставки. $30B портфель — якщо цикл ламається, NPL зростає, P/E падає першим." },
                { icon: "🗜️", title: "NIM стискається", desc: "Зсув у менш ризикові сегменти — свідомий вибір менеджменту. Але ринок може цього не оцінити короткостроково." },
              ].map((r, i) => (
                <div key={i} className="flex gap-3.5 items-start py-3.5 border-b border-card-border last:border-b-0">
                  <span className="text-[24px] shrink-0 w-9 text-center mt-0.5">{r.icon}</span>
                  <div>
                    <div className="font-bold text-[17px] text-white mb-1">{r.title}</div>
                    <div className="text-sm text-[#B8B4CC] leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-[rgba(255,100,100,0.8)] leading-relaxed">
              NU будує другу S-криву саме там, де всі три ризики перетинаються.
            </p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 5: THREE SCENARIOS ═══ */}
      {current === 5 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 5 / 7 — Три сценарії</div>
            <h2 className="font-display text-[clamp(40px,10vw,70px)] leading-[0.9] text-white">
              Куди<br /><span className="text-accent-light">Піде</span><br />Ціна?
            </h2>

            {[
              { type: "bull", label: "🟢 BULL CASE", price: "$21+", priceColor: "text-bull", borderColor: "border-bull", detail: "P/E 25x · Mexico = 2-га S-крива\nAI знижує cost of risk · ROE тримається", upside: "Upside +30% від поточного" },
              { type: "base", label: "🟡 BASE CASE", price: "$16–17", priceColor: "text-base", borderColor: "border-base", detail: "P/E 20x · Стабільне зростання\nБез дива, без катастрофи", upside: "Заробляєш тільки якщо EPS дивує" },
              { type: "bear", label: "🔴 BEAR CASE", price: "$12–13", priceColor: "text-bear", borderColor: "border-bear", detail: "P/E 15x · Кредитний цикл ламається\nРегуляція б'є юніт-економіку · Mexico нестабільна", upside: "Downside −20–30% легко" },
            ].map((s, i) => (
              <div key={i} className={`rounded-lg p-5 border-l-4 ${s.borderColor} bg-[rgba(13,13,20,0.8)]`}>
                <div className={`font-display text-[28px] tracking-wider mb-2 ${s.priceColor}`}>{s.label}</div>
                <div className={`font-display text-[clamp(48px,13vw,72px)] leading-none text-white`}>{s.price}</div>
                <div className="font-mono text-[13px] text-[#C0BCDB] mt-2 leading-relaxed whitespace-pre-line">
                  {s.detail}
                  {"\n"}<strong className="text-white/80">{s.upside}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══ SCREEN 6: THE QUESTION ═══ */}
      {current === 6 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full gap-8">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 6 / 7 — Твій вибір</div>
            <h3 className="font-serif italic text-[clamp(28px,8vw,48px)] leading-tight text-white text-center">
              Як ти бачиш NU?
            </h3>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setSelectedView("bull")}
                className={`p-[18px] rounded-md border text-left text-base font-semibold transition-all ${
                  selectedView === "bull"
                    ? "border-bull bg-bull/[0.08] text-bull"
                    : "border-card-border bg-card text-white hover:border-accent-light hover:bg-accent/10"
                }`}
              >
                🟢 Structural compounder — Mexico + AI + ROE = ставка на десятиліття
              </button>
              <button
                onClick={() => setSelectedView("bear")}
                className={`p-[18px] rounded-md border text-left text-base font-semibold transition-all ${
                  selectedView === "bear"
                    ? "border-bear bg-bear/[0.08] text-bear"
                    : "border-card-border bg-card text-white hover:border-accent-light hover:bg-accent/10"
                }`}
              >
                🔴 Cyclical growth stock — зараз у сильній фазі, але credit cycle вирішить все
              </button>
            </div>

            {selectedView && (
              <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow animate-slide-up">
                <p className="text-[15px] text-white/90 leading-relaxed">
                  {selectedView === "bull" ? (
                    <><strong className="text-bull">Тоді NU — це позиція.</strong> Mexico ще не в ціні. AI + ROE 31% = structural edge. При нормальному credit cycle, 18–25% CAGR — реально. Тримай розмір позиції помірним — це не Visa.</>
                  ) : (
                    <><strong className="text-base">Тоді NU — це trade, не інвестиція.</strong> Чекай сигналів від credit cycle. Entry близько $13–14 дає значно кращий risk/reward. Не поспішай.</>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══ SCREEN 7: VERDICT ═══ */}
      {current === 7 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Крок 7 / 7 — Вердикт по NU</div>
            <h2 className="font-display text-[clamp(36px,9vw,60px)] leading-[0.9] text-white">
              Чесний<br /><span className="text-accent-light">Вердикт</span>
            </h2>

            <div className="rounded-lg p-6 text-center border-2 border-accent bg-gradient-to-br from-accent/[0.15] to-bull/[0.08] relative overflow-hidden">
              <div className="font-display text-[clamp(36px,10vw,56px)] tracking-wider text-accent-light mb-3">УМОВНО — ТАК</div>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-[500px] mx-auto">
                NU — сильний ростовий фінансовий бізнес із реальним операційним левереджем. Але це не безризиковий compounder типу Visa.
              </p>
            </div>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">Це ставка на:</div>
              {["Нормальний кредитний цикл у Бразилії", "Execution у Mexico без регуляторного удару", "AI (nuFormer) реально знижує cost of risk"].map((t, i) => (
                <div key={i} className="flex gap-3 py-3 items-start border-b border-card-border last:border-b-0 text-base leading-relaxed">
                  <span className="text-[18px] shrink-0">✅</span><span>{t}</span>
                </div>
              ))}
              <div className="flex gap-3 py-3 items-start text-base leading-relaxed">
                <span className="text-[18px] shrink-0">⚠️</span><span>Якщо щось ламається — P/E впаде першим</span>
              </div>
            </div>

            <div className="relative overflow-hidden bg-card border border-bull/20 rounded-lg p-5 bg-bull/[0.05] text-center">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-2">Потенційний CAGR (якщо все ОК)</div>
              <div className="font-display text-[clamp(56px,15vw,88px)] leading-none text-bull">18–25%</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mt-2">Якщо щось ламається — downside −20–30%</div>
            </div>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-accent-light leading-relaxed text-center">
              Не мем. Не хайп.<br />Реальний бізнес з реальними ризиками.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-card-border" />
              <span className="font-mono text-[11px] text-muted tracking-widest uppercase whitespace-nowrap">Далі — порівняння</span>
              <div className="flex-1 h-px bg-card-border" />
            </div>
            <p className="text-sm text-center text-white/30">NU vs ENVA — хто варто купувати сьогодні?</p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 8: VS INTRO ═══ */}
      {current === 8 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="hero-glow absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,0,112,0.15) 0%, transparent 70%)" }} />
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full gap-6 relative">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Порівняння — NU vs ENVA</div>

            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
              <div className="text-right">
                <div className="font-display text-[clamp(52px,14vw,80px)] leading-none text-accent-light">NU</div>
                <div className="font-mono text-xs text-muted tracking-widest uppercase">Growth Machine</div>
                <div className="font-mono text-[13px] text-accent-light/70 mt-1">P/E 27x</div>
              </div>
              <div className="text-center font-display text-[clamp(32px,8vw,52px)] text-muted px-1">VS</div>
              <div className="text-left">
                <div className="font-display text-[clamp(52px,14vw,80px)] leading-none text-[#FF7A1A]">ENVA</div>
                <div className="font-mono text-xs text-muted tracking-widest uppercase">Deep Value</div>
                <div className="font-mono text-[13px] text-[rgba(255,122,26,0.7)] mt-1">P/E ~10x</div>
              </div>
            </div>

            <div className="divider-gradient" />

            <p className="font-serif italic text-[clamp(20px,5vw,32px)] text-accent-light leading-relaxed text-center">
              Growth з преміум-оцінкою<br />або value з маржею безпеки?
            </p>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow text-center">
              <p className="text-[15px] text-white/90 leading-relaxed">
                <strong className="text-white">NU</strong> = масштаб + експансія<br />
                <strong className="text-[#FF7A1A]">ENVA</strong> = прибутковість + дисципліна
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 9: BUSINESS MODELS ═══ */}
      {current === 9 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Порівняння 1 / 3 — Бізнес-моделі</div>
            <h2 className="font-display text-[clamp(36px,9vw,60px)] leading-[0.9] text-white">
              Хто<br /><span className="text-accent-light">що</span><br />робить?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3">
              <div className="rounded-lg p-4 bg-accent/10 border border-accent/30">
                <div className="font-display text-[28px] tracking-wider text-accent-light mb-2">NU</div>
                <div className="font-mono text-xs text-[#C0BCDB] leading-[1.7]">
                  <strong className="text-white">Digital bank</strong><br />
                  Бразилія + Mexico + Колумбія<br /><br />
                  <strong className="text-white">127M</strong> клієнтів<br />
                  ARPAC ~<strong className="text-white">$13</strong><br />
                  ROE ~<strong className="text-bull">31%</strong><br />
                  Rev CAGR 3Y ~<strong className="text-bull">50%</strong>
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-center justify-center">
                <div className="font-display text-[28px] text-muted tracking-widest border-l border-r border-card-border px-1.5 py-3 writing-vertical-lr" style={{ writingMode: "vertical-lr" }}>VS</div>
              </div>
              <div className="rounded-lg p-4 bg-[rgba(255,122,26,0.1)] border border-[rgba(255,122,26,0.3)]">
                <div className="font-display text-[28px] tracking-wider text-[#FF7A1A] mb-2">ENVA</div>
                <div className="font-mono text-xs text-[#C0BCDB] leading-[1.7]">
                  <strong className="text-white">Online lending</strong><br />
                  США + міжнародні<br /><br />
                  Поточна ціна ~<strong className="text-[#FF7A1A]">$110</strong><br />
                  Rev ~<strong className="text-white">$4.9B</strong><br />
                  ROE ~<strong className="text-white">22–23%</strong><br />
                  FCF yield ~<strong className="text-[#FFB07A]">HIGH</strong><br />
                  Rev CAGR 3Y ~<strong className="text-white">16–20%</strong>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg p-5 card-glow">
              <div className="flex gap-4 items-start">
                <span className="text-[28px]">🎯</span>
                <p className="text-[15px] text-white/90 leading-relaxed">
                  NU продається як <strong className="text-white">історія майбутнього</strong>.<br />
                  ENVA — як <strong className="text-[#FFB07A]">бізнес сьогодення</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 10: VALUATION ═══ */}
      {current === 10 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-6">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Порівняння 2 / 3 — Valuation + Scorecard</div>
            <h2 className="font-display text-[clamp(36px,9vw,60px)] leading-[0.9] text-white">
              Лоб<br /><span className="text-accent-light">в лоб</span>
            </h2>

            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg card-glow overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="font-mono text-[11px] tracking-widest uppercase text-muted p-2.5 sm:p-3 text-left">Метрика</th>
                    <th className="font-mono text-[11px] tracking-widest uppercase text-accent-light p-2.5 sm:p-3 text-right">NU</th>
                    <th className="p-2.5 sm:p-3 w-8"></th>
                    <th className="font-mono text-[11px] tracking-widest uppercase text-[#FF7A1A] p-2.5 sm:p-3 text-right">ENVA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Fwd P/E", nu: "27x", nuC: "", enva: "~10x", envaC: "text-bull", winner: "enva" },
                    { name: "ROE", nu: "31%", nuC: "text-bull", enva: "22%", envaC: "", winner: "nu" },
                    { name: "Rev CAGR", nu: "~50%", nuC: "text-bull", enva: "~18%", envaC: "", winner: "nu" },
                    { name: "FCF yield", nu: "—", nuC: "text-muted", enva: "HIGH", envaC: "text-bull", winner: "enva" },
                    { name: "Mkt Cap", nu: "$84B", nuC: "", enva: "$3–4B", envaC: "", winner: "none" },
                    { name: "Margin safety", nu: "LOW", nuC: "text-muted", enva: "HIGH", envaC: "text-bull", winner: "enva" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-white/[0.04] last:border-b-0">
                      <td className="font-mono text-xs text-muted tracking-wider p-2.5 sm:p-3">{r.name}</td>
                      <td className={`font-display text-[clamp(20px,5vw,26px)] text-right p-2.5 sm:p-3 ${r.nuC || "text-accent-light"}`}>{r.nu}</td>
                      <td className="text-center text-[18px] p-2.5 sm:p-3">
                        {r.winner === "nu" ? <span className="text-accent-light">➡</span> : r.winner === "enva" ? <span className="text-[#FF7A1A]">⬅</span> : "≠"}
                      </td>
                      <td className={`font-display text-[clamp(20px,5vw,26px)] text-right p-2.5 sm:p-3 ${r.envaC || "text-[#FF7A1A]"}`}>{r.enva}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-accent-light leading-relaxed">
              NU — premium growth.<br />ENVA — discounted profitability.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden bg-card border border-accent/30 rounded-lg p-4 card-glow">
                <div className="font-display text-[18px] text-accent-light tracking-wider mb-2">NU виграє по</div>
                {["Масштаб і охоплення", "Revenue CAGR ~50%", "ROE 31%", "Стратегічний TAM"].map((t, i) => (
                  <div key={i} className="flex gap-2 py-1 items-start text-[13px]">
                    <span className="text-[14px] shrink-0">✅</span><span className="text-white/80">{t}</span>
                  </div>
                ))}
              </div>
              <div className="relative overflow-hidden bg-card border border-[rgba(255,122,26,0.3)] rounded-lg p-4 card-glow">
                <div className="font-display text-[18px] text-[#FF7A1A] tracking-wider mb-2">ENVA виграє по</div>
                {["Оцінка P/E ~10×", "Free cash flow", "Margin of safety", "Без EM macro ризику"].map((t, i) => (
                  <div key={i} className="flex gap-2 py-1 items-start text-[13px]">
                    <span className="text-[14px] text-[#FF7A1A] shrink-0">✅</span><span className="text-white/80">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 11: PARALLEL SCENARIOS ═══ */}
      {current === 11 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-4">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Порівняння 3 / 3 — Parallel Scenarios</div>
            <h2 className="font-display text-[clamp(36px,9vw,60px)] leading-[0.9] text-white">
              Куди<br /><span className="text-accent-light">кожен</span><br />піде?
            </h2>

            {[
              {
                header: "🟢 BULL", hColor: "text-bull",
                cards: [
                  { ticker: "NU", tColor: "text-accent-light", price: "+30%", pColor: "text-bull", detail: "P/E 25x · EPS $0.84\nTarget ~$21\nMexico scale + AI", border: "border-bull bg-bull/[0.06]" },
                  { ticker: "ENVA", tColor: "text-[#FF7A1A]", price: "+40–50%", pColor: "text-bull", detail: "P/E 10→14x · ~$154–165\nRe-rating as compounder\nРинок переоцінює якість", border: "border-bull bg-bull/[0.06]" },
                ],
              },
              {
                header: "🟡 BASE", hColor: "text-base",
                cards: [
                  { ticker: "NU", tColor: "text-accent-light", price: "+5%", pColor: "text-base", detail: "P/E 20x · Target ~$17\nСтабільно, без re-rating\nПовернення тільки через EPS", border: "border-base bg-base/[0.06]" },
                  { ticker: "ENVA", tColor: "text-[#FF7A1A]", price: "+10–20%", pColor: "text-base", detail: "P/E 10–11x · ~$121–132\nСтабільне зростання EPS\nБез multiple expansion", border: "border-base bg-base/[0.06]" },
                ],
              },
              {
                header: "🔴 BEAR", hColor: "text-bear",
                cards: [
                  { ticker: "NU", tColor: "text-accent-light", price: "−22%", pColor: "text-bear", detail: "P/E 15x · Target ~$12.6\nLatAm + Mexico ризик\nMultiple compression", border: "border-bear bg-bear/[0.06]" },
                  { ticker: "ENVA", tColor: "text-[#FF7A1A]", price: "−20–30%", pColor: "text-bear", detail: "P/E →8x · ~$77–88\nUS credit cycle розвертається\nТиск NPL зростає", border: "border-bear bg-bear/[0.06]" },
                ],
              },
            ].map((scenario, si) => (
              <div key={si}>
                <div className={`font-display text-[22px] tracking-wider py-2 ${scenario.hColor}`}>{scenario.header}</div>
                <div className="grid grid-cols-2 gap-2.5">
                  {scenario.cards.map((c, ci) => (
                    <div key={ci} className={`rounded-md p-3.5 border-l-[3px] ${c.border}`}>
                      <div className={`font-display text-[14px] tracking-widest ${c.tColor}`}>{c.ticker}</div>
                      <div className={`font-display text-[clamp(30px,8vw,42px)] leading-none ${c.pColor}`}>{c.price}</div>
                      <div className="font-mono text-[11px] text-muted mt-1.5 leading-relaxed whitespace-pre-line">{c.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══ SCREEN 12: STRESS TEST INTRO ═══ */}
      {current === 12 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,23,68,0.12) 0%, transparent 70%)" }} />
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full gap-7 relative">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Stress Test</div>
            <h2 className="font-display text-[clamp(48px,13vw,88px)] leading-[0.9] text-white">
              STRESS<br /><span className="text-bear">TEST</span>
            </h2>

            <p className="font-serif italic text-[clamp(20px,5.5vw,28px)] text-accent-light leading-relaxed text-center">
              Що ламається першим?
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden bg-card border border-accent/30 rounded-lg p-5 text-center card-glow">
                <div className="font-display text-[40px] text-accent-light leading-none">NU</div>
                <div className="font-mono text-xs text-muted mt-1.5 leading-relaxed">Multiple risk<br />ВИСОКА чутливість</div>
              </div>
              <div className="relative overflow-hidden bg-card border border-[rgba(255,122,26,0.3)] rounded-lg p-5 text-center card-glow">
                <div className="font-display text-[40px] text-[#FF7A1A] leading-none">ENVA</div>
                <div className="font-mono text-xs text-muted mt-1.5 leading-relaxed">Credit risk<br />НИЖЧИЙ multiple risk</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-card border border-bear/20 rounded-lg p-5 bg-bear/[0.06]">
              <div className="font-mono text-[13px] text-[#E0D8F0] leading-[1.8] text-center">
                🧨 3 сценарії руйнування<br />
                📊 5-річний IRR stress<br />
                🧠 Чесний фінальний висновок
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 13: STRESS 1 & 2 ═══ */}
      {current === 13 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-5">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Stress 1 / 3 — P/E Compression + Growth вдвічі</div>
            <h2 className="font-display text-[clamp(32px,8vw,54px)] leading-[0.9] text-bear">
              МНО-<br />ЖНИ-<br />КИ<br /><span className="text-white">ПАДАЮТЬ</span>
            </h2>

            {/* Scenario 1 */}
            <div className="bg-bear/[0.07] border border-bear/25 rounded-lg p-4 sm:p-5">
              <div className="font-display text-[20px] text-bear tracking-wider mb-3">🧨 СЦЕНАРІЙ №1 — P/E повертається до мінімуму</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="font-display text-[18px] text-accent-light mb-1.5">NU</div>
                  <div className="font-mono text-xs text-[#D0CDE8] leading-[1.7]">
                    EPS 2026 ≈ <strong className="text-white">$0.84</strong><br />
                    P/E падає до <strong className="text-bear">15</strong><br />
                    0.84 × 15 = <strong className="text-bear text-base">$12.6</strong><br />
                    Від $16 → <strong className="text-bear">−22%</strong><br />
                    <span className="text-muted">Без погіршення EPS!</span>
                  </div>
                </div>
                <div>
                  <div className="font-display text-[18px] text-[#FF7A1A] mb-1.5">ENVA</div>
                  <div className="font-mono text-xs text-[#D0CDE8] leading-[1.7]">
                    EPS ≈ <strong className="text-white">$11</strong><br />
                    P/E падає 10→<strong className="text-bear">8</strong><br />
                    11 × 8 = <strong className="text-bear text-base">$88</strong><br />
                    Від ~$110 → <strong className="text-bear">−20%</strong><br />
                    <span className="text-bull">Дешевий старт = захист</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-bear/[0.07] border border-bear/25 rounded-lg p-4 sm:p-5">
              <div className="font-display text-[20px] text-bear tracking-wider mb-3">🧨 СЦЕНАРІЙ №2 — Revenue growth вдвічі менше</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="font-display text-[18px] text-accent-light mb-1.5">NU</div>
                  <div className="font-mono text-xs text-[#D0CDE8] leading-[1.7]">
                    50% → <strong className="text-bear">25%</strong><br />
                    EPS ріст: 35% → <strong className="text-bear">15–18%</strong><br />
                    Ніхто не платить 27x<br />за 15% ріст → P/E 18–20<br />
                    <strong className="text-bear">Комбо: −25–35%</strong>
                  </div>
                </div>
                <div>
                  <div className="font-display text-[18px] text-[#FF7A1A] mb-1.5">ENVA</div>
                  <div className="font-mono text-xs text-[#D0CDE8] leading-[1.7]">
                    20% → <strong className="text-base">10%</strong><br />
                    EPS пласький<br />P/E вже 10 → ринок<br />і так оцінює циклічно<br />
                    <strong className="text-base">Downside: ~15–25%</strong>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-serif italic text-[clamp(16px,4vw,22px)] text-accent-light leading-relaxed text-center">
              NU чутлива до compression.<br />
              <span className="text-[#FFB07A]">ENVA вже враховує цикл в ціні.</span>
            </p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 14: STRESS 3 + IRR ═══ */}
      {current === 14 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-5">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Stress 2 / 3 — Credit Cycle + 5-річний IRR</div>
            <h2 className="font-display text-[clamp(32px,8vw,54px)] leading-[0.9] text-white">
              КРЕДИТ-<br /><span className="text-bear">НИЙ<br />ЦИКЛ</span>
            </h2>

            <div className="bg-bear/[0.07] border border-bear/25 rounded-lg p-4 sm:p-5">
              <div className="font-display text-[20px] text-bear tracking-wider mb-3">🧨 СЦЕНАРІЙ №3 — Кредитний цикл погіршується</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="font-display text-[18px] text-accent-light mb-1.5">NU</div>
                  <div className="font-mono text-xs text-[#D0CDE8] leading-[1.7]">
                    Cost of risk ↑<br />Mexico нестабільна<br />LatAm macro тисне<br />
                    ROE: 31% → <strong className="text-bear">20%</strong><br />P/E стискається<br />
                    <strong className="text-bear">Можливо −40%</strong>
                  </div>
                </div>
                <div>
                  <div className="font-display text-[18px] text-[#FF7A1A] mb-1.5">ENVA</div>
                  <div className="font-mono text-xs text-[#D0CDE8] leading-[1.7]">
                    Provision ↑<br />Subprime болючий<br />
                    Але <strong className="text-bull">вже без premium</strong><br />Оцінка вже враховує ризик<br />
                    <strong className="text-base">Downside є, але обмежений</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* IRR Table */}
            <div className="relative overflow-hidden bg-card border border-card-border rounded-lg card-glow overflow-x-auto">
              <div className="p-3 sm:p-4 border-b border-card-border">
                <div className="font-display text-[20px] text-white tracking-wider">📊 5-РІЧНИЙ IRR STRESS</div>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="font-mono text-[11px] tracking-widest uppercase text-muted p-3 text-left">Сценарій</th>
                    <th className="font-mono text-[11px] tracking-widest uppercase text-accent-light p-3 text-right">NU</th>
                    <th className="font-mono text-[11px] tracking-widest uppercase text-[#FF7A1A] p-3 text-right">ENVA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "🟢 Bull", lColor: "text-bull", nu: "25–30%", enva: "~25%" },
                    { label: "🟡 Base", lColor: "text-base", nu: "18–20%", enva: "15–18%" },
                    { label: "🔴 Stress", lColor: "text-bear", nu: "6–8%", enva: "5–8%" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-white/[0.04] last:border-b-0">
                      <td className={`font-mono text-xs p-3 ${r.lColor}`}>{r.label}</td>
                      <td className={`font-display text-[clamp(20px,5vw,26px)] text-right p-3 ${r.lColor}`}>{r.nu}</td>
                      <td className={`font-display text-[clamp(20px,5vw,26px)] text-right p-3 ${r.lColor}`}>{r.enva}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[15px] text-[#D0CDE8] leading-relaxed">
              <strong className="text-white">NU</strong> — більший upside, але і більший multiple-risk.<br />
              <strong className="text-[#FFB07A]">ENVA</strong> — менший upside, але більша маржа безпеки.
            </p>
          </div>
        </div>
      )}

      {/* ═══ SCREEN 15: FINAL VERDICT ═══ */}
      {current === 15 && (
        <div className="min-h-screen flex flex-col animate-fade-in">
          <div className="flex-1 px-5 sm:px-8 pt-16 pb-28 max-w-[680px] mx-auto w-full flex flex-col gap-5">
            <div className="font-mono text-[11px] tracking-widest text-accent-light uppercase">Stress 3 / 3 — Фінальний вердикт</div>
            <h2 className="font-display text-[clamp(32px,8vw,54px)] leading-[0.9] text-white">
              THE<br /><span className="text-accent-light">VERDICT</span>
            </h2>

            {/* IF panic */}
            <div className="bg-bear/[0.08] border border-bear/30 rounded-lg p-5">
              <div className="font-display text-[22px] text-bear tracking-wider mb-3">🔴 ЯКЩО РИНКИ ПАНІКУЮТЬ:</div>
              <div className="font-mono text-sm text-[#D8D4F0] leading-[1.9]">
                — credit spreads ростуть<br />— Mexico дестабілізується<br />— LatAm macro погіршується
              </div>
              <p className="mt-3.5 font-serif italic text-[clamp(18px,5vw,26px)] text-white leading-snug">
                Я сплю спокійніше з <span className="text-[#FF7A1A]">ENVA.</span>
              </p>
            </div>

            {/* IF stable */}
            <div className="bg-bull/[0.06] border border-bull/20 rounded-lg p-5">
              <div className="font-display text-[22px] text-bull tracking-wider mb-3">🟢 ЯКЩО ЦИКЛ СТАБІЛЬНИЙ:</div>
              <div className="font-mono text-sm text-[#D8D4F0] leading-[1.9]">
                — Mexico масштабується<br />— nuFormer знижує cost of risk<br />— ROE тримається на 31%
              </div>
              <p className="mt-3.5 font-serif italic text-[clamp(18px,5vw,26px)] text-white leading-snug">
                <span className="text-accent-light">NU</span> обіграє ENVA<br />на довгій дистанції.
              </p>
            </div>

            {/* Pick card */}
            <div className="rounded-xl p-7 text-center bg-gradient-to-br from-[rgba(255,122,26,0.15)] to-[rgba(255,122,26,0.05)] border-2 border-[#FF7A1A] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent" />
              <div className="font-mono text-[11px] text-[#FF7A1A] tracking-widest uppercase mb-2">Купую прямо зараз</div>
              <div className="font-display text-[clamp(56px,16vw,96px)] text-[#FF7A1A] leading-none" style={{ textShadow: "0 0 40px rgba(255,122,26,0.4)" }}>ENVA</div>
              <p className="text-[15px] text-white/75 leading-relaxed mt-3">
                Ти платиш <strong className="text-[#FFB07A]">10× прибутку</strong>. Не 27×.<br /><br />
                NU може стати більшим монстром за 5 років.<br />
                Але ENVA дає <strong className="text-white">margin of safety сьогодні.</strong>
              </p>
            </div>

            {/* NU long-term note */}
            <div className="relative overflow-hidden bg-card border border-accent/20 rounded-lg p-5 bg-accent/[0.05] card-glow">
              <div className="font-display text-[18px] text-accent-light tracking-wider mb-2">NU — тримай як довгострокову позицію</div>
              <p className="text-sm text-white/90 leading-relaxed">
                Потенційний compounder на 5–10 років. Але <strong className="text-white">чекай кращого entry</strong> — $13–14 дає значно кращий risk/reward.
              </p>
            </div>

            <p className="font-serif italic text-[clamp(17px,4.5vw,24px)] text-accent-light leading-relaxed text-center">
              Питання не хто кращий.<br />
              <span className="text-accent-light">Майбутнє</span> чи <span className="text-[#FF7A1A]">дисконт сьогодні?</span>
            </p>

            <div className="text-center pt-2">
              <button
                onClick={restart}
                className="px-7 py-3 text-sm text-muted border border-card-border rounded hover:text-white hover:border-white/20 transition-colors"
              >
                ↺ Спочатку
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ NAV ═══ */}
      <div className="fixed bottom-0 left-0 right-0 nav-fade px-5 pt-4 pb-6 flex gap-3 justify-center z-[100]">
        {current > 0 && (
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-3.5 text-sm font-semibold text-muted border border-white/[0.12] rounded tracking-wide uppercase hover:text-white hover:border-white/30 transition-colors"
          >
            ← Назад
          </button>
        )}
        {current < TOTAL - 1 && (
          <button
            onClick={() => navigate(1)}
            className="flex-1 max-w-[280px] px-8 py-3.5 bg-accent text-white text-base font-semibold rounded tracking-wider uppercase hover:bg-accent-light transition-colors animate-glow-pulse"
          >
            {current === 0 ? "Почати →" : current === 7 ? "NU vs ENVA →" : current === 11 ? "Stress Test →" : "Далі →"}
          </button>
        )}
      </div>
    </div>
  );
}
