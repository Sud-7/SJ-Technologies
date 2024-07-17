import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1200px] mx-8 md:mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sudhashu Jha
        </h1>
        <h2 className="text-4xl sm:text-7xl py-2 font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-2 max-w-[700px]">
          I’m a Frontend developer specializing in building exceptional digital
          experiences. Currently, I do freelance Projects and learning Full
          Stack.
        </p>
        <div>
          <button className="text-white  border-2 px-6 py-3 my-2 rounded-full flex items-center hover:scale-110 hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className=" duration-300">
              <HiArrowNarrowRight size={20} className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
