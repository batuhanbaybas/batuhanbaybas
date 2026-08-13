import Link from "next/link";
import { Container } from "@/components/container";
import { Mark } from "@/components/mark";
import { site } from "@/lib/site";

const nav = [
  { href: "#tools", label: "Tools" },
  { href: "#work", label: "Work" },
  { href: "#open-source", label: "Open Source" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/75 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-foreground"
        >
          <Mark className="size-7" />
          <span className="font-display text-sm font-medium tracking-tight">
            {site.name}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:gap-6">
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
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
