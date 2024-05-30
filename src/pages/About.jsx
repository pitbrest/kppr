import { Container } from "../components/Container";
import { PageRedirection } from "../components/page-navigation/PageNavigation";
import Belarus from "../assets/images/belarus.png";

function About() {
  return (
    <Container>
      <div className="about-wrapper about min-[576px]:px-5 px-2 bg-opacity-80 max-w-5xl mx-auto min-[576px]:text-base text-sm">
        <h5 className="font-extrabold uppercase py-3 min-[576px]:mb-10 mb-7 text-center bg-[--color-teal] text-[--color-light]">
          О предприятии
        </h5>
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
        <p className="pt-3">
          Предприятия структуры РГОО «БДПО» специализируются на противопожарных работах и услугах а
          также взаимодействуют с местными исполнительными и распорядительными органами по вопросам
          предупреждения пожаров. Одновременно развивается собственное производство предприятий
          структуры, представленное на данном этапе развития производством огнетушителей, автономных
          пожарных извещателей, огнезащитных составов для деревянных конструкций и пр.
        </p>

        <p className="pt-3 mb-2">
          <span className="font-medium">
            Унитарное предприятие "Брестский областной комбинат противопожарных работ" РГОО "БДПО"
          </span>
          <span> </span>
          включает в себя головное предприятие в г.Бресте и производственные участки в в районных
          центрах Брестской области: г.Кобрин, г.Пружаны, г.Береза, г.Ивацевичи, г.Барановичи,
          г.Дрогичин, г.Пинск, г.Лунинец и г.Столин.
        </p>
        <img
          className="mx-auto mb-8 min-[576px]:max-w-lg max-w-[90%]"
          src={Belarus}
          alt="map_of_Belarus"
        />
        <PageRedirection alt />
      </div>
    </Container>
  );
}

export default About;
