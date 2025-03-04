import SectionLayout from "@/components/SectionLayout";

const Benefits = () => {
  return (
    <div className="bg-secondary py-32">
      <SectionLayout>
        <div className="mb-6 grid grid-cols-7">
          <div></div>
          <div className="col-span-2 flex flex-col justify-center gap-2 text-2xl">
            <span className="text-primary text-center font-extrabold">
              Full Access:
            </span>
            <span className="text-secondary text-center font-medium">
              You&apos;ll have complete control over your software.
            </span>
          </div>
          <div></div>
          <div className="col-span-2 flex flex-col justify-center gap-2 text-2xl">
            <span className="text-primary text-center font-extrabold">
              Transparent Communication:
            </span>
            <span className="text-secondary text-center font-medium">
              Stay informed at every step.
            </span>
          </div>
          <div></div>
        </div>
        <div className="mx-3 grid grid-cols-5">
          <img className="scale-105" src="./benefits/availability.png" />
          <img className="mt-6 scale-105" src="./benefits/access.png" />
          <img className="scale-105" src="./benefits/reliability.png" />
          <img className="mt-6 scale-105" src="./benefits/communication.png" />
          <img className="scale-105" src="./benefits/tech.png" />
        </div>
        <div className="mt-6 grid grid-cols-14">
          <div className="col-span-3 flex flex-col justify-start gap-2 text-2xl">
            <span className="blue-gradient-text text-center font-extrabold text-transparent">
              24/7 Availability:
            </span>
            <span className="text-secondary text-center font-medium">
              We&apos;re always here for you, even at midnight.
            </span>
          </div>
          <div></div>
          <div></div>
          <div className="col-span-4 flex flex-col justify-start gap-2 text-2xl">
            <span className="text-center font-extrabold text-[#36BBE4]">
              Longevity and Reliability:
            </span>
            <span className="text-secondary text-center font-medium">
              Count on us for the long haul.
            </span>
          </div>
          <div></div>
          <div></div>
          <div className="col-span-3 flex flex-col justify-start gap-2 text-2xl">
            <span className="blue-gradient-text text-center font-extrabold">
              Latest Technology:
            </span>
            <span className="text-secondary text-center font-medium">
              We use cutting-edge tools for unmatched security and performance.
            </span>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Benefits;
