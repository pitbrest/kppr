import "./Contacts.css";
import { Container } from "../../components/Container";
import { PageNavigation } from "../../components/page-navigation/PageNavigation";
import {
  contacts,
  filialsContacts,
  createContactsItem,
  createFilialContactsItem,
  pageScrollingHandler,
} from "../../appData/contactsData";
import { IoIosMail } from "react-icons/io";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Contacts() {
  const screenWidth = window.screen.width;

  return (
    <section className="break-words">
      <Container>
        <div className="">
          <div className="info-wrapper flex items-start justify-start flex-wrap text-sm">
            <div className="w-full">
              <div className="w-full bg-[--bgc-dark] text-[--fc-light] flex items-center">
                <h3 className="text-sm min-[576px]:text-lg font-extrabold py-2 min-[576px]:py-4 ps-6">
                  Головное предприятие в г.Бресте
                </h3>
              </div>
              <div className="flex flex-nowrap justify-between mt-1">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between flex-wrap gap-4 min-[576px]:flex-nowrap border-b border-t mt-2">
                    <div className="flex flex-col gap-2 pb-2 px-2">
                      <h4 className="text-sm font-semibold mt-2">
                        Унитарное предприятие "Брестский областной комбинат противопожарных работ"
                        РГОО "БДПО"
                      </h4>
                      <a
                        href="https://yandex.by/maps/-/CDuQbSKR"
                        className="text-sm"
                        target="_blank"
                        rel="noreferrer"
                      >
                        224032, г.Брест, ул.Советской Конституции, 30-1
                      </a>
                      <div className="flex items-center gap-2 font-medium">
                        <IoIosMail />
                        <a href="mailto:bokppr.@mail.ru"> bokppr.@mail.ru</a>
                      </div>
                    </div>
                  </div>
                  <div className="cont py-3">{createContactsItem(contacts)}</div>
                </div>
                <hr className="my-2" />
              </div>
              <div className="w-full">
                <h3 className="text-sm min-[576px]:text-lg font-extrabold py-2 min-[576px]:py-4 ps-6 mb-3 bg-[--bgc-dark] text-[--fc-light] flex items-center hyphens-auto">
                  Производственные участки в &shy; районных центрах &shy; Брестской области
                </h3>
                <div className="filials-container">{createFilialContactsItem(filialsContacts)}</div>
              </div>
            </div>
          </div>
        </div>

        <PageNavigation />
      </Container>
    </section>
  );
}

export default Contacts;
