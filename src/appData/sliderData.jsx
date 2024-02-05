import AllDir from "../assets/images/slider/all-directions.jpg";
import Plan from "../assets/images/slider/plan-evak.jpeg";
import Equipments from "../assets/images/slider/equipments.jpeg";
import Ognetushiteli from "../assets/images/slider/ognetushiteli.jpg";
import Pogarotushenie from "../assets/images/slider/pogarotushenie.jpg";
import Molniezashita from "../assets/images/slider/molniezashita.jpg";
import Proektirovanie from "../assets/images/slider/proektirovanie.jpg";
import PogarniyKran from "../assets/images/slider/pogarniy-kran.jpg";
import Ognezashita from "../assets/images/slider/ognezashita.jpg";
import ProverkaVentkanalov from "../assets/images/slider/proverka-ventkanalov.jpg";

import { SwiperSlide } from "swiper/react";

const sliderData = [
  {
    label: "торговля средствами противопожарной защиты и сопутствующими товарами",
    img: Equipments,
  },
  {
    label: "разработка и печать планов эвакуации при пожаре, схем движения транспорта и пр...",
    img: Plan,
  },
  {
    label:
      "проектирование систем охранной и пожарной сигнализации, систем автоматического пожаротушения",
    img: Proektirovanie,
  },
  {
    label:
      "монтаж пожарной сигнализации, систем оповещения, видеонаблюдения, автоматического пожаротушения и дымоудаления, СКУД",
    img: Pogarotushenie,
  },
  {
    label:
      "огнезащитная обработка строительных конструкций (металл, дерево, бетон, кабельная продукция, тканевые материалы)",
    img: Ognezashita,
  },
  {
    label: "монтаж системы молниезащиты зданий и сооружений",
    img: Molniezashita,
  },
  { label: "перезарядка, техническое обслуживание и ремонт огнетушителей", img: Ognetushiteli },
  {
    label:
      "проверка технического состояния пожарных кранов и гидрантов, перекатка пожарных рукавов",
    img: PogarniyKran,
  },
  {
    label: "проверка технического состояния вентиляционных и дымовых каналов",
    img: ProverkaVentkanalov,
  },
];

const createSlide = (data) =>
  data.map((i) => (
    <SwiperSlide key={i.label}>
      <div className="">
        <div className="flex flex-col justify-start items-center gap-4">
          <img
            className="relative"
            src={i.img}
            alt="slide img"
          />
          <p className=" min-[768px]:w-[40%] w-[70%] text-center font-semibold py-2 px-4">
            {i.label}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ));

export { sliderData, createSlide };
