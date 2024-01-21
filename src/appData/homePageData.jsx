import { IoBarChart } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";

import CountUpComponent from "../components/countUp/CountUpComponent";
import { motion } from "framer-motion";

const advantagesData = [
  { advantage: "более 20 лет на рынке строительных работ и услуг", img: IoBarChart },
  {
    advantage: "нацеленность на долговременное и плодотворное сотрудничество",
    img: BsHandThumbsUpFill,
  },
  {
    advantage: "производственные участки в восьми районных центрах Брестской области",
    img: FaMapMarkerAlt,
  },
];
const resultsData = [
  {
    advantage: "смонтированных систем пожарной и охранной автоматики",
    start: 99,
    end: 326,
    duration: 3.5,
  },
  {
    advantage: `м² строительных конструкций  обработано огнезащитными составами`,
    start: 999,
    end: 78015,
    duration: 7,
  },
  {
    advantage: "обслуженных и перезаряженных огнетушителей",
    start: 99,
    end: 22548,
    duration: 5,
  },
];
const delay = [0, 0.3, 0.5, 0.7, 0.9, 1.1];

const createAdvantages = (data) => {
  return (
    <div className="description p-2 flex items-start justify-center flex-wrap min-[594px]:gap-16 gap-0">
      {data.map((i, idx) => (
        <motion.div
          className="flex flex-col items-center basis-[15%] rounded-2xl py-4 min-[594px]:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-none flex-shrink-0 flex-grow-0 h-[240px] min-w-[240px]"
          initial={{ opacity: 0, y: 100, rotate: +30 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          key={i.advantage}
          transition={{ duration: 0.5, delay: delay[idx] }}
        >
          <i.img className="text-[--bgc-dark] basis-[40%] w-full" />
          <span className="w-[80%] border-t border-2 border-[rgba(50,50,93,0.25)] mt-5 mb-2"></span>
          <div className="leading-5 px-3 pt-2 text-center font-medium text-lg w-[95%] hyphens-auto text-wrap">
            {i.advantage}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const createResults = (data) => {
  return (
    <div className="description p-2 flex items-center justify-center flex-wrap min-[594px]:gap-16 gap-0">
      {data.map((i, idx) => (
        <motion.div
          className="flex flex-col items-center justify-start basis-[15%] rounded-2xl pt-4 min-[594px]:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] shadow-none flex-shrink-0 flex-grow-0 h-[220px] min-w-[240px]"
          initial={{ opacity: 0, y: 100, rotate: -30 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          key={i.advantage}
          transition={{ duration: 0.5, delay: delay[idx] }}
        >
          <CountUpComponent
            start={i.start}
            end={i.end}
            duration={i.duration}
          />
          <span className="w-[80%] border-t border-2 border-[rgba(50,50,93,0.25)] mt-5 mb-2"></span>
          <div className="leading-5 px-3 pt-2 text-center font-medium text-lg w-[95%] hyphens-auto text-wrap">
            {i.advantage}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export { advantagesData, createAdvantages, resultsData, createResults };
