import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SMCSS by email, social media, or our contact form.",
};

const channels = [
  { label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}`, note: "Questions and locker requests" },
  { label: "Instagram", value: siteInfo.instagramHandle, href: siteInfo.instagram, note: "Updates and announcements" },
  { label: "Discord", value: "SMCSS server", href: siteInfo.discord, note: "Chat with other students" },
  { label: "Facebook", value: "SMCSS group", href: siteInfo.facebook },
  { label: "Linktree", value: "All current events", href: siteInfo.linktree },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        label="contact"
        title="Get in touch"
        description="Questions about lockers, events, or joining SMCSS? Reach out however suits you best."
      />

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Find us online</h2>
          <ul className="mt-4 border-t border-line">
            {channels.map((c) => {
              const external = c.href.startsWith("http");
              return (
                <li key={c.label} className="border-b border-line">
                  <a
                    href={c.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-16 items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-widest text-muted">{c.label}</span>
                      <span className="mt-1 block font-medium group-hover:text-accent">{c.value}</span>
                      {c.note && <span className="block text-sm text-muted">{c.note}</span>}
                    </span>
                    <span aria-hidden="true" className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                      {external ? "↗" : "→"}
                    </span>
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Visit us</h2>
            <p className="mt-2 text-lg font-medium">{siteInfo.location}</p>
          </div>
        </div>

        <ContactForm />
      </Container>
    </main>
  );
}
