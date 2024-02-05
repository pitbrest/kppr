import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../appData/navData";
import { servicesData } from "../../appData/navData";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import "./Navbar.css";

const NavBar = ({ modalToggler }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropDownToggler = () => setIsDropDownOpen(!isDropDownOpen);
  return (
    <nav>
      <div className="min-[768px]:hidden block font-medium">
        <GiHamburgerMenu
          onClick={modalToggler}
          size="30"
          color={`var(--font-color-light)`}
        />
      </div>
      <div>
        <ul className="min-[768px]:flex hidden items-center gap-4 text-sm font-medium">
          {navItems.map((item) =>
            item.name !== "Деятельность" ? (
              <NavLink
                key={item.name}
                to={item.href}
                className="main-nav-item p-2 nav-item"
              >
                <li>{item.name.toUpperCase()}</li>
              </NavLink>
            ) : (
              <div
                key={item.name}
                onClick={() => dropDownToggler()}
              >
                <div className="nav-item flex">
                  <div className="font-medium uppercase flex items-center">
                    <p className="pr-1 my-2 font-medium">Деятельность</p>
                    {!isDropDownOpen ? (
                      <MdKeyboardDoubleArrowDown />
                    ) : (
                      <MdOutlineKeyboardDoubleArrowUp />
                    )}
                  </div>
                </div>
                <div className="absolute top-[77px] z-100 w-40 h-auto bg-[var(--bgc-dark)]">
                  <div>
                    {servicesData.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="burger-nav-item nav-item flex items-center justify-start gap-1 px-2"
                        onClick={() => {
                          dropDownToggler();
                        }}
                      >
                        <li className="px-5 my-2 font-medium">{item.name.toUpperCase()}</li>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
