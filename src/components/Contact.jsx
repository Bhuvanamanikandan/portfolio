import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#f9f9f9] flex justify-center items-center py-12"
    >
      <form
        method="POST"
        action="https://getform.io/f/bpjmqnyb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold text-[#000000] justify-center">
            Let's Build Something Great Together!
          </p>
          <p className="text-[#000000] py-4">
            Whether you have a question, want to collaborate, or just want to
            say hi, I'd love to hear from you! Feel free to reach out, and drop
            me a message I'll get back to you soon!
          </p>
        </div>
        <input
          className="bg-[#f5f5f5] p-2 rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#f5f5f5] rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#f5f5f5] p-2 rounded-sm"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-Black border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Reach Out
        </button>
        <div className="flex flex-col-2 justify-center space-x-6">
          <div className="flex flex-col-2 justify-center gap-2">
            <a href="https://github.com/Bhuvanamanikandan">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/bhuvaneswari-manikandan-a52933224/">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
