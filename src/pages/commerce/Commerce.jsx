import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { Container } from "../../components/Container";
import Ognet from "../../assets/images/commerce/ognetushiteli.png";
import Shkaf from "../../assets/images/commerce/pog-shkaf.png";

import "./Commerce.css";

function Commerce() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <Container>
      <>
        <div
          id="accordionExample"
          className="max-w-7xl mx-auto text-[--fc-dark]"
        >
          <div className="rounded-t-lg border border-neutral-200 bg-white">
            <h2
              className="mb-0"
              id="headingOne"
            >
              <button
                className={`${
                  activeElement === "element1" && `underline underline-offset-2 deco`
                } font-bold text-lg group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left transition [overflow-anchor:none] hover:z-[2]`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Первичные средства пожаротушения
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element1"}
              className="!mt-0 !rounded-b-none"
            >
              <div className="commerce p-4">
                <div className="px-5 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-2 justify-start items-center rounded-md">
                  <img
                    className="max-w-40 basis-2/3 object-cover h-2/3"
                    src={Ognet}
                    alt=""
                  />
                  <h6 className="text-center flex items-center basis-1/3">
                    Огнетушители <br />и сопутствующие товары
                  </h6>
                </div>
                <div className="px-5 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-2 justify-start items-center rounded-md">
                  <img
                    className="max-w-40 basis-2/3 object-cover h-2/3"
                    src={Shkaf}
                    alt=""
                  />
                  <h6 className="text-center flex items-center basis-1/3">Пожарные шкафы</h6>
                </div>
              </div>
            </TECollapse>
          </div>
        </div>
      </>
    </Container>
  );
}

export default Commerce;
