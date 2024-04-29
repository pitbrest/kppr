import { Container } from "../components/Container";
import Main_img from "../assets/images/main-img.jpg";
import Stamp from "../assets/images/stamp.png";
import Rgoo from "../assets/images/rgoo.png";
import Bdpo from "../assets/images/bdpo.jpg";

import { productionHandler, servicesHandler } from "../appData/servicesData";

import { FaArrowCircleDown } from "react-icons/fa";

import { motion } from "framer-motion";

import { Slider } from "../components/Slider/Slider";
import { sliderData, createSlide } from "../appData/sliderData";
import {
  advantagesData,
  createAdvantages,
  resultsData,
  createResults,
} from "../appData/homePageData";

function HomePage() {
  // const deviceWidth = window.screen.width;

  return (
    <>
      <Container>
        <section className="flex flex-col justify-start items-center mb-28 relative">
          <div className="flex justify-center items-center gap-14">
            <img
              className="max-h-[150px] w-auto object-contain"
              src={Rgoo}
              alt="alt"
            />
            <h1 className="min-[576px]:text-5xl text-4xl text-center font-semibold">
              Брестский областной комбинат
              <br /> противопожарных работ
            </h1>
            <img
              className="max-w-[300px] h-auto object-contain"
              src={Bdpo}
              alt="alt"
            />
          </div>
          <img
            className="w-auto max-h-[670px]"
            src={Main_img}
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
              src={Stamp}
              alt="main-img"
            />
          </motion.div>
        </section>

        <section className="mb-24 flex items-start justify-center gap-4">
          <motion.div
            animate={{ y: ["20%", "-20%", "20%"], opacity: [0, 1] }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 5,
              },
              opacity: {
                duration: 1,
                ease: "easeOut",
                delay: 5,
              },
            }}
          >
            <FaArrowCircleDown
              size={30}
              color="teal"
            />
          </motion.div>
        </section>

        <section className="flex justify-start items-center mt-6 mb-4 relative ">
          <div className="homepage-bg w-full ">
            <h2 className="min-[576px]:text-6xl text-4xl text-center font-semibold pt-3 pb-5 px-2 mb-16 w-full block">
              Комплексные решения <br />
              вопросов безопасности
            </h2>
            <div className="max-w-7xl mx-auto text-[--fc-dark] min-[576px]:px-10 px-2 mb-5">
              <div className="text-base min-[576px]:mb-20 mb-10">
                <ul className="min-[576px]:mb-20 mb-10">
                  <p className="min-[576px]:text-xl text-lg font-bold p-3 bg-[--color-teal] text-[--color-light] min-[576px]:mb-10 mb-5 min-[576px]:leading-7 !leading-tight">
                    Выполняем строительно-монтажные работы противопожарного профиля а также в
                    смежных направлениях
                  </p>
                  {productionHandler()}
                </ul>
                <ul>
                  <p className="min-[576px]:text-xl text-lg font-bold p-3 bg-[--color-teal] text-[--color-light] min-[576px]:mb-10 mb-5 min-[576px]:leading-7 !leading-tight">
                    Оказываем услуги
                  </p>
                  {servicesHandler()}
                </ul>
              </div>
            </div>
          </div>
        </section>

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

        <section className="">
          <Slider data={createSlide(sliderData)} />
        </section>
        <section className="mt-40 mb-24 flex items-start justify-center gap-4">
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
