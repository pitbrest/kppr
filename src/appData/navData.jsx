const navItems = [
  { id: 1, name: "Деятельность", href: "services", active: false },
  { id: 3, name: "О нас", href: "about", active: false },
  { id: 4, name: "Новости", href: "news", active: false },
  { id: 5, name: "Контакты", href: "contacts", active: false },
];

const servicesData = [
  {
    id: "services",
    name: "Строительно-монтажные работы",
    href: "activities/services",
    active: false,
  },
  { id: "commerce", name: "Торговля", href: "activities/commerce", active: false },
];

export { navItems, servicesData };
