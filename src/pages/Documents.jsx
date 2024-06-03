import { Container } from "../components/Container";
import { BsFileEarmarkPdf } from "react-icons/bs";
import docsData from "../appData/documentsData";

function Documents() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <ul className="flex flex-wrap items-start justify-center gap-10">
          {docsData.map((doc) => (
            <li
              className="w-40 h-36 px-5 py-2 rounded-sm text-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
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

export default Documents;
