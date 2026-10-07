import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { siteInfo } from "@/lib/site";

const ways = [
  {
    title: "Become a member",
    text: "Fill out the SMCSS sign-up form to join the society.",
    href: siteInfo.joinForm,
    cta: "Open sign-up form",
    highlight: true,
  },
  {
    title: "Join the Discord",
    text: "Chat with other students in the SMCSS Discord server.",
    href: siteInfo.discord,
    cta: "Join Discord",
  },
  {
    title: "Follow on Instagram",
    text: `Follow ${siteInfo.instagramHandle} for updates and announcements.`,
    href: siteInfo.instagram,
    cta: "Open Instagram",
  },
];

export default function GetInvolved() {
  return (
    <section aria-labelledby="get-involved" className="bg-grid border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="get-involved"
          label="get involved"
          title="Find your people."
          description="Join the society, hop into the conversation, or just drop by and say hi."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => (
            <li key={w.title}>
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-2xl border p-6 transition ${
                  w.highlight
                    ? "border-accent bg-accent text-accent-ink hover:opacity-90"
                    : "border-line bg-surface hover:border-accent"
                }`}
              >
                <span className="text-lg font-semibold tracking-tight">{w.title}</span>
                <span className={`mt-2 text-sm ${w.highlight ? "" : "text-muted"}`}>{w.text}</span>
                <span className="mt-auto pt-6 text-sm font-medium">
                  {w.cta} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}

          {/* Physical location (not a link) */}
          <li className="flex flex-col rounded-2xl border border-line bg-surface p-6">
            <span className="text-lg font-semibold tracking-tight">Drop by the lounge</span>
            <span className="mt-2 text-sm text-muted">{siteInfo.location}</span>
            <span className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-muted">
              Cass Science Hall · 202
            </span>
          </li>
        </ul>
      </Container>
    </section>
  );
}