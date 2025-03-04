import { Button } from "@/components/button";
import HRLine from "@/components/HRLine";
import React from "react";

const Vision = () => {
  return (
    <div className="relative flex h-[600px] items-center justify-center">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'url("./vision/bg.png' }}
      ></div>
      <div className="z-1 flex flex-col items-center gap-8 text-[50px] font-bold text-white">
        <span className="text-center">
          Empowering&nbsp;
          <span className="blue-gradient-bg rounded-[10px] px-1">
            Your Vision
          </span>
        </span>
        <div className="mt-2 flex justify-center">
          <HRLine />
        </div>
        <span className="max-w-[750px] text-center text-3xl font-medium italic">
          At <span className="font-bold">Bigchez</span>, we turn your ideas into
          impact—
          <br />
          where innovation, quality, and dedication come
          <br /> together to bring your{" "}
          <span className="font-semibold">vision to life.</span>
        </span>
        <Button className="!px-18 !py-6 !text-2xl">Learn More</Button>
      </div>
    </div>
  );
};

export default Vision;
