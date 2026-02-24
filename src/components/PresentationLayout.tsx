"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

interface PresentationLayoutProps {
  /** Total number of screens */
  total: number;
  /** Label per screen index (index 0 is usually empty for intro) */
  labels: string[];
  /** Render function receiving the current screen index */
  children: (current: number) => ReactNode;
  /** Button labels for contextual nav (e.g. "Start" for screen 0) */
  navLabels?: Record<number, string>;
  /** Default forward button label */
  defaultNextLabel?: string;
  /** Default back button label */
  defaultBackLabel?: string;
}

export default function PresentationLayout({
  total,
  labels,
  children,
  navLabels = {},
  defaultNextLabel = "Next",
  defaultBackLabel = "Back",
}: PresentationLayoutProps) {
  const [current, setCurrent] = useState(0);

  function navigate(dir: number) {
    const next = current + dir;
    if (next < 0 || next >= total) return;
    setCurrent(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setCurrent(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const pct = (current / (total - 1)) * 100;

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
      <div className="fixed top-4 right-4 meta-label text-muted z-[100]">
        {current > 0 ? labels[current] ?? "" : ""}
      </div>

      {/* Back to home */}
      <Link
        href="/"
        className="fixed top-4 left-4 meta-label text-muted z-[100] hover:text-accent-light transition-colors"
      >
        &larr; HOME
      </Link>

      {/* Screen content */}
      {children(current)}

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 nav-fade px-5 pt-4 pb-6 flex gap-3 justify-center z-[100]">
        {current > 0 && (
          <button
            onClick={() => navigate(-1)}
            className="btn-secondary tracking-wide"
          >
            &larr; {defaultBackLabel}
          </button>
        )}
        {current < total - 1 && (
          <button
            onClick={() => navigate(1)}
            className="flex-1 max-w-[280px] btn-primary tracking-wider animate-glow-pulse"
          >
            {navLabels[current] ?? defaultNextLabel} &rarr;
          </button>
        )}
        {current === total - 1 && (
          <button
            onClick={restart}
            className="btn-secondary"
          >
            &circlearrowleft; Start Over
          </button>
        )}
      </div>
    </div>
  );
}
