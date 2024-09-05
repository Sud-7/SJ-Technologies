import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1200px] mx-8 md:mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-rose-600 font-bold md:text-4xl sm:text-3xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#eef2ff]">
          Sudhashu Jha
        </h1>
        <h2 className="text-4xl sm:text-7xl py-2 font-bold text-[#eef2ff]">
          I'm a {""}
          <span className="text-rose-600 hover:scale-105 duration-300 animate-pulse">
            FullStack Developer
          </span>
          .
        </h2>
        <p className="text-[#8892b0] py-2 max-w-[700px]">
          I’m a FullStack developer specializing in building exceptional digital
          experiences. Currently, I do freelance Projects and learning Full
          Stack.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 rounded-full flex items-center hover:scale-110 hover:bg-pink-600 hover:border-pink-600">
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="flex items-center"
            >
              View Work
              <span className="inline duration-300 ml-3">
                <HiArrowNarrowRight size={20} />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
