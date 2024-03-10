import React from "react";
import zaki2 from "../../../assets/img/sans shadow.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: zaki2,
    },
    {
      id: 2,
      src: zaki2,
    },
    {
      id: 2,
      src: zaki2,
    },
  ];

  return (
    <>
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
    //  data-aos-easing="ease-in-out"
     data-aos-mirror="true"
     data-aos-once="false"

      name="portfolio" className="bg-gradient-to-b  w-full text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold lg:text-center text-center lg:p-1 p-3 border-b-4 border-[#0FB807] font-[spaceB]">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
