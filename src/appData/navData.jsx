// nav icons
import { RiTeamFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { GiNewspaper } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const navItems = [
  { id: 1, name: "Деятельность", href: "services", active: false },
  { id: 3, name: "О нас", href: "about", active: false },
  { id: 4, name: "Новости", href: "news", active: false },
  { id: 5, name: "Контакты", href: "contacts", active: false },
];

const servicesData = [
  {
    id: "services",
    name: "СМР",
    href: "activities/services",
    active: false,
  },
  { id: "commerce", name: "Торговля", href: "activities/commerce", active: false },
];

const currentIcon = (idx) => {
  if (idx === 0) {
    return <GrServices size={20} />;
  }
  if (idx === 1) {
    return <RiTeamFill size={20} />;
  }
  if (idx === 2) {
    return <GiNewspaper size={20} />;
  }
  if (idx === 3) {
    return <AiOutlineContacts size={20} />;
  }
  if (idx === 4) {
    return <GrLocation size={20} />;
  }
};

export { navItems, servicesData, currentIcon };
