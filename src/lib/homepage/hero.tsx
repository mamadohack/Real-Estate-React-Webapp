import "./hero.css";
function Hero() {
  return (
    <section id="hero" className="bg-grey-08 pb-20">
      <div className="flex gap-10 flex-wrap xl:flex-nowrap max-w-[1280px] ms-auto">
        <div className="xl:w-1/2 py-14">
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
          <h2 className="font-semibold text-[2.9rem] text-white leading-[120%]">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="text-grey-60 font-medium mt-5 leading-[150%]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="text-white font-medium mt-12 text-sm">
            <button className="px-5 py-4 rounded-[0.5rem] border border-grey-15">
              Learn More
            </button>
            <button className="ms-4 px-5 py-4 rounded-[0.5rem] bg-purple-60">
              Browse Properties
            </button>
          </div>
          <div className="text-white font-medium mt-12 space-x-4">
            <span className="bg-grey-10 inline-block px-5 py-4 rounded-[0.5rem] border border-grey-15">
              <h2 className="font-bold text-[2rem]">200+</h2>
              <p className="font-medium text-grey-60">Happy Customers</p>
            </span>
            <span className="bg-grey-10 inline-block px-5 py-4 rounded-[0.5rem] border border-grey-15">
              <h2 className="font-bold text-[2rem]">10k+</h2>
              <p className="font-medium text-grey-60">Properties For Clients</p>
            </span>
            <span className="bg-grey-10 inline-block px-5 py-4 rounded-[0.5rem] border border-grey-15">
              <h2 className="font-bold text-[2rem]">16+</h2>
              <p className="font-medium text-grey-60">Years of Experience</p>
            </span>
          </div>
        </div>
        <div className="xl:w-1/2  relative bg-grey-10 overflow-hidden ">
        <img src="Abstract Design hero.svg" className="absolute top-0 left-0 object-cover object-right min-h-[550px]  " alt="" />
        <img src="hero.png" alt="hero image" className="relative " />
        </div>
      </div>
      <div className="flex gap-2 p-2 border-y-4 border-grey-15">
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative w-1/4">
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
            className="mx-auto"
          />
          <h2 className="font-semibold text-white mt-4 text-center">
            Find Your Dream Home
          </h2>
        </div>
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative w-1/4">
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
            className="mx-auto"
          />
          <h2 className="font-semibold text-white mt-4 text-center">
          Unlock Property Value
          </h2>
        </div>
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative w-1/4">
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
            className="mx-auto"
          />
          <h2 className="font-semibold text-white mt-4 text-center">
          Effortless Property Management
          </h2>
        </div>
        <div className="px-4 py-8 rounded-[10px] bg-grey-10 border border-grey-15 relative w-1/4">
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
            className="mx-auto"
          />
          <h2 className="font-semibold text-white mt-4 text-center">
          Smart Investments, Informed Decisions
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
