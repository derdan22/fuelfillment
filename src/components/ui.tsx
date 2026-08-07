import Link from "next/link";
import type { ReactNode } from "react";
import { LeadForm } from "./LeadForm";
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

export function CtaSection({
  title = "Залиште заявку та отримайте безкоштовну консультацію",
  subtitle = "Персональний менеджер зв'яжеться з вами, відповість на питання та допоможе розрахувати вартість.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 rounded-[2.5rem] border border-border bg-gradient-to-br from-white via-blue-soft/40 to-green-soft/50 p-6 sm:p-10 lg:grid-cols-2 lg:p-12">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted">{subtitle}</p>
          <Link
            href="/how-it-works"
            className="mt-6 inline-flex text-sm font-semibold text-brand hover:underline"
          >
            Дізнатися, як це працює →
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm compact />
        </Reveal>
      </div>
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
          <article className="group h-full rounded-[1.75rem] border border-border bg-white/75 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-brand transition group-hover:bg-brand group-hover:text-white">
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
