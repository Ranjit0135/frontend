import { Heading, Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
const Services = () => {
  const [activeSection, setActiveSection] = useState("Skills");

  const handleSkill = () => {
    setActiveSection("Skills");
  };

  const handleExperiences = () => {
    setActiveSection("Experiences");
  };

  const handleEducation = () => {
    setActiveSection("Education");
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className=" flex align-middle justify-center items-center my-20 font-bold text-2xl">
          <Heading>What i do ?</Heading>
        </h1>
        <div className=" flex flex-col md:flex-row gap-4">
          <section className=" md:w-1/2 order-2 ">
            <h3 className=" text-xl">About myself</h3>

            <br />
            <p className=" text-justify text-sm md:text-md">
              {/* As a MERN stack developer, I specialize in using the MERN stack,
              which includes MongoDB, Express.js, React, and Node.js. I create
              web applications by building the back-end server with Node.js and
              Express.js, managing data with MongoDB, and developing the
              front-end user interface with React. This combination allows me to
              work efficiently with JavaScript for both the front and back ends,
              making development faster and more streamlined. */}
              I am a dedicated and passionate software engineer and web
              developer with a strong foundation in full-stack development. My
              expertise lies in designing and building scalable web applications
              using modern technologies and best practices. I thrive in
              collaborative environments and continuously seek opportunities to
              learn and grow in the ever-evolving field of technology.
            </p>
            {/* <div className="flex gap-5 flex-col sm:flex-row justify-between align-middle items-center mt-5">
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
            </div> */}

            <div className="flex gap-10 my-3">
              <button
                onClick={handleSkill}
                className={`shadow-md font-semibold ${
                  activeSection === "Skills" ? "border-b-2 border-red-800" : ""
                }`}
              >
                Skills
              </button>
              <button
                onClick={handleExperiences}
                className={`shadow-md font-semibold ${
                  activeSection === "Experiences"
                    ? "border-b-2 border-red-800"
                    : ""
                }`}
              >
                Experiences
              </button>
              <button
                onClick={handleEducation}
                className={`shadow-md font-semibold ${
                  activeSection === "Education"
                    ? "border-b-2 border-red-800"
                    : ""
                }`}
              >
                Education
              </button>
            </div>
            {activeSection === "Skills" && (
              <div className="skills">
                <List spacing={3}>
                  <ListItem className="flex  gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">UI/XI</span>
                      <br></br>Designing web/App interface
                    </div>
                  </ListItem>
                  <ListItem className="flex gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">Web Development</span>
                      <br></br>Website development
                    </div>
                  </ListItem>
                  <ListItem className="flex  gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">App Development</span>
                      <br></br>Building Android / ios apps{" "}
                    </div>
                  </ListItem>
                </List>
              </div>
            )}
            {activeSection === "Experiences" && (
              <div className="experiences">
                <List spacing={3}>
                  <ListItem className="flex  gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">2023</span>
                      <br></br>Diploma in frontend React web development
                    </div>
                  </ListItem>
                  <ListItem className="flex gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">2023</span>
                      <br></br>UI/UX Design
                    </div>
                  </ListItem>
                  <ListItem className="flex  gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold"> 2024</span>
                      <br></br> completed Internship
                    </div>
                  </ListItem>
                </List>
              </div>
            )}
            {activeSection === "Education" && (
              <div className="education">
                <List spacing={3}>
                  <ListItem className="flex  gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">2016</span>
                      <br></br>+2 clear from milestone Int'l college
                    </div>
                  </ListItem>
                  <ListItem className="flex gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold"> 2023</span>
                      <br></br>Diploma in React Website development
                    </div>
                  </ListItem>
                  <ListItem className="flex  gap-2">
                    <div className="flex justify-center align-middle items-center">
                      <ListIcon as={MdCheckCircle} color="green.500" />
                    </div>
                    <div>
                      <span className=" font-semibold">2019-current</span>
                      <br></br>Bachelor in software Engineering
                    </div>
                  </ListItem>
                </List>
              </div>
            )}
          </section>
          <section className=" md:w-1/2 flex align-middle justify-center items-center order-1 mr-28">
            <Image
              src="./assets/images (2).jpg"
              alt="Dan Abramov"
              height="100%"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
