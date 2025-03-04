import SectionLayout from "@/components/SectionLayout";
import Link from "next/link";

const apps = [
  { title: "Mobile Apps", link: "#" },
  { title: "Desktop Apps", link: "#" },
  { title: "Developer Center", link: "#" },
  { title: "Google Workspace Integration", link: "#" },
  { title: "Microsoft 365 Integration", link: "#" },
  { title: "Apps for Apple Watch", link: "#" },
  { title: "Product Integrations", link: "#" },
  { title: "Browser Extensions", link: "#" },
];

const learn = [
  { title: "Training & Certification", link: "#" },
  { title: "Academy", link: "#" },
  { title: "Blogs", link: "#" },
  { title: "Knowledge Base", link: "#" },
  { title: "Zia", link: "#" },
  { title: "The Long Game", link: "#" },
  { title: "Newsletter", link: "#" },
];

const community = [
  { title: "User Community", link: "#" },
  { title: "Customer Stories", link: "#" },
  { title: "Influence", link: "#" },
  { title: "Find a Partner", link: "#" },
  { title: "Bigchez for Startups", link: "#" },
  { title: "Affiliate Program", link: "#" },
  { title: "Humans of Zoho", link: "#" },
];

const company = [
  { title: "About Us", link: "#" },
  { title: "Press", link: "#" },
  { title: "Events", link: "#" },
  { title: "Newsroom", link: "#" },
  { title: "Branding Assets", link: "#" },
  { title: "Bigchez Schools", link: "#" },
  { title: "Service Status", link: "#" },
  { title: "Careers", link: "#" },
];

const titleClass = "text-[22px] font-medium";
const itemClasses = "text-lg";

const Footer1 = () => {
  return (
    <div className="bg-secondary py-20">
      <SectionLayout className="flex flex-col gap-20">
        <div className="flex w-full flex-wrap justify-center gap-5 lg:justify-between">
          <div className="text-secondary flex flex-col gap-6">
            <span className={titleClass}>Apps and Extensions</span>
            <div className="flex flex-col gap-3">
              {apps?.map((item) => (
                <Link href={item.link} className={itemClasses} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-secondary flex flex-col gap-6">
            <span className={titleClass}>Learn</span>
            <div className="flex flex-col gap-3">
              {learn?.map((item) => (
                <Link href={item.link} className={itemClasses} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-secondary flex flex-col gap-6">
            <span className={titleClass}>Community</span>
            <div className="flex flex-col gap-3">
              {community?.map((item) => (
                <Link href={item.link} className={itemClasses} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-secondary flex flex-col gap-6">
            <span className={titleClass}>Company</span>
            <div className="flex flex-col gap-3">
              {company?.map((item) => (
                <Link href={item.link} className={itemClasses} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-secondary flex flex-col gap-6">
            <span className={titleClass}>Contact Sales</span>
            <div className="flex flex-col gap-3">
              <span className={itemClasses}>Phone</span>
              <span className="border-b font-normal">000000000000</span>
              <span className="border-b font-normal">000000000000</span>
              <span className={itemClasses}>Email</span>
              <span className="border-b font-normal">info@bigchez.com</span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link href="#" className="text-[#3AACF8]">
                Support
              </Link>
              <Link href="#" className="text-[#3AACF8]">
                Talk to Concierge
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-center gap-5">
            <img src="./footer/twitter.png" />
            <img src="./footer/linkedin.png" />
            <img src="./footer/fb.png" />
          </div>
          <div className="flex justify-center gap-3">
            <span className={itemClasses}>Bigchez Home</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}>Contact Us</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}>Our Blog</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}> Terms of Service</span>
            <div className="h-auto w-[1px] bg-[#cccccc] font-semibold"></div>
            <span className={itemClasses}>Privacy Policy</span>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Footer1;
