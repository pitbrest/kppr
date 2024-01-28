import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-[576px]:min-h-[calc(100vh-127.19px)] min-[1920px]:min-h-[calc(100vh-144.54px)] min-h-[calc(100vh-103.19px)] my-10 max-[576px]:my-2 max-[576px]:py-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
