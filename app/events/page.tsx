import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import EventsExplorer from "@/components/EventsExplorer";
import type { EventCardData } from "@/components/EventCard";
import { formatDate, formatDayParts, formatTime, getPastEvents, getUpcomingEvents } from "@/lib/events";
import { googleCalendarUrl, icsDataUrl } from "@/lib/calendar";
import { siteInfo } from "@/lib/site";
import type { SmcssEvent } from "@/lib/types";

export const metadata: Metadata = {
  title: "Events",
  description: "SMCSS events — workshops, socials, competitions, and more.",
};

// Re-check once an hour so finished events move to "Past" automatically
export const revalidate = 3600;

function toCard(e: SmcssEvent, isPast: boolean): EventCardData {
  return {
    id: e.id,
    title: e.title,
    category: e.category,
    description: e.description,
    location: e.location,
    ...formatDayParts(e.start),
    dateLabel: formatDate(e.start),
    timeLabel: formatTime(e.start),
    link: e.link,
    placeholder: e.placeholder,
    googleUrl: googleCalendarUrl(e),
    icsUrl: icsDataUrl(e),
    isPast,
  };
}

export default function EventsPage() {
  const now = new Date();
  const upcoming = getUpcomingEvents(now).map((e) => toCard(e, false));
  const past = getPastEvents(now).map((e) => toCard(e, true));

  return (
    <main id="main">
      <PageHeader
        label="events"
        title="Events"
        description="Workshops, socials, competitions, and more. Featured events are listed below — the full, always-current list lives on our Linktree."
      >
        <a
          href={siteInfo.linktree}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90"
        >
          All events on Linktree <span aria-hidden="true">&nbsp;↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </PageHeader>

      <Container className="py-12 sm:py-16">
        <EventsExplorer upcoming={upcoming} past={past} linktree={siteInfo.linktree} />
      </Container>
    </main>
  );
}
