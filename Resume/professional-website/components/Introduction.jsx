import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Introduction = () => {
  return (
    <Card>
      <CardBody className="w-2/3 mx-auto text-center">
        <p className="text-2xl font-bold">
          Hello, I'm Joel. I'm a software engineer at ACM in UCR. I'm currently working with React.js, Next.js, and Javascript
        </p>
      </CardBody>
    </Card>
  );
};

export default Introduction;