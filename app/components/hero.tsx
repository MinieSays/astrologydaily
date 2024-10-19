"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Navigation, Autoplay } from "swiper/modules";

const images = [
  {
    src: "/taurus.jpg",
    text: "Image 1 Caption",
  },
  {
    src: "/MidheavenTaurus.jpg",
    text: "Image 2 Caption",
  },
  {
    src: "/leo1.jpg",
    text: "Image 3 Caption",
  },
];

const Slider = () => {
  return (
    <div className="hero">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slider__container">
              <img
                src={image.src}
                className="slider__image"
                alt={`Slide ${index + 1}`}
              />
              <div className="slider__text--container">
                <h2 className="slider__tilte">{image.text}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom buttons */}
      <button className="custom-prev">Prev</button>
      <button className="custom-next">Next</button>
    </div>
  );
};

export default Slider;
