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
          className="inline-block rounded bg-[#616060] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[--fc-light] shadow-[0_4px_9px_-4px_#737271] transition duration-150 ease-in-out hover:bg-[#3c3a3a] hover:shadow-[0_8px_9px_-4px_rgba(60,58,58,0.3),0_4px_18px_0_rgba(60,58,58,0.2)] focus:bg-[#3c3a3a] focus:shadow-[0_8px_9px_-4px_rgba(60,58,58,0.3),0_4px_18px_0_rgba(60,58,58,0.2)] focus:outline-none focus:ring-0 active:bg-[#000] active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
          onClick={() => (!src ? null : navigate(src))}
        >
          {title}
        </button>
      </TERipple>
    </>
  );
}

export default Button;
