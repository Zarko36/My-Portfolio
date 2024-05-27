import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
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

const Introduction = () => {
  return (
    <motion.div
      variants={animate}
      initial="start"
      whileInView="end"
      transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
      className="flex flex-col items-center mb-8 relative"
    >
      <Card>
        <CardBody className="w-2/3 mx-auto text-center">
          <p className="text-2xl font-bold">
            Hello, I&apos;m Joel. I&apos;m a software engineer at ACM in UCR. I&apos;m currently working with React.js, Next.js, and Javascript
          </p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default Introduction;