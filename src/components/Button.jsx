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
          className="inline-block rounded bg-[#575d5d] w-[95px] pb-1.5 pt-2 text-xs font-bold uppercase leading-normal text-[--color-light] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-150 ease-in-out hover:bg-black active:bg-[--color-teal] tracking-wide"
          onClick={() => (!src ? null : navigate(src))}
        >
          {title}
        </button>
      </TERipple>
    </>
  );
}

export default Button;
