import { useState } from "react";
import { Container } from "../../components/Container";
import "./HomePage.css";
import MontagPS from "../../assets/images/slider/montag.jpeg";
import PlanEvac from "../../assets/images/slider/plan.png";

function HomePage() {
  const [activeImg, setActiveImg] = useState(1);
  const activityToggler = (id) => setActiveImg(id);

  return (
    <>
      <Container>
        HomePage
        <div className="slider-container">
          <div className="slider-wrapper flex flex-col justify-center items-center gap-8">
            <div className="slides relative top-0 left-0 w-5/6 overflow-hidde">
              <div className="inline-flex gap-20">
                <img
                  className=""
                  src={MontagPS}
                  alt="presentation"
                />

                <img
                  className=""
                  src={PlanEvac}
                  alt="presentation"
                />
              </div>
            </div>
            <div className="navigation flex justify-center items-center gap-5">
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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
