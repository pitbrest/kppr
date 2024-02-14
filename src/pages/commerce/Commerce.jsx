import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { Container } from "../../components/Container";
import { commerceData1, commerceData2 } from "../../appData/commerceData";

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
          <div className="rounded-md border-2 border-[light-grey] mb-10">
            <h2
              className="mb-0"
              id="headingOne"
            >
              <button
                className={`${
                  activeElement === "element1" && `underline underline-offset-2 deco`
                } font-bold text-xl group relative flex w-full items-center rounded-t-[15px] border-0 rounded-xl bg-white px-5 py-4 text-left transition [overflow-anchor:none] hover:z-[2]`}
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
                  } ml-auto h-5 w-5 shrink-0  transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="#474a51"
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
                {commerceData1.map((item) => (
                  <div className="commerce-item px-5 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-2 justify-start items-center rounded-md border border-[#d1d1d1]">
                    <img
                      className="max-w-40 basis-2/3 object-center h-2/3"
                      src={item.img}
                      alt=""
                    />
                    <h6 className="font-medium text-center flex items-center basis-1/3">
                      {item.title}
                    </h6>
                  </div>
                ))}
              </div>
            </TECollapse>
          </div>

          <div className="rounded-md border-2 border-[light-grey] mb-10">
            <h2
              className="mb-0"
              id="headingOne"
            >
              <button
                className={`${
                  activeElement === "element1" && `underline underline-offset-2 deco`
                } font-bold text-xl group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left transition [overflow-anchor:none] hover:z-[2]`}
                type="button"
                onClick={() => handleClick("element2")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Компоненты систем молниезащиты
                <span
                  className={`${
                    activeElement === "element2"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0  transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="#474a51"
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
              show={activeElement === "element2"}
              className="!mt-0 !rounded-b-none"
            >
              <div className="commerce p-4">
                {commerceData2.map((item) => (
                  <div className="commerce-item px-5 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col gap-2 justify-start items-center rounded-md border border-[#d1d1d1]">
                    <img
                      className="max-w-40 basis-2/3 object-center h-2/3"
                      src={item.img}
                      alt=""
                    />
                    <h6 className="font-medium text-center flex items-center basis-1/3">
                      {item.title}
                    </h6>
                  </div>
                ))}
              </div>
            </TECollapse>
          </div>
        </div>
      </>
    </Container>
  );
}

export default Commerce;
