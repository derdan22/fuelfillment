# Derrdan — сайт фулфілмент-оператора

Багатосторінковий сайт на **Next.js** (українською). Єдина ціль — якісна заявка; після відправки дані зберігаються в SQLite і (за наявності ключа) надсилаються на email через Resend.

## Запуск

```cmd
cd /d "C:\Users\Denys Chabaniuk\Desktop\fuelfillment"
npm install
npx prisma migrate dev
npm run dev
```

Відкрийте http://localhost:3000

## Email (Resend)

1. Зареєструйтесь на https://resend.com (є безкоштовний тариф).
2. Створіть API key.
3. У файлі `.env` вкажіть:

```
RESEND_API_KEY=re_xxx
ADMIN_EMAIL=380961679298chabanyuk@gmail.com
RESEND_FROM=Derrdan <onboarding@resend.dev>
```

Без `RESEND_API_KEY` заявка все одно збережеться в БД, але лист не піде (у консолі буде попередження).

## Сторінки

- `/` — Головна
- `/how-it-works` — Як працює
- `/services` — Послуги
- `/for-stores` — Для інтернет-магазинів
- `/for-marketplaces` — Для маркетплейсів
- `/pricing` — Тарифи
- `/faq` — FAQ
- `/about` — Про компанію
- `/contacts` — Контакти
