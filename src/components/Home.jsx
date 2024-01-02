import React from "react";
import Navbar from "./Navbar";
import BgImage from "/src/assets/images/bg-tablet-pattern.svg";
import IntroIllustration from '../assets/images/illustration-intro.svg'
const Home = () => {
  return (
    <div
      name="home"
      className="bg-[url('/src/assets/images/bg-tablet-pattern.svg')] h-full w-full bg-no-repeat mb-18 lg:mb-1 lg:bg-auto lg:bg-[right_-12rem_bottom_4rem]  bg-[length:450px_400px] bg-[right_-8rem_bottom_24rem]"
    >
      <Navbar />
      <div className="flex flex-col-reverse justify-center items-center  lg:flex-row lg:justify-evenly lg:px-40 lg:py-10">
        <div className="flex flex-col items-center gap-4 px-4 pb-16 text-center bg-[url('/src/assets/images/bg-tablet-pattern.svg')] bg-no-repeat w-full bg-[length:300px_200px] bg-[right_-10rem_top_6rem] lg:text-left lg:items-start lg:bg-none lg:w-3/5 lg:gap-8">
          <h1 className="font-bold text-3xl lg:text-5xl text-primary-dark-blue"> Bring everyone together to build better products.</h1>
          <p className="text-neutral-grayish-blue font-light text-md lg:pr-36">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="bg-primary-bright-red hover:hover:opacity-75  text-white  py-2 px-4 w-32 rounded-full shadow-md shadow-primary-bright-red">
            Get Started
          </button>
        </div>
        <div>
          <img src={IntroIllustration} alt="Illustraion image" className="lg:ml-12" />
        </div>
      </div>
    </div>
  );
};
export default Home;
