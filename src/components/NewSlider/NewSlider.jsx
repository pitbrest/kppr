import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../../appData/sliderData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./NewSlider.css";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const NewSlider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderData.map((i) => (
          <SwiperSlide>
            <img
              src={i.img}
              alt={i.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { NewSlider };
