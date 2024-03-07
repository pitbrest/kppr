import { Container } from "../components/Container";
import { FaCircle } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { productionHandler, servicesHandler } from "../appData/servicesData";

function Services() {
  return (
    <Container>
      <div
        id="accordionExample"
        className="max-w-7xl mx-auto text-[--fc-dark] max-2xl:px-10"
      >
        <div className="text-base mb-10 min-[576px]:leading-7 leading-normal">
          <ul className="mb-20">
            <p className="text-2xl font-bold p-5 bg-[--color-teal] text-[--color-light]">
              Выполняем строительно-монтажные работы противопожарного профиля а также в смежных
              направлениях
            </p>
            {productionHandler()}
          </ul>
          <ul>
            <p className="text-2xl font-bold p-5 bg-[--color-teal] text-[--color-light]">
              Оказываем услуги
            </p>
            {servicesHandler()}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Services;
