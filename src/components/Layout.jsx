import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-[576px]:min-h-[calc(100vh-127px)] min-h-[calc(100vh-111.19px)] py-10 max-[576px]:py-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
