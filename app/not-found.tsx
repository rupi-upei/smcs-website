import Link from "next/link";
import Container from "@/components/Container";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="bg-grid">
      <Container className="py-24 sm:py-32">
        <p className="font-mono text-sm text-accent-2">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          This page is undefined.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          The page you&apos;re looking for isn&apos;t in our domain. It may have moved, or the link
          might be mistyped.
        </p>
        <p className="mt-4 font-mono text-sm text-muted">f(x) = 1 / (x − 404)</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 font-medium transition-colors hover:bg-ink/5"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </main>
  );
}