"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { Mark } from "@/components/mark";
import { site } from "@/lib/site";

const desktopNav = [
  ...site.sections.map((section) => ({
    href: `#${section.id}`,
    label: section.label,
  })),
  { href: `mailto:${site.links.email}`, label: "Contact" },
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
          <Mark className="size-7 shrink-0" />
          <span className="font-display text-sm font-medium tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted lg:flex">
          {desktopNav.map((item) => (
            <a
              className="transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
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
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
