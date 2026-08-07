"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const decimals = String(value).includes(".") ? 1 : 0;
          const next = value * eased;
          setDisplay(decimals ? Math.round(next * 10) / 10 : Math.round(next));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const formatted =
    String(value).includes(".")
      ? display.toLocaleString("uk-UA", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : display.toLocaleString("uk-UA");

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {formatted}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
