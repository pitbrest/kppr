import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-[1920px]:h-[calc(100vh-168px)] h-[calc(100vh-140px)] py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
