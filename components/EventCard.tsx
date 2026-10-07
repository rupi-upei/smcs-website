import type { EventCategory } from "@/lib/types";

export type EventCardData = {
  id: string;
  title: string;
  category: EventCategory;
  description: string;
  location: string;
  month: string;
  day: string;
  dateLabel: string;
  timeLabel: string;
  link?: string;
  placeholder?: boolean;
  googleUrl: string;
  icsUrl: string;
  isPast: boolean;
};

const secondaryBtn =
  "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium transition-colors hover:bg-ink/5";

export default function EventCard({ event }: { event: EventCardData }) {
  return (
    <article
      id={event.id}
      className="grid scroll-mt-24 gap-5 rounded-2xl border border-line bg-surface p-5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-6"
    >
      {/* Date block */}
      <div className="flex items-baseline gap-2 sm:w-20 sm:flex-col sm:gap-0 sm:border-r sm:border-line sm:pr-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-2">{event.month}</span>
        <span className="text-3xl font-semibold tracking-tight">{event.day}</span>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs">
            {event.category}
          </span>
          {event.placeholder && (
            <span className="rounded-full bg-brand-yellow/30 px-2.5 py-0.5 font-mono text-xs">
              Sample
            </span>
          )}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{event.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {event.dateLabel} · {event.timeLabel} · {event.location}
        </p>
        <p className="mt-3 text-muted">{event.description}</p>

        {!event.isPast && (
          <div className="mt-5 flex flex-wrap gap-2">
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink transition hover:opacity-90"
              >
                Register
                <span className="sr-only"> for {event.title} (opens in a new tab)</span>
              </a>
            )}
            <a
              href={event.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryBtn}
            >
              Google Calendar
              <span className="sr-only"> — add {event.title} (opens in a new tab)</span>
            </a>
            <a
              href={event.icsUrl}
              download={`${event.id}.ics`}
              className={secondaryBtn}
            >
              Apple / Outlook
              <span className="sr-only"> calendar file for {event.title}</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}