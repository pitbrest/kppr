import { Container } from "../../components/Container";
import Bg_1 from "../../assets/images/bg-1.jpg";
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
  const deviceWidth = window.screen.width;

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

        {deviceWidth >= 768 && (
          <section className="mb-24 flex items-start justify-center gap-4">
            <motion.div
              animate={{ y: ["20%", "-20%", "20%"], opacity: [0, 1] }}
              transition={{
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 3,
                },
                opacity: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 3,
                },
              }}
            >
              <FaArrowCircleDown
                size={30}
                color="teal"
              />
            </motion.div>
          </section>
        )}

        <section className="">
          <Slider data={createSlide(sliderData)} />
        </section>

        <section className="min-[576px]:mb-40 mb-10 mt-40">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-center min-[576px]:text-6xl text-4xl font-semibold min-[576px]:mb-20 mb-10 pt-3 pb-5 px-2 bg-[--color-teal] text-[--color-light] w-full block">
              Наши преимущества
            </h3>
          </motion.div>
          <div className="flex justify-center">{createAdvantages(advantagesData)}</div>
        </section>

        <section className="min-[576px]:mb-40 mb-10 mt-40">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <h3 className="text-center min-[576px]:text-6xl text-4xl font-semibold min-[576px]:mb-20 mb-10 pt-3 pb-5 px-2 bg-[--color-teal] text-[--color-light] w-full block">
              Наши результаты
            </h3>
          </motion.div>
          <div className="flex justify-center">{createResults(resultsData)}</div>
        </section>
      </Container>
    </>
  );
}

export default HomePage;
