export const site = {
  name: "Derrdan",
  tagline: "Фулфілмент для зростання вашого бізнесу",
  email: "380961679298chabanyuk@gmail.com",
  phone: "+380 96 167 92 98",
  phoneHref: "tel:+380961679298",
  address: "Україна",
  adminEmail: "380961679298chabanyuk@gmail.com",
} as const;

export const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/yak-pracyuye", label: "Як працює" },
  { href: "/poslugy", label: "Послуги" },
  { href: "/taryfy", label: "Тарифи" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakty", label: "Контакти" },
] as const;

/** Короткий рядок у футері — без дублювання всього меню */
export const footerLinks = [
  { href: "/poslugy", label: "Послуги" },
  { href: "/taryfy", label: "Тарифи" },
  { href: "/pro-nas", label: "Про нас" },
  { href: "/kontakty", label: "Контакти" },
] as const;
