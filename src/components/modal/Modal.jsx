import "./Modal.css";
import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { navItems, currentIcon } from "../../appData/navData";
import { servicesData } from "../../appData/navData";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdCircle } from "react-icons/md";

function Modal({ classToggler, isModalOpen, modalToggler }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropDownToggler = () => setIsDropDownOpen(!isDropDownOpen);

  const modalRef = useRef(null);
  const modalWrapperRef = useRef(null);
  const modalContentRef = useRef(null);
  const dropDownBtnRef = useRef(null);

  const location = useLocation();

  const locationHandler = useCallback(() => {
    const current = dropDownBtnRef.current;
    if (location.pathname.includes("activities")) {
      if (!current.className.includes("active")) current.classList.add("active");
    } else {
      if (current.className.includes("active")) current.classList.remove("active");
    }
  }, [location.pathname]);

  // изменение isModalOpen
  const modalHandler = (e) => {
    modalToggler();
    if (isDropDownOpen) dropDownToggler();
  };

  // изменяем статус dropDownBtn для отображения ее текущего состояний
  useEffect(() => {
    locationHandler();
  }, [locationHandler]);

  // изменение isModalOpen при клике на modal-wrapper
  useEffect(() => {
    let modalWrapper = modalWrapperRef.current;

    modalWrapper.addEventListener("click", modalHandler);
    return () => modalWrapper.removeEventListener("click", modalHandler);
  });

  // открытие/закрытие модального окна при изменении isModalOpen
  useEffect(() => {
    classToggler([modalWrapperRef.current, modalContentRef.current], "active");
  }, [isModalOpen, classToggler]);

  return (
    <div
      ref={modalRef}
      className="modal font-bold"
    >
      <div
        className="modal-wrapper"
        ref={modalWrapperRef}
      ></div>
      <ul
        className="modal-content bg-[--color-light] px-5 py-10"
        ref={modalContentRef}
      >
        {navItems.map((item, idx) =>
          item.name !== "Деятельность" ? (
            <NavLink
              key={item.name}
              to={item.href}
              className="burger-nav-item nav-item flex items-center justify-start gap-1"
              onClick={() => {
                modalHandler();
              }}
            >
              {currentIcon(idx)}
              <li className="px-3 my-2 font-bold">{item.name.toUpperCase()}</li>
            </NavLink>
          ) : (
            <div
              className={
                isDropDownOpen
                  ? "modalDropdown-container burger-nav-item nav-item mb-5 bg-slate-50"
                  : "modalDropdown-container burger-nav-item nav-item"
              }
              key={item.name}
              ref={dropDownBtnRef}
              onClick={() => dropDownToggler()}
            >
              <div className="nav-item flex items-center justify-start gap-1">
                {currentIcon(idx)}
                <div className=" text-base uppercase flex items-center">
                  <p className="px-3 my-2 ">Деятельность</p>
                  {!isDropDownOpen ? (
                    <MdKeyboardDoubleArrowDown className="mr-1" />
                  ) : (
                    <MdOutlineKeyboardDoubleArrowUp />
                  )}
                </div>
              </div>
              <div className={isDropDownOpen ? "modalDropdown-list my-2" : "hidden"}>
                {servicesData.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="burger-nav-item nav-item flex items-center justify-start gap-1 px-2"
                    onClick={() => {
                      modalHandler();
                      dropDownToggler();
                    }}
                  >
                    <MdCircle
                      size={10}
                      color="var(--color-teal)"
                    />
                    <li className="ps-1 my-2 font-semibold">{item.name.toUpperCase()}</li>
                  </NavLink>
                ))}
              </div>
            </div>
          ),
        )}
      </ul>
    </div>
  );
}

export default Modal;
