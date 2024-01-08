import { useEffect, useRef, useState } from "react";
import { Container } from "../../components/Container";
import "./HomePage.css";
import MontagPS from "../../assets/images/slider/montag.jpeg";
import PlanEvac from "../../assets/images/slider/plan.png";

const images = [MontagPS, PlanEvac];

function HomePage() {
  const [idx, setIdx] = useState(0);
  const imgToggler = () => (idx !== images.length - 1 ? setIdx(idx + 1) : setIdx(0));
  const currentImg = images[idx];
  const imgRef = useRef(null);

  useEffect(() => {
    const effectOneTimeout = setTimeout(() => imgRef.current.classList.add("fadeIn"), 0);
    const effectTwoTimeout = setTimeout(() => imgRef.current.classList.add("fadeOut"), 4300);
    const imgInterval = setInterval(() => {
      imgRef.current.classList.remove("fadeIn");
      imgRef.current.classList.remove("fadeOut");
      imgToggler();
    }, 5000);
    return () => {
      clearTimeout(effectOneTimeout);
      clearTimeout(effectTwoTimeout);
      clearInterval(imgInterval);
    };
  });

  return (
    <>
      <Container>
        <div className="slider-container">
          <div className="slider-wrapper flex flex-col justify-center items-center gap-8">
            <div className="slides relative top-0 left-0 w-5/6 overflow-hidde">
              <div className="my-0 mx-auto max-w-lg overflow-hidden">
                <img
                  ref={imgRef}
                  className="slider-img"
                  src={currentImg}
                  alt="presentation"
                />
              </div>
            </div>
            {/* <div className="navigation flex justify-center items-center gap-5">
              <div
                className="w-3 h-3 rounded-xl border-[3px] border-transparent outline outline-[--bgc-dark] outline-[3px] outline-offset-[3px] active"
                id="1"
              ></div>
              <div
                className="w-3 h-3 rounded-xl border-[3px] border-transparent outline outline-[--bgc-dark] outline-[3px] outline-offset-[3px]"
                id="2"
              ></div>
              <div
                className="w-3 h-3 rounded-xl border-[3px] border-transparent outline outline-[--bgc-dark] outline-[3px] outline-offset-[3px]"
                id="3"
              ></div>
              <div
                className="w-3 h-3 rounded-xl border-[3px] border-transparent outline outline-[--bgc-dark] outline-[3px] outline-offset-[3px]"
                id="4"
              ></div>
              <div
                className="w-3 h-3 rounded-xl border-[3px] border-transparent outline outline-[--bgc-dark] outline-[3px] outline-offset-[3px]"
                id="5"
              ></div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
