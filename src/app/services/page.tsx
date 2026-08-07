import type { Metadata } from "next";
import { FeatureGrid, CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Послуги",
};

const services = [
  { title: "Зберігання", text: "Безпечне розміщення товарів із прозорим обліком залишків.", icon: <I /> },
  { title: "Комплектація", text: "Точний збір замовлень під ваші стандарти якості.", icon: <I /> },
  { title: "Упаковка", text: "Надійна упаковка для збереження товару під час доставки.", icon: <I /> },
  { title: "Маркування", text: "Маркування згідно з вимогами каналів продажів.", icon: <I /> },
  { title: "Повернення", text: "Прийом, перевірка та повернення товарів в обіг.", icon: <I /> },
  { title: "Маркетплейси", text: "Операції під правила та формати популярних майданчиків.", icon: <I /> },
  { title: "Cross Docking", text: "Швидка перевалка без довгого зберігання на складі.", icon: <I /> },
  { title: "FBO / FBS", text: "Підтримка моделей роботи з маркетплейсами FBO та FBS.", icon: <I /> },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Послуги фулфілменту"
        subtitle="Повний цикл складської логістики — від приймання до відправки покупцю."
      />
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <FeatureGrid items={services} />
      </section>
      <CtaSection />
    </>
  );
}

function I() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16v10H4zM8 7V5h8v2" strokeLinejoin="round" />
    </svg>
  );
}
