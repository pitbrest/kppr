import "./HomePage.css";
import { Container } from "../../components/Container";
import MainImg from "../../assets/images/home-bg.jpg";

import { Slider } from "../../components/Slider";
import { sliderData, createSlide } from "../../appData/sliderData";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
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
        <section className="flex flex-col justify-start items-center">
          <img
            className="w-auto max-h-[60%]"
            src={MainImg}
            alt="main-img"
          />
          <div className="flex flex-col slogan font-extrabold px-4 py-2 items-center">
            <p className="text-center">*** комплексные решения в сфере пожарной безопасности</p>
          </div>
        </section>
        <section className="flex justify-center my-24">
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
        </section>
        <section className="slider min-[900px]:h-[60vh] h-auto">
          <Slider>{createSlide(sliderData)}</Slider>
        </section>
        <section className="flex justify-center mt-10 mb-24">
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
        </section>
        <section className="mb-10">
          <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold] rounded-ss-full rounded-ee-full">
            Наши преимущества
          </h3>
          {createAdvantages(advantagesData)}
        </section>
        <section className="flex justify-center my-24">
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
          <TbArrowBigDownLinesFilled
            size={70}
            color="#dd3b39"
          />
        </section>
        <section>
          <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold] rounded-ss-full  rounded-ee-full">
            Наши результаты
          </h3>
          <div>{createResults(resultsData)}</div>
        </section>
      </Container>
    </>
  );
}

export default HomePage;
