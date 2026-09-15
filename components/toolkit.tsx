import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Stack } from "@/components/work-meta";
import { site } from "@/lib/site";

export function Toolkit() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-20 md:py-28"
      id="stack"
    >
      <div
        aria-hidden
        className="parallax-drift pointer-events-none absolute -right-20 bottom-6 size-72 rounded-full bg-pastel-peach/25 blur-3xl"
      />
      <Container>
        <SectionHeading label="Toolkit" title="Stack" />
        <ul className="mt-16 grid gap-2 rounded-2xl bg-background md:grid-cols-3">
          {site.stack.map((category) => (
            <li
              className="rounded-xl border border-line bg-background py-8 md:px-8 md:last:pr-0 md:py-10"
              key={category.title}
            >
              <h3 className="font-display text-2xl font-medium tracking-tight">
                {category.title}
              </h3>
              <div className="mt-4">
                <Stack stack={category.items} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
