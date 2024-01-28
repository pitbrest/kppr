import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { navItems } from "../../appData/navData";
// burger icon
import { GiHamburgerMenu } from "react-icons/gi";
// nav icons
import { RiTeamFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { MdLocalAtm } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

import { servicesData } from "../../appData/navData";
import DropDownList from "./DropDownList";

const NavBar = () => {
  const currentIcon = (idx) => {
    if (idx === 0) {
      return <RiTeamFill />;
    }
    if (idx === 1) {
      return <GrServices />;
    }
    if (idx === 2) {
      return <MdLocalAtm />;
    }
    if (idx === 3) {
      return <IoNewspaperOutline />;
    }
    if (idx === 4) {
      return <GrLocation />;
    }
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navItems.map((item, idx) => (
          <NavLink
            to={item.href}
            key={item.name}
          >
            <ListItem
              key={item}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{currentIcon(idx)}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      <div className="min-[768px]:hidden block">
        <GiHamburgerMenu
          onClick={toggleDrawer("left", true)}
          size="30"
          color={`var(--font-color-light)`}
        />
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
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
