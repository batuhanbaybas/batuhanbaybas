import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function About() {
  return (
    <section className="border-t border-line py-20 md:py-28" id="about">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
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
        <ul className="mt-16 grid gap-px bg-line sm:grid-cols-3">
          {site.aboutSignals.map((signal) => (
            <li className="bg-background py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0" key={signal.value}>
              <p className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                {signal.value}
              </p>
              <p className="mt-3 max-w-[16rem] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {signal.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
