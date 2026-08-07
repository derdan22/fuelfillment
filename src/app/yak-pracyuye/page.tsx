import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaSection, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Як це працює",
};

const steps = [
  {
    title: "Залиште заявку",
    text: "Заповніть коротку форму: ім'я, телефон, email. Компанію та коментар можна додати за бажанням.",
  },
  {
    title: "Ми зв'язуємось із вами",
    text: "Персональний менеджер відповідає на питання, розповідає умови, розраховує вартість і допомагає підібрати рішення.",
  },
  {
    title: "Узгодження співпраці",
    text: "Обговорюємо деталі, обираємо тариф і визначаємо схему роботи під ваш бізнес.",
  },
  {
    title: "Надсилання товару",
    text: "Ви відправляєте товар на склад. Ми приймаємо, перевіряємо, маркуємо та розміщуємо.",
  },
  {
    title: "Обробка замовлень",
    text: "Комплектація, упаковка, контроль якості та підготовка документів.",
  },
  {
    title: "Відправка покупцю",
    text: "Передача перевізнику, відстеження та сповіщення на кожному етапі.",
  },
  {
    title: "Постійний супровід",
    text: "За кожним клієнтом закріплений персональний менеджер.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="Як це працює"
        subtitle="Простий шлях від заявки до стабільної логістики — без реєстрації та особистого кабінету."
      />

      <section className="mx-auto max-w-3xl px-4 pb-10 sm:px-6 lg:px-8">
        <ol className="relative space-y-6 border-l border-brand/25 pl-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <li className="relative">
                <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div className="rounded-3xl border border-brand/10 bg-blue-soft p-5 sm:p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaSection />
    </>
  );
}
