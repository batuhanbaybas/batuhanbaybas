import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Stack, WorkLinks } from "@/components/work-meta";
import { site } from "@/lib/site";

export function Work() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 md:py-32"
      id="work"
    >
      <div
        aria-hidden
        className="parallax-drift pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-pastel-peach/25 blur-3xl"
      />
      <Container>
        <SectionHeading label="Selected" title="Work" />
        <ul className="mt-16 divide-y divide-line border-t border-line">
          {site.work.map((project) => (
            <li
              className="grid gap-6 px-3 py-10 md:grid-cols-[8rem_1fr_11rem] md:items-start md:gap-10 md:px-4 md:py-12"
              key={project.name}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {project.kind}
              </p>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-5">
                  <Stack stack={project.stack} />
                </div>
              </div>
              <WorkLinks item={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
