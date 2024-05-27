import reactPic from "./react.svg";
import cssPic from "./css.svg";
import htmlPic from "./html.svg";
import javaPic from "./java.svg";
import javascriptPic from "./javascript.svg";
import linuxPic from "./linux.svg";
import nodePic from "./node.svg";
import pythonPic from "./python.svg";
import typescriptPic from "./typescript.svg";
import Image from "next/image";
import gitPic from "./git.svg";
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

const Skill = ({ image, name }) => {
  return (
    <motion.div
      variants={animate}
      initial="start"
      whileInView="end"
      transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
      className="flex flex-col items-center mb-8 bg-transparent"
    >
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 100 },
        }}
      >
        <div className="bg-transparent hover:bg-transparent w-24 h-24 relative">
          <Image
            className="w-24 h-24 bg-transparent rounded-full bg-transparent hover:bg-transparent"
            src={image}
            alt={name}
            layout="fill"
          />
        </div>
        <p className="text-neutral-300 mt-2 text-center">{name}</p>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 w-full md:w-1/2 lg:w-1/3 bg-transparent">
          <Skill
            image={reactPic}
            name="React.js"
          />
          <Skill
            image={cssPic}
            name="CSS"
          />
          <Skill
            image={htmlPic}
            name="HTML"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-full md:w-1/2 lg:w-1/3">
          <Skill
            image={javaPic}
            name="Java"
          />
          <Skill
            image={javascriptPic}
            name="Javascript"
          />
          <Skill
            image={linuxPic}
            name="Linux"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-full md:w-1/2 lg:w-1/3">
          <Skill
            image={nodePic}
            name="Node.js"
          />
          <Skill
            image={pythonPic}
            name="Python"
          />
          {/* <Skill
            image={typescriptPic}
            name="Typescript"
          /> */}
          <Skill
            image={gitPic}
            name="Git"
            />
        </div>
      </div>
    </div>
  );
};

export default Skills;