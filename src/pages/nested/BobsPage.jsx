import React from "react";
import { Container } from "../../components/Container";
import Emkosti from "../../assets/images/emkosti.png";
import { BsFileEarmarkPdf } from "react-icons/bs";
import bobsData from "../../appData/bobsData";

function BobsPage() {
  return (
    <Container>
      <h3 className="min-[576px]:text-xl text-lg font-bold p-3 bg-[--color-teal] text-[--color-light] min-[576px]:mb-10 mb-5 min-[576px]:leading-7 !leading-tight min-[576px]:indent-8 min-[576px]:ps-0 ps-8">
        Состав огнебиозащитный пропиточный "БОБС"
      </h3>
      <div className="indent-8 text-justify  min-[1240px]:flex  gap-12">
        <div>
          <p>
            В 2010г. на предприятии налажено производство состава
            огнебиозащитного для защиты деревянных конструкций и материалов
            "БОБС" (далее - состав) по ТУ BY200274400.002-2010.
          </p>
          <p>
            Состав соответствует требованиям ТР ЕАЭС 043/2017 "О требованиях к
            средствам обеспечения пожарной безопасности и пожаротушения" и при
            расходе не менее 330 г/м² обеспечивает II группу огнезащитной
            эффективности (трудновоспламеняемая древесина) и биозащитные
            свойства. Харакетристики состава подтверждены испытаниями на
            огнезащитные свойства и защищающую способность по отношению к
            деревоокрашивающим и плесневым грибам.
          </p>
          <p>
            Срок сохранения огнезащитной эффективности обработанной составом
            древесины - не менее 5 лет при исключении воздействия на
            обработанные конструкции агрессивных сред, атмосферных осадков и
            соблюдении технологии нанесения огнезащитного состава.
          </p>
          <p>
            Cостав изготавливается с добавлением красителя красного цвета
            (облегчает идентификацию обработанных участков) так и в бесцветном
            (слабый желтоватый оттенок) исполнении. Состав в бесцветном
            исполнении изготавливается по предварительному согласованию и при
            единовременном заказе от 1000кг.
          </p>
          <p>
            Реализация состава осуществляется в канистрах ПЭНД фасовкой 10кг.
            Юридическим лицам допускается реализация состава в таре заказчика,
            при условии единовременного приобретения 1000кг состава и более и
            обеспечении покупателем возможности взвешивания тары с составом на
            весах.
          </p>
          <p>
            Работы по огнезащите деревянных конструкций составом должны
            выполняться в соответствии с регламентом его применения.
          </p>
        </div>
        <img
          className="max-[1240px]:mt-20 max-[1240px]:mx-auto"
          src={Emkosti}
          alt="tara"
        />
      </div>
      <hr className="mt-10" />
      <div className="mx-auto mt-5">
        <ul className="flex flex-wrap items-start justify-start gap-5">
          {bobsData.map((doc) => (
            <li
              className="w-24 h-30 px-2 py-2 rounded-sm text-center"
              key={doc.img}
            >
              <a
                href={doc.img}
                target="_blank"
                rel="noreferrer"
                download
                className="flex flex-col items-center justify-center gap-4"
              >
                <BsFileEarmarkPdf
                  size={50}
                  color="rgb(224 29 29)"
                />
                <p className="text-sm">{doc.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default BobsPage;
