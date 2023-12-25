import { Header } from "./header/Header";
import { Footer } from "./footer/Foter";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <hr className="max-w-[1600px] w-full m-auto" /> */}
      <main className="min-[1920px]:min-h-[calc(100vh-168px)] min-h-[calc(100vh-140px)] py-10">
        <Outlet />
      </main>
      {/* <hr className="max-w-[1600px] w-full m-auto" /> */}
      <Footer />
    </>
  );
};
