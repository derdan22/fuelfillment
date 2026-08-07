import { Resend } from "resend";
import { site } from "./site";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  company?: string | null;
  comment?: string | null;
};

export async function sendLeadEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || site.adminEmail;

  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY не задано — лист не надіслано. Заявка збережена в БД.");
    return { skipped: true as const };
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Нова заявка з сайту ${site.name}</h2>
    <p><strong>Ім'я:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Телефон:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Компанія:</strong> ${escapeHtml(lead.company || "—")}</p>
    <p><strong>Коментар:</strong> ${escapeHtml(lead.comment || "—")}</p>
  `;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM || "Derrdan <onboarding@resend.dev>",
    to: adminEmail,
    subject: `Нова заявка: ${lead.name}`,
    replyTo: lead.email,
    html,
  });

  if (error) {
    console.error("[email] Resend error:", error);
    throw new Error("Не вдалося надіслати лист");
  }

  return { skipped: false as const };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
