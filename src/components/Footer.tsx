import Link from "next/link";
import { Logo } from "./Logo";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-sm space-y-3">
          <Logo />
          <p className="text-sm leading-relaxed text-muted">
            Фулфілмент без зайвої складності — склад, комплектація й відправка під ваш бізнес.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Швидкі посилання">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-sm text-muted lg:items-end">
          <a href={site.phoneHref} className="font-medium text-foreground hover:text-brand">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-brand">
            {site.email}
          </a>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
