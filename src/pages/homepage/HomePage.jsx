import "./HomePage.css";
import { Container } from "../../components/Container";
import MainImg from "../../assets/images/home-bg.jpg";

import { motion } from "framer-motion";

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
          <div className="flex flex-col slogan font-extrabold px-4 py-4 items-center">
            <p className="text-center">*** комплексные решения в сфере пожарной безопасности</p>
          </div>
        </section>
        <section className="my-24">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
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
          </motion.div>
        </section>
        <section className="slider min-[900px]:h-[60vh] h-auto">
          <Slider>{createSlide(sliderData)}</Slider>
        </section>
        <section className="mb-14 mt-10">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
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
          </motion.div>
        </section>
        <section className="mb-10">
          <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold] rounded-md">
            Наши преимущества
          </h3>
          {createAdvantages(advantagesData)}
        </section>
        <section className="my-24">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
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
          </motion.div>
        </section>
        <section>
          <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold] rounded-md">
            Наши результаты
          </h3>
          <div>{createResults(resultsData)}</div>
        </section>
      </Container>
    </>
  );
}

export default HomePage;
