"use client";
import HRLine from "@/components/HRLine";
import SectionLayout from "@/components/SectionLayout";
import { cn } from "@/lib/utils";
import { useState } from "react";

const items = [
  {
    title: "What services does Bigchez Solutions offer?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
  {
    title: "Do you offer support after the software is delivered?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
  {
    title: "Will I have access to the source code of my software?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
  {
    title: "How long does it take to develop custom software?",
    content:
      "We specialize in custom software development tailored to your business needs, with a focus on educational institutions and other enterprises.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="py-40">
      <SectionLayout>
        <div className="flex flex-col gap-8">
          <span className="text-center text-[48px] leading-[60px] font-bold">
            Frequently Asked Questions
          </span>
          <div className="flex justify-center">
            <HRLine />
          </div>
          <div className="mx-auto flex w-full max-w-[865px] flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border-b border-[#E7E5EA]",
                  openIndex === index
                    ? "rounded bg-[linear-gradient(96.26deg,#0993AB_0%,#09748D_50%)]"
                    : "",
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full cursor-pointer items-center justify-between p-5 focus:outline-none"
                >
                  <span
                    className={cn(
                      "text-[22px]",
                      openIndex === index
                        ? "font-bold text-white"
                        : "text-secondary",
                    )}
                  >
                    {item.title}
                  </span>
                  <img
                    src={openIndex === index ? "./minus.svg" : "./plus.svg"}
                  />
                </button>

                <div
                  className={cn(
                    "origin-top transform overflow-hidden transition-all ease-in-out",
                    openIndex === index
                      ? "max-h-[500px] scale-y-100 opacity-100 duration-500"
                      : "max-h-0 scale-y-95 opacity-0 duration-300",
                  )}
                >
                  <div className="px-5 pb-5 text-lg text-white">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default FAQs;
