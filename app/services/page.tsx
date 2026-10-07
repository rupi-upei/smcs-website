import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import { lockers } from "@/data/services";
import { siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Rent a locker in Cass Science Hall from SMCSS — $10 per semester.",
};

// Pre-filled email so students only need to add their details
const rentHref = `mailto:${siteInfo.email}?subject=${encodeURIComponent(
  "Locker rental request"
)}&body=${encodeURIComponent(
  "Hi SMCSS,\n\nI'd like to rent a locker in Cass Science Hall for this semester.\n\nName:\nStudent email:\n\nThanks!"
)}`;

const primaryBtn =
  "inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90";

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        label="services"
        title="Services"
        description="Practical help for students in the School, starting with lockers in Cass Science Hall."
      >
        <a href={rentHref} className={primaryBtn}>
          Email to rent a locker
        </a>
      </PageHeader>

      {/* Lockers overview */}
      <section id="lockers" aria-labelledby="lockers-title" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="lockers-title"
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

          {/* How it works + rules */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">How it works</h3>
              <ol className="mt-6 space-y-6">
                {lockers.steps.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-11 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm"
                    >
                      {i + 1}
                    </span>
                    <div className="pt-2">
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-1 text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold tracking-tight">Locker rules</h3>
                <ul className="mt-4 space-y-3">
                  {lockers.rules.map((rule) => (
                    <li key={rule} className="grid grid-cols-[1rem_1fr] gap-3 text-sm">
                      <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-accent-2" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold tracking-tight">Who can rent?</h3>
                <p className="mt-2 text-sm text-muted">
                  {lockers.eligibility ??
                    `Eligibility hasn't been confirmed yet. Email ${siteInfo.email} if you're unsure.`}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="border-t border-line bg-surface py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading id="faq" label="faq" title="Locker questions." />
            <a href={rentHref} className={`${primaryBtn} mt-8`}>
              Email to rent a locker
            </a>
          </div>
          <FAQ items={lockers.faq} />
        </Container>
      </section>
    </main>
  );
}
