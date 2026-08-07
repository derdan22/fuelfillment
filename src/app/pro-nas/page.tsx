import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Про компанію",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Про Derrdan"
        subtitle="Ми допомагаємо брендам і продавцям віддати логістику на аутсорс і зростати без операційного хаосу."
      />

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-[2rem] border border-border bg-white/80 p-8">
              <h2 className="font-display text-2xl font-semibold">Наш підхід</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Сайт Derrdan створений не для «купити в один клік», а для якісних заявок. Після форми з
                вами працює людина — персональний менеджер, який розбирає задачу і пропонує рішення.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="rounded-[2rem] border border-border bg-white p-8">
              <h2 className="font-display text-2xl font-semibold">На чому тримаємось</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>• Точність комплектації та відповідальне зберігання</li>
                <li>• Прозорі умови до старту співпраці</li>
                <li>• Інтеграції з магазинами та маркетплейсами</li>
                <li>• Постійний супровід без особистого кабінету</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
