import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between pt-3 pb-3 bg-gradient-to-r from-neutral-900 to-neutral-700 p-1">
      <div className="flex items-center gap-3 ">
        <div className="text-white ml-5 font-nunito text-3xl font-semibold">
          Joel.dev
        </div>
      </div>
      <div className="flex gap-10 items-center mr-5">
        <a
          href="https://www.linkedin.com/in/joel-muniz-a380301b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-5xl text-white" />
        </a>
        <a
          href="https://github.com/Zarko36"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-5xl text-white" />
        </a>
        <IoMailOutline className="text-5xl text-white" />
      </div>
    </div>
  );
};

export default Footer;