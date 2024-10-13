import React from "react";
import spotifyImg from "../assets/project/spotify.png";
import ecommerceImg from "../assets/project/ecommerce.png";
import todoImg from "../assets/project/todo.png";
import tictactoeImg from "../assets/project/tictactoe.png";
import { FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-[#000000] bg-[#f9f9f9] pb-12"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold flex text-[#000000] justify-center animation-zoomIn">
            Projects
          </p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${todoImg})` }}
            className="shadow-lg shadow-[#a6a6a6] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo List App
              </span>
              <div className="pt-8 text-center">
                <div className="flex flex-col-3 justify-center space-x-6">
                  <FaJsSquare className="w-10 h-10" />
                  <FaCss3Alt className="w-10 h-10" />
                  <FaReact className="w-10 h-10" />
                </div>
                <div className="py-5">
                  <a href="https://todoolist-app.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Bhuvanamanikandan/todo-app.git">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${tictactoeImg})` }}
            className="shadow-lg shadow-[#a6a6a6] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider justify-center items-center">
                Tic Tac Toe App
              </span>
              <div className="pt-8 text-center">
                <div className="flex flex-col-3 justify-center space-x-6">
                  <FaJsSquare className="w-10 h-10" />
                  <FaCss3Alt className="w-10 h-10" />
                  <FaReact className="w-10 h-10" />
                </div>
                <div className="py-5">
                  <a href="https://tictactoe-gaame.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Bhuvanamanikandan/tic-tac-toe.git">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${ecommerceImg})` }}
            className="shadow-lg shadow-[#a6a6a6] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                eCommerce Website
              </span>
              <div className="pt-8 text-center">
                <div className="flex flex-col-3 justify-center space-x-6">
                  <FaJsSquare className="w-10 h-10" />
                  <SiTailwindcss className="w-10 h-10" />
                  <FaReact className="w-10 h-10" />
                </div>
                <div className="py-5">
                  <a href="https://shopppme-app.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Bhuvanamanikandan/Ecommerce-website.git">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${spotifyImg})` }}
            className="shadow-lg shadow-[#a6a6a6] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Spotify Clone App
              </span>
              <div className="pt-8 text-center">
                <div className="flex flex-col-3 justify-center space-x-6">
                  <FaJsSquare className="w-10 h-10" />
                  <SiTailwindcss className="w-10 h-10" />
                  <FaReact className="w-10 h-10" />
                </div>
                <div className="py-5">
                  <a href="https://spotiffyy-clone.netlify.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/Bhuvanamanikandan/spotify-clone-app.git">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
