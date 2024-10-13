import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#f9f9f9]  text-[#000000] py-12">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold flex justify-center animation-zoomIn">Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-col items-center"
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaHtml5 className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg">HTML</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaCss3Alt className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">CSS</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaJsSquare className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">JAVASCRIPT</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaReact className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">REACTJS</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaGithub className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">GITHUB</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <SiTailwindcss className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">TAILWIND CSS</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaDatabase className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">SQL</p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <div className="shadow-md shadow-[#a6a6a6] hover:scale-110 duration-500 w-24 h-24 flex flex-col justify-center items-center mx-auto">
              <FaCode className="w-20 mx-auto text-4xl" />
            </div>
            <p className="mt-2 text-lg text-center">VS CODE</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
