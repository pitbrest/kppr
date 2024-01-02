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
];

const filialsContacts = [
  {
    city: "г.Кобрин",
    adress: "ул.Советская, 25",
    eMail: "bdpokobrin@gmail.com",
    numbers: ["(+3751642) 3-85-52", "(+37529) 725-08-88"],
    map: (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.by/maps/26010/kobrin/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}
        >
          Кобрин
        </a>
        <a
          href="https://yandex.by/maps/26010/kobrin/?from=mapframe&ll=24.354413%2C52.211471&mode=routes&rtext=~52.211583%2C24.354405&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyNDg5Nzc2MDQyEmTQkdC10LvQsNGA0YPRgdGMLCDQkdGA0Y3RgdGG0LrQsNGPINCy0L7QsdC70LDRgdGG0YwsINCa0L7QsdGA0YvQvSwg0KHQsNCy0LXRhtC60LDRjyDQstGD0LvRltGG0LAsIDI1IgoN0dXCQRWq2FBC&source=mapframe&utm_medium=mapframe&utm_source=maps&z=18"
          style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
        >
          Советская улица, 25: – Яндекс Карты
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/?from=mapframe&ll=24.353951%2C52.211675&mode=whatshere&source=mapframe&utm_source=mapframe&whatshere%5Bpoint%5D=24.354334%2C52.211479&whatshere%5Bzoom%5D=17&z=18.25"
          width="230"
          height="200"
          allowFullScreen={true}
          style={{ position: "relative" }}
          title="title"
        ></iframe>
      </div>
    ),
  },
  {
    city: "г.Пружаны",
    adress: "ул.Комсомольская, 6 Б",
    eMail: "pruzhanybdpo@tut.by",
    numbers: ["(+3751632) 9-23-09", "(+37529) 795-26-81"],
    map: (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.by/maps/26929/pruzhany/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}
        >
          Пружаны
        </a>
        <a
          href="https://yandex.by/maps/26929/pruzhany/house/Zk0YcgJlSUYCQFtofXl0eHhiYg==/?ll=24.455034%2C52.559416&utm_medium=mapframe&utm_source=maps&z=17.25"
          style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
        >
          Комсомольская улица, 6Б — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/?ll=24.455034%2C52.559416&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NjM4MzU3NTEzEnzQkdC10LvQsNGA0YPRgdGMLCDQkdGA0Y3RgdGG0LrQsNGPINCy0L7QsdC70LDRgdGG0YwsINCz0L7RgNCw0LQg0J_RgNGD0LbQsNC90YssINCa0LDQvNGB0LDQvNC-0LvRjNGB0LrQsNGPINCy0YPQu9GW0YbQsCwgNtCRIgoN6KPDQRXYPFJC&z=17.25"
          width="230"
          height="200"
          allowFullScreen={true}
          style={{ position: "relative" }}
          title="title"
        ></iframe>
      </div>
    ),
  },
  {
    city: "г.Береза",
    adress: "ул.Пушкина, 12",
    eMail: "berezabdpo@mail.ru",
    numbers: ["(+3751643) 2-23-09", "(+37529) 860-53-59"],
  },
  {
    city: "г.Ивацевичи",
    adress: "ул.Зеленая, 6 A",
    eMail: "pogarnik.bdpo@bk.ru",
    numbers: ["(+3751645) 2-49-10", "(+37533) 606-38-82"],
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
  },
  {
    city: "г.Дрогичин",
    adress: "ул.Октябрьская, 24 A",
    eMail: "drogichinbdpo@mail.ru",
    numbers: ["(+3751644) 3-14-14", "(+37529) 672-14-47"],
  },
  {
    city: "г.Пинск",
    adress: "ул.Базовая, 16 Б",
    eMail: "pinsk_kppr@mail.ru",
    numbers: ["(+375165) 31-60-86", "(+375165) 65-09-11", "(+37529) 313-62-01"],
  },
  {
    city: "г.Иваново",
    adress: "ул.Карла Маркса, 39/1",
    eMail: "zhushma77@bk.ru",
    numbers: ["", "(+37529) 800-18-55"],
  },
  {
    city: "г.Лунинец",
    adress: "ул.Октябрьская, 24",
    eMail: "luninets_direktsiya@mail.ru",
    numbers: ["(+3751647) 2-06-28", "(+37529) 199-37-04"],
  },
  {
    city: "г.Столин",
    adress: "ул.Советская, 75",
    eMail: "stolindpo@mail.ru",
    numbers: ["(+3751655) 2-85-45", "(+37529) 173-31-18"],
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
        key={item.name}
        className=""
      >
        <hr className="my-2" />
        <p className="font-bold">{call}</p>
        <li className="flex items-start min-[1024px]:justify-between max-[1023px]:w-full min-[1024px]:flex-row flex-col">
          <div className="flex flex-col basis-2/3">
            <p className="py-2">{name}</p>
            {item.direction && (
              <p className="pb-4 max-w-[90%]">
                <span className="font-medium">Направления : </span>
                <span className="">{item.direction}</span>
              </p>
            )}
          </div>
          <div className="flex items-start justify-start gap-3 flex-col">
            {numbersHandler(numbers)}
          </div>
        </li>
      </div>
    );
  });
};

const createFilialContactsItem = (data) => {
  return data.map((item) => {
    const { city, adress, eMail, numbers, sections = null, map = null } = item;

    return (
      <div
        key={item.city}
        className="flex justify-between border p-2"
      >
        <div className="">
          <p className="font-bold pb-2">{city}</p>
          <p>{adress}</p>
          <p className="flex items-center gap-2">
            <IoIosMail /> <span>{eMail}</span>
          </p>
          <div className="py-2">{numbersHandler(numbers)}</div>
        </div>
        {map && <div className="">{map}</div>}
      </div>
    );
  });
};

export { contacts, filialsContacts, createContactsItem, createFilialContactsItem };
