import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import { Image } from "@chakra-ui/react";
const Banner = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className=" flex flex-col md:flex-row gap-4">
          <section className=" md:w-1/2 order-2 md:order-1">
            <h3 className=" text-xl">Welcome to my feed</h3>
            <div className="flex font-bold text-3xl gap-1">
              <h1>Hello, I am </h1>
              {/* <span className=" text-red-800">Fullstack developer</span> */}
              <ReactTyped
                strings={["Fullstack developer", "coder ", "programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className=" text-red-800"
              />
            </div>
            <br />
            <p className=" text-justify text-sm md:text-md">
              As a MERN stack developer, I specialize in using the MERN stack,
              which includes MongoDB, Express.js, React, and Node.js. I create
              web applications by building the back-end server with Node.js and
              Express.js, managing data with MongoDB, and developing the
              front-end user interface with React. This combination allows me to
              work efficiently with JavaScript for both the front and back ends,
              making development faster and more streamlined.
            </p>
            <div className="flex gap-5 flex-col sm:flex-row justify-between align-middle items-center mt-5">
              <div className=" flex flex-col justify-center align-middle items-center gap-2">
                <h2 className=" text-xl font-bold">Available on</h2>
                <ul className="flex gap-4">
                  <li>
                    <FaFacebook className=" text-xl cursor-pointer" />
                  </li>
                  <li>
                    <FaInstagram className=" text-xl cursor-pointer" />
                  </li>
                  <li>
                    <ImLinkedin className=" text-xl cursor-pointer" />
                  </li>
                  <li>
                    <FaGithub className=" text-xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col justify-center align-middle items-center gap-2">
                <div className=" flex flex-col justify-center align-middle items-center gap-2">
                  <h1 className=" text-xl font-bold">Currently working on</h1>
                  <ul className="flex gap-4">
                    <li>
                      {" "}
                      <SiMongodb className=" text-xl cursor-pointer" />
                    </li>
                    <li>
                      <SiExpress className=" text-xl cursor-pointer" />
                    </li>
                    <li>
                      <FaReact className=" text-xl cursor-pointer" />
                    </li>
                    <li>
                      <FaNode className=" text-xl cursor-pointer" />
                    </li>
                    <li>
                      <FaDatabase className=" text-xl cursor-pointer" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className=" md:w-1/2 flex align-middle justify-center items-center order-1 md:order-2">
            <Image
              shadow="full"
              borderRadius=" full"
              boxSize="350px"
              src="./assets/Ranjit Rai IMG_7080 00s.jpg"
              alt="Dan Abramov"
              objectFit="cover"
              className="transition-shadow duration-300 ease-in-out hover:shadow-xl"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Banner;
