import type { WorkItem } from "@/lib/site";

function Arrow() {
  return (
    <svg
      aria-hidden
      className="size-3.5"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 12 12 4M6.5 4H12v5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function WorkLinks({ item }: { item: WorkItem }) {
  const links = [
    item.href ? { href: item.href, label: "Live" } : null,
    item.repo ? { href: item.repo, label: "Repo" } : null,
    item.npm ? { href: item.npm, label: "npm" } : null,
  ].filter((link): link is { href: string; label: string } => link !== null);

  if (links.length === 0) {
    return (
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        Private
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          {link.label} <Arrow />
        </a>
      ))}
    </div>
  );
}

export function Stack({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
      {stack.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
