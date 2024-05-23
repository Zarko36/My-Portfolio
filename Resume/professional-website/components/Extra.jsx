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


const Extra = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-2/3">
        <h1 className="text-4xl mt-20 font-bold mb-8 text-center ">My Interests</h1>
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
                className="flex flex-col justify-center w-full bg-neutral-900 hover:shadow-2xl hover:shadow-teal-300 hover:border-4 hover:border-gray-300 rounded-xl p-8"
                >
                    <div className="w-full">
                        {/* <h2 className="text-xl text-white font-semibold mb-2">Background</h2> */}
                        <p className="text-neutral-200 mb-4">As a computer science graduate, I have always been passionate about expanding my knowledge and skills beyond the classroom. Throughout my academic career, I have been actively involved in various extracurricular activities, including hackathons, coding clubs, and volunteer work. I have participated in several hackathons, where I had the opportunity to work on innovative projects and collaborate with like-minded individuals. I was also an active member of the coding club at my university, where I honed my programming skills and helped other students with their coding-related queries. Apart from these, I have also volunteered for various social causes, including teaching coding to underprivileged children and contributing to open-source projects. These experiences have not only helped me develop a well-rounded personality but also given me a chance to apply my technical skills to real-world problems. I believe that such experiences are essential for computer science graduates as they provide an opportunity to work in a team, develop problem-solving skills, and gain practical experience in the field.</p>
                    </div>
                </motion.div>
            </motion.div>
        {/* <div className="flex flex-col items-center justify-center w-full bg-neutral-900 hover:shadow-2xl hover:shadow-teal-300 hover:border-4 hover:border-gray-300 rounded-xl p-8">
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
          <a
            href="#"
            className="text-neutral-200 hover:text-white underline"
          >
            Download Resume
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Extra;