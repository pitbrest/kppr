import React from "react";
import { Container } from "../Container";
import Logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useSelector, useDispatch } from "react-redux";
// import { writeSomething } from "../../store/appSlice";

const menuItems = [
  { name: "О нас", href: "about" },
  { name: "Услуги", href: "services" },
  { name: "Торговля", href: "commerce" },
  { name: "Новости", href: "news" },
  { name: "Контакты", href: "contacts" },
];

export const Header = () => {
  // const message = useSelector((state) => state.appReducer.status1);
  // const dispatch = useDispatch();
  // console.log(message);

  return (
    <header className="text-[0.8rem] min-[1920px]:text-[1rem] py-3 text-base font-bold">
      <Container>
        <div className="flex justify-between items-center min-[576px]:flex-nowrap flex-wrap">
          <Link to="/">
            <img
              className="min-[1920px]:w-[75px] w-[50px]"
              src={Logo}
              alt="logo"
              // onClick={() => dispatch(writeSomething())}
            />
          </Link>
          <nav className="nav flex 2xl:gap-2 gap-5 rounded-xl px-3 py-2">
            <GiHamburgerMenu
              // size={25}
              className="min-[576px]:w-[0] min-[576px]:hidden block w-[25px] h-[25px]"
            />
            {menuItems.map((item) => (
              <li
                className="list-none py-1 active:translate-y-1 hover:scale-95 "
                key={Date.now() / Math.random(1, 9)}
              >
                <NavLink to={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
