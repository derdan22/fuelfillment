import type { Metadata } from "next";
import Link from "next/link";
import { FeatureGrid, CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Послуги",
};

const services = [
  {
    title: "Зберігання",
    text: "Безпечне розміщення товарів із прозорим обліком залишків.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" strokeLinejoin="round" />
        <path d="M3 8l9 5 9-5M12 13v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Комплектація",
    text: "Точний збір замовлень під ваші стандарти якості.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 6h4v4M4 18h16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Упаковка",
    text: "Надійна упаковка для збереження товару під час доставки.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16v10H4zM8 7V5h8v2M12 11v4" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Маркування",
    text: "Маркування згідно з вимогами каналів продажів.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h10l6 6-8 8-8-8V7z" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Повернення",
    text: "Прийом, перевірка та повернення товарів в обіг.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12a8 8 0 101.5-4.5M4 4v4h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Маркетплейси",
    text: "Операції під правила та формати популярних майданчиків.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10l1.5-5h13L20 10M5 10v9h14v-9M9 19v-5h6v5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cross Docking",
    text: "Швидка перевалка без довгого зберігання на складі.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 17l-4-4 4-4M17 7l4 4-4 4M14 5l-4 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "FBO / FBS",
    text: "Підтримка моделей роботи з маркетплейсами FBO та FBS.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h18v4H3zM5 11v8h14v-8M9 15h6" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Послуги фулфілменту"
        subtitle="Повний цикл складської логістики — від приймання до відправки покупцю."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/dlya-magazyniv"
            className="text-sm font-semibold text-brand hover:underline"
          >
            Для інтернет-магазинів →
          </Link>
          <Link
            href="/dlya-marketplejsiv"
            className="text-sm font-semibold text-brand hover:underline"
          >
            Для маркетплейсів →
          </Link>
        </div>
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <FeatureGrid items={services} />
      </section>
      <CtaSection />
    </>
  );
}
