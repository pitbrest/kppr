import Ognetushiteli from "../assets/images/commerce/ognetushiteli.png";
import PogarniyShkaf from "../assets/images/commerce/pog-shkaf.png";
import PogarniySchit from "../assets/images/commerce/pog-schit.png";
import PogarnayaKolonka from "../assets/images/commerce/kolonka-pozharnaya.png";
import Izveschatel from "../assets/images/commerce/izveschatel.png";
import Znaki from "../assets/images/commerce/znaki-tablichki.png";
import Aptechka from "../assets/images/commerce/aptechka.png";
import Protivogaz from "../assets/images/commerce/protivogaz.png";
import Dveri from "../assets/images/commerce/dveri.jpg";
import Molniepriemnik from "../assets/images/commerce/molniepriemnik.png";
import Provodnik from "../assets/images/commerce/provodnik.png";
import Derzhateli from "../assets/images/commerce/derzhateli.png";
import Zazhimi from "../assets/images/commerce/zazhimi.png";
import Komplekti from "../assets/images/commerce/komplekti.png";
import Bobs from "../assets/images/commerce/bobs.png";
import KMD_O_M from "../assets/images/commerce/kmd-o-m.png";

import { useNavigate } from "react-router-dom";

const commerceData1 = [
  { title: `Огнетушители \n и сопутствующие товары`, img: Ognetushiteli },
  { title: "Пожарные шкафы \n и их наполнение", img: PogarniyShkaf },
  { title: "Пожарные щиты, ящики и инвентарь", img: PogarniySchit },
  { title: "Пожарные колонки, гидранты", img: PogarnayaKolonka },
  {
    title: "Автономные пожарные извещатели, сигнализаторы загазованности и пр.",
    img: Izveschatel,
  },
  {
    title: "Информационные таблички, наклейки, тематические стенды",
    img: Znaki,
  },
  {
    title: "Автомобильная аптечка, знак аварийной остановки и пр.",
    img: Aptechka,
  },
  {
    title: "Самоспасатели, противогазы",
    img: Protivogaz,
  },
  {
    title: "Двери металлические в т.ч. противопожарные ",
    img: Dveri,
  },
];
const commerceData2 = [
  { title: `Молниеприемники`, img: Molniepriemnik },
  { title: `Проводники и токоотводы`, img: Provodnik },
  { title: `Держатели проводника`, img: Derzhateli },
  { title: `Зажимы проводника`, img: Zazhimi },
  {
    title: `Комплекты для заземления и вспомогательные материалы`,
    img: Komplekti,
  },
];
const commerceData3 = [
  {
    title: `Огнебиозащитный состав \n для древесины "БОБС`,
    img: Bobs,
    src: "bobs",
  },
  { title: `Огнезащитный состав для м/к КМД-О-Металл`, img: KMD_O_M },
];

function CommerceDataContent(data) {
  const navigate = useNavigate();
  return data.map((item) => (
    <div
      className="commerce-item min-[576px]:px-5 px-2 min-[576px]:py-4 py-2 min-[768px]:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-none flex flex-col gap-2 justify-between items-center rounded-sm border border-[#d1d1d1] h-[280px]"
      key={item.title}
      onClick={() => (item.src ? navigate(item.src) : null)}
    >
      <img
        className="basis-2/3 object-center h-2/3"
        src={item.img}
        alt=""
      />
      <h6 className="font-medium text-sm text-center flex items-center basis-1/3">
        {item.title}
      </h6>
    </div>
  ));
}

export { CommerceDataContent, commerceData1, commerceData2, commerceData3 };
