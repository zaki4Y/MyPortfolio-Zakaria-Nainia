import "./firstSection.sass";
import "./fistSection.scss";
import React from "react";
import { Link } from "react-scroll";


import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import zakaria from "../../../assets/img/Picsart_22-12-18_00-49-44-927.png";
import zaki from "../../../assets/img/Picsart_22-12-18_00-49-44-927-removebg-preview.png";
import zaki2 from "../../../assets/img/sans shadow.png";
import zaki3 from "../../../assets/img/rgsvfz.png";

import { fadeIn } from "../../../utils/framer/framer";
AOS.init();

export const FirstSection = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="lg:flex flex lg:flex-wrap flex-wrap-reverse justify-center  items-center"
      >
        <div className="container lg:flex lg:flex-row flex flex-col-reverse lg:justify-center items-center  gap-4 p-5 w-full ">
          <div className="text flex flex-col justify-between items-center">
            <div className=" lg:flex lg:flex-col ">
              <div className=" lg:h-[30vh] lg:flex lg:flex-col flex flex-col lg:justify-evenly h-[40vh]  lg:gap-5 gap-4 lg:items-start justify-center items-center font-bold">
                <h3 className="text-white font-[spaceB] ">Hi There!</h3>

                <motion.h1
                  variants={fadeIn("right", 0.10)}
                  initial="hidden"
                  whileInView={"show"}
                  className="text-white text-4xl font-[spaceB]"
                >
                  I am A <span className="text-[#0FB807]">Web Developer</span>
                </motion.h1>
                <h3 className="text-white text-2xl font-[spaceB]">
                  I make The complex Simple
                </h3>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                  <Link to="contact" smooth duration={500} className="px-10 h-[50] flex items-center text-lg font-semibold rounded dark:bg-[#0FB807] dark:text-gray-900">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="imagees">
            <img src={zaki2} width={500} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
