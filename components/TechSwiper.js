"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { techStack } from "@/data/techStack";

const TechSwiper = () => {
  return (
    <div className="lg:w-1/4 w-64 hidden lg:block">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={24}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-72"
      >
        {techStack.map((tech) => (
          <SwiperSlide key={tech.name}>
            <div
              className={`h-20 flex items-center justify-center rounded-xl
              bg-gradient-to-r ${tech.color}
              text-lg font-semibold text-black shadow-lg`}
            >
              {tech.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechSwiper;
