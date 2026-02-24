"use client";

import PresentationLayout from "@/components/PresentationLayout";

const TOTAL = 8;

const labels = [
  "",
  "01 / 08", "02 / 08", "03 / 08", "04 / 08",
  "05 / 08", "06 / 08", "07 / 08", "08 / 08",
];

export default function ThmReview() {
  return (
    <PresentationLayout
      total={TOTAL}
      labels={labels}
      navLabels={{ 0: "Start" }}
      defaultNextLabel="Next"
      defaultBackLabel="Back"
    >
      {(current) => (
        <>
          {/* ═══ SCREEN 0: INTRO ═══ */}
          {current === 0 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="hero-glow absolute inset-0 pointer-events-none" />
              <div className="screen-content-intro">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded px-3.5 py-2 self-start">
                  <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse-dot" />
                  <span className="font-mono text-[13px] tracking-widest">THM · LIVENGOOD, AK</span>
                </div>

                <h1 className="font-display text-hero text-white">
                  BUY IT<br />
                  <span className="text-accent-light" style={{ WebkitTextStroke: "1px rgba(255,0,112,0.5)" }}>
                    OR NOT?
                  </span>
                </h1>

                <div className="divider-gradient" />

                <div className="text-center card-base p-6">
                  <div className="meta-label-xs text-muted mb-2">Current Price</div>
                  <div className="font-display text-price-hero text-accent-light animate-flicker">
                    $2.86
                  </div>
                  <div className="meta-label-xs text-muted mt-2">
                    Gold $5,226/oz · Mkt Cap ~$700M · RS 99
                  </div>
                </div>

                <p className="font-display italic text-callout text-accent-light">
                  A call option on gold — or a value trap?
                </p>

                <p className="text-[15px] text-white/40">8 steps · Only facts.</p>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 1: ASSET TYPE ═══ */}
          {current === 1 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 1 / 8 — Understanding The Asset</div>
                <h2 className="font-display text-section text-white">
                  Not a Miner.<br /><span className="text-accent-light">A Call Option.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="card-base p-5 card-glow">
                    <div className="font-display text-[18px] text-bear tracking-wider mb-3">What THM Doesn&apos;t Have</div>
                    {["No production — zero ounces mined today", "No revenue — generates nothing", "No earnings — EPS and P/E are meaningless", "No operating cash flow — pure burn"].map((t, i) => (
                      <div key={i} className="flex gap-2.5 py-1.5 items-start text-[13px]">
                        <span className="text-bear shrink-0 mt-0.5">✗</span><span className="text-muted">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card-base p-5 card-glow">
                    <div className="font-display text-[18px] text-bull tracking-wider mb-3">What THM Does Have</div>
                    {["9.0 million oz proven & probable reserve", "Massive leverage to gold price moves", "$115M freshly raised — real capital", "Paulson & Co. institutional backing"].map((t, i) => (
                      <div key={i} className="flex gap-2.5 py-1.5 items-start text-[13px]">
                        <span className="text-bull shrink-0 mt-0.5">✓</span><span className="text-muted">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-md p-5 text-[15px] text-white/90 leading-relaxed">
                  <strong className="text-accent-light">Correct mental model:</strong> THM is a long-dated call option on gold remaining above ~$2,000+/oz for the next 5–10 years. If gold stays high, this option pays off enormously. If gold falls, the option decays.
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Asset Type", value: "Dev-Stage", cls: "text-accent-light" },
                    { label: "Framework", value: "NPV + Takeover", cls: "text-accent-light" },
                    { label: "Horizon", value: "3–7 Yrs", cls: "text-accent-light" },
                  ].map((s, i) => (
                    <div key={i} className="bg-card border border-card-border rounded-md p-4 text-center animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="meta-label text-muted">{s.label}</div>
                      <div className={`font-display text-stat-sm ${s.cls}`}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 2: WHAT MATTERS ═══ */}
          {current === 2 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 2 / 8 — What Actually Matters</div>
                <h2 className="font-display text-section text-white">
                  Four<br /><span className="text-accent-light">Variables</span>
                </h2>

                <div className="card-base p-5 card-glow">
                  {[
                    { num: "A", title: "Resource Size & Grade — 9.0 Moz @ 0.65 g/t", desc: "Large deposit — but low grade. Thin margins at low gold. Explosive margins when gold runs. Reserve base is globally significant." },
                    { num: "B", title: "Jurisdiction — Alaska, Tier 1", desc: "Stable, mining-friendly state. Well-understood NEPA path. But permitting: 3–5 year process." },
                    { num: "C", title: "Capex & Financing Risk — $1.93B", desc: "The mountain. THM cannot build alone. $115M raised ≈ 6% of what's needed. Future JV or streaming financing required." },
                    { num: "D", title: "Gold Price — The Real Driver", desc: "AISC ~$1,068/oz — margin today is $4,158/oz. Gold staying high transforms everything. Gold to $2,000 weakens economics sharply." },
                  ].map((c, i) => (
                    <div key={i} className="card-list-item">
                      <div className="font-display text-[40px] leading-none text-accent shrink-0 w-10">{c.num}</div>
                      <div>
                        <div className="card-list-item-title">{c.title}</div>
                        <div className="card-list-item-desc">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-display italic text-callout text-accent-light">
                  Everything flows from gold price.
                </p>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 3: ECONOMICS ═══ */}
          {current === 3 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 3 / 8 — Project Economics</div>
                <h2 className="font-display text-section text-white">
                  The<br /><span className="text-accent-light">Numbers</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { unit: "P+P Reserve", num: "9.0M oz", cls: "text-base" },
                    { unit: "Mine Life", num: "20.3 yrs", cls: "" },
                    { unit: "Annual Prod", num: "317k oz", cls: "text-bull" },
                    { unit: "Capex", num: "$1.93B", cls: "text-bear" },
                  ].map((s, i) => (
                    <div key={i} className="bg-card border border-card-border rounded-md p-4 text-center animate-count-up" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="meta-label text-muted">{s.unit}</div>
                      <div className={`font-display text-stat-md ${s.cls || "text-white"}`}>{s.num}</div>
                    </div>
                  ))}
                </div>

                <div className="card-base p-5 card-glow">
                  <div className="meta-label-xs text-muted mb-3">Economics at $1,680 Gold — PFS Base</div>
                  {[
                    { label: "NPV (5%)", value: "$45M", color: "text-bear" },
                    { label: "IRR", value: "5.3%", color: "text-bear" },
                    { label: "Payback", value: "10.4 yrs", color: "text-bear" },
                    { label: "AISC", value: "$1,068/oz", color: "text-white" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-card-border last:border-b-0">
                      <div className="font-mono text-[13px] text-muted">{r.label}</div>
                      <div className={`font-display text-[24px] ${r.color}`}>{r.value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-md p-5 text-[15px] text-white/90 leading-relaxed">
                  <strong className="text-accent-light">Context:</strong> PFS modeled at $1,680/oz. Spot today is $5,226 — over 3x assumed. 71.4% recovery on 0.65 g/t means every gold dollar is critical.
                </div>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 4: GOLD SENSITIVITY ═══ */}
          {current === 4 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 4 / 8 — Gold Price Sensitivity</div>
                <h2 className="font-display text-section text-white">
                  $5,226<br /><span className="text-accent-light">Changes<br />Everything</span>
                </h2>

                <div className="card-base card-glow overflow-x-auto !p-0">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-card-border">
                        <th className="meta-label text-muted p-2.5 sm:p-3 text-left">Gold</th>
                        <th className="meta-label text-muted p-2.5 sm:p-3 text-right">Margin/oz</th>
                        <th className="meta-label text-muted p-2.5 sm:p-3 text-right">NPV (5%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { gold: "$1,680", margin: "$612", npv: "$45M", cls: "text-bear" },
                        { gold: "$2,000", margin: "$932", npv: "$975M", cls: "text-muted" },
                        { gold: "$2,500", margin: "$1,432", npv: "~$2.3B", cls: "text-white" },
                        { gold: "$4,000", margin: "$2,932", npv: "~$5.5B", cls: "text-accent-light" },
                        { gold: "$5,226 ← TODAY", margin: "$4,158", npv: "~$7–10B", cls: "text-accent-light", hl: true },
                      ].map((r, i) => (
                        <tr key={i} className={`border-b border-white/[0.04] last:border-b-0 ${r.hl ? "bg-accent/[0.08]" : ""}`}>
                          <td className={`font-mono text-xs p-2.5 sm:p-3 ${r.hl ? "text-accent-light font-bold" : "text-muted"}`}>{r.gold}</td>
                          <td className={`font-display text-table-value text-right p-2.5 sm:p-3 ${r.cls}`}>{r.margin}</td>
                          <td className={`font-display text-table-value text-right p-2.5 sm:p-3 ${r.cls}`}>{r.npv}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="card-base card-glow p-4">
                    <div className="font-display text-[18px] text-base tracking-wider mb-2">Valuation Gap</div>
                    <div className="font-display text-stat-md text-base">~$700M</div>
                    <div className="font-mono text-xs text-muted mt-1">market cap</div>
                    <div className="font-display text-stat-md text-accent-light mt-2">$7–10B</div>
                    <div className="font-mono text-xs text-muted mt-1">project NPV</div>
                  </div>
                  <div className="card-base card-glow p-4">
                    <div className="font-display text-[18px] text-bear tracking-wider mb-2">Caveats</div>
                    {["Dilution from $1.93B capex", "Execution & permitting risk", "Long timeline discount"].map((t, i) => (
                      <div key={i} className="flex gap-2 py-1 items-start text-[13px]">
                        <span className="text-bear shrink-0">⚠</span><span className="text-white/80">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-display italic text-callout text-accent-light">
                  6.8x margin increase. NPV explodes.
                </p>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 5: RISKS ═══ */}
          {current === 5 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 5 / 8 — Risks</div>
                <h2 className="font-display text-subsection text-white">
                  Even at<br />$5,000<br /><span className="text-bear">You Can<br />Lose</span>
                </h2>

                <div className="card-base p-5 card-glow">
                  {[
                    { icon: "📉", title: "Gold Price Reversal — HIGH", desc: "Gold at $5,226 is historically anomalous. Below $2,500 puts the project back in marginal territory." },
                    { icon: "💰", title: "Capex / Financing Dilution — HIGH", desc: "$1.93B capex means heavy future fundraising. $115M raised is ~6% of what's needed." },
                    { icon: "📋", title: "Permitting Delay — MEDIUM-HIGH", desc: "Environmental review takes 3–5 years minimum in Alaska. Any delay increases dilution risk." },
                    { icon: "🏗️", title: "Capex Inflation — MEDIUM", desc: "$1.93B is a 2023 estimate. Every 10% overrun adds ~$193M to the financing hole." },
                    { icon: "⚙️", title: "Execution Risk — MEDIUM", desc: "Large open-pit projects regularly face delays, throughput shortfalls. Remote Alaska adds complexity." },
                  ].map((r, i) => (
                    <div key={i} className="flex gap-3.5 items-start py-3.5 border-b border-card-border last:border-b-0">
                      <span className="text-[24px] shrink-0 w-9 text-center mt-0.5">{r.icon}</span>
                      <div>
                        <div className="card-list-item-title text-[17px]">{r.title}</div>
                        <div className="card-list-item-desc">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="card-base border-bear/30 card-glow p-4">
                    <div className="font-display text-[18px] text-bear tracking-wider mb-2">Thesis Killers</div>
                    {["Gold below $2,500/oz", "Permitting rejection", "Equity raises at $1.50–2.00", "Capex inflates to $3B+"].map((t, i) => (
                      <div key={i} className="flex gap-2 py-1 items-start text-[13px]">
                        <span className="text-bear shrink-0">✗</span><span className="text-white/80">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card-base border-bull/30 card-glow p-4">
                    <div className="font-display text-[18px] text-bull tracking-wider mb-2">De-Risking Catalysts</div>
                    {["Strategic JV partnership", "Streaming / royalty deal", "Permitting milestones", "Gold above $4,000 for 12+ mo"].map((t, i) => (
                      <div key={i} className="flex gap-2 py-1 items-start text-[13px]">
                        <span className="text-bull shrink-0">✓</span><span className="text-white/80">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 6: SCENARIOS & EV ═══ */}
          {current === 6 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 6 / 8 — Scenarios & Expected Value</div>
                <h2 className="font-display text-section text-white">
                  Expected<br /><span className="text-accent-light">Value</span>
                </h2>

                {[
                  { label: "🔴 PROJECT STALLS — 10%", price: "$1.00", priceColor: "text-bear", borderColor: "border-bear", detail: "Gold <$2,000. Financing impossible.\nProject shelved." },
                  { label: "🟡 GOLD RETREATS — 20%", price: "$3.00", priceColor: "text-base", borderColor: "border-base", detail: "Gold $2,500–3,000. Marginal project.\nHeavy dilution." },
                  { label: "🟢 STRONG GOLD — 40%", price: "$7.00", priceColor: "text-bull", borderColor: "border-bull", detail: "Gold $4,000+. Partner deal.\nMilestone re-rating." },
                  { label: "🔵 SUPERCYCLE / M&A — 30%", price: "$12.00", priceColor: "text-accent-light", borderColor: "border-accent", detail: "Gold $5,000+. Major producer acquires\nat NPV discount." },
                ].map((s, i) => (
                  <div key={i} className={`scenario-card ${s.borderColor}`}>
                    <div className={`font-display text-[20px] tracking-wider mb-2 ${s.priceColor}`}>{s.label}</div>
                    <div className="font-display text-price text-white">{s.price}</div>
                    <div className="font-mono text-[13px] text-muted mt-2 leading-relaxed whitespace-pre-line">{s.detail}</div>
                  </div>
                ))}

                <div className="card-base border-bull/20 bg-bull/[0.05] p-5 text-center">
                  <div className="meta-label-xs text-muted mb-2">Probability-Weighted EV</div>
                  <div className="font-display text-result text-bull">$6.90</div>
                  <div className="meta-label-xs text-muted mt-2">vs. $2.86 entry → +141% upside</div>
                </div>
              </div>
            </div>
          )}

          {/* ═══ SCREEN 7: VERDICT ═══ */}
          {current === 7 && (
            <div className="min-h-screen flex flex-col animate-fade-in">
              <div className="screen-content">
                <div className="meta-label text-accent-light">Step 8 / 8 — Verdict</div>
                <h2 className="font-display text-subsection text-white">
                  Should You<br /><span className="text-accent-light">Buy It?</span>
                </h2>

                {/* IF gold stays high */}
                <div className="bg-bull/[0.06] border border-bull/20 rounded-lg p-5">
                  <div className="font-display text-[22px] text-bull tracking-wider mb-3">🟢 IF GOLD STRUCTURALLY ABOVE $3,500:</div>
                  <p className="font-display italic text-callout text-white leading-snug">
                    <span className="text-bull">Yes, buy it.</span>
                  </p>
                  <p className="text-[15px] text-white/70 mt-3 leading-relaxed">
                    THM offers genuinely asymmetric risk/reward from $2.86. EV of $6.90 = +141%. Project NPV $7–10B vs. ~$700M market cap. Institutional backing, fresh capital, RS 99. Takeover at $10–15+/share is a plausible bull case.
                  </p>
                </div>

                {/* IF gold reverses */}
                <div className="bg-bear/[0.08] border border-bear/30 rounded-lg p-5">
                  <div className="font-display text-[22px] text-bear tracking-wider mb-3">🔴 IF GOLD SPIKES AND REVERSES:</div>
                  <p className="font-display italic text-callout text-white leading-snug">
                    <span className="text-bear">Don&apos;t buy it.</span>
                  </p>
                  <p className="text-[15px] text-white/70 mt-3 leading-relaxed">
                    Gold to $2,500 or below shrinks NPV, stalls financing, pushes stock toward $1–2. No production cash flow floor. A long-dated leveraged option — if gold collapses, the option decays toward zero.
                  </p>
                </div>

                {/* Bottom line cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="card-base card-glow p-4 text-center">
                    <div className="meta-label text-muted mb-1">Fundamentals</div>
                    <div className="font-display text-[20px] text-accent-light">Speculative</div>
                    <div className="text-xs text-muted mt-1">High leverage, real risk</div>
                  </div>
                  <div className="card-base card-glow p-4 text-center">
                    <div className="meta-label text-muted mb-1">Technicals</div>
                    <div className="font-display text-[20px] text-bull">RS 99</div>
                    <div className="text-xs text-muted mt-1">Stop at $2.30</div>
                  </div>
                  <div className="card-base card-glow p-4 text-center">
                    <div className="meta-label text-muted mb-1">Sizing</div>
                    <div className="font-display text-[20px] text-accent-light">Spec Only</div>
                    <div className="text-xs text-muted mt-1">Not a core position</div>
                  </div>
                </div>

                <p className="font-display italic text-[clamp(17px,4.5vw,24px)] text-accent-light leading-relaxed text-center">
                  High-convexity macro bet.<br />
                  3–5x if right. −50–70% if wrong.<br />
                  Size accordingly.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </PresentationLayout>
  );
}
