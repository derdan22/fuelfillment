import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
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

    const lead = await prisma.lead.create({
      data: {
        name: String(name).trim(),
        phone: String(phone).trim(),
        email: String(email).trim(),
        company: company ? String(company).trim() : null,
        comment: comment ? String(comment).trim() : null,
      },
    });

    try {
      await sendLeadEmail(lead);
    } catch (err) {
      console.error("Email send failed after DB save:", err);
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
