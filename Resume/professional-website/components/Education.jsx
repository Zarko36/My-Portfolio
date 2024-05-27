import Image from 'next/image';
import picture from './ucr.jpeg';
import { motion } from 'framer-motion';

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


const Education = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-4xl font-bold mb-8 w-full text-center">My Education</h1>
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
            className="bg-gradient-to-b from-neutral-900 to-neutral-700 hover:border hover:border-gray-300 hover:border-4 hover:shadow-2xl hover:shadow-teal-300 text-white p-8 rounded-lg shadow-lg w-2/3"
          >
            <div className="flex">
              <div className="w-1/3">
                <Image
                  src={picture}
                  alt="Your Image"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-2/3 pl-8">
                <h2 className="text-2xl font-bold mb-2">Bachelor of Computer Science</h2>
                <p className="text-neutral-200 mb-2">University of California - Riverside</p>
                <p className="text-neutral-400">Graduated in 2024</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      {/* <div className="bg-neutral-900 border border-gray-300 border-4 hover:shadow-2xl hover:shadow-teal-300 text-white p-8 rounded-lg shadow-lg w-full">
        <div className="flex">
          <div className="w-1/3">
            <Image
              src={picture}
              alt="Your Image"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-2/3 pl-8">
            <h2 className="text-2xl font-bold mb-2">Bachelor of Computer Science</h2>
            <p className="text-neutral-200 mb-2">University of California - Riverside</p>
            <p className="text-neutral-400">Graduated in 2024</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Education;