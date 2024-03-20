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
        <div className="flex flex-col justify-start items-center gap-3">
          <img
            className="relative shrink-0 w-[100%] min-[576px]:w-full min-[576px]:h-auto"
            src={i.img}
            alt="slide_img"
          />
          <p className=" min-[768px]:w-[70%] w-[90%] text-center font-semibold py-2 px-2 basis-2/6 shrink-0 bg-white">
            {i.label}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ));

export { sliderData, createSlide };
