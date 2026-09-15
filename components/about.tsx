import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-20 md:py-28"
      id="about"
    >
      <div
        aria-hidden
        className="parallax-drift pointer-events-none absolute -right-24 top-8 size-72 rounded-full bg-pastel-sage/25 blur-3xl"
      />
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          <span aria-hidden className="text-accent">
            ${" "}
          </span>
          Profile
        </p>
        <div className="mt-6 max-w-3xl space-y-5">
          <p className="text-lg leading-8 text-foreground md:text-2xl md:leading-10">
            {site.about[0]}
          </p>
          <p className="text-base leading-7 text-muted md:text-lg md:leading-8">
            {site.about[1]}
          </p>
        </div>
      </Container>
    </section>
  );
}
