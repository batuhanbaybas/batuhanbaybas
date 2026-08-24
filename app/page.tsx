import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <OpenSource />
      <Contact />
      <SiteFooter />
    </>
  );
}
