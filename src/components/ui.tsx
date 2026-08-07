import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Derrdan
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
        {children}
      </Reveal>
    </section>
  );
}

/** Легкий CTA без форми — форма лише на /kontakty */
export function CtaSection({
  title = "Готові передати логістику на аутсорс?",
  subtitle = "Залиште заявку на сторінці контактів — персональний менеджер допоможе підібрати рішення.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="rounded-[2rem] border border-brand/10 bg-blue-soft px-8 py-12 text-center sm:px-12 sm:py-14">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kontakty#lead-form"
              className="inline-flex rounded-2xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Залишити заявку
            </Link>
            <Link
              href="/yak-pracyuye"
              className="inline-flex rounded-2xl border border-border bg-white/80 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-brand/30"
            >
              Як це працює
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; text: string; icon: ReactNode }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05}>
          <article className="group h-full rounded-[1.75rem] border border-brand/10 bg-blue-soft p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm transition group-hover:bg-brand group-hover:text-white group-hover:shadow-none">
              {item.icon}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
