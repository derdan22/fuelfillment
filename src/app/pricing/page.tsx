import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Тарифи",
};

const plans = [
  {
    name: "Старт",
    text: "Для невеликих магазинів і першого запуску фулфілменту.",
    points: ["Приймання та зберігання", "Комплектація замовлень", "Персональний менеджер"],
  },
  {
    name: "Бізнес",
    text: "Для команд із стабільним обсягом і кількома каналами продажів.",
    points: ["Усе зі «Старту»", "Інтеграції з магазином", "Повернення та маркування"],
    featured: true,
  },
  {
    name: "Enterprise",
    text: "Індивідуальна схема для великих обсягів і складних процесів.",
    points: ["Кастомні SLA", "Мультисклад / піки", "Окремий супровід операцій"],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Тарифи без прайсу «з коробки»"
        subtitle="Вартість залежить від обсягів і операцій. На консультації підберемо пакет і розрахуємо кошторис."
      />

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <article
                className={`flex h-full flex-col rounded-[2rem] border p-7 ${
                  plan.featured
                    ? "border-brand bg-brand text-white shadow-xl shadow-brand/20"
                    : "border-border bg-white/80"
                }`}
              >
                <h2 className="font-display text-2xl font-semibold">{plan.name}</h2>
                <p className={`mt-3 text-sm ${plan.featured ? "text-white/85" : "text-muted"}`}>
                  {plan.text}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {plan.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className={plan.featured ? "text-green-300" : "text-accent"}>✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacts#lead-form"
                  className={`mt-8 inline-flex justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-white text-brand"
                      : "bg-brand text-white shadow-lg shadow-brand/20"
                  }`}
                >
                  Отримати консультацію
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection title="Потрібен розрахунок під ваш обсяг?" />
    </>
  );
}
