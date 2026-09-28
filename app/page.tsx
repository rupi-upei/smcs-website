export default function Home() {
  return (
    <main id="main" className="bg-grid min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="font-mono text-sm uppercase tracking-widest text-muted">
          SMCS Society · design test
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          Plotted.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Temporary page to check colours, fonts, and the grid.
        </p>
        <a
        
          href="#"
          className="mt-10 inline-flex min-h-11 items-center rounded-full bg-accent px-6 font-medium text-accent-ink transition hover:opacity-90"
        >
          Test button
        </a>
      </div>
    </main>
  );
}