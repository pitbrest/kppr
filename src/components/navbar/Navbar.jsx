import { NavLink } from "react-router-dom";
import { navItems } from "../../appData/navData";
// burger icon
import { GiHamburgerMenu } from "react-icons/gi";

import { servicesData } from "../../appData/navData";
import DropDownList from "./DropDownList";

const NavBar = ({ modalToggler }) => {
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
        <ul className="min-[768px]:flex hidden items-center gap-4 text-sm">
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
              <DropDownList
                listData={servicesData}
                key={item.name}
                className="dropDownHeader"
              />
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
