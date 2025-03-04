import Benefits from "./Benefits";
import Buisness from "./Buisness";
import Careers from "./Careers";
import CompanySlider from "./CompanySlider";
import FAQs from "./FAQs";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Hero from "./Hero";
import Journals from "./Journals";
import Services from "./Services";
import Vision from "./Vision";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <CompanySlider />
      <Buisness />
      <Journals />
      <Benefits />
      <Vision />
      <Services />
      <Careers />
      <FAQs />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Page;
