import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакти",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Контакти"
        subtitle="Напишіть нам або залиште заявку — відповімо в найближчий робочий час."
      />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="space-y-4">
            <div className="rounded-[2rem] border border-border bg-white/80 p-6">
              <p className="text-sm text-muted">Телефон</p>
              <a href={site.phoneHref} className="mt-1 block text-lg font-semibold text-foreground hover:text-brand">
                {site.phone}
              </a>
            </div>
            <div className="rounded-[2rem] border border-border bg-white/80 p-6">
              <p className="text-sm text-muted">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block break-all text-lg font-semibold text-foreground hover:text-brand"
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-[2rem] border border-border bg-white/80 p-6">
              <p className="text-sm text-muted">Адреса</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{site.address}</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-slate-100">
              <div className="flex h-64 items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.16),transparent_40%),#e2e8f0] p-6 text-center">
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">Карта складу</p>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Точну адресу та схему проїзду надішле менеджер після узгодження співпраці.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
