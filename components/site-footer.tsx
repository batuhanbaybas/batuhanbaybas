import { Container } from "@/components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {site.name} / {site.location}
        </p>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <a
            href={site.links.mailHref}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href={site.links.github}
            rel="noreferrer"
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            rel="noreferrer"
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
