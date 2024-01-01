import React,{useState} from "react";
import slides from "../Testimony_Data.js";

const CarouselSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex flex-col items-center bg-neutral-light-gray rounded-lg mx-4 px-4 pb-4 w-full transition-transform duration-300 transform ${
              index === currentSlide ? "visible" : "hidden"
            }`}
          >
            <img
              src={slide.profileImg}
              alt="profile image"
              className="w-12 h-12 relative bottom-6"
            />
            <h2 className="font-bold text-primary-dark-blue">
              {slide.user_name}
            </h2>
            <p className="text-neutral-grayish-blue mb-4">{slide.testimony}</p>
          </div>
        ))}
      </div>
      <div className="flex my-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 mx-1 border rounded-full border-primary-bright-red ${
              index === currentSlide ? "bg-primary-bright-red" : "opacity-50"
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
