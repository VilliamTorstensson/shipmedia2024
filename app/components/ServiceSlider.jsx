
export default function ServiceSlider () {
  const LOGOS = [
    <h1 className="text-gray-200 uppercase font-sans font-bold text-lg">webbdesign</h1>,
    
    <h1 className="text-gray-200 uppercase font-sans font-bold text-lg">webdevelopment</h1>,
    <h1 className="text-gray-200 uppercase font-sans font-bold text-lg">ui/ux design</h1>,
    <h1 className="text-gray-200 uppercase font-sans font-bold text-lg">branding & marketing</h1>,
    <h1 className="text-gray-200 uppercase font-sans font-bold text-lg">figma ad creatives</h1>,
    
  ];
  return (
    <main className="px-4 md:px-10 max-w-[1440px] mx-auto ">
      
    <div className="border-b border-[#323232] relative  w-full  h-full py-4 flex items-center  justify-between overflow-hidden bg-[#090909] before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[200px] before:bg-gradient-to-r from-rgb(9,9,9)]  after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] after:-scale-x-100 after:bg-gradient-to-r from-rgb(9,9,9)] ">
      <div className="animate-infinite-slider flex w-[calc(1500px*3)] md:w-[calc(1500px*5)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[2000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[2000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[2000px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[2000px] items-center justify-center"
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
