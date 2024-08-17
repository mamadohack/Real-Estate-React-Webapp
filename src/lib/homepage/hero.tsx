import "./hero.css";
function Hero() {
  return (
    <section id="hero" className="bg-grey-08 ">
      <div className="flex gap-x-10 flex-wrap xl:flex-nowrap xl:ps-20 px-4 xl:pe-0 2xl:ps-40 items-center justify-center xl:justify-between py-5 xl:py-0">
        <div className="xl:w-1/2 xl:pt-10 pt-10 order-2 xl:order-1">
          {/* <div className='relative max-w-[300px]'>
         <svg className='bg-red-900 ' xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
        <title>Circular Text Path</title>
        <defs>
          <path id="textcircle" d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
        </defs>
        <g className="textcircle">
          <text textLength="940">
            <textPath 
                      xlinkHref="#textcircle" 
                      aria-label="CSS & SVG are awesome" 
                      textLength="940">
             ✨ Discover Your Dream Property | ✨ Discover Your Dream Property |&#160;
            </textPath>
            
          </text>
        </g>
      </svg>
      <div className='w-32 h-32 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'></div>
         </div> */}
          <h2 className="font-semibold text-3xl xl:text-[2.9rem] text-white leading-[120%]">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="text-grey-60 text-sm xl:text-base font-medium mt-5 leading-[150%]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="text-white font-medium mt-10 xl:mt-12 text-sm xl:text-base">
            <button className="px-5 py-4 rounded-[0.5rem] border border-grey-15 w-full xl:w-auto">
              Learn More
            </button>
            <button className="xl:ms-4 px-5 py-4 rounded-[0.5rem] bg-purple-60 w-full xl:w-auto mt-4 xl:mt-0">
              Browse Properties
            </button>
          </div>
          <div className="text-white font-medium mt-10 xl:mt-12 grid grid-cols-4 gap-4 xl:grid-cols-3">
            <span className="bg-grey-10 inline-block px-5 py-4 rounded-[0.5rem] border border-grey-15 col-span-2 xl:col-span-1 ">
              <h2 className="font-bold xl:text-[2rem] text-2xl ">200+</h2>
              <p className="font-medium text-grey-60 text-sm xl:text-base">
                Happy Customers
              </p>
            </span>
            <span className="bg-grey-10 inline-block px-5 py-4 rounded-[0.5rem] border border-grey-15 col-span-2 xl:col-span-1">
              <h2 className="font-bold xl:text-[2rem] text-2xl">10k+</h2>
              <p className="font-medium text-grey-60 text-sm xl:text-base">
                Properties For Clients
              </p>
            </span>
            <span className="bg-grey-10 inline-block px-5 py-4 rounded-[0.5rem] border border-grey-15 col-span-4 xl:col-span-1 text-center xl:text-left">
              <h2 className="font-bold xl:text-[2rem] text-2xl">16+</h2>
              <p className="font-medium text-grey-60 text-sm xl:text-base">
                Years of Experience
              </p>
            </span>
          </div>
        </div>
        <div className="xl:w-1/2  relative bg-grey-10 overflow-hidden order-1 xl:order-2 rounded-[12px] xl:rounded-none">
          <div
            className=""
            style={{
              background: "no-repeat url('Abstract Design hero.svg')",

              backgroundPositionX: "center",
              backgroundPositionY: "35%",
            }}
          >
            <img src="hero.png" alt="hero image" className="relative " />
          </div>
        </div>
      </div>
      <div className=" gap-2 py-2 px-5 xl:px-1 border-y-4 border-grey-15 grid grid-cols-2 xl:grid-cols-4">
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative  ">
          <button className="absolute right-5 top-5">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.875 21.125L21.125 4.875M21.125 4.875L8.9375 4.875M21.125 4.875V17.0625"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src="Icon Container.svg"
            alt="Icon Container"
            className="mx-auto max-w-12"
          />
          <h2 className="font-semibold text-white mt-4 text-center text-sm xl:text-base text-sm xl:text-base">
            Find Your Dream Home
          </h2>
        </div>
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative   ">
          <button className="absolute right-5 top-5">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.875 21.125L21.125 4.875M21.125 4.875L8.9375 4.875M21.125 4.875V17.0625"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src="Icon Container-1.svg"
            alt="Icon Container"
            className="mx-auto max-w-12"
          />
          <h2 className="font-semibold text-white mt-4 text-center text-sm xl:text-base">
            Unlock Property Value
          </h2>
        </div>
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative ">
          <button className="absolute right-5 top-5">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.875 21.125L21.125 4.875M21.125 4.875L8.9375 4.875M21.125 4.875V17.0625"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src="Icon Container-2.svg"
            alt="Icon Container"
            className="mx-auto max-w-12"
          />
          <h2 className="font-semibold text-white mt-4 text-center text-sm xl:text-base">
            Effortless Property Management
          </h2>
        </div>
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative ">
          <button className="absolute right-5 top-5">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.875 21.125L21.125 4.875M21.125 4.875L8.9375 4.875M21.125 4.875V17.0625"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src="Icon Container-3.svg"
            alt="Icon Container"
            className="mx-auto max-w-12"
          />
          <h2 className="font-semibold text-white mt-4 text-center text-sm xl:text-base">
            Smart Investments, Informed Decisions
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
