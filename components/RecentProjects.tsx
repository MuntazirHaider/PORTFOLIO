"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[42rem] h-[32rem] flex items-center justify-center sm:w-[36rem] w-[90vw] md:mt-0 mt-6"
            key={item.id}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:min-h-[42rem] h-[32rem] flex items-center justify-center sm:w-[36rem] w-[90vw]"
            >
              <PinContainer title={item.title.split("-")[0]} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-[36rem] w-[90vw] overflow-hidden h-[27vh] lg:h-[37vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 w-full h-full"
                  />
                </div>

                <h1 className="font-bold md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-md lg:font-normal font-light text-sm"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center relative">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="group border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-9 h-9 flex justify-center items-center relative"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                        {/* Tooltip */}
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center text-white text-xs bg-gray-700 py-1 px-2 rounded">
                          {item.tech[index]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
