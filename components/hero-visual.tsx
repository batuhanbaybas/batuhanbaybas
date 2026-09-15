export function HeroVisual() {
  return (
    <div className="relative flex h-full flex-col">
      <div aria-hidden className="relative min-h-[420px] flex-1 overflow-hidden rounded-2xl">
        <div className="hero-glow pointer-events-none absolute inset-0" />

        <div className="parallax-slow absolute -top-8 right-2 size-64 rounded-full bg-pastel-sage/50 blur-3xl" />
        <div className="parallax-fast absolute top-1/3 left-0 size-56 rounded-full bg-pastel-lavender/50 blur-3xl" />
        <div className="parallax-slow absolute bottom-4 right-20 size-56 rounded-full bg-pastel-peach/45 blur-3xl" />

        <div className="parallax-fast absolute inset-x-6 top-1/2 -translate-y-1/2 -rotate-2 overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-[0_24px_60px_-32px_rgb(0_0_0_/_0.5)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-pastel-peach" />
              <span className="size-2.5 rounded-full bg-pastel-sage" />
              <span className="size-2.5 rounded-full bg-pastel-lavender" />
            </div>
            <p className="font-mono text-[11px] text-muted">~/batuhan.dev — zsh</p>
          </div>
          <pre className="px-5 py-4 font-mono text-[13px] leading-6 text-muted">
            <code className="block">
              <span className="text-accent">$</span> whoami
            </code>
            <code className="mt-1 block text-foreground">
              batuhan — senior frontend engineer
            </code>
            <code className="mt-3 block">
              <span className="text-accent">$</span> ./ship.sh --stack
              react,typescript,next
            </code>
            <code className="mt-1 block text-foreground">
              ✓ deployed to production
            </code>
            <code className="mt-3 block">
              <span className="text-accent">$</span>{" "}
              <span className="terminal-caret" />
            </code>
          </pre>
        </div>
      </div>

    </div>
  );
}
