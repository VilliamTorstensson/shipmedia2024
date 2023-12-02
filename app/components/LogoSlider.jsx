
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  
  GitHubLogoIcon,
  VercelLogoIcon,
 
} from "@radix-ui/react-icons";




export default function LogoSlider () {
  const LOGOS = [
    <FigmaLogoIcon width={50} height={50} className="text-slate-950" />,
    <FramerLogoIcon width={50} height={50} className="text-slate-950" />,
    <GitHubLogoIcon width={50} height={50} className="text-slate-950" />,
    <VercelLogoIcon width={50} height={50} className="text-slate-950" />,
    
  ];
  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-10 py-10">
      <h1 className="uppercase text-start text-4xl mb-5">tools i use</h1>
    <div className="relative rounded-md m-auto w-full h-20 flex items-center  justify-center overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(1000px*4)]">
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
