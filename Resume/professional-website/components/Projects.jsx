import React from "react";
import Image from "next/image";
import pic1 from "./rtools.png";
import pic2 from "./art.png";
import pic3 from "./react.png";

const Project = ({ pname, techStack, description, image }) => {
    return (
      <div className="bg-zinc-800 shadow-md rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="ml-4 flex flex-col md:w-1/2">
          <h2 className="text-xl text-white font-semibold mb-2">{pname}</h2>
          <p className="text-neutral-300 mb-2">Made with: {techStack}</p>
          <p className="text-neutral-400">{description}</p>
        </div>
        <div className="mr-4 mb-4 mt-4 md:w-1/2">
          <Image
            className="object-cover w-full h-full rounded-xl"
            src={image}
            alt="name"
            layout="responsive"
            width={200}
            height={200}
            sizes="100vw"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    );
  };

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-16">
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