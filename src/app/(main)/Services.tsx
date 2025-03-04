import { Button } from "@/components/button";
import HRLine from "@/components/HRLine";
import SectionLayout from "@/components/SectionLayout";

const Services = () => {
  return (
    <div className="bg-secondary relative py-32">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url("./services/bg.png' }}
      ></div>
      <SectionLayout className="relative z-1 flex flex-col items-center gap-8">
        <div className="text-[48px] leading-[60px]">
          <span className="font-bold">Can Quality Be </span>
          <span className="text-secondary-1 font-bold">&nbsp;Affordable?</span>
        </div>
        <HRLine />
        <span className="text-secondary px-10 text-center text-2xl font-medium">
          <span className="font-bold">Absolutely!</span> At our core, we believe
          exceptional software solutions should be accessible to
          everyone—whether you&apos;re a local business, a mid-sized enterprise,
          or a large corporation.
          <br />
          <br />
          <span className="px-5">
            Affordability shouldn&apos;t mean compromise, and we ensure
            businesses of all sizes receive innovative, high-quality solutions
            tailored to their needs and budget.
          </span>
        </span>
        <span className="text-secondary-1 mt-2 text-center text-2xl font-bold">
          ❝ Because innovation should empower, not exclude.❞
        </span>
        <Button className="mt-5 !px-18 !py-6 !text-2xl">
          Explore Our Services
        </Button>
      </SectionLayout>
    </div>
  );
};

export default Services;
