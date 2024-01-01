import { GiRotaryPhone } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";

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

const contactsItem = (data) => {
  return data.map((item) => {
    const { call, name, numbers } = item;

    return (
      <div
        key={item.name}
        className=""
      >
        <hr className="my-2" />
        <p className="font-medium">{call}</p>
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

export { contacts, contactsItem };
