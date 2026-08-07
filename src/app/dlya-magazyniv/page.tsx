import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Для інтернет-магазинів",
};

const integrations = ["Shopify", "WooCommerce", "OpenCart", "Magento", "API"];

const benefits = [
  {
    title: "Менше операційної рутини",
    text: "Склад, комплектація й відправка — на нашій стороні. Ви розвиваєте асортимент і маркетинг.",
  },
  {
    title: "Стабільна обробка піків",
    text: "Акції, сезон і розпродажі не ламають ваш процес — ми масштабуємо складські операції.",
  },
  {
    title: "Єдиний контакт",
    text: "Персональний менеджер замість десятків чатів і таблиць «хто що відправив».",
  },
];

export default function ForStoresPage() {
  return (
    <>
      <PageHero
        title="Фулфілмент для інтернет-магазинів"
        subtitle="Підключаємо ваш магазин і беремо на себе логістику від складу до покупця."
      />

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <article className="h-full rounded-[1.75rem] border border-brand/10 bg-blue-soft p-6">
                <h2 className="font-display text-xl font-semibold">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Інтеграції</h2>
          <p className="mt-2 text-muted">Працюємо з популярними платформами та кастомним API.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="rounded-2xl border border-brand/10 bg-blue-soft px-5 py-3 text-sm font-semibold text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
