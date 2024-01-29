import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";
import Modal from "./modal/Modal";

export const Layout = () => {
  const toggler = (item, classname) => {
    item && item.className.includes(classname)
      ? item.classList.remove(classname)
      : item.classList.add(classname);
  };

  return (
    <>
      <Header />
      <main className="min-[576px]:min-h-[calc(100vh-127.19px)] min-[1920px]:min-h-[calc(100vh-144.54px)] min-h-[calc(100vh-103.19px)] my-10 max-[576px]:my-2 max-[576px]:py-2">
        <Outlet />
        <Modal toggler={toggler} />
        <button
          className=" block border px-4 py-2 bg-slate-200 mt-10"
          onClick={() => {}}
        ></button>
      </main>
      <Footer />
    </>
  );
};
