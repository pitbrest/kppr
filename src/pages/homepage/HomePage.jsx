import { Container } from "../../components/Container";
import "./HomePage.css";
import { slidesData, createSlide } from "../../appData/slidesData";

import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function HomePage() {
  return (
    <>
      <Container>
        <section className="h-[60vh] slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {createSlide(slidesData)}
          </Swiper>
        </section>
      </Container>
    </>
  );
}

export default HomePage;
