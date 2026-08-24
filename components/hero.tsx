import { Container } from "@/components/container";
import { ToolchainCanvas } from "@/components/scene/toolchain-canvas";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative">
      <Container className="grid lg:min-h-[calc(100dvh-57px)] lg:grid-cols-2 lg:gap-10">
        <div className="flex max-w-xl flex-col justify-center py-10 lg:py-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {site.role}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,8vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.04em]">
            <span className="block">{site.headline[0]}</span>
            <span className="block">{site.headline[1]}</span>
            <span className="block">{site.headline[2]}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted md:text-lg md:leading-8">
            {site.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8 lg:mt-10">
            <a
              href={site.cta.primary.href}
              className="border-b border-foreground pb-1 text-sm tracking-wide transition-colors hover:border-muted hover:text-muted"
            >
              {site.cta.primary.label}
            </a>
            <a
              href={site.cta.secondary.href}
              className="border-b border-line pb-1 text-sm tracking-wide text-muted transition-colors hover:border-foreground hover:text-foreground"
            >
              {site.cta.secondary.label}
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex lg:min-h-[calc(100dvh-57px)] lg:flex-col lg:justify-center lg:pb-10">
          <ToolchainCanvas />
        </div>
      </Container>
    </section>
  );
}
