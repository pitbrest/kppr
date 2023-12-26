import "./Contacts.css";
import { Container } from "../../components/Container";

import { GiRotaryPhone } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";

function Contacts() {
  return (
    <section className="break-words">
      <Container>
        <div className="p-2">
          <div className="info-wrapper border flex items-start justify-start flex-wrap text-sm">
            <div className="w-full p-2">
              <div className="border-b w-full">
                <h3 className="text-lg font-bold py-5">Головное предприятие в г.Бресте</h3>
              </div>
              <div className="flex gap-10 min-[1024px]:flex-nowrap flex-wrap justify-between">
                <div className="">
                  <p className="text-sm font-semibold py-2">
                    Унитарное предприятие "Брестский областной комбинат противопожарных работ" РГОО
                    "БДПО"
                  </p>
                  <p className="text-sm">224032, г.Брест, ул.Советской Конституции, 30-1</p>
                  <ul>{contactsItem(contacts)}</ul>
                </div>

                <div className="">
                  <iframe
                    className="max-[576px]:w-[270px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.5907354431627!2d23.756303107889117!3d52.10952477553894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210ea2e5811af7%3A0x6a7424e24d86bcfe!2z0JHRgNC10YHRgtGB0LrQuNC5INC-0LHQu9Cw0YHRgtC90L7QuSDQutC-0LzQsdC40L3QsNGCINC_0YDQvtGC0LjQstC-0L_QvtC20LDRgNC90YvRhSDRgNCw0LHQvtGCINCn0J_QotCj0J8!5e0!3m2!1sru!2sby!4v1703526322880!5m2!1sru!2sby"
                    width="400"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="google-map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;

const contactsItem = (data) => {
  return data.map((item) => {
    const { call, name, numbers } = item;

    return (
      <div key={item.name}>
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
