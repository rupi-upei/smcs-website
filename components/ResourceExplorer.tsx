"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";
import type { Resource, ResourceCategory } from "@/lib/types";

export default function ResourceExplorer({
  resources,
  categories,
}: {
  resources: Resource[];
  categories: ResourceCategory[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ResourceCategory | "All">("All");

  const q = query.trim().toLowerCase();
  const list = resources.filter(
    (r) =>
      (category === "All" || r.category === category) &&
      (!q || `${r.title} ${r.description} ${r.category}`.toLowerCase().includes(q))
  );

  const chips: (ResourceCategory | "All")[] = ["All", ...categories];

  return (
    <div>
      {/* Search */}
      <label htmlFor="resource-search" className="text-sm font-medium">
        Search resources
      </label>
      <div className="relative mt-2">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          id="resource-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try “graphing”, “LaTeX”, or “career”"
          className="min-h-12 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-base placeholder:text-muted"
        />
      </div>

      {/* Category chips */}
      <div role="group" aria-label="Filter by category" className="mt-5 flex flex-wrap gap-2">
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

      <p aria-live="polite" className="mt-6 font-mono text-xs text-muted">
        {list.length} {list.length === 1 ? "resource" : "resources"}
      </p>

      {list.length > 0 ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <li key={r.url}>
              <ResourceCard resource={r} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-2xl border border-line bg-surface p-8 text-center">
          <p className="text-lg font-medium">No resources match that search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-4 inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-medium hover:bg-ink/5"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}