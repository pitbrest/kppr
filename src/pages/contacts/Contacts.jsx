import "./Contacts.css";
import { Container } from "../../components/Container";
import { useSelector } from "react-redux";
import { contactsItem } from "../../store/contactsSlice/contactsData";
import { IoIosMail } from "react-icons/io";

function Contacts() {
  const contacts = useSelector((state) => state.contactsReducer.contacts);

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
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold py-2">
                    Унитарное предприятие "Брестский областной комбинат противопожарных работ" РГОО
                    "БДПО"
                  </p>
                  <p className="text-sm">224032, г.Брест, ул.Советской Конституции, 30-1</p>
                  <div className="flex items-center gap-2 font-medium">
                    <IoIosMail />
                    <a href="mailto:bokppr.@mail.ru"> bokppr.@mail.ru</a>
                  </div>

                  <ul className="cont">{contactsItem(contacts)}</ul>
                </div>
              </div>
              <hr className="my-2" />
              <div className="pt-4">
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
      </Container>
    </section>
  );
}

export default Contacts;
