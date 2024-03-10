import React from "react";

import html from "../../../assets/img/html.png";
import css from "../../../assets/img/css.png";
import javascript from "../../../assets/img/javascript.png";
import reactImage from "../../../assets/img/react.png";

import github from "../../../assets/img/github.png";
import boostrap from "../../../assets/img/pngwing.com.png";
import tailwind from "../../../assets/img/tailwind.png";
import Sass from "../../../assets/img/pngegg.png";

import { motion } from "framer-motion";

import { fadeIn, slideInFromBottom, slideInFromRight } from "../../../utils/framer/framer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 8,
      src: boostrap,
      title: "Bootstrap",
      style: "shadow-blue-600",
    },

    {
      id: 9,
      src: Sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
  ];
  return (
    <>
      <div data-aos="zoom-in-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
     
      
        name="experience"
        className="bg-gradient-to-b  "
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  text-white">
          <div>
            <p className="text-4xl font-bold text-center p-4  border-b-4 font-[spaceB] border-[#0FB807] ">
              My Experinace
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
