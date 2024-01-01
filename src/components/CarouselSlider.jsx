import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = () => {
  return (
    <div className="flex flex-col items-center gap-2 bg-neutral-light-gray rounded-lg mx-4 px-4 pb-4">
      <img
        src={testimony.userImg}
        alt="profile image"
        className="w-12 h-12 md:h-24 md:w-24 relative bottom-6 md:bottom-12 "
      />
      <h2 className="font-bold text-primary-dark-blue">{testimony.userName}</h2>
      <p className="text-neutral-grayish-blue mb-4">
        {testimony.text}
      </p>
    </div>
  );
};

export default CarouselSlider;
