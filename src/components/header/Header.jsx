import React from "react";
import { Container } from "../Container";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";

export const Header = () => {
  return (
    <header className="text-[0.8rem] min-[1920px]:text-[1rem] py-3 text-base font-bold">
      <Container>
        <div className="flex justify-between items-center min-[576px]:flex-nowrap flex-wrap">
          <Link
            to="/"
            className="py-[5px]"
          >
            <img
              className="min-[1920px]:w-[65px] w-[50px]"
              src={Logo}
              alt="logo"
            />
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
