import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Stack, WorkLinks } from "@/components/work-meta";
import { site } from "@/lib/site";

export function OpenSource() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 md:py-32"
      id="open-source"
    >
      <div
        aria-hidden
        className="parallax-drift pointer-events-none absolute -left-20 bottom-8 size-72 rounded-full bg-pastel-sage/25 blur-3xl"
      />
      <Container>
        <SectionHeading label="Public" title="Open source" />
        <ul className="mt-16 grid gap-3 rounded-2xl bg-background md:grid-cols-2">
          {site.openSource.map((item) => (
            <li className="rounded-xl bg-surface p-8 md:p-10" key={item.name}>
              <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                <span>{item.kind}</span>
                <span>{item.year}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                {item.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-muted">
                {item.description}
              </p>
              <div className="mt-6">
                <Stack stack={item.stack} />
              </div>
              <div className="mt-8">
                <WorkLinks item={item} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
