import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 md:py-32"
      id="services"
    >
      <div
        aria-hidden
        className="parallax-drift pointer-events-none absolute -left-20 top-16 size-72 rounded-full bg-pastel-lavender/25 blur-3xl"
      />
      <Container>
        <SectionHeading label="Offer" title="Services" />
        <ul className="mt-16 grid gap-2 rounded-2xl bg-background md:grid-cols-3">
          {site.services.map((service) => (
            <li className="rounded-xl border border-line bg-background py-10 md:px-8 md:last:pr-0 md:py-12" key={service.title}>
              <h3 className="font-display text-2xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
