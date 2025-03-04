import { Button } from "@/components/button";
import SectionLayout from "@/components/SectionLayout";
import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"], display: "swap" });

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 object-cover"
        style={{ backgroundImage: 'url("./bg.png")' }}
      ></div>
      <div
        className="absolute inset-0 object-cover"
        style={{ backgroundImage: 'url("./bg-2.png")' }}
      ></div>
      <SectionLayout className="relative z-30 flex flex-col pt-4">
        <div className="flex flex-row items-center justify-center lg:justify-between">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-1/2 object-contain lg:w-auto"
          />
          <div className="hidden items-center gap-7 rounded-[50px] border-1 px-9 py-4 lg:flex">
            <div
              className={cn(
                "flex gap-3 text-sm font-bold uppercase",
                syne.className,
              )}
            >
              <Link href="/about">Home</Link>
              <div className="h-auto w-[1px] bg-black font-semibold"></div>
              <Link href="/about">Contact Us</Link>
              <div className="h-auto w-[1px] bg-black font-semibold"></div>
              <Link href="/about">Blog</Link>
            </div>
            <Button>
              <img src="/login.png" className="object-contain" />
              <span>Login</span>
            </Button>
            <div className="border-primary flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border">
              <img src="/announcements.png" />
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-1 items-center justify-center py-24 text-center">
          <div className="flex flex-col items-center gap-20">
            <div className="relative text-[65px] leading-none lg:text-[140px]">
              <div className="absolute -top-4 left-0 block lg:left-4">
                <img src="/lines.png" className="w-[70%] lg:w-full" />
              </div>
              <span className="font-semibold">Your Needs</span>
              <br />
              <span className="font-bold uppercase">
                our <span className="text-secondary-1">Design</span>
              </span>
              <div className="absolute -right-6 -bottom-6 -z-1">
                <img src="/lines-2.png" />
              </div>
            </div>
            <Button
              variant="secondary"
              className="!text-2xl tracking-wide uppercase"
              style={{
                borderColor: "#09748D",
              }}
            >
              step into success
            </Button>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Hero;
