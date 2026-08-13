import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { SiteFooter } from "@/components/site-footer";
import { Tools } from "@/components/tools";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tools />
      <OpenSource />
      <Work />
      <SiteFooter />
    </>
  );
}
