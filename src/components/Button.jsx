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
          className="inline-block rounded bg-[--color-yellow] w-[100px] pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-[--fc-light] shadow-[0_4px_9px_-4px_#ffd800] transition duration-150 ease-in-out hover:bg-[#d7ba15] hover:shadow-[0_8px_9px_-4px_#e9db89,0_4px_18px_0_#e9db89]  active:bg-[#d7ba15] active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
          onClick={() => (!src ? null : navigate(src))}
        >
          {title}
        </button>
      </TERipple>
    </>
  );
}

export default Button;
