import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { Toolkit } from "@/components/toolkit";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Toolkit />
      <Services />
      <Work />
      <Projects />
      <OpenSource />
      <Contact />
      <SiteFooter />
    </>
  );
}
