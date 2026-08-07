"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HEADER_OFFSET = 88;

function scrollToCurrentHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return false;

  const el = document.getElementById(hash);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
}

function tryScroll(attempts = 8) {
  let left = attempts;
  const tick = () => {
    if (scrollToCurrentHash() || left <= 0) return;
    left -= 1;
    requestAnimationFrame(() => setTimeout(tick, 50));
  };
  tick();
}

/** Надійний скролл до #hash з урахуванням sticky-хедера (Next.js часто його ігнорує). */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    tryScroll();

    const onHashChange = () => tryScroll();
    window.addEventListener("hashchange", onHashChange);

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const url = new URL(href, window.location.origin);
      if (url.pathname !== window.location.pathname && url.pathname !== pathname) {
        // інша сторінка — скрол після навігації в effect
        return;
      }
      if (url.hash) {
        // той самий path: даємо браузеру оновити hash, потім скролимо
        setTimeout(() => tryScroll(), 0);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
