import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";
import Modal from "./modal/Modal";
import { useState } from "react";

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggler = () => setIsModalOpen(!isModalOpen);

  const classToggler = (items, classname) => {
    items.map((item) => {
      if (item.className.includes(classname)) {
        item.classList.remove(classname);
        if (classname === "active") document.body.style.overflowY = "";
      } else {
        item.classList.add(classname);
        if (classname === "active") document.body.style.overflowY = "hidden";
      }
      return null;
    });
  };

  return (
    <>
      <Header modalToggler={modalToggler} />
      <main className="min-[576px]:min-h-[calc(100vh-127.19px)] min-[1920px]:min-h-[calc(100vh-144.54px)] min-h-[calc(100vh-103.19px)] my-10 max-[576px]:my-2 max-[576px]:py-2">
        <Outlet />
        <Modal
          classToggler={classToggler}
          isModalOpen={isModalOpen}
          modalToggler={modalToggler}
        />
      </main>
      <Footer />
    </>
  );
};
