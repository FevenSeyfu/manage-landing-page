import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col h-full mb-24  text-center  gap-4 lg:flex-row lg:h-full lg:px-40 lg:text-left">
      <div className="gap-3 flex flex-col px-6 mb-4">
        <h1 className=" text-primary-dark-blue text-3xl font-bold lg:text-4xl">
          What’s different about Manage?
        </h1>
        <p className="text-neutral-grayish-blue lg:w-4/5">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="text-left ml-4 lg:w-4/5">
        <ol className="flex flex-col gap-4 mb-6">
          <li>
            <div className="flex items-center bg-neutral-pale-red my-2   lg:bg-white">
              <span className="bg-primary-bright-red text-white p-2 px-4 rounded-full ">
                01
              </span>
              <h2 className="font-bold text-lg lg:pl-4"> Track company-wide progress</h2>
            </div>
            <p className="text-neutral-grayish-blue lg:ml-16">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </li>
          <li>
            <div className="flex items-center bg-neutral-pale-red my-2   lg:bg-white">
              <span className="bg-primary-bright-red text-white p-2 px-4 rounded-full ">
                02
              </span>
              <h2 className="font-bold text-lg lg:pl-4">Advanced built-in reports</h2>
            </div>
            <p className="text-neutral-grayish-blue lg:ml-16">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </li>
          <li>
            <div className="flex items-center bg-neutral-pale-red my-2   lg:bg-white">
              <span className="bg-primary-bright-red text-white p-2 px-4 rounded-full ">
                03
              </span>
              <h2 className="font-bold text-lg lg:pl-4">Everything you need in one place</h2>
            </div>
            <p className="text-neutral-grayish-blue lg:ml-16">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
