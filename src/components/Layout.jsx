import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-178px)] py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
