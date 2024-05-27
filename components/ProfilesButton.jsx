import React from "react";
import Image from "next/image";
import icon1 from "./github.svg";
import icon2 from "./linkedin.svg";
import { motion } from "framer-motion";

const animate = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const ProfilesButton = () => {
  return (
    <motion.div
      variants={animate}
      initial="start"
      whileInView="end"
      transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
      className="flex flex-wrap gap-4 items-center"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 100 },
        }}
      >
        <a
          href="https://github.com/Zarko36"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full hover:border-2 hover:border-gray-300 hover:shadow-lg hover:shadow-teal-300 flex items-center"
        >
          Github
          <Image
            className="w-12 h-12 ml-6"
            src={icon1}
            alt="Icon 1"
            width={16}
            height={16}
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 250 },
        }}
      >
        <a
          href="https://www.linkedin.com/in/joel-muniz-a380301b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-full hover:border-2 hover:border-neutral-300 hover:bg-gray-600 hover:shadow-lg hover:shadow-teal-300 flex items-center"
        >
          LinkedIn
          <Image
            className="w-12 h-12 ml-6"
            src={icon2}
            alt="Icon 2"
            width={16}
            height={16}
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProfilesButton;