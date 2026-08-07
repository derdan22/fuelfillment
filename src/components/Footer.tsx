import Link from "next/link";
import { Logo } from "./Logo";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Приймаємо, зберігаємо, комплектуємо та відправляємо ваші товари — щоб ви
            зосередились на розвитку бізнесу.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">Навігація</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">Контакти</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={site.phoneHref} className="hover:text-brand">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <Link
            href="/contacts#lead-form"
            className="mt-6 inline-flex rounded-2xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
          >
            Залишити заявку
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Усі права захищено.
      </div>
    </footer>
  );
}
