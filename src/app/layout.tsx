import type { Metadata } from "next";
import { Manrope, Onest } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — фулфілмент для бізнесу`,
    template: `%s · ${site.name}`,
  },
  description:
    "Приймаємо, зберігаємо, комплектуємо та відправляємо ваші товари. Залиште заявку — персональний менеджер зв'яжеться з вами.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={`${manrope.variable} ${onest.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <ScrollToHash />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
