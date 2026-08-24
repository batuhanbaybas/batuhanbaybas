import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { contactChannels, site } from "@/lib/site";

export function Contact() {
  return (
    <section
      className="scroll-mt-24 border-t border-line py-24 md:py-32"
      id="contact"
    >
      <Container>
        <SectionHeading index="03" label="Start" title="Contact" />
        <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground md:text-2xl md:leading-10">
          {site.contact.heading}
        </p>
        <p className="mt-4 max-w-xl font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {site.contact.note}
        </p>
        <ul className="mt-16 divide-y divide-line border-y border-line">
          {contactChannels.map((channel) => (
            <li key={channel.label}>
              <a
                className="grid gap-2 py-6 transition-colors hover:text-muted md:grid-cols-[8rem_1fr] md:items-baseline md:gap-10 md:py-8"
                href={channel.href}
                rel={channel.external ? "noreferrer" : undefined}
                target={channel.external ? "_blank" : undefined}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {channel.label}
                </span>
                <span className="font-display text-xl font-medium tracking-tight md:text-2xl">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
