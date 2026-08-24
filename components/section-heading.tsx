export function SectionHeading({
  index,
  label,
  title,
}: {
  index?: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {index ? `${index} / ${label}` : label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
