import { GiRotaryPhone } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const contacts = [
  { call: "Директор", name: "Плющеня Николай Николаевич", numbers: ["", "(+37529) 373-10-15"] },
  {
    call: "Приемная",
    name: "",
    numbers: ["(+375162) 25-94-01", "(+375162) 25-94-00"],
  },
  {
    call: "Главный бухгалтер",
    name: "Исакова Татьяна Павловна",
    numbers: ["", "(+37533) 672-15-31"],
  },
  {
    call: "Юрисконсульт",
    name: "Юревич Анастасия Валерьевна",
    numbers: ["", "(+37529) 207-37-00"],
  },
  {
    call: "Заместитель директора - главный инженер",
    name: "Петров Александр Анатольевич",
    numbers: ["", "(+37529) 806-51-52"],
  },

  {
    call: "Заместитель директора",
    name: "Овсяник Игорь Анатольевич",
    numbers: ["", "(+37529) 102-22-86"],
    direction: [
      "огнезащитная обработка, обучение пожарно-техническому минимуму (ПТМ), проверка противопожарного водоснабжения (пожарные краны и гидранты)",
    ],
  },
  {
    call: "Мастер",
    name: "Ковалевич Виктор Александрович",
    numbers: ["", "(+37529) 380-04-02"],
    direction: [
      "пожарная сигнализации, системы оповещения, установки пожаротушения, видеонаблюдение, домофонные системы, системы контроля и управления доступом",
    ],
  },
  {
    call: "Мастер",
    name: "Овсяник Татьяна Владимировна",
    numbers: ["", "(+37529) 222-67-92", "(+37529) 108-82-80", "(+375162) 25-94-07"],
    direction: [
      "пожарная сигнализации, системы оповещения, установки пожаротушения, видеонаблюдение, домофонные системы, системы контроля и управления доступом",
    ],
  },
  {
    call: "Магазин 101",
    name: "",
    numbers: ["(+375162) 25-94-05", "(+37529) 182-20-44", "(+37529) 107-85-53"],
    direction: [
      "торговля средствами противопожарной защиты, перезарядка и ремонт огнетушителей, разработка планов эвакуации",
    ],
  },
];

const filialsContacts = [
  {
    city: "г.Кобрин",
    adress: "ул.Советская, 25",
    eMail: "bdpokobrin@gmail.com",
    numbers: ["(+3751642) 3-85-52", "(+37529) 725-08-88"],

    map: "https://yandex.by/maps/-/CDuMiK-u",
  },
  {
    city: "г.Пружаны",
    adress: "ул.Комсомольская, 6 Б",
    eMail: "pruzhanybdpo@tut.by",
    numbers: ["(+3751632) 9-23-09", "(+37529) 795-26-81"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMiC~h",
  },
  {
    city: "г.Береза",
    adress: "ул.Пушкина, 12",
    eMail: "berezabdpo@mail.ru",
    numbers: ["(+3751643) 2-23-09", "(+37529) 860-53-59"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMiOnN",
  },
  {
    city: "г.Ивацевичи",
    adress: "ул.Зеленая, 6 A",
    eMail: "pogarnik.bdpo@bk.ru",
    numbers: ["(+3751645) 2-49-10", "(+37533) 606-38-82"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMiO3z",
  },
  {
    city: "г.Дрогичин",
    adress: "ул.Октябрьская, 24 A",
    eMail: "drogichinbdpo@mail.ru",
    numbers: ["(+3751644) 3-14-14", "(+37529) 672-14-47"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMiS8-",
  },
  {
    city: "г.Пинск",
    adress: "ул.Базовая, 16 Б",
    eMail: "pinsk_kppr@mail.ru",
    numbers: ["(+375165) 31-60-86", "(+375165) 65-09-11", "(+37529) 313-62-01"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMiWI2",
  },
  {
    city: "г.Иваново",
    adress: "ул.Карла Маркса, 39/1",
    eMail: "zhushma77@bk.ru",
    numbers: ["", "(+37529) 800-18-55"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMiWoA",
  },
  {
    city: "г.Лунинец",
    adress: "ул.Октябрьская, 24",
    eMail: "luninets_direktsiya@mail.ru",
    numbers: ["(+3751647) 2-06-28", "(+37529) 199-37-04"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMi05L",
  },
  {
    city: "г.Столин",
    adress: "ул.Советская, 75",
    eMail: "stolindpo@mail.ru",
    numbers: ["(+3751655) 2-85-45", "(+37529) 173-31-18"],
    sections: null,
    map: "https://yandex.by/maps/-/CDuMi0l1",
  },
  {
    city: "г.Барановичи",
    adress: "ул.Войкова, 23 A",
    eMail: "bkppr@bk.ru",
    numbers: ["(+3751636) 6-53-85", "(+3751636) 6-53-84"],
    sections: [
      {
        call: "Мастер",
        name: "",
        numbers: ["", "(+37529) 641-11-62"],
        direction: ["общие вопросы"],
      },
      {
        call: "Мастер",
        name: "",
        numbers: ["", "(+37544) 774-30-44"],
        direction: ["пожарная сигнализации, системы оповещения, электромонтажные работы"],
      },
      {
        call: "Прием заказов",
        name: "",
        numbers: ["", "(+37529) 807-23-79"],
        direction: ["прием заказов (заявок), касающихся деятельности предприятия"],
      },
    ],
    map: "https://yandex.by/maps/-/CDuMi8Jm",
  },
];

const formatNumber = (number) => {
  return (
    "tel:" +
    number
      .split("(")[1]
      .split(")")
      .map((i, idx) => (idx === 0 ? i : i.trim()))
      .map((i, idx) => (idx === 1 ? i.split("-").join("") : i))
      .join("")
  );
};

const numbersHandler = (numbers) => {
  return numbers.map((number, idx) => {
    if (idx === 0 && number.length !== 0) {
      return (
        <div
          className="flex items-center justify-start gap-3"
          key={number}
        >
          <MdOutlineFax />
          <p>{number}</p>
        </div>
      );
    }
    if (idx !== 0 && number.includes("37516")) {
      return (
        <div
          className="flex items-center justify-start gap-3"
          key={number}
        >
          <GiRotaryPhone />
          <a href={formatNumber(number)}>{number}</a>
        </div>
      );
    }
    if (idx !== 0 && !number.includes("37516")) {
      return (
        <div
          className="flex items-center justify-start gap-3"
          key={number}
        >
          <MdPhoneIphone />
          <a href={formatNumber(number)}>{number}</a>
        </div>
      );
    }
    return null;
  });
};

const createContactsItem = (data) => {
  return data.map((item) => {
    const { call, name, numbers } = item;

    return (
      <div
        key={item.numbers}
        className="border rounded-sm p-3"
      >
        <p className="font-extrabold">{call}</p>
        <div className="main-contacts">
          <div className="flex flex-col basis-2/3">
            <p className="py-2 font-medium">{name}</p>
            {item.direction && (
              <p className="pb-4 max-w-[90%]">
                <span className="font-bold">Направления : </span>
                <span className="">{item.direction}</span>
              </p>
            )}
          </div>
          <div className="flex items-start justify-start gap-1 flex-col">
            {numbersHandler(numbers)}
          </div>
        </div>
      </div>
    );
  });
};

const createFilialContactsItem = (data) => {
  return data.map((item) => {
    const { city, adress, eMail, numbers, sections, map = null } = item;

    return (
      <div
        key={item.city}
        className="flex flex-col min-[5px]:flex-row min-[576px] justify-between border rounded-sm p-3"
      >
        <div className="">
          <a
            href={map}
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-extrabold">{city}</p>
            {adress}
          </a>
          <p className="flex items-center gap-2 my-2">
            <IoIosMail />
            <a href={`mailto:${eMail}`}>{eMail}</a>
          </p>
          <div className="flex flex-col gap-[3px]">{numbersHandler(numbers)}</div>
          <div className="baranovichi">{sections && createContactsItem(sections)}</div>
        </div>
      </div>
    );
  });
};

export { contacts, filialsContacts, createContactsItem, createFilialContactsItem };
