import Link from "next/link";
import { Container } from "@/components/container";
import { Mark } from "@/components/mark";
import { site } from "@/lib/site";

const nav = [
  { href: "#tools", label: "Tools" },
  { href: "#open-source", label: "Open Source" },
  { href: "#work", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/75 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-3 py-3 md:py-4">
        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-2.5 text-foreground"
        >
          <Mark className="size-7 shrink-0" />
          <span className="hidden font-display text-sm font-medium tracking-tight sm:inline">
            {site.name}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:gap-x-4 md:gap-x-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.links.email}`}
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href={site.links.github}
            rel="noreferrer"
            target="_blank"
            className="hidden transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
