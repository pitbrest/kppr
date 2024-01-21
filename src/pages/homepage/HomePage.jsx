import "./HomePage.css";
import { Container } from "../../components/Container";

import { Slider } from "../../components/Slider";
import { sliderData, createSlide } from "../../appData/sliderData";

import {
  advantagesData,
  createAdvantages,
  resultsData,
  createResults,
} from "../../appData/homePageData";

function HomePage() {
  return (
    <>
      <Container>
        <section className="slider min-[900px]:h-[60vh] h-auto">
          <Slider>{createSlide(sliderData)}</Slider>
        </section>
        <section className="">
          <h3 className="text-center min-[594px]:text-6xl text-5xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold]">
            Наши преимущества
          </h3>
          {createAdvantages(advantagesData)}
        </section>
        <section>
          <h3 className="text-center min-[594px]:text-6xl text-5xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold]">
            Наши результаты
          </h3>
          {/* <CountUpComponent
            start={10}
            end={500}
          /> */}
          {createResults(resultsData)}
        </section>
      </Container>
    </>
  );
}

export default HomePage;
