import React from "react";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#f9f9f9]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black">Hi there!</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#000000]">
          Bhuvaneswari Manikandan
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#000000]">
          I'm a
          <Typewriter
            words={[" Software Developer.", " Frontend Developer."]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
          />
        </h2>
        <p
          className= 'text-[#2a2a2a] py-4 max-w-[700px] ' >
          I build intuitive and engaging web interfaces with a focus on
          delivering smooth, responsive experiences. My approach blends
          creativity with code, using React.js to turn ideas into interactive
          realities.
        </p>
        <div>
          <button className="text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600 rounded-md">
            <a href="https://drive.google.com/file/d/1u225b7NNKRC0xGaBICRNYhHvC4l7g88i/view?usp=drive_link">
            Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
