import "./HomePage.css";
import { Container } from "../../components/Container";
import Bg_1 from "../../assets/images/bg-1.png";
import Bg_2 from "../../assets/images/bg-2.png";
import { FaArrowCircleDown } from "react-icons/fa";

import { motion } from "framer-motion";

import { Slider } from "../../components/Slider/Slider";
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
        <section className="flex flex-col justify-start items-center mb-32 relative">
          <img
            className="w-auto max-h-[700px]"
            src={Bg_1}
            alt="main-img"
          />
          <motion.div
            className="absolute -bottom-14 left-[calc(50% - 75px)]"
            animate={{ opacity: [0, 1] }}
            transition={{
              opacity: {
                duration: 1.5,
                ease: "easeOut",
                delay: 1,
              },
            }}
          >
            <img
              className="w-auto min-[800px]:max-w-[170px] max-w-[100px]"
              src={Bg_2}
              alt="main-img"
            />
          </motion.div>
        </section>

        <section className="mb-24 flex items-start justify-center gap-4">
          <motion.div
            animate={{ y: ["20%", "-20%", "20%"], opacity: ["0", "1"] }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 3,
              },
              opacity: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 3,
              },
            }}
          >
            <FaArrowCircleDown
              size={30}
              color="red"
            />
          </motion.div>
        </section>

        <section className="slider min-[900px]:h-[60vh] h-auto min-[540px]:mb-40 mb-20">
          <Slider data={createSlide(sliderData)} />
        </section>

        <section className="min-[540px]:mb-40 mb-10">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--color-teal] text-[--color-light] w-full block">
              Наши преимущества
            </h3>
          </motion.div>
          <div className="flex">{createAdvantages(advantagesData)}</div>
        </section>

        <section className="min-[540px]:mb-40 mb-20">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold min-[540px]:my-20 mt-0 mb-10 pt-3 pb-5 px-2 bg-[--color-teal] text-[--color-light] w-full">
              Наши результаты
            </h3>
          </motion.div>
          <div className="flex">{createResults(resultsData)}</div>
        </section>
      </Container>
    </>
  );
}

export default HomePage;
