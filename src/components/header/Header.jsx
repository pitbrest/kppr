import React from "react";
import { Container } from "../Container";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { name: "О нас", href: "about" },
  { name: "Услуги", href: "services" },
  { name: "Торговля", href: "commerce" },
  { name: "Новости", href: "news" },
  { name: "Контакты", href: "contacts" },
];

export const Header = () => {
  return (
    <header className="text-[0.8rem] min-[1920px]:text-[1rem] py-3 text-base font-bold">
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              className="min-[1920px]:w-[75px] w-[50px]"
              src={Logo}
              alt="logo"
            />
          </Link>

          <nav className="flex 2xl:gap-4 gap-5">
            {menuItems.map((item) => (
              <li className="list-none rounded-xl px-3 py-1 active:translate-y-1 hover:scale-95 ">
                <NavLink to={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
