import React, { useState } from "react";
import { Container } from "../Container";
import AltLogo from "../../assets/images/altLogo.webp";
import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";

export const Header = ({ modalToggler }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownToggler = () => setIsDropDownOpen(!isDropDownOpen);

  return (
    <header className="text-[0.8rem] min-[1920px]:text-[1rem] min-[576px]:py-3 py-1 text-base font-bold bg-[--bgc-dark] text-[--fc-light] overflow-hidden ">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="py-[5px]"
            onClick={() => (isDropDownOpen ? dropDownToggler() : null)}
          >
            <img
              className="min-[1920px]:w-[65px] w-[50px]"
              src={AltLogo}
              alt="logo"
            />
          </Link>
          <Navbar
            modalToggler={modalToggler}
            isDropDownOpen={isDropDownOpen}
            dropDownToggler={dropDownToggler}
          />
        </div>
      </Container>
    </header>
  );
};
