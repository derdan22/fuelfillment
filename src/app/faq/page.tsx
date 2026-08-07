import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Часті запитання"
        subtitle="Короткі відповіді про підключення, вартість і формат роботи з ExactBox."
      />
      <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </section>
      <CtaSection />
    </>
  );
}
