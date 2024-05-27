import React from "react";
import Image from "next/image";
import pic from "./picture.png";
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


const ProfilePicture = () => {
  return (
    <motion.div
      variants={animate}
      initial="start"
      whileInView="end"
      transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      className="flex flex-col items-center mb-8 relative"
    >
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 100 },
        }}
      >
        <Image
          className="mt-32 object-cover w-48 h-48 rounded-full border-4 border-gray-300"
          src={pic}
          alt="Profile Picture"
          layout="intrinsic"
          width={350}
          height={350}
        />
      </motion.div>
    </motion.div>
    // <div className="relative">
    //   <Image
    //     className="mt-32 object-cover w-48 h-48 rounded-full border-4 border-gray-300"
    //     src={pic}
    //     alt="Profile Picture"
    //     layout="intrinsic"
    //     width={350}
    //     height={350}
    //   />
    // </div>
  );
};

export default ProfilePicture;