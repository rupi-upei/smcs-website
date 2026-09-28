import Link from "next/link";
import Container from "./Container";
import EventPlot from "./EventPlot";
import { getUpcomingEvents } from "@/lib/events";
import { buildPlot } from "@/lib/plot";
import { siteInfo } from "@/lib/site";

export default function Hero() {
  const now = new Date();
  const plot = buildPlot(getUpcomingEvents(now), now);

  return (
    <section aria-labelledby="hero-title" className="bg-grid border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
          <span className="text-accent-2">{"{ "}</span>
          {siteInfo.fullName}
          <span className="text-accent">{" }"}</span>
        </p>

        {/* PLACEHOLDER COPY: replace with official SMCSS messaging if available */}
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
        >
          Plot your year<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Events, services, and resources for students in mathematics, computing,
          statistics, and data science — all in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/events"
            className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90"
          >
            See all events
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 font-medium transition-colors hover:bg-ink/5"
          >
            Student services
          </Link>
        </div>

        <div className="mt-16">
          <EventPlot plot={plot} />
        </div>
      </Container>
    </section>
  );
}