import Link from "next/link";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import CanteenStatus from "../CanteenStatus";
import { canteen, lockers } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section aria-labelledby="services-preview" className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="services-preview"
          label="services"
          title="The practical stuff, sorted."
          description="Grab a snack between classes or rent a locker for the term."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Canteen */}
          <article className="flex flex-col rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold tracking-tight">Canteen</h3>
              <CanteenStatus hours={canteen.hours} />
            </div>
            <p className="mt-4 text-muted">{canteen.summary}</p>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="font-mono text-muted">where</dt>
              <dd>{canteen.location}</dd>
              <dt className="font-mono text-muted">hours</dt>
              <dd>{canteen.hoursSummary}</dd>
            </dl>
            {canteen.placeholder && (
              <p className="mt-4 font-mono text-xs text-muted">Sample details · to be confirmed</p>
            )}
            <div className="mt-auto pt-8">
              <Link href="/services#canteen" className="font-medium text-accent hover:underline">
                Canteen details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Lockers */}
          <article className="flex flex-col rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">Locker rental</h3>
            <p className="mt-4 text-muted">{lockers.summary}</p>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="font-mono text-muted">price</dt>
              <dd>{lockers.price}</dd>
              <dt className="font-mono text-muted">term</dt>
              <dd>{lockers.period}</dd>
            </dl>
            {lockers.placeholder && (
              <p className="mt-4 font-mono text-xs text-muted">Sample details · to be confirmed</p>
            )}
            <div className="mt-auto pt-8">
              <Link
                href="/services#lockers"
                className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink transition hover:opacity-90"
              >
                How to rent a locker
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}