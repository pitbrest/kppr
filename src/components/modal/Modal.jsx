import "./Modal.css";
import { useRef } from "react";

function Modal({ toggler }) {
  const modalWrapperRef = useRef(null);

  return (
    <div
      className="modal"
      ref={modalWrapperRef}
    >
      <div className="modal-wrapper">
        <div className="bg-[--bgc-light] w-[30%] p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptas dolorem unde
          facilis dolor vitae maiores assumenda sapiente libero atque illum, dolore quia, dolorum
          quod fuga illo porro tenetur iure?
          <button
            className=" block border px-4 py-2 bg-slate-200 mt-10"
            onClick={() => toggler(modalWrapperRef.current, "active")}
          >
            toggle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
