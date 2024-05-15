import { NavLink } from "react-router-dom";
import { navItems } from "../../appData/navData";
import { servicesData } from "../../appData/navData";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

import { useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ modalToggler, isDropDownOpen, dropDownToggler }) => {
  const checkLocation = useLocation().pathname.includes("activities");

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
        <ul className="min-[768px]:flex hidden items-center gap-3 font-bold">
          {navItems.map((item) =>
            item.name !== "Деятельность" ? (
              <NavLink
                key={item.name}
                to={item.href}
                className="main-nav-item p-2 nav-item"
                onClick={() => (isDropDownOpen ? dropDownToggler() : null)}
              >
                <li className="font-bold">{item.name.toUpperCase()}</li>
              </NavLink>
            ) : (
              <div
                className={
                  checkLocation ? "dropDown cursor-pointer active" : "dropDown cursor-pointer"
                }
                key={item.name}
                onClick={() => dropDownToggler()}
              >
                <div className="nav-item flex">
                  <div className="uppercase flex items-center">
                    <p className="pr-1 my-2">Деятельность</p>
                    {!isDropDownOpen ? (
                      <MdKeyboardDoubleArrowDown size={15} />
                    ) : (
                      <MdOutlineKeyboardDoubleArrowUp size={15} />
                    )}
                  </div>
                </div>

                <div
                  className={
                    isDropDownOpen
                      ? "dropdown-container absolute top-[85px] min-[1920px]:top-[85px] z-100 w-48 h-auto z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white active"
                      : "dropdown-container absolute top-[77px] min-[1920px]:top-[89px] z-100 w-48 h-auto z-10"
                  }
                >
                  {servicesData.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="dropdown-item flex items-center justify-start gap-1 p-2 bg-[--color-green]"
                      onClick={() => {
                        dropDownToggler();
                      }}
                    >
                      <li className="px-2 my-2">{item.name.toUpperCase()}</li>
                    </NavLink>
                  ))}
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
