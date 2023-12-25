import { createSlice } from "@reduxjs/toolkit";

const items = [
  { id: 1, name: "О нас", href: "about", active: true },
  { id: 2, name: "Услуги", href: "services", active: false },
  { id: 3, name: "Торговля", href: "commerce", active: false },
  { id: 4, name: "Новости", href: "news", active: false },
  { id: 5, name: "Контакты", href: "contacts", active: false },
];

const navSlice = createSlice({
  name: "navItems",
  initialState: {
    items: items,
  },
  reducers: {
    statusTogler: (id) => {
      items.map((item) => (item.id === id ? { ...item, active: !item.active } : item));
    },
  },
});

export const { statusTogler } = navSlice.actions;
export default navSlice.reducer;
