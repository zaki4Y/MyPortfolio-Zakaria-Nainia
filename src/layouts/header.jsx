import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/Screenshot_2024-02-25_170449-removebg-preview.png";
import { Link } from "react-scroll";


export const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <nav>
        <div className=" flex justify-between items-center lg:w-full  lg:h-20  px-8  text-white   ">
          <div className="">
            <img src={logo} width={200} alt="" />
          </div>

          <ul className="hidden md:flex  ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link
                 to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes className="z-40" size={30} /> : <FaBars className="z-40" size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};
