"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Марина К.",
    role: "Засновниця e-commerce бренду",
    text: "Передали логістику Derrdan і нарешті зосередились на маркетингу. Комплектація стабільна, менеджер завжди на зв'язку.",
  },
  {
    name: "Ігор П.",
    role: "Керівник маркетплейс-напряму",
    text: "Зручно працювати з кількома майданчиками з одного складу. Прозорі умови і швидка обробка пікових днів.",
  },
  {
    name: "Олена В.",
    role: "Операційний директор",
    text: "Інтеграція пройшла безболісно. Повернення та маркування налаштували під наші процеси за тиждень.",
  },
];

export function ReviewsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5500);
    return () => clearInterval(id);
  }, []);

  const review = reviews[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-brand/10 bg-blue-soft p-8 sm:p-12">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={review.name}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35 }}
          className="max-w-3xl"
        >
          <p className="font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            “{review.text}”
          </p>
          <footer className="mt-8">
            <p className="font-semibold text-foreground">{review.name}</p>
            <p className="text-sm text-muted">{review.role}</p>
          </footer>
        </motion.blockquote>
      </AnimatePresence>

      <div className="mt-8 flex items-center gap-2">
        {reviews.map((r, i) => (
          <button
            key={r.name}
            type="button"
            aria-label={`Відгук ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
