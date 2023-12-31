import React from "react";
import Navbar from "./Navbar";
import BgImage from "/src/assets/images/bg-tablet-pattern.svg";
const Home = () => {
  return (
    <div
      name="home"
      className="bg-[url('/src/assets/images/bg-tablet-pattern.svg')] h-full w-full bg-no-repeat mb-18 md:mb-1 lg:bg-auto lg:bg-[right_-12rem_bottom_4rem]  bg-[length:450px_400px] bg-[right_-8rem_bottom_24rem]"
    >
      <Navbar />
      <div className="flex flex-col-reverse justify-center items-center  md:flex-row md:justify-evenly md:px-40 md:py-10">
        <div className="flex flex-col items-center gap-4 px-4 pb-16 text-center bg-[url('/src/assets/images/bg-tablet-pattern.svg')] bg-no-repeat w-full bg-[length:300px_200px] bg-[right_-10rem_top_6rem] md:text-left md:items-start md:bg-none md:w-3/5 md:gap-8">
          <h1 className="font-bold text-3xl md:text-5xl text-primary-dark-blue"> Bring everyone together to build better products.</h1>
          <p className="text-neutral-grayish-blue font-light text-md md:pr-36">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="bg-primary-bright-red hover:bg-neutral-pale-red text-white  py-2 px-4 w-32 rounded-full shadow-md shadow-primary-bright-red">
            Get Started
          </button>
        </div>
        <div>
          <img src="/src/assets/images/illustration-intro.svg" alt="Illustraion image" className="md:ml-12" />
        </div>
      </div>
    </div>
  );
};
export default Home;
