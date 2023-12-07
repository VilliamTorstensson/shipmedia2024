import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  
  GitHubLogoIcon,
  VercelLogoIcon,
 
} from "@radix-ui/react-icons";




export default function LogoSlider () {
  const LOGOS = [
    <FigmaLogoIcon width={50} height={50} className="text-white" />,
    <FramerLogoIcon width={50} height={50} className="text-white" />,
    <GitHubLogoIcon width={50} height={50} className="text-white" />,
    <VercelLogoIcon width={50} height={50} className="text-white" />,
    <SiNextdotjs width={100} height={100} className="text-white text-5xl" />,
    <FaReact width={50} height={50} className="text-white text-5xl" />,
  ];
  return (
    <main className="py-10 mt-5 max-w-[1440px] mx-auto px-4 md:px-10">
      
    <div className="relative border-t border-b border-[#323232] m-auto w-full h-full py-4 flex items-center  justify-center overflow-hidden bg-black before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(1000px*3)] md:w-[calc(1000px*6)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[1000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[1000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[1000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[1000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};
