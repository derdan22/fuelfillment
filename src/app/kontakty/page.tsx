import type { Metadata } from "next";
import type { ReactNode } from "react";
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

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div className="space-y-3">
            <ContactCard label="Телефон">
              <a href={site.phoneHref} className="text-lg font-semibold text-foreground hover:text-brand">
                {site.phone}
              </a>
            </ContactCard>
            <ContactCard label="Email">
              <a
                href={`mailto:${site.email}`}
                className="break-all text-lg font-semibold text-foreground hover:text-brand"
              >
                {site.email}
              </a>
            </ContactCard>
            <ContactCard label="Адреса">
              <p className="text-lg font-semibold text-foreground">{site.address}</p>
            </ContactCard>
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-slate-100">
              <div className="flex h-52 items-center justify-center bg-slate-50 p-6 text-center">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Карта складу</p>
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

function ContactCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-white px-5 py-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}
