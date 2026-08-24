import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section
      className="scroll-mt-24 border-t border-line py-24 md:py-32"
      id="services"
    >
      <Container>
        <SectionHeading index="01" label="Offer" title="Services" />
        <ul className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {site.services.map((service) => (
            <li className="bg-background py-10 md:px-8 md:first:pl-0 md:last:pr-0 md:py-12" key={service.title}>
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
