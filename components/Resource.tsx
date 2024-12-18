"use client";

import React from "react";
import { companies, resources } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Resource = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        Where I Learn &
        <span className="text-purple"> Resources for New Developers</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={resources}
            direction="left"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10 text-wrap">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="relative group flex md:max-w-60 max-w-32 gap-2">
                <img src={company.img} alt={company.name} className="w-10" />
                {/* Tooltip */}
                <div
                  className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out 
                             bg-gray-800 text-white text-sm rounded-md px-3 py-1 shadow-lg z-10 transform scale-95 group-hover:scale-100"
                >
                  {company.name}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resource;
