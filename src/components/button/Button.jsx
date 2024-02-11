import React from "react";
import { TERipple } from "tw-elements-react";
import { useNavigate } from "react-router-dom";

function Button({ title, src = null }) {
  const navigate = useNavigate();

  return (
    <>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {title}
        </button>
      </TERipple>
    </>
  );
}

export default Button;

//  <button
//    type="button"
//    data-te-ripple-init
//    data-te-ripple-color="light"
//    // onClick={() => (!src ? null : navigate(src))}
//    class="inline-block rounded bg-[--fc-dark] px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[--fc-light] shadow-[0_4px_9px_-4px_var(--fc-dark)] transition duration-150 ease-in-out hover:bg-[#064b59] hover:shadow-[0_8px_9px_-4px_rgba(6,75,89,0.3),0_4px_18px_0_rgba(6,75,89,0.2)] focus:bg-[#064b59] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:bg-[#000] active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//  >
//    {title}
//  </button>;
