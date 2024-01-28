import { useEffect, useState } from "react";

import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import { pageScrollingHandler } from "../../appData/contactsData";

const PageNavigation = () => {
  const [scrollY, setScrollY] = useState(null);

  // const screenWidth = window.screen.width;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  });

  return (
    scrollY >= 100 && (
      <div className="page-navigation flex flex-col gap-2 fixed top-[47vh] right-[1rem] opacity-85 z-50">
        <FaArrowAltCircleUp
          onClick={() => pageScrollingHandler("top")}
          size={30}
        />
        <FaArrowAltCircleDown
          onClick={() => pageScrollingHandler("bottom")}
          size={30}
        />
      </div>
    )
  );
};

export { PageNavigation };
