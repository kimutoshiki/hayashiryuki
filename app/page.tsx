import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { ThreeReasons } from "@/components/sections/ThreeReasons";
import { SectionCards } from "@/components/sections/SectionCards";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ThreeReasons />
      <SectionCards />
      <FounderMessage />
      <FinalCTA />
    </PageShell>
  );
}
