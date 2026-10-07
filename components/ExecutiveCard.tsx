import Image from "next/image";
import type { Executive } from "@/lib/types";

// "Vice-President" -> "VP", "Jane Doe" -> "JD"
function initials(text: string) {
  return text
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ExecutiveCard({ exec }: { exec: Executive }) {
  const label = exec.name ?? exec.role;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="bg-grid relative aspect-[4/3] border-b border-line">
        {exec.photo ? (
          <Image
            src={exec.photo}
            alt={label}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div aria-hidden="true" className="flex h-full items-center justify-center font-mono text-4xl font-semibold">
            <span className="text-brand-orange">{"{"}</span>
            <span className="px-2">{initials(label)}</span>
            <span className="text-brand-cyan">{"}"}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent-2">{exec.role}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {exec.name ?? <span className="text-muted">To be announced</span>}
        </h3>
        {exec.program && <p className="mt-1 text-sm text-muted">{exec.program}</p>}
        {exec.bio && <p className="mt-4 text-sm">{exec.bio}</p>}

        {(exec.email || exec.linkedin) && (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-6 text-sm">
            {exec.email && (
              <a href={`mailto:${exec.email}`} className="inline-block py-1 font-medium text-accent hover:underline">
                Email<span className="sr-only"> {label}</span>
              </a>
            )}
            {exec.linkedin && (
              <a
                href={exec.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 font-medium text-accent hover:underline"
              >
                LinkedIn<span className="sr-only"> profile of {label} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}