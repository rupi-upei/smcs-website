import Container from "./Container";

export default function PageHeader({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-grid border-b border-line">
      <Container className="py-16 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
          <span className="text-accent-2">{"{ "}</span>
          {label}
          <span className="text-accent">{" }"}</span>
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{description}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}