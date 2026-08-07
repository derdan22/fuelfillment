import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { sendLeadEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Забагато запитів. Спробуйте пізніше." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, phone, email, company, comment, website } = body ?? {};

    // Honeypot
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Заповніть обов'язкові поля: ім'я, телефон та email." },
        { status: 400 },
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      return NextResponse.json({ error: "Некоректний email." }, { status: 400 });
    }

    const lead = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      company: company ? String(company).trim() : null,
      comment: comment ? String(comment).trim() : null,
    };

    let savedToDb = false;
    const prisma = await getPrisma();
    if (prisma) {
      try {
        await prisma.lead.create({ data: lead });
        savedToDb = true;
      } catch (err) {
        console.error("DB save failed:", err);
      }
    }

    let emailed = false;
    try {
      const result = await sendLeadEmail(lead);
      emailed = !result.skipped;
    } catch (err) {
      console.error("Email send failed:", err);
    }

    if (!savedToDb && !emailed) {
      return NextResponse.json(
        {
          error:
            "Не вдалося зберегти заявку. Додайте RESEND_API_KEY у середовищі Vercel або перевірте БД локально.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Сталася помилка. Спробуйте ще раз." },
      { status: 500 },
    );
  }
}
