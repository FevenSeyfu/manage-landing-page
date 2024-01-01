import React from "react";
import CarouselSlider from "./CarouselSlider";

const Testimonials = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center border  text-center gap-4 justify-center">
      <h1 className="text-3xl font-bold md:text-4xl  text-primary-dark-blue md:mb-24">
        What they’ve said
      </h1>
      <div className="md:hidden">
        <CarouselSlider />
      </div>
      <div className="hidden md:flex flex-row">
        <div className="flex flex-col items-center gap-2 bg-neutral-light-gray rounded-lg mx-4 px-4 pb-4">
          <img
            src="src/assets/images/avatar-anisha.png"
            alt="profile image"
            className="w-12 h-12 md:h-24 md:w-24 relative bottom-6 md:bottom-12 "
          />
          <h2 className="font-bold text-primary-dark-blue"> Anisha Li</h2>
          <p className="text-neutral-grayish-blue mb-4">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-neutral-light-gray rounded-lg mx-4 px-4 pb-4">
          <img
            src="src/assets/images/avatar-ali.png"
            alt="profile image"
            className="w-12 h-12 md:h-24 md:w-24 relative bottom-6 md:bottom-12 "
          />
          <h2 className="font-bold text-primary-dark-blue">Ali Bravo</h2>
          <p className="text-neutral-grayish-blue mb-4">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-neutral-light-gray rounded-lg mx-4 px-4 pb-4">
          <img
            src="src/assets/images/avatar-richard.png"
            alt="profile image"
            className="w-12 h-12 md:h-24 md:w-24 relative bottom-6 md:bottom-12 "
          />
          <h2 className="font-bold text-primary-dark-blue">Richard Watts</h2>
          <p className="text-neutral-grayish-blue mb-4">
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-neutral-light-gray rounded-lg mx-4 px-4 pb-4">
          <img
            src="src/assets/images/avatar-shanai.png"
            alt="profile image"
            className="w-12 h-12 md:h-24 md:w-24 relative bottom-6 md:bottom-12 "
          />
          <h2 className="font-bold text-primary-dark-blue">Shanai Gough</h2>
          <p className="text-neutral-grayish-blue mb-4">
          “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without being
            intrusive.”
          </p>
        </div>
      </div>
      <button className="bg-primary-bright-red hover:bg-neutral-pale-red text-white  py-2 px-4 w-32 rounded-full shadow-md shadow-primary-bright-red">
        Get Started
      </button>
    </div>
  );
};

export default Testimonials;
