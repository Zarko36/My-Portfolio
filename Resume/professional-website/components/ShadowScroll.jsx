import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import Test from "@/components/Test";

const ShadowScroll = () => {
    return (
      <ScrollShadow className="w-[300px] h-[200px]">
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
      </ScrollShadow>
    );
  };
  
  export default ShadowScroll;