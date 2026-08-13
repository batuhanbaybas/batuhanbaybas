"use client";

import dynamic from "next/dynamic";
import { Component, useMemo, useState, type ReactNode } from "react";
import { site } from "@/lib/site";

const Toolchain = dynamic(() => import("./toolchain"), {
  loading: () => <div aria-hidden className="size-full bg-transparent" />,
  ssr: false,
});

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div
          aria-hidden
          className="size-full bg-[radial-gradient(ellipse_at_center,#1a1a1a_0%,#050505_62%)]"
        />
      );
    }

    return this.props.children;
  }
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

export function ToolchainCanvas() {
  const [active, setActive] = useState<string | null>(null);
  const section = useMemo(
    () => site.sections.find((item) => item.id === active),
    [active],
  );

  return (
    <div className="relative size-full">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="absolute inset-0">
        <SceneBoundary>
          <Toolchain
            active={active}
            onActiveChange={setActive}
            onInspect={scrollToSection}
          />
        </SceneBoundary>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between pt-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {section ? `Go to · ${section.label}` : "The site, in layers"}
        </p>
        <p className="max-w-[12rem] text-right font-mono text-[11px] leading-4 tracking-[0.04em] text-muted">
          {section?.hint ?? "Hover a layer, then click to move."}
        </p>
      </div>
      <nav
        aria-label="Page sections"
        className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-x-6 gap-y-3 pb-1 md:grid-cols-4"
      >
        {site.sections.map((item, index) => {
          const isActive = active === item.id;

          return (
            <a
              className={`transition-colors ${
                isActive ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
              href={`#${item.id}`}
              key={item.id}
              onBlur={() => setActive(null)}
              onFocus={() => setActive(item.id)}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em]">
                0{index + 1}
              </span>
              <span className="mt-1 block font-display text-sm font-medium tracking-tight md:text-base">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
