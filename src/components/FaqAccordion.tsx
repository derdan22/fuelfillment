"use client";

import { useState } from "react";

const items = [
  {
    q: "Скільки часу займає підключення?",
    a: "Зазвичай від кількох днів до двох тижнів — залежить від інтеграцій, обсягів і схеми роботи. Після заявки менеджер запропонує реалістичний план.",
  },
  {
    q: "Чи є мінімальний обсяг замовлень?",
    a: "Ми працюємо з різними масштабами бізнесу. Умови обговорюються індивідуально під ваші обсяги та сезонність.",
  },
  {
    q: "Які канали продажів підтримуєте?",
    a: "Інтернет-магазини (Shopify, WooCommerce, OpenCart, Magento, API) та маркетплейси: Rozetka, Prom, Amazon, Etsy, eBay та інші.",
  },
  {
    q: "Як рахується вартість послуг?",
    a: "Вартість залежить від зберігання, комплектації, упаковки та додаткових операцій. На консультації зробимо розрахунок без зобов'язань.",
  },
  {
    q: "Хто буде моїм контактом?",
    a: "За кожним клієнтом закріплений персональний менеджер — без кабінету самообслуговування та без «черги в чат-бот».",
  },
  {
    q: "Чи допомагаєте з поверненнями?",
    a: "Так. Приймаємо повернення, перевіряємо стан товару та повертаємо його в обіг згідно з узгодженими правилами.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-3xl border border-border bg-white/80">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-foreground">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-soft text-brand transition ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
