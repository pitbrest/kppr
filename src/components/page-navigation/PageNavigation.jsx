import { useEffect, useState } from "react";

import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import Button from "../Button";

const PageNavigation = () => {
  const [scrollY, setScrollY] = useState(null);

  // const screenWidth = window.screen.width;

  const pageScrollingHandler = (direction) => {
    if (direction === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 100000, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  });

  return (
    scrollY >= 100 && (
      <div className="page-navigation flex flex-col gap-2 fixed top-[47vh] right-[1rem] z-50">
        <FaArrowAltCircleUp
          onClick={() => pageScrollingHandler("top")}
          size={30}
          color="#5e6d7a"
        />
        <FaArrowAltCircleDown
          onClick={() => pageScrollingHandler("bottom")}
          size={30}
          color="#5e6d7a"
        />
      </div>
    )
  );
};

const PageRedirection = () => {
  return (
    <div className="flex justify-end gap-5">
      <Button
        title="На главную"
        src="/"
      />
      <Button
        title="Контакты"
        src="/contacts"
      />
    </div>
  );
};

export { PageNavigation, PageRedirection };
