"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ReactNode } from "react";
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

function useDesktopScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setEnabled(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return enabled;
}

export function ToolchainCanvas() {
  const showScene = useDesktopScene();
  const [active, setActive] = useState<string | null>(null);

  if (!showScene) {
    return null;
  }

  return (
    <div className="relative flex h-full flex-col">
      <div className="relative min-h-[420px] flex-1">
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
      </div>
      <nav
        aria-label="Page sections"
        className="grid grid-cols-4 gap-x-4 gap-y-3 pt-4 pb-2"
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
