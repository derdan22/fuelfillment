import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label={site.name}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/25">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M6 22V10l10-6 10 6v12l-10 6-10-6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M6 10l10 6 10-6M16 16v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        {site.name}
      </span>
    </Link>
  );
}
