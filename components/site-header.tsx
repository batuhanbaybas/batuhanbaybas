"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const desktopNav: NavItem[] = [
  ...site.sections.filter((section) => section.id !== "contact").map((section) => ({
    href: `#${section.id}`,
    label: section.label,
  })),
  { href: site.links.github, label: "GitHub", external: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/75 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3 lg:py-4">
        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-2.5 text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-sm font-medium tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted lg:flex">
          {desktopNav.map((item) => (
            <a
              className="transition-colors hover:text-accent"
              href={item.href}
              key={item.href}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            className="rounded-full border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background"
            href={site.links.mailHref}
          >
            Hire me
          </a>
        </nav>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <nav
          className="border-t border-line bg-background lg:hidden"
          id="mobile-nav"
        >
          <Container className="flex flex-col py-3">
            {desktopNav.map((item) => (
              <a
                className="py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
                rel={item.external ? "noreferrer" : undefined}
                target={item.external ? "_blank" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-full border border-accent px-3 py-3 text-accent transition-colors hover:bg-accent hover:text-background"
              href={site.links.mailHref}
              onClick={() => setOpen(false)}
            >
              Hire me
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
