import React from "react";
import Image from "next/image";
import pic1 from "./rtools.png";
import pic2 from "./art.png";
import pic3 from "./radar.png";
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

const Project = ({ pname, techStack, description, image }) => {
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
        className="bg-neutral-900 hover:border hover:border-gray-300 hover:border-4 hover:shadow-2xl hover:shadow-teal-300 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full"
      >
        <div className="ml-4 flex flex-col w-1/2">
            <h2 className="text-xl text-white font-semibold mb-2">{pname}</h2>
            <p className="text-neutral-200 mb-2">Made with: {techStack}</p>
            <p className="text-neutral-400">{description}</p>
          </div>
          <div className="mr-4 mb-4 mt-4 w-1/3">
            <Image
              className="w-full h-full rounded-xl"
              src={image}
              alt="name"
              layout="responsive"
              width={300}
              height={200}
              sizes="(max-width: 768px) 100vw, 300px"
              style={{ borderRadius: "10px" }}
            />
          </div>

      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="flex flex-col gap-8">
        <Project
          pname="Rtools"
          techStack="React, Next.js, TailwindCSS, Node.js, JavaScript, ESLINT, Prettier"
          description="This is a description of Project 1."
          image={pic1}
        />
        <Project
          pname="Art Factory"
          techStack="React, Next.js, TailwindCSS, Node.js, JavaScript, ESLINT, Prettier"
          description="This is a description of Project 2."
          image={pic2}
        />
        <Project
          pname="Art Factory"
          techStack="React, Next.js, TailwindCSS, Node.js, JavaScript, ESLINT, Prettier"
          description="This is a description of Project 2."
          image={pic3}
        />
      </div>
    </div>
  );
};

export default Projects;