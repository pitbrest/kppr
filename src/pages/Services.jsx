import { Container } from "../components/Container";
import { productionHandler, servicesHandler } from "../appData/servicesData";
import { PageRedirection } from "../components/page-navigation/PageNavigation";

function Services() {
  return (
    <Container>
      <div
        id="accordionExample"
        className="max-w-7xl mx-auto text-[--fc-dark] max-2xl:px-10"
      >
        <div className="text-base mb-20 min-[576px]:leading-7 leading-normal">
          <ul className="mb-20">
            <p className="text-2xl font-bold p-3 bg-[--color-teal] text-[--color-light] mb-10">
              Выполняем строительно-монтажные работы противопожарного профиля а также в смежных
              направлениях
            </p>
            {productionHandler()}
          </ul>
          <ul>
            <p className="text-2xl font-bold p-3 bg-[--color-teal] text-[--color-light] mb-10">
              Оказываем услуги
            </p>
            {servicesHandler()}
          </ul>
        </div>
        <PageRedirection />
      </div>
    </Container>
  );
}

export default Services;
