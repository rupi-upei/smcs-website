import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { lockers } from "@/data/services";
import { siteInfo } from "@/lib/site";

export default function ServicesPreview() {
  return (
    <section aria-labelledby="services-preview" className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="services-preview"
          label="locker rental"
          title="A locker in the centre of campus."
          description={lockers.summary}
        />

        <dl className="mt-12 grid border-y border-line sm:grid-cols-3">
          {lockers.stats.map((s) => (
            <div
              key={s.label}
              className="border-b border-line py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{s.label}</dt>
              <dd className="mt-2">
                <span className="block text-4xl font-semibold tracking-tight">{s.value}</span>
                <span className="mt-1 block text-sm text-muted">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteInfo.email}?subject=Locker%20rental`}
            className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90"
          >
            Email to rent a locker
          </a>
          <Link
            href="/services#lockers"
            className="inline-flex min-h-12 items-center rounded-full border border-line bg-paper px-6 font-medium transition-colors hover:bg-ink/5"
          >
            Rules &amp; details
          </Link>
        </div>
      </Container>
    </section>
  );
}