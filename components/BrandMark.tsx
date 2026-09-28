export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="inline-flex items-baseline text-lg font-semibold">
        <span className="font-mono text-brand-orange">{"{"}</span>
        <span className="px-0.5 font-serif text-xl italic">π</span>
        <span className="font-mono text-brand-cyan">{"}"}</span>
      </span>
      <span className="text-base font-semibold tracking-tight">SMCSS</span>
    </span>
  );
}