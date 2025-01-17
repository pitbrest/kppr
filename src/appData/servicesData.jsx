import { FaCircle } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";

const servicesData = {
  production: [
    "проектирование, монтаж, наладка, техническое обслуживание систем пожарной сигнализации, систем оповещения и управления эвакуацией людей при пожаре, систем противодымной вентиляции, установок пожаротушения автоматических",
    "монтаж и наладка систем охранной сигнализации, систем видеонаблоюдения, систем контроля и управления доступом (СКУД)",
    "выполнение работ с применением огнезащитных составов, лаков, красок, штукатурок",
    "капитальный ремонт (перезарядка) огнетушителей",
    "устройство и ремонт систем молниезащиты зданий и сооружений",
  ],
  services: [
    "проверка технического состояния дымовых и вентиляционных каналов, определение воздухообмена, проверка дымовых каналов на наличие тяги",
    "разработка и печать планов эвакуации людей при пожаре, схем движения транспорта и пр.",
    "подготовка по программе пожарно-технического минимума (ПТМ)",
  ],
};

const productionHandler = () =>
  servicesData.production.map((item) => (
    <li
      className="flex items-center justify-between mb-3"
      key={item.split(",")[0] || item}
    >
      <div className="flex items-center justify-start min-[576px]:gap-6 gap-3 w-full">
        <FaCircle size={10} />
        <p className="min-[576px]:text-base text-sm block max-w-[80%]">{item};</p>
      </div>
      <FaEllipsisVertical size={15} />
    </li>
  ));
const servicesHandler = () =>
  servicesData.services.map((item) => (
    <li
      className="flex items-center justify-between mb-3"
      key={item.split(",")[0] || item}
    >
      <div className="flex items-center justify-start min-[576px]:gap-6 gap-3 w-full">
        <FaCircle size={10} />
        <p className="leading-normal block max-w-[80%]">{item};</p>
      </div>
      <FaEllipsisVertical size={15} />
    </li>
  ));

export { productionHandler, servicesHandler };
