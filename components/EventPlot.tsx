"use client";

import Link from "next/link";
import { useState } from "react";
import type { PlotData } from "@/lib/plot";

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export default function EventPlot({ plot }: { plot: PlotData }) {
  const { width: W, height: H, axisY, todayX, path, points, ticks } = plot;
  const [active, setActive] = useState(0);
  const current = points[active];

  return (
    <div>
      {/* The plot */}
      <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="plot-reveal absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {/* x-axis */}
          <line x1={todayX} x2={W - 24} y1={axisY} y2={axisY} className="stroke-line" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          {ticks.map((t) => (
            <line key={t.x} x1={t.x} x2={t.x} y1={axisY} y2={axisY + 8} className="stroke-muted" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
          {/* "today" marker */}
          <line x1={todayX} x2={todayX} y1={24} y2={axisY} className="stroke-brand-yellow" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
          {/* line from selected event down to the axis */}
          {current && (
            <line x1={current.x} x2={current.x} y1={current.y} y2={axisY} className="stroke-accent" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
          )}
          {/* the curve */}
          <path d={path} fill="none" className="stroke-ink" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Labels are HTML so they stay readable on small screens */}
        <span
          className="absolute -translate-y-full font-mono text-[11px] text-muted"
          style={{ left: pct(todayX, W), top: pct(20, H) }}
          aria-hidden="true"
        >
          today
        </span>
        {ticks.map((t) => (
          <span
            key={t.label + t.x}
            className="absolute -translate-x-1/2 font-mono text-[11px] text-muted"
            style={{ left: pct(t.x, W), top: pct(axisY + 12, H) }}
            aria-hidden="true"
          >
            {t.label}
          </span>
        ))}

        {/* Event points: real buttons for keyboard, touch, and screen readers */}
        {points.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            aria-label={`${p.title}, ${p.dateLabel}`}
            aria-pressed={i === active}
            className="plot-fade group absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
            style={{ left: pct(p.x, W), top: pct(p.y, H) }}
          >
            <span
              className={`block rounded-full border-2 transition-all duration-200 ${
                i === active
                  ? "plot-pulse size-4 border-accent bg-accent"
                  : "size-3 border-ink bg-paper group-hover:scale-125"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Selected event card */}
      {current ? (
        <div
          aria-live="polite"
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {active === 0 ? "Next up" : "Coming up"} · {current.category}
              {current.placeholder && " · Sample"}
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight">{current.title}</p>
            <p className="mt-1 text-sm text-muted">
              {current.dateLabel} · {current.timeLabel} · {current.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActive(active - 1)}
              disabled={active === 0}
              aria-label="Previous event"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-ink/5 disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActive(active + 1)}
              disabled={active === points.length - 1}
              aria-label="Next event"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-ink/5 disabled:opacity-40"
            >
              ›
            </button>
            <Link
              href={`/events#${current.id}`}
              className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink transition hover:opacity-90"
            >
              Details
            </Link>
          </div>
        </div>
      ) : (
        <p className="mt-8 rounded-2xl border border-line bg-surface p-6 text-muted">
          No upcoming events posted yet. Check back soon.
        </p>
      )}
    </div>
  );
}