"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // While the mobile menu is open: Esc closes it, page can't scroll behind it,
  // and it closes automatically if the window is resized to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" aria-label="SMCSS home" className="rounded-md">
          <BrandMark />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-ink/5 font-medium text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* PLACEHOLDER: point this to the real "get involved" page later */}
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink transition hover:opacity-90 sm:inline-flex"
          >
            Get involved
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex min-h-14 items-center justify-between text-2xl tracking-tight ${
                    isActive(link.href) ? "font-semibold text-accent" : "font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-full bg-accent font-medium text-accent-ink"
            >
              Get involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}