export default function SectionHeading({
  id,
  label,
  title,
  description,
}: {
  id?: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        <span className="text-accent-2">{"{ "}</span>
        {label}
        <span className="text-accent">{" }"}</span>
      </p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </div>
  );
}