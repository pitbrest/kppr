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
  { label: "Комплексные решения в сфере безопасности", img: AllDir },
  {
    label: "Торговля средствами противопожарной защиты и сопутствующими товарами",
    img: Equipments,
  },
  {
    label: "Разработка и печать планов эвакуации при пожаре, схем движения транспорта и пр...",
    img: Plan,
  },
  {
    label:
      "Разработка проектов систем охранной и пожарной сигнализации, систем автоматического пожаротушения",
    img: Proektirovanie,
  },
  {
    label:
      "Монтаж систем охранной и пожарной сигнализации, систем оповещения, систем видеонаблюдения, систем автоматического пожаротушения и дымоудаления и систем контроля доступа",
    img: Pogarotushenie,
  },
  {
    label:
      "Огнезащитная обработка деревянных и металлических конструкций, кабельной продукций, тканевых материалов ",
    img: Ognezashita,
  },
  {
    label: "Монтаж системы молниезащиты зданий и сооружений",
    img: Molniezashita,
  },
  { label: "Перезарядка, техническое обслуживание и ремонт огнетушителей", img: Ognetushiteli },
  {
    label:
      "Проверка технического состояния пожарных кранов и гидрантов, перекатка пожарных рукавов",
    img: PogarniyKran,
  },
  {
    label: "Проверка технического состояния вентиляционных и дымовых каналов",
    img: ProverkaVentkanalov,
  },
];

const createSlide = (data) =>
  data.map((i) => (
    <SwiperSlide key={i.label}>
      <div className="">
        <div className="flex flex-col justify-start items-center gap-4">
          <img
            src={i.img}
            alt="slide img"
          />
          {/* <p className="min-[768px]:w-[35%] w-[70%] font-extralight underline">{i.label}</p> */}
        </div>
      </div>
    </SwiperSlide>
  ));

export { sliderData, createSlide };
