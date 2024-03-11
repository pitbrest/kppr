import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { Container } from "../../components/Container";
import {
  commerceDataContent,
  commerceData1,
  commerceData2,
  commerceData3,
} from "../../appData/commerceData";

import "./Commerce.css";
import { PageRedirection } from "../../components/page-navigation/PageNavigation";

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
          <div className="mb-10 min-[576px]:text-base text-sm">
            <h4 className="min-[576px]:text-2xl text-xl font-bold p-3 bg-[--color-teal] text-[--color-light] text-center min-[576px]:mb-10 mb-5">
              Торговля
            </h4>
            <p>
              Реализуем первичные средства пожаротушения, оборудование и сопутствующие товары
              противопожарной тематики.
            </p>
            <p className="pb-2">
              Широкий спектр представленных товаров поможет Вам оснастить здания и сооружения любого
              назначения в соответствии с правилами пожарной безопасности.
            </p>
            <p>
              <strong>Заказать и приобрести </strong>товары можно в нашем
              <a
                href="/contacts"
                className="font-bold text-red-700"
              >
                {" "}
                магазине 101{" "}
              </a>
              в г.Бресте, а также обратившись в нашу региональную сеть.
            </p>
          </div>
          <div className=" border-t border-[#bebebe]">
            <h2
              className="mb-0"
              id="headingOne"
            >
              <button
                className={`${
                  activeElement === "element1" && `underline underline-offset-2 deco`
                } min-[576px]: font-medium min-[576px]:text-xl text-base group relative flex w-full items-center rounded-t-[15px] border-0 rounded-xl bg-white ps-5 py-2 text-left transition [overflow-anchor:none] hover:z-[2] pr-20`}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Первичные средства пожаротушения и сопутствующие товары
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529`
                  }h-5 w-5 shrink-0  transition-transform duration-200 ease-in-out motion-reduce:transition-none ml-auto absolute right-4 top-[14px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="teal"
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
              className="!mt-0 !rounded-none shadow-none"
            >
              <div className="commerce p-4">{commerceDataContent(commerceData1)}</div>
            </TECollapse>
          </div>
          <div className="border-t border-[#bebebe]">
            <h2
              className="mb-0"
              id="headingOne"
            >
              <button
                className={`${
                  activeElement === "element2" && `underline underline-offset-2`
                } min-[576px]: font-medium min-[576px]:text-xl text-base group relative flex w-full items-center rounded-t-[15px] border-0 rounded-xl bg-white ps-5 py-2 text-left transition [overflow-anchor:none] hover:z-[2] pr-20`}
                type="button"
                onClick={() => handleClick("element2")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Элементы систем молниезащиты
                <span
                  className={`${
                    activeElement === "element2"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529`
                  }h-5 w-5 shrink-0  transition-transform duration-200 ease-in-out motion-reduce:transition-none ml-auto absolute right-4 top-[14px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="teal"
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
              className="!mt-0 !rounded-none shadow-none"
            >
              <div className="commerce p-4">{commerceDataContent(commerceData2)}</div>
            </TECollapse>
          </div>
          <div className="border-t border-b border-[#bebebe] mb-10">
            <h2
              className="mb-0"
              id="headingOne"
            >
              <button
                className={`${
                  activeElement === "element3" && `underline underline-offset-2`
                } min-[576px]: font-medium min-[576px]:text-xl text-base group relative flex w-full items-center rounded-t-[15px] border-0 rounded-xl bg-white ps-5 py-2 text-left transition [overflow-anchor:none] hover:z-[2] pr-20`}
                type="button"
                onClick={() => handleClick("element3")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Огнезащитные составы
                <span
                  className={`${
                    activeElement === "element3"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529`
                  }h-5 w-5 shrink-0  transition-transform duration-200 ease-in-out motion-reduce:transition-none ml-auto absolute right-4 top-[14px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="teal"
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
              show={activeElement === "element3"}
              className="!mt-0 !rounded-none shadow-none"
            >
              <div className="commerce p-4">{commerceDataContent(commerceData3)}</div>
            </TECollapse>
          </div>
          <PageRedirection />
        </div>
      </>
    </Container>
  );
}

export default Commerce;
