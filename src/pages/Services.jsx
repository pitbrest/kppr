import { Container } from "../components/Container";
import { FaCircle } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { productionHandler } from "../appData/servicesData";

function Services() {
  return (
    <Container>
      <div
        id="accordionExample"
        className="max-w-7xl mx-auto text-[--fc-dark] max-2xl:px-10"
      >
        <div className="text-base mb-10 min-[576px]:leading-7 leading-normal">
          <ul>
            <p className="text-lg font-bold pb-5">
              Выполняем строительно-монтажные работы противопожарного профиля а также в смежных
              направлениях:
            </p>
            {productionHandler()}

            {/* <li className="flex items-center justify-between my-2">
              <div className="flex items-center justify-start gap-6">
                <FaCircle size={10} />
                <p className="leading-normal basis-5/6">
                  проектирование, монтаж, наладка, техническое обслуживание систем пожарной
                  сигнализации, систем оповещения и управления эвакуацией людей при пожаре, систем
                  противодымной вентиляции, установок пожаротушения автоматических;
                </p>
              </div>
              <FaEllipsisVertical size={15} />
            </li>
            <li className="flex items-center justify-between my-2">
              <div className="flex items-center justify-start gap-6">
                <FaCircle size={10} />
                <p className="leading-normal basis-5/6">
                  монтаж и наладка систем охранной сигнализации, систем видеонаблоюдения, систем
                  контроля и управления доступом (СКУД);
                </p>
              </div>
              <FaEllipsisVertical size={15} />
            </li>
            <li className="flex items-center justify-between my-2">
              <div className="flex items-center justify-start gap-6">
                <FaCircle size={10} />
                <p className="leading-normal basis-5/6">
                  капитальный ремонт, техническое обслуживание и перезарядка огнетушителей;
                </p>
              </div>
              <FaEllipsisVertical size={15} />
            </li>
            <li className="flex items-center justify-between my-2">
              <div className="flex items-center justify-start gap-6">
                <FaCircle size={10} />
                <p className="leading-normal basis-5/6">
                  огнезащитная обработка строительных конструкций (деревянные и металлические
                  конструкции, кабельная продукция, тканевые материалы);
                </p>
              </div>
              <FaEllipsisVertical size={15} />
            </li>
            <li className="flex items-center justify-between my-2">
              <div className="flex items-center justify-start gap-6">
                <FaCircle size={10} />
                <p className="leading-normal basis-5/6">
                  устройство и ремонт систем молниезащиты зданий и сооружений;
                </p>
              </div>
              <FaEllipsisVertical size={15} />
            </li> */}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Services;
