"use client";

import { useState } from "react";
import EventCard, { type EventCardData } from "./EventCard";
import type { EventCategory } from "@/lib/types";

const CATEGORIES: EventCategory[] = ["Academic", "Social", "Competition", "Career", "Workshop", "Community"];

export default function EventsExplorer({
  upcoming,
  past,
  linktree,
}: {
  upcoming: EventCardData[];
  past: EventCardData[];
  linktree: string;
}) {
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const [category, setCategory] = useState<EventCategory | "All">("All");

  const source = view === "upcoming" ? upcoming : past;
  const list = source.filter((e) => category === "All" || e.category === category);
  const chips: (EventCategory | "All")[] = [
    "All",
    ...CATEGORIES.filter((c) => source.some((e) => e.category === c)),
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Upcoming / Past switch */}
        <div role="group" aria-label="Show events" className="inline-flex self-start rounded-full border border-line bg-surface p-1">
          {(["upcoming", "past"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => {
                setView(v);
                setCategory("All");
              }}
              className={`min-h-10 rounded-full px-4 text-sm font-medium capitalize transition-colors ${
                view === v ? "bg-ink text-paper" : "text-muted hover:text-ink"
              }`}
            >
              {v}{" "}
              <span className="font-mono text-xs opacity-70">
                {(v === "upcoming" ? upcoming : past).length}
              </span>
            </button>
          ))}
        </div>

        {/* Category chips */}
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`min-h-10 rounded-full border px-4 text-sm transition-colors ${
                category === c
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line bg-surface text-muted hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 font-mono text-xs text-muted">
        {list.length} {list.length === 1 ? "event" : "events"}
      </p>

      {list.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {list.map((e) => (
            <li key={e.id}>
              <EventCard event={e} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-2xl border border-line bg-surface p-8 text-center">
          <p className="text-lg font-medium">No events to show here.</p>
          <p className="mt-2 text-muted">
            Check our{" "}
            <a href={linktree} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline-offset-4 hover:underline">
              Linktree
            </a>{" "}
            for the latest.
          </p>
        </div>
      )}
    </div>
  );
}