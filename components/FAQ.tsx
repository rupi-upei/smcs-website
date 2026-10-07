export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="font-mono text-xl text-muted transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-5 pr-10 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}