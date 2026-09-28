export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="font-mono text-lg font-semibold">
        <span className="text-brand-orange">{"{"}</span>
        <span className="px-0.5">π</span>
        <span className="text-brand-cyan">{"}"}</span>
      </span>
      <span className="text-base font-semibold tracking-tight">SMCSS</span>
    </span>
  );
}