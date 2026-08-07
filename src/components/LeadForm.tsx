"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          company: data.get("company"),
          comment: data.get("comment"),
          website: data.get("website"),
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Не вдалося надіслати заявку.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Помилка мережі. Спробуйте ще раз.");
    }
  }

  if (status === "success") {
    return (
      <div
        id="lead-form"
        className="rounded-[2rem] border border-border bg-white p-8 text-center shadow-sm sm:p-10"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-soft text-accent">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground">Дякуємо!</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Ми отримали вашу заявку. Персональний менеджер зв&apos;яжеться з вами найближчим
          робочим часом.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Надіслати ще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      id="lead-form"
      onSubmit={onSubmit}
      className="relative rounded-[2rem] border border-border bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="mb-6">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Отримати консультацію
        </h3>
        <p className="mt-2 text-sm text-muted">
          Залиште контакти — менеджер допоможе підібрати рішення під ваш бізнес.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ім'я *" name="name" required placeholder="Олександр" />
        <Field label="Телефон *" name="phone" required placeholder="+380..." type="tel" />
        <Field label="Email *" name="email" required placeholder="you@company.com" type="email" />
        <Field label="Компанія" name="company" placeholder="Назва компанії" />
        <div className="sm:col-span-2">
          <label htmlFor="comment" className="mb-1.5 block text-sm font-medium text-foreground">
            Коментар
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            placeholder="Розкажіть коротко про обсяги або задачу"
            className="w-full rounded-xl border border-border bg-slate-50/80 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
          />
        </div>
      </div>

      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Надсилаємо..." : "Отримати консультацію"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-slate-50/80 px-4 py-3 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
