import { Container } from "../components/Container";
import Bg_1 from "../assets/images/bg-1.png";
import Bg_2 from "../assets/images/bg-2.png";
import Side_img from "../assets/images/side-img.jpg";
import Ps from "../assets/images/icons/ps.png";
import Cd from "../assets/images/icons/cd.png";
import Sp from "../assets/images/icons/sp.png";
import Video from "../assets/images/icons/video.png";

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
  const deviceWidth = window.screen.width;

  return (
    <>
      <Container>
        <section className="flex justify-start items-center mt-20 mb-32 relative ">
          <div className="homepage-bg w-full h-[70vh]">
            <h1 className="min-[576px]:text-6xl text-4xl font-semibold min-[576px]:mb-20 mb-10 pt-3 pb-5 px-2 w-full block">
              Комплексные решения <br />
              вопросов безопасности
            </h1>
            <ul className="flex justify-start items-start gap-10">
              {/* <li>
                <div className="flex flex-col items-center justify-start gap-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] w-[200px] p-4 rounded-md border-2 border-[rgb(73,143,137)]">
                  <h2 className="text-center text-lg font-bold leading-tight">
                    Пожарная и охранная сигнализация
                  </h2>
                  <img
                    className="w-20 h-auto"
                    src={Ps}
                    alt="ps"
                  />
                </div>
              </li> */}
              <li className="relative">
                <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
                  <h2 className="text-center text-lg font-bold leading-tight">
                    Пожарная и охранная сигнализация
                  </h2>
                  <img
                    className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
                    src={Ps}
                    alt="ps"
                  />
                </div>
              </li>
              <li className="relative">
                <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
                  <h2 className="text-center text-lg font-bold leading-tight">Видеонаблюдение</h2>
                  <img
                    className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
                    src={Video}
                    alt="ps"
                  />
                </div>
              </li>
              <li className="relative">
                <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
                  <h2 className="text-center text-lg font-bold leading-tight">
                    Системы контроля и управления доступом
                  </h2>
                  <img
                    className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
                    src={Cd}
                    alt="ps"
                  />
                </div>
              </li>
              <li className="relative">
                <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
                  <h2 className="text-center text-lg font-bold leading-tight">
                    Средства пожаротушения
                  </h2>
                  <img
                    className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
                    src={Sp}
                    alt="ps"
                  />
                </div>
              </li>
            </ul>

            {/* <motion.div
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
            </motion.div> */}
          </div>
        </section>
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

// function HomePage() {
//   const deviceWidth = window.screen.width;

//   return (
//     <>
//       <Container>
//         <section className="flex flex-col justify-start items-center mb-48 relative">
//           <img
//             className="w-auto max-h-[700px]"
//             src={Bg_1}
//             alt="main-img"
//           />
//           <motion.div
//             className="absolute -bottom-14 left-[calc(50% - 75px)]"
//             animate={{ opacity: [0, 1] }}
//             transition={{
//               opacity: {
//                 duration: 1.5,
//                 ease: "easeOut",
//                 delay: 1,
//               },
//             }}
//           >
//             <img
//               className="w-auto min-[800px]:max-w-[170px] max-w-[100px]"
//               src={Bg_2}
//               alt="main-img"
//             />
//           </motion.div>
//         </section>
//         <section className="flex justify-start items-center mt-6 mb-4 relative ">
//           <div className="homepage-bg w-full ">
//             <h1 className="min-[576px]:text-6xl text-4xl text-center font-semibold pt-3 pb-5 px-2 w-full block">
//               Комплексные решения <br />
//               вопросов безопасности
//             </h1>
//             <p> </p>
//             <ul>
//               <li></li>
//             </ul>
//             {/* <ul className="flex justify-start items-start gap-10">
//               <li className="relative">
//                 <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
//                   <h2 className="text-center text-lg font-bold leading-tight">
//                     Пожарная и охранная сигнализация
//                   </h2>
//                   <img
//                     className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
//                     src={Ps}
//                     alt="ps"
//                   />
//                 </div>
//               </li>
//               <li className="relative">
//                 <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
//                   <h2 className="text-center text-lg font-bold leading-tight">Видеонаблюдение</h2>
//                   <img
//                     className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
//                     src={Video}
//                     alt="ps"
//                   />
//                 </div>
//               </li>
//               <li className="relative">
//                 <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
//                   <h2 className="text-center text-lg font-bold leading-tight">
//                     Системы контроля и управления доступом
//                   </h2>
//                   <img
//                     className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
//                     src={Cd}
//                     alt="ps"
//                   />
//                 </div>
//               </li>
//               <li className="relative">
//                 <div className="hp-list-item flex flex-col items-center justify-around gap-4 px-4 py-6 w-52 h-52 rounded-md shadow-[inset_-12px_-8px_40px_#c4c4c4]">
//                   <h2 className="text-center text-lg font-bold leading-tight">
//                     Средства пожаротушения
//                   </h2>
//                   <img
//                     className="max-h-[90px] hover:scale-125 transition duration-100 ease-out"
//                     src={Sp}
//                     alt="ps"
//                   />
//                 </div>
//               </li>
//             </ul> */}

//             {/* <motion.div
//               className="absolute -bottom-14 left-[calc(50% - 75px)]"
//               animate={{ opacity: [0, 1] }}
//               transition={{
//                 opacity: {
//                   duration: 1.5,
//                   ease: "easeOut",
//                   delay: 1,
//                 },
//               }}
//             >
//               <img
//                 className="w-auto min-[800px]:max-w-[170px] max-w-[100px]"
//                 src={Bg_2}
//                 alt="main-img"
//               />
//             </motion.div> */}
//           </div>
//         </section>

//         {deviceWidth >= 768 && (
//           <section className="mb-24 flex items-start justify-center gap-4">
//             <motion.div
//               animate={{ y: ["20%", "-20%", "20%"], opacity: [0, 1] }}
//               transition={{
//                 y: {
//                   duration: 1,
//                   repeat: Infinity,
//                   ease: "easeOut",
//                   delay: 3,
//                 },
//                 opacity: {
//                   duration: 1,
//                   ease: "easeOut",
//                   delay: 3,
//                 },
//               }}
//             >
//               <FaArrowCircleDown
//                 size={30}
//                 color="teal"
//               />
//             </motion.div>
//           </section>
//         )}

//         <section className="">
//           <Slider data={createSlide(sliderData)} />
//         </section>

//         <section className="min-[576px]:mb-40 mb-10 mt-40">
//           <motion.div
//             className="flex flex-col items-center justify-center"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.8 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <h3 className="text-center min-[576px]:text-6xl text-4xl font-semibold min-[576px]:mb-20 mb-10 pt-3 pb-5 px-2 bg-[--color-teal] text-[--color-light] w-full block">
//               Наши преимущества
//             </h3>
//           </motion.div>
//           <div className="flex justify-center">{createAdvantages(advantagesData)}</div>
//         </section>

//         <section className="min-[576px]:mb-40 mb-10 mt-40">
//           <motion.div
//             className="flex items-center justify-center"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.8 }}
//             transition={{ duration: 1, delay: 0 }}
//           >
//             <h3 className="text-center min-[576px]:text-6xl text-4xl font-semibold min-[576px]:mb-20 mb-10 pt-3 pb-5 px-2 bg-[--color-teal] text-[--color-light] w-full block">
//               Наши результаты
//             </h3>
//           </motion.div>
//           <div className="flex justify-center">{createResults(resultsData)}</div>
//         </section>
//       </Container>
//     </>
//   );
// }

// export default HomePage;
