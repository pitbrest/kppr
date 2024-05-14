import React from "react";
import { Container } from "../Container";
import { SiGithub } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import Inst from "../../assets/images/icons/instagram.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 min-[576px]:py-4 px-10 min-[1280px]:text-[0.8rem] text-[0.6rem] font-bold flex items-center bg-[--color-teal] text-[--color-light]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <FaRegCopyright size={15} />
            <span>2023-{currentYear}</span>
            <a
              href="https://pitbrest.github.io/CV/#projects"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
            </a>
            <a
              href="https://github.com/pitbrest"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub className="min-[1920px]:w-[25px] min-[1920px]:h-[25px] w-[20px] h-[20px] " />
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
