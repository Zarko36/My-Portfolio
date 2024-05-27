import React from "react";
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


const Experience = ({ title, location, description, from, to }) => {
  return (
    <motion.div
      variants={animate}
      initial="start"
      whileInView="end"
      transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
      className="justify-center flex items-center w-full bg-transparent"
    > 
      <motion.div
        whileHover={{
          scale: 1.025,
          transition: { type: "spring", stiffness: 100 },
        }}
        className="justify-center bg-gradient-to-b from-neutral-900 to-neutral-700 hover:border hover:border-gray-300 hover:border-4 hover:shadow-2xl hover:shadow-teal-300 text-white p-8 rounded-lg shadow-lg mb-8 w-2/3"
      >
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-200 mb-2">{location}</p>
        <p className="text-neutral-400">{description}</p>
        <p className="text-neutral-400 mt-4">{from} - {to}</p>

      </motion.div>
    </motion.div>
    // <div className="bg-neutral-900 border border-gray-300 border-4 hover:shadow-2xl hover:shadow-teal-300 text-white p-8 rounded-lg shadow-lg mb-8 w-2/3">
    //   <h2 className="text-2xl font-bold mb-2">{title}</h2>
    //   <p className="text-neutral-200 mb-2">{location}</p>
    //   <p className="text-neutral-400">{description}</p>
    //   <p className="text-neutral-400 mt-4">{from} - {to}</p>
    // </div>
  );
};

const Experiences = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-4xl font-bold mb-8 w-full text-center">My experience</h1>
      <Experience
        title="Software Engineer"
        location="University of California Riverside"
        description="Developed new user-facing features using React.js. Built reusable components and front-end libraries for future use. Translated designs and wireframes into high-quality code. Optimized components for maximum performance across a vast array of web-capable devices and browsers."
        from="September 2023"
        to="Present"
      />
      <Experience
        title="A.I. Engineer Researcher"
        location="University of California Riverside"
        description="Developed new user-facing features using React.js. Built reusable components and front-end libraries for future use. Translated designs and wireframes into high-quality code. Optimized components for maximum performance across a vast array of web-capable devices and browsers."
        from="September 2023"
        to="Present"
      />
    </div>
  );
};

export default Experiences;
