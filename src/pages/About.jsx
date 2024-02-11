import { Container } from "../components/Container";
import Button from "../components/button/Button";
import { PageNavigation } from "../components/page-navigation/PageNavigation";
import { GiPlainCircle } from "react-icons/gi";

function About() {
  return (
    <Container>
      <div className="about-wrapper about px-5 bg-opacity-80 max-w-5xl mx-auto">
        <h5 className="font-extrabold uppercase pb-10 text-center">О предприятии</h5>
        <p>
          <b>
            Унитарное предприятие "Брестский областной комбинат противопожарных работ" РГОО "БДПО"
          </b>
          <span> </span>
          входит в структуру предприятий <span> </span>
          <a
            href="https://bdpo.by/ob-obshhestve/"
            target="_blank"
            rel="noreferrer"
          >
            Республиканского государственно-общественного объединения "Белорусское добровольное
            пожарное общество".
          </a>
          <span> </span>В структуре объединения функционирует 11 производственных предприятий,
          включающих в себя 41 районный производственный участок.
        </p>
        <p className="pt-2">
          Предприятия структуры РГОО «БДПО» специализируются на противопожарных работах и услугах а
          также взаимодействуют с местными исполнительными и распорядительными органами по вопросам
          предупреждения пожаров. Одновременно развивается собственное производство предприятий
          структуры, представленное на данном этапе развития производством огнетушителей, автономных
          пожарных извещателей, огнезащитных составов для деревянных конструкций и пр.
        </p>
        <br />
        <p>
          <span className="font-medium">
            Унитарное предприятие "Брестский областной комбинат противопожарных работ" РГОО "БДПО"
          </span>
          <span> </span>
          включает в себя головное предприятие в г.Бресте и производственные участки в в районных
          центрах Брестской области: г.Кобрин, г.Пружаны, г.Береза, г.Ивацевичи, г.Барановичи,
          г.Дрогичин, г.Пинск, г.Лунинец и г.Столин.
        </p>
        <br />
        <h6 className="font-bold underline">Производственная деятельность:</h6>
        <ul className="ps-6">
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              проектирование, монтаж, наладка, техническое обслуживание систем пожарной
              сигнализации, систем оповещения и управления эвакуацией людей при пожаре, систем
              противодымной вентиляции, установок пожаротушения автоматических;
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              капитальный ремонт (перезарядка) огнетушителей;
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              выполнение работ с применением огнезащитных составов, лаков, красок, штукатурок;
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              монтаж и наладка систем охранной сигнализации, систем видеонаблоюдения, систем
              контроля и управления доступом (СКУД);
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              устройство и ремонт систем молниезащиты зданий и сооружений;
            </p>
          </li>
        </ul>
        <br />
        <h6 className="font-bold underline ">Услуги:</h6>
        <ul className="ps-6">
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              торговля средствами противопожарной защиты, пожарным оборудованием и сопутствующими
              товарами;
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              проверка технического состояния дымовых и вентиляционных каналов, определение
              воздухообмена, проверка дымовых каналов на наличие тяги;
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              подготовка по программе пожарно-технического минимума (ПТМ)
            </p>
          </li>
          <li>
            <p>
              <GiPlainCircle
                className="me-2 inline"
                size={7}
              />
              разработка проектов пожарной автоматики, планов эвакуации людей при пожаре, схем
              движения транспорта и пр.
            </p>
          </li>
        </ul>
        <div className="mt-10 flex justify-end gap-5">
          <Button
            title="На главную"
            src="/"
          />
          <Button
            title="Контакты"
            src="/contacts"
          />
        </div>
      </div>
      <PageNavigation />
    </Container>
  );
}

export default About;
