import "./HomePage.css";
import { Container } from "../../components/Container";
import HomepageBg from "../../assets/images/homepage-bg.png";
import Main from "../../assets/images/1.png";

import { motion } from "framer-motion";

import { Slider } from "../../components/Slider";
import { sliderData, createSlide } from "../../appData/sliderData";
import { FaArrowDownLong } from "react-icons/fa6";
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
        <section className="flex flex-col justify-start items-center mb-60">
          <img
            className="w-auto max-h-[700px]"
            src={HomepageBg}
            alt="main-img"
          />
        </section>

        {/* <section className="my-24 flex items-start justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <FaArrowDownLong size={30} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <FaArrowDownLong size={40} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
          >
            <FaArrowDownLong size={30} />
          </motion.div>
        </section> */}

        <section className="slider min-[900px]:h-[60vh] h-auto">
          <Slider>{createSlide(sliderData)}</Slider>
        </section>
        {/* <section className="mb-14 mt-10">
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
        </section> */}
        <section className="mb-10">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <h3 className="text-center min-[594px]:text-6xl text-4xl font-semibold my-20 pt-3 pb-5 px-2 bg-[--bgc-gold] rounded-md">
              Наши преимущества
            </h3>
          </motion.div>

          {createAdvantages(advantagesData)}
        </section>
        {/* <section className="my-24">
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
        </section> */}
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
