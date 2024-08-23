import EmblaCarousel from "../utils/carousel";
function Properties() {
  return (
    <section className="px-5 pt-10 xl:px-12 2xl:px-40">
      
      <div className="mt-2">
        <div className="flex items-end justify-between mt-3 gap-10">
          <div>
            <h2 className="font-semibold text-white text-3xl xl:text-[2.4rem]">
              Featured Properties
            </h2>
            <span className="font-medium text-grey-60 leading-[150%] inline-block mt-2 ">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </span>
          </div>

          <button className="text-sm text-white px-5 py-3.5 border bg-grey-10 border-grey-15 rounded-[8px] min-w-max hidden xl:inline-block">
            View All Properties
          </button>
        </div>
      </div>
      <main className="pt-10 ">
        <EmblaCarousel>
          <div className="embla__slide">
            <div className="p-5 border border-grey-15 rounded-[12px] ">
              <img
                src="/property/property (1).png"
                className="object-cover rounded-[10px] h-[255px] w-full"
                alt=""
              />
              <h2 className="mt-5 text-white text-xl font-semibold">
                Seaside Serenity Villa
              </h2>
              <p className="mt-1 text-grey-60 font-medium">
                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
                neighborhood...{" "}
                <a href="" className="text-white underline text-sm">
                  Read More
                </a>
              </p>
              <div className="space-x-1 space-y-2 mt-5">
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bedroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    4-Bedroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bathroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    3-Bathroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/villa.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    Villa
                  </span>
                </span>
              </div>
              <div className="flex items-start justify-between mt-5 gap-2 xl:gap-10">
                <div className="">
                  <h2 className="text-grey-60 font-meduim text-sm">Price</h2>
                  <h2 className="font-semibold text-xl text-white">$550,000</h2>
                </div>
                <div className="w-full">
                  <button className="w-full text-sm text-white font-medium  px-5 py-3.5 rounded-[8px] bg-purple-60">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="p-5 border border-grey-15 rounded-[12px] ">
              <img
                src="/property/property (2).png"
                className="object-cover rounded-[10px] h-[255px] w-full"
                alt=""
              />
              <h2 className="mt-5 text-white text-xl font-semibold">
                Metropolitan Haven
              </h2>
              <p className="mt-1 text-grey-60 font-medium">
                A chic and fully-furnished 2-bedroom apartment with panoramic...
                <a
                  href=""
                  className="text-white underline text-sm ms-1 inline-block"
                >
                  Read More
                </a>
              </p>
              <div className="space-x-1 space-y-2 mt-5">
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bedroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    2-Bedroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bathroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    2-Bathroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/villa.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">Villa</span>
                </span>
              </div>
              <div className="flex items-start justify-between mt-5 gap-2 xl:gap-10">
                <div className="">
                  <h2 className="text-grey-60 font-meduim text-sm">Price</h2>
                  <h2 className="font-semibold text-xl text-white">$550,000</h2>
                </div>
                <div className="w-full">
                  <button className="w-full text-sm text-white font-medium  px-5 py-3.5 rounded-[8px] bg-purple-60">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="p-5 border border-grey-15 rounded-[12px] ">
              <img
                src="/property/property (3).png"
                className="object-cover rounded-[10px] h-[255px] w-full"
                alt=""
              />
              <h2 className="mt-5 text-white text-xl font-semibold">
                Rustic Retreat Cottage
              </h2>
              <p className="mt-1 text-grey-60 font-medium">
                An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
                <a
                  href=""
                  className="text-white underline text-sm inline-block ms-1"
                >
                  Read More
                </a>
              </p>
              <div className="space-x-1 space-y-2 mt-5">
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bedroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    4-Bedroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bathroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    3-Bathroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/villa.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">Villa</span>
                </span>
              </div>
              <div className="flex items-start justify-between mt-5 gap-2 xl:gap-10">
                <div className="">
                  <h2 className="text-grey-60 font-meduim text-sm">Price</h2>
                  <h2 className="font-semibold text-xl text-white">$550,000</h2>
                </div>
                <div className="w-full">
                  <button className="w-full text-sm text-white font-medium  px-5 py-3.5 rounded-[8px] bg-purple-60">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="p-5 border border-grey-15 rounded-[12px] ">
              <img
                src="/property/property (1).png"
                className="object-cover rounded-[10px] h-[255px] w-full"
                alt=""
              />
              <h2 className="mt-5 text-white text-xl font-semibold">
                Seaside Serenity Villa
              </h2>
              <p className="mt-1 text-grey-60 font-medium">
                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
                neighborhood...{" "}
                <a href="" className="text-white underline text-sm">
                  Read More
                </a>
              </p>
              <div className="space-x-1 space-y-2 mt-5">
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bedroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    4-Bedroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bathroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    3-Bathroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/villa.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">Villa</span>
                </span>
              </div>
              <div className="flex items-start justify-between mt-5 gap-2 xl:gap-10">
                <div className="">
                  <h2 className="text-grey-60 font-meduim text-sm">Price</h2>
                  <h2 className="font-semibold text-xl text-white">$550,000</h2>
                </div>
                <div className="w-full">
                  <button className="w-full text-sm text-white font-medium  px-5 py-3.5 rounded-[8px] bg-purple-60">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="p-5 border border-grey-15 rounded-[12px] ">
              <img
                src="/property/property (2).png"
                className="object-cover rounded-[10px] h-[255px] w-full"
                alt=""
              />
              <h2 className="mt-5 text-white text-xl font-semibold">
                Metropolitan Haven
              </h2>
              <p className="mt-1 text-grey-60 font-medium">
                A chic and fully-furnished 2-bedroom apartment with panoramic...
                <a
                  href=""
                  className="text-white underline text-sm ms-1 inline-block"
                >
                  Read More
                </a>
              </p>
              <div className="space-x-1 space-y-2 mt-5">
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bedroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    2-Bedroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bathroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    2-Bathroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/villa.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">Villa</span>
                </span>
              </div>
              <div className="flex items-start justify-between mt-5 gap-2 xl:gap-10">
                <div className="">
                  <h2 className="text-grey-60 font-meduim text-sm">Price</h2>
                  <h2 className="font-semibold text-xl text-white">$550,000</h2>
                </div>
                <div className="w-full">
                  <button className="w-full text-sm text-white font-medium  px-5 py-3.5 rounded-[8px] bg-purple-60">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="p-5 border border-grey-15 rounded-[12px] ">
              <img
                src="/property/property (3).png"
                className="object-cover rounded-[10px] h-[255px] w-full"
                alt=""
              />
              <h2 className="mt-5 text-white text-xl font-semibold">
                Rustic Retreat Cottage
              </h2>
              <p className="mt-1 text-grey-60 font-medium">
                An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
                <a
                  href=""
                  className="text-white underline text-sm inline-block ms-1"
                >
                  Read More
                </a>
              </p>
              <div className="space-x-1 space-y-2 mt-5">
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bedroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    4-Bedroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/bathroom.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">
                    3-Bathroom
                  </span>
                </span>
                <span className="inline-block px-3.5 py-1.5 border border-grey-15 bg-grey-10 rounded-[28px]">
                  <img
                    src="/property/icons/villa.svg"
                    alt=""
                    className="inline-block"
                  />
                  <span className="ms-1 text-sm font-medium text-white">Villa</span>
                </span>
              </div>
              <div className="flex items-start justify-between mt-5 gap-2 xl:gap-10">
                <div className="">
                  <h2 className="text-grey-60 font-meduim text-sm">Price</h2>
                  <h2 className="font-semibold text-xl text-white">$550,000</h2>
                </div>
                <div className="w-full">
                  <button className="w-full text-sm text-white font-medium  px-5 py-3.5 rounded-[8px] bg-purple-60">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </EmblaCarousel>
      </main>
    </section>
  );
}

export default Properties;
