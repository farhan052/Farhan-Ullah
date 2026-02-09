"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { techStack } from "@/data/techStack";

const TechSwiper = () => {
  return (
    <div className="lg:w-1/4 hidden lg:flex justify-center items-center">
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={24}
        loop
        row={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-72 w-full"
      >
        {techStack.map((tech) => (
          <SwiperSlide key={tech.name}>
            <div
              className={`h-20 flex items-center gap-4 px-5 rounded-xl
              bg-gradient-to-r ${tech.gradient}
              shadow-lg`}
            >
              {/* Logo */}
              <Image
                src={tech.logo}
                alt={tech.name}
                width={32}
                height={32}
                className="object-contain"
              />
              {/* Name */}
              <span className="text-lg font-semibold text-white">
                {tech.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechSwiper;
