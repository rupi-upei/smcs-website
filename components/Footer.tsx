import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { navLinks, siteInfo } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0c0f] text-[#ecedea]">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/smcss-logo.png"
            alt="SMCSS logo"
            width={96}
            height={96}
            className="rounded-full"
          />
          {/* PLACEHOLDER: confirm wording with the society */}
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#9aa0ad]">
            {siteInfo.fullName} — the student society for mathematics,
            computing, statistics, and data science at UPEI.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#9aa0ad]">
            {"{ pages }"}
          </h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1 text-sm transition-colors hover:text-brand-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#9aa0ad]">
            {"{ contact }"}
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-block py-1 transition-colors hover:text-brand-cyan"
              >
                {siteInfo.email}
              </a>
            </li>
            <li>
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 transition-colors hover:text-brand-cyan"
              >
                Instagram {siteInfo.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={siteInfo.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 transition-colors hover:text-brand-cyan"
              >
                Events &amp; links (Linktree)
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-[#9aa0ad] sm:flex-row sm:justify-between">
        <p>© {year} {siteInfo.name}</p>
        <p>University of Prince Edward Island · Charlottetown, PEI</p>
      </Container>
    </footer>
  );
}