import React from "react";
import { Container } from "../Container";
import { SiGithub } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import Inst from "../../assets/images/instagram.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-[0.8rem] min-[1920px]:text-[1rem] font-bold flex items-center">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <FaRegCopyright />
            <span>2023-{currentYear},</span>
            <a
              href="https://pitbrest.github.io/CV/#projects"
              target="_blank"
              rel="noreferrer"
            >
              pitbrest
            </a>
            <a
              className="min-[1920px]:w-[25px] w-[20px]"
              href="https://github.com/pitbrest"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/101magazin101/?hl=ru"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              <img
                className="min-[1920px]:w-[25px] w-[20px]"
                src={Inst}
                alt="dfsd"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
