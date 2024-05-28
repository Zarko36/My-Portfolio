import React from "react";
import { motion } from "framer-motion";
import Resume from '@/components/resume.pdf';

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

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="w-2/3">
        <h1 className="text-4xl font-bold mb-8 text-center ">About Me</h1>
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
            className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-neutral-900 to-neutral-700 hover:shadow-2xl hover:shadow-teal-300 hover:border-4 hover:border-gray-300 rounded-xl p-8"
          >
            <div className="w-full">
              <h2 className="text-xl text-white font-semibold mb-2">Background</h2>
              <p className="text-neutral-200 mb-4">
                I am a Computer Science student in my final year of university. I have a strong foundation in programming and have completed several projects in various programming languages. I have also completed several internships in the tech industry, where I gained valuable experience working on real-world projects.
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-xl text-white font-semibold mb-2">Interests</h2>
              <p className="text-neutral-200 mb-4">
                I am passionate about technology and enjoy learning about new programming languages and frameworks. I also enjoy playing video games and watching movies in my free time.
              </p>
            </div>
            <div className="w-full">
              <h2 className="text-xl text-white font-semibold mb-2">Career Goals</h2>
              <p className="text-neutral-200 mb-4">
                My career goal is to work as a software engineer in a fast-paced and innovative tech company. I am particularly interested in working on projects that involve machine learning and artificial intelligence.
              </p>
            </div>
            {/* <button
              className="text-neutral-200 hover:text-white underline"
            >
              Download Resume
            </button> */}
            <a
              href={Resume} // replace with the URL of your resume if it's hosted online
              target="_blank"
              className="text-neutral-200 hover:text-white underline"
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;