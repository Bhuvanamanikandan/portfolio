import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#f9f9f9] text-[#000000] py-12">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full items-center gap-8">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold justify-center items-center animate-zoomIn">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="sm:text-right text-4xl font-bold "
          >
            <p>
              Hi, I'm Bhuvaneswari, Thrilled to have you here! Dive in and
              explore my journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <p>
              I'm a passionate frontend developer with a keen focus on creating
              dynamic and responsive web applications. Specializing in React.js,
              I thrive on transforming creative concepts into interactive,
              user-friendly digital experiences. My journey in web development
              is driven by a love for clean code, efficient design, and
              continuous learning. Whether it's building sleek interfaces or
              solving complex challenges, I’m always eager to push the
              boundaries of what's possible. Ready to take on new challenges, I
              aim to contribute my skills to meaningful projects and deliver
              exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
