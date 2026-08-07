import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WarehouseIllustration } from "@/components/WarehouseIllustration";
import { CtaSection, FeatureGrid } from "@/components/ui";

const reasons = [
  {
    title: "Швидка обробка",
    text: "Замовлення комплектуються оперативно, щоб покупець отримував товар вчасно.",
    icon: <IconBolt />,
  },
  {
    title: "Відповідальне зберігання",
    text: "Контрольовані умови, облік і безпечне розміщення на складі.",
    icon: <IconBox />,
  },
  {
    title: "Інтеграції",
    text: "Підключаємо магазини та маркетплейси через готові інтеграції або API.",
    icon: <IconPlug />,
  },
  {
    title: "Персональний менеджер",
    text: "Один відповідальний контакт без реєстрації та особистого кабінету.",
    icon: <IconUser />,
  },
  {
    title: "Робота з маркетплейсами",
    text: "FBO/FBS, маркування та підготовка відправлень під правила майданчиків.",
    icon: <IconStore />,
  },
  {
    title: "Прозора вартість",
    text: "Пояснюємо структуру тарифу до старту співпраці — без прихованих сюрпризів.",
    icon: <IconTag />,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-8 pt-8 sm:px-6 sm:pt-14 lg:grid-cols-2 lg:px-8 lg:pb-16">
        <Reveal>
          <p className="font-display text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
            ExactBox
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Передайте логістику професіоналам — зосередьтесь на розвитку бізнесу
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Ми приймаємо, зберігаємо, комплектуємо та відправляємо ваші товари по всій країні.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontakty#lead-form"
              className="inline-flex rounded-2xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5"
            >
              Отримати консультацію
            </Link>
            <Link
              href="/taryfy"
              className="inline-flex rounded-2xl border border-border bg-white/80 px-5 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-brand/30"
            >
              Розрахувати вартість
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <WarehouseIllustration className="h-auto w-full drop-shadow-xl" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Чому обирають нас
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Сучасний фулфілмент без зайвої складності — лише якісні заявки та персональний супровід.
          </p>
        </Reveal>
        <div className="mt-10">
          <FeatureGrid items={reasons} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
    </svg>
  );
}
function IconBox() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" strokeLinejoin="round" />
      <path d="M3 8l9 5 9-5M12 13v8" strokeLinecap="round" />
    </svg>
  );
}
function IconPlug() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 7v4M15 7v4M8 11h8v2a4 4 0 01-8 0v-2zM12 17v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" strokeLinecap="round" />
    </svg>
  );
}
function IconStore() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10l1.5-5h13L20 10M5 10v9h14v-9M9 19v-5h6v5" strokeLinejoin="round" />
    </svg>
  );
}
function IconTag() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12V4h8l10 10-8 8L3 12z" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}
