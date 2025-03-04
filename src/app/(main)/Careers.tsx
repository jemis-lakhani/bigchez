import { Button } from "@/components/button";
import HRLine1 from "@/components/HRLine1";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const Careers = () => {
  return (
    <div className="relative flex h-[870px] items-center justify-center py-32">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'url("./careers/bg.png' }}
      ></div>
      <div className="relative z-10 flex h-full w-[930px] flex-col items-center justify-center gap-8 rounded-[50px] border border-white bg-[#182844]/50">
        <div
          className={cn(
            "relative z-2 flex text-[80px] leading-[60px] text-white",
            outfit.className,
          )}
        >
          Become a&nbsp;
          <img src="./careers/chezzer.png" />
        </div>
        <HRLine1 />
        <div className="-mt-2 flex items-center text-[40px] leading-[40px] text-white">
          Join the&nbsp;
          <img src="./careers/bigchez.png" className="mt-2" />
          &nbsp;Team
        </div>
        <span className="text-center text-2xl font-normal text-white">
          We’re looking for innovators, creators, and problem
          <br /> solvers. Ready to build the future of tech with us?
        </span>
        <Button className="mt-5 !px-18 !py-6 !text-2xl">Explore careers</Button>
      </div>
    </div>
  );
};

export default Careers;
