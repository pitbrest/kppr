import React from "react";
import { Container } from "../Container";
import AltLogo from "../../assets/images/altLogo.webp";
import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";

export const Header = () => {
  return (
    <header className="text-[0.8rem] min-[1920px]:text-[1rem] min-[576px]:py-3 py-1 text-base font-bold bg-[--bgc-dark] text-[--fc-light] overflow-hidden sticky top-3 z-10">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="py-[5px]"
          >
            <img
              className="min-[1920px]:w-[65px] w-[50px]"
              src={AltLogo}
              alt="logo"
            />
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
