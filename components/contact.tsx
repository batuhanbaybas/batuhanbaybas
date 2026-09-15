import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { contactChannels, site } from "@/lib/site";

export function Contact() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-24 md:py-32"
      id="contact"
    >
      <div
        aria-hidden
        className="parallax-drift pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-pastel-lavender/25 blur-3xl"
      />
      <Container>
        <div className="rounded-2xl border border-line bg-transparent p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionHeading label="Start a conversation" title="Let's build something useful." />
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
                {site.contact.heading}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {site.contact.note}
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full border border-accent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-background"
              href={site.links.mailHref}
            >
              Hire me
            </a>
          </div>
          <ul className="mt-10 grid gap-2 rounded-2xl bg-background sm:grid-cols-3">
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <a
                  className="flex h-full flex-col gap-3 rounded-xl bg-background p-5 transition-colors hover:text-accent"
                  href={channel.href}
                  rel={channel.external ? "noreferrer" : undefined}
                  target={channel.external ? "_blank" : undefined}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {channel.label}
                  </span>
                  <span className="break-all font-display text-lg font-medium tracking-tight">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
