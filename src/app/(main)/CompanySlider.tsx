"use client";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CompanySlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="h-[88px] bg-gradient-to-r from-[#FFA726] via-[#F57C00] to-[#F57C00]">
      <Slider {...settings} className="">
        {[1, 2, 2, 2, 2, 2, 2].map((_, index: number) => (
          <div
            className="!flex h-[88px] items-center justify-center gap-10"
            key={index}
          >
            <span className="text-[40px] text-white">Bigchez solutions</span>
            <img src="./star.svg" alt="star" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanySlider;
