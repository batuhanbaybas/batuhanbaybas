import { Container } from "@/components/container";
import { ToolchainCanvas } from "@/components/scene/toolchain-canvas";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative">
      <Container className="grid min-h-[calc(100dvh-57px)] md:grid-cols-2 md:gap-10">
        <div className="order-2 flex max-w-xl flex-col justify-center pb-16 pt-4 md:order-1 md:pb-0 md:pt-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {site.role}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.04em]">
            <span className="block">{site.headline[0]}</span>
            <span className="block">{site.headline[1]}</span>
            <span className="block">{site.headline[2]}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted md:text-lg md:leading-8">
            {site.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#work"
              className="border-b border-foreground pb-1 text-sm tracking-wide transition-colors hover:border-muted hover:text-muted"
            >
              View work
            </a>
            <a
              href={`mailto:${site.links.email}`}
              className="border-b border-line pb-1 text-sm tracking-wide text-muted transition-colors hover:border-foreground hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative order-1 h-[360px] md:order-2 md:h-auto md:min-h-[calc(100dvh-57px)]">
          <ToolchainCanvas />
        </div>
      </Container>
    </section>
  );
}
