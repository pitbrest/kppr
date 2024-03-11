import React, { useState } from "react";
import { Container } from "../Container";

import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";

export const Header = ({ modalToggler }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownToggler = () => setIsDropDownOpen(!isDropDownOpen);

  return (
    <header className="text-[0.8rem] min-[1920px]:text-[1rem] min-[576px]:py-3 py-1 px-4 text-base font-bold text-[--color-light] overflow-hidden bg-[--color-teal]">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to="/kppr/"
            className="py-[5px]"
            onClick={() => (isDropDownOpen ? dropDownToggler() : null)}
          >
            <img
              className="min-[1920px]:w-[150px] w-[150px]"
              src={Logo}
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
