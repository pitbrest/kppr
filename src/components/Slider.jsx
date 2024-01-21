// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Slider = ({ children }) => (
  <Swiper
    spaceBetween={30}
    speed={2000}
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
    {children}
  </Swiper>
);

export { Slider };
