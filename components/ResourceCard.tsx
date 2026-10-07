import type { Resource } from "@/lib/types";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {resource.category}
      </span>
      <span className="mt-3 flex items-start justify-between gap-3 text-lg font-semibold tracking-tight">
        {resource.title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          className="mt-1.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        >
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
      <span className="mt-2 text-sm text-muted">{resource.description}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}