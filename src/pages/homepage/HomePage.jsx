import "./HomePage.css";
import { Container } from "../../components/Container";
import HomepageBg from "../../assets/images/homepage-bg.png";
import Bg_1 from "../../assets/images/bg-1.png";
import Bg_2 from "../../assets/images/bg-2.png";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { TbArrowBigDownFilled } from "react-icons/tb";

import { motion } from "framer-motion";

import { Slider } from "../../components/Slider";
import { NewSlider } from "../../components/NewSlider/NewSlider";
import { sliderData, createSlide } from "../../appData/sliderData";
import { FaArrowDownLong } from "react-icons/fa6";
import {
  advantagesData,
  createAdvantages,
  resultsData,
  createResults,
} from "../../appData/homePageData";
import { Translate } from "@mui/icons-material";

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
            className="absolute -bottom-14 left-[47%]"
            animate={{ opacity: [0, 1] }}
            transition={{
              opacity: {
                duration: 1.5,
                ease: "easeOut",
                delay: 1.5,
              },
            }}
          >
            <img
              className="max-h-[700px] w-auto max-w-[170px]"
              src={Bg_2}
              alt="main-img"
            />
          </motion.div>
        </section>

        <section className="mb-24 flex items-start justify-center gap-4 ps-20">
          <motion.div
            animate={{ y: ["20%", "-20%", "20%"], opacity: ["0", "1"] }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 4,
              },
              opacity: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 5,
              },
            }}
          >
            <PiArrowFatLinesDownFill
              size={30}
              color="red"
            />
          </motion.div>
          <motion.div
            animate={{ y: ["20%", "-20%", "20%"], opacity: ["0", "1"] }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 4.5,
              },
              opacity: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 4.5,
              },
            }}
          >
            <PiArrowFatLinesDownFill
              size={30}
              color="red"
            />
          </motion.div>
          <motion.div
            animate={{ y: ["20%", "-20%", "20%"], opacity: ["0", "1"] }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 5,
              },
              opacity: {
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
                delay: 5,
              },
            }}
          >
            <PiArrowFatLinesDownFill
              size={30}
              color="red"
            />
          </motion.div>

          {/* <motion.div
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
          </motion.div> */}
        </section>

        <section className="slider min-[900px]:h-[60vh] h-auto">
          <NewSlider />
          {/* <Slider>{createSlide(sliderData)}</Slider> */}
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
