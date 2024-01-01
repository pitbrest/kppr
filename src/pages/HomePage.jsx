import { Container } from "../components/Container";
import Img from "../assets/images/0008_009_.png";

function HomePage() {
  return (
    <>
      <Container>
        HomePage
        <div className="flex justify-center">
          <img
            src={Img}
            alt=""
          />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
