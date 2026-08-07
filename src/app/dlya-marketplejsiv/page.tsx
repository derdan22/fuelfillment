import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Для маркетплейсів",
};

const markets = ["Amazon", "Etsy", "eBay", "Rozetka", "Prom", "Інші майданчики"];

export default function ForMarketplacesPage() {
  return (
    <>
      <PageHero
        title="Робота з маркетплейсами"
        subtitle="Готуємо, маркуємо та відправляємо товари згідно з правилами кожного майданчика."
      />

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((name) => (
              <div
                key={name}
                className="rounded-[1.75rem] border border-border bg-white/80 px-6 py-8 text-center font-display text-xl font-semibold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 rounded-[2rem] border border-border bg-white p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">FBO та FBS</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Допомагаємо обрати модель роботи з маркетплейсом, налаштувати процеси та уникнути типових
            помилок з маркуванням і документами.
          </p>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
