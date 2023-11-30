import Image from 'next/image'

export default function ImageSlider () {
  const card = [
    {
      url: "/slideimg3.jpg",
      id: 1,
    },
    {
      url: "/slideimg2.jpg",
      id: 2,
    },
    {
      url: "/slideimg1.jpg",
      id: 3,
    },
    {
      url: "/slideimg5.jpg",
      id: 4,
    },
    {
      url: "/slideimg4.jpg",
      id: 5,
    },
   
  ];
  return (
    <section className=' py-10 w-full '>
      <div className="w-content h-full flex 2xl:gap-20 gap-4 py-5   overflow-x-auto">
      {card.map((item) => {
        return (
          <div key={item.id} className="min-w-[200px] sm:min-w-[280px] md:min-w-[350] lg:min-w-[400px]  2xl:min-w-[500px]  flex gap-4 w-full">
            <Image
              src={item.url}
              alt="work"
              width={1080}
              height={1080}
              className="rounded-md"
            />
          </div>
        );
      })}
    </div>
    </section>
    
  )
    }

