import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who SMCSS is, what we do, and how to get involved.",
};

// Official SMCSS objectives (from the society's current website)
const objectives = [
  "Provide an environment of mutual support so that students of the School of Mathematical and Computational Sciences may know each other better.",
  "Provide community outreach through activities that engage other UPEI students and upper-level secondary school students, making Mathematics and Computer Science better known.",
  "Promote friendship and respectful collegiality with staff and faculty of the School, and of related departments or faculties with whom joint events may be scheduled.",
  "Provide an experience consistent with those found at universities and colleges worldwide, where departmentally oriented student societies are common.",
];

// From the society's current website ("Why Join SMCSS?")
const reasons = [
  { title: "Community", text: "Connect with fellow math and CS enthusiasts." },
  { title: "Learning", text: "Enhance your skills through workshops and projects." },
  { title: "Fun", text: "Enjoy social events and make lasting friendships." },
];

const facts = [
  { term: "Full name", value: siteInfo.fullName },
  { term: "Status", value: "Student club ratified under the UPEI Student Union" },
  { term: "Home base", value: siteInfo.location },
  { term: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
  { term: "Instagram", value: siteInfo.instagramHandle, href: siteInfo.instagram },
  { term: "Discord", value: "SMCSS server", href: siteInfo.discord },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        label="about"
        title="About SMCSS"
        description={`${siteInfo.tagline} We're the student society for UPEI's School of Mathematical and Computational Sciences.`}
      />

      {/* Purpose + official objectives */}
      <section aria-labelledby="purpose" className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* PLACEHOLDER: summary condensed from the official objectives — confirm with the society */}
          <SectionHeading
            id="purpose"
            label="purpose"
            title="Why SMCSS exists."
            description="To build a supportive community for students in the School, and to make math and computer science better known at UPEI and beyond."
          />
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Our objectives</h3>
            <ol className="mt-4 border-t border-line">
              {objectives.map((o, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-6">
                  <span className="font-mono text-sm text-accent-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{o}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Why join */}
      <section aria-labelledby="why-join" className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading id="why-join" label="why join" title="Community, learning, and fun." />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {reasons.map((r, i) => (
              <li key={r.title} className="rounded-2xl border border-line bg-paper p-6">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2 text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Society info + join */}
      <section aria-labelledby="info" className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading id="info" label="society info" title="The essentials." />
            <dl className="mt-10 border-t border-line">
              {facts.map((f) => (
                <div key={f.term} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted sm:pt-1">{f.term}</dt>
                  <dd>
                    {f.href ? (
                      <a
                        href={f.href}
                        target={f.href.startsWith("http") ? "_blank" : undefined}
                        rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium text-accent underline-offset-4 hover:underline"
                      >
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="self-start rounded-2xl bg-accent p-8 text-accent-ink">
            <h2 className="text-2xl font-semibold tracking-tight">Ready to join?</h2>
            <p className="mt-3">Become an SMCSS member by filling out our sign-up form.</p>
            <a
              href={siteInfo.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center rounded-full bg-paper px-6 font-medium text-ink transition hover:opacity-90"
            >
              Open sign-up form <span aria-hidden="true">&nbsp;↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}