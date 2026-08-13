import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function Tools() {
  return (
    <section className="scroll-mt-24 border-t border-line py-24 md:py-32" id="tools">
      <Container>
        <SectionHeading index="01" label="Stack" title="Tools" />
        <div className="mt-16 space-y-12">
          {site.tools.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {group.label}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((item) => (
                  <li className="border border-line px-4 py-5" key={item}>
                    <p className="text-sm tracking-tight">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
