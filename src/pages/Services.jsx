import { Container } from "../components/Container";
import { productionHandler, servicesHandler } from "../appData/servicesData";
import { PageRedirection } from "../components/page-navigation/PageNavigation";

function Services() {
  return (
    <Container>
      <div className="max-w-7xl mx-auto text-[--fc-dark] min-[576px]:px-10 px-2">
        <div className="text-base min-[576px]:mb-20 mb-10">
          <ul className="min-[576px]:mb-20 mb-10">
            <p className="min-[576px]:text-xl text-lg font-bold p-3 bg-[--color-teal] text-[--color-light] min-[576px]:mb-10 mb-5 min-[576px]:leading-7 !leading-tight">
              Выполняем строительно-монтажные работы противопожарного профиля а также в смежных
              направлениях
            </p>
            {productionHandler()}
          </ul>
          <ul>
            <p className="min-[576px]:text-xl text-lg font-bold p-3 bg-[--color-teal] text-[--color-light] min-[576px]:mb-10 mb-5 min-[576px]:leading-7 !leading-tight">
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
