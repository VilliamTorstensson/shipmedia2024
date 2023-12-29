
export default function Benefits () {


  return (
    <main className="w-full h-full max-w-[1440px] mx-auto  py-20">
      <section className="h-full w-full  rounded-md px-4 md:px-10 flex flex-col gap-10 ">
        <h1 className="text-6xl uppercase text-start">benefits</h1>
        <div className="grid grid-cols-2 w-full lg:grid-cols-3 gap-5">
        <div className="w-full text-start bg-[rgb(30,30,30)] p-4 flex flex-col gap-4 "><h1 className="text-xl sm:text-2xl uppercase">E-commerce</h1>
        <p className="text-xs sm:text-lg">All our packages comes with an e-commerce option availible</p></div>
        <div className="w-full text-start bg-[rgb(30,30,30)] p-4 flex flex-col gap-4 "><h1 className="text-xl sm:text-2xl uppercase">Fast Delivery</h1>
        <p className="text-xs sm:text-lg">Fast delivery on all our services</p></div>
        <div className="w-full text-start bg-[rgb(30,30,30)] p-4 flex flex-col gap-4 "><h1 className="text-xl sm:text-2xl uppercase">Figma designs</h1>
        <p className="text-xs sm:text-lg">Standard and up plans includes figma designs, from ad creatives to branding</p></div>

        <div className="text-start bg-[rgb(30,30,30)] p-4 flex flex-col gap-4 "><h1 className="text-xl sm:text-2xl uppercase">Responsive</h1>
        
        <p className="text-xs sm:text-lg">We make sure all our projects is responsive for all devices</p></div>

        <div className="text-start bg-[rgb(30,30,30)] p-4 flex flex-col gap-4 "><h1 className="text-xl sm:text-2xl uppercase">User-friendly</h1>
        <p className="text-xs sm:text-lg">Our projects key is user-friendlyness easy to navigate with a clear message </p></div>
        <div className="text-start bg-[rgb(30,30,30)] p-4 flex flex-col gap-4 "><h1 className="text-xl sm:text-2xl uppercase">Maintenance</h1>
        <p className="text-xs sm:text-lg">for only 1999kr/month you gain acces to our hosting software, collect all leads in one place, and build automated sales funnels</p></div>
        </div>
      </section>
    </main>
  )
}