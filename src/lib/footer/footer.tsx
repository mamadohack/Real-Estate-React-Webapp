function footer() {
  return (
    <section>
      <div className="px-5 py-10 xl:px-12 2xl:px-40 relative overflow-hidden">
        <img
          src="/footer/footer-1bgxl.png"
          className="absolute left-0 bottom-0 hidden xl:block"
          alt=""
        />
        <img
          src="/footer/footer-1bg.png"
          className="absolute -left-10 -top-10 xl:hidden"
          alt=""
        />
        <img
          src="/footer/footer-2bg.png"
          className="absolute -bottom-1/4 -right-1/4 xl:bottom-0 xl:right-0  "
          alt=""
        />
        <div className="flex items-center justify-between mt-3 gap-10 relative flex-col xl:flex-row">
          <div className="">
            <h2 className="font-semibold text-white text-[2.4rem]">
              Start Your Real Estate Journey Today
            </h2>
            <span className="font-medium text-grey-60 leading-[150%] inline-block mt-2">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </span>
          </div>
          <button className="text-sm text-white px-5 py-3.5  bg-purple-60 rounded-[8px] w-full max-w-md xl:max-w-max  ">
            Explore Properties
          </button>
        </div>
      </div>
      <div className="py-10 xl:py-20 xl:px-12 2xl:px-40 bg-grey-08 grid grid-cols-2 xl:grid-cols-[repeat(6,auto)] justify-between px-5 gap-y-5 xl:gap-x-5">
        <div className="col-span-2 xl:col-span-1 xl:w-[280px]">
          <h2>
            <a href="" className="">
              <img
                src="logo-img.svg"
                className="aspect-square w-[28px] sm:w-auto inline-block"
                alt=""
              />
              <img
                src="logo-text.svg"
                className="ms-2 inline-block h-[12px] sm:h-auto"
                alt=""
              />
            </a>
          </h2>
          <span className="inline-block relative mt-5 w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="placeholder"
              className="focus:border-grey-30 duration-100 outline-none text-white bg-transparent border border-grey-15 rounded-[8px] py-3 w-full peer ps-3 pe-[53px] text-sm placeholder:opacity-0"
            />
            <label
              htmlFor="email"
              className="absolute top-1/2 -translate-y-1/2 left-3 text-grey-60 opacity-0 duration-75 peer-focus:opacity-0 peer-placeholder-shown:opacity-100   "
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1665 3.83333H13.9998V4.66667C13.9998 4.88768 14.0876 5.09964 14.2439 5.25592C14.4002 5.4122 14.6122 5.5 14.8332 5.5C15.0542 5.5 15.2661 5.4122 15.4224 5.25592C15.5787 5.09964 15.6665 4.88768 15.6665 4.66667V3.83333H16.4998C16.7208 3.83333 16.9328 3.74554 17.0891 3.58926C17.2454 3.43298 17.3332 3.22101 17.3332 3C17.3332 2.77899 17.2454 2.56702 17.0891 2.41074C16.9328 2.25446 16.7208 2.16667 16.4998 2.16667H15.6665V1.33333C15.6665 1.11232 15.5787 0.900358 15.4224 0.744078C15.2661 0.587797 15.0542 0.5 14.8332 0.5C14.6122 0.5 14.4002 0.587797 14.2439 0.744078C14.0876 0.900358 13.9998 1.11232 13.9998 1.33333V2.16667H13.1665C12.9455 2.16667 12.7335 2.25446 12.5772 2.41074C12.421 2.56702 12.3332 2.77899 12.3332 3C12.3332 3.22101 12.421 3.43298 12.5772 3.58926C12.7335 3.74554 12.9455 3.83333 13.1665 3.83333ZM16.4998 7.16667C16.2788 7.16667 16.0669 7.25446 15.9106 7.41074C15.7543 7.56702 15.6665 7.77899 15.6665 8V13C15.6665 13.221 15.5787 13.433 15.4224 13.5893C15.2661 13.7455 15.0542 13.8333 14.8332 13.8333H3.1665C2.94549 13.8333 2.73353 13.7455 2.57725 13.5893C2.42097 13.433 2.33317 13.221 2.33317 13V5.00833L7.23317 9.91667C7.70192 10.3848 8.33733 10.6478 8.99984 10.6478C9.66234 10.6478 10.2978 10.3848 10.7665 9.91667L12.8248 7.85833C12.9818 7.70141 13.0699 7.48858 13.0699 7.26667C13.0699 7.04475 12.9818 6.83192 12.8248 6.675C12.6679 6.51808 12.4551 6.42992 12.2332 6.42992C12.0113 6.42992 11.7984 6.51808 11.6415 6.675L9.58317 8.73333C9.42739 8.88602 9.21796 8.97155 8.99984 8.97155C8.78171 8.97155 8.57228 8.88602 8.4165 8.73333L3.50817 3.83333H9.83317C10.0542 3.83333 10.2661 3.74554 10.4224 3.58926C10.5787 3.43298 10.6665 3.22101 10.6665 3C10.6665 2.77899 10.5787 2.56702 10.4224 2.41074C10.2661 2.25446 10.0542 2.16667 9.83317 2.16667H3.1665C2.50346 2.16667 1.86758 2.43006 1.39874 2.8989C0.929896 3.36774 0.666504 4.00363 0.666504 4.66667V13C0.666504 13.663 0.929896 14.2989 1.39874 14.7678C1.86758 15.2366 2.50346 15.5 3.1665 15.5H14.8332C15.4962 15.5 16.1321 15.2366 16.6009 14.7678C17.0698 14.2989 17.3332 13.663 17.3332 13V8C17.3332 7.77899 17.2454 7.56702 17.0891 7.41074C16.9328 7.25446 16.7208 7.16667 16.4998 7.16667Z"
                  fill="#999999"
                />
              </svg>

              <span className="inline-block ms-2 align-middle">
                Enter Your Email
              </span>
            </label>
            <button className="absolute right-0 top-0 h-full px-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M9.45139 19.1423C9.74339 19.4353 9.74339 19.9103 9.45139 20.2033L8.08539 21.5683C7.93939 21.7153 7.74739 21.7883 7.55539 21.7883C7.36339 21.7883 7.17139 21.7153 7.02539 21.5683C6.73239 21.2753 6.73239 20.8013 7.02539 20.5083L8.39039 19.1423C8.68339 18.8503 9.15839 18.8503 9.45139 19.1423ZM8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543ZM4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619Z"
                  fill="white"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="font-medium  col-span-1 border-b-2 border-grey-15 pb-5 border-r-2 bordery  after:-bottom-1 after:right-0 xl:border-hidden">
          <h2 className="text-grey-60 text-lg">
            <a href="">Home</a>
          </h2>
          <div className="space-y-4 mt-6 text-white">
            <h2>
              <a href="">Hero Section</a>
            </h2>
            <h2>
              <a href="">Features</a>
            </h2>
            <h2>
              <a href="">Properties</a>
            </h2>
            <h2>
              <a href="">Testimonials</a>
            </h2>
            <h2>
              <a href="">FAQ’s</a>
            </h2>
          </div>
        </div>
        <div className="font-medium  col-span-1 border-b-2 border-grey-15 pb-5 bordery after:-bottom-1 after:left-0 ps-5 xl:border-hidden xl:ps-0">
          <h2 className="text-grey-60 text-lg">
            <a href="">About Us</a>
          </h2>
          <div className="space-y-4 mt-6 text-white">
            <h2>
              <a href="">Our Story</a>
            </h2>
            <h2>
              <a href="">Our Works</a>
            </h2>
            <h2>
              <a href="">How It Works</a>
            </h2>
            <h2>
              <a href="">Our Team</a>
            </h2>
            <h2>
              <a href="">Our Clients</a>
            </h2>
          </div>
        </div>
        <div className="font-medium  col-span-1 border-b-2 border-grey-15 pb-5 bordery after:-bottom-1 after:right-0 xl:border-hidden" >
          <h2 className="text-grey-60 text-lg">
            <a href="">Properties</a>
          </h2>
          <div className="space-y-4 mt-6 text-white">
            <h2>
              <a href="">Portfolio</a>
            </h2>
            <h2>
              <a href="">Categories</a>
            </h2>
          </div>
        </div>
        <div className="font-medium  col-span-1 row-span-2 border-l-2 border-grey-15 bordery after:-bottom-1 after:left-0 ps-5 xl:border-hidden xl:ps-0">
          <div className="border-b-2 border-grey-15 pb-5 xl:border-hidden">
            <h2 className="text-grey-60 text-lg">
              <a href="">Services</a>
            </h2>
            <div className="space-y-4 mt-6 text-white">
              <h2>
                <a href="">Valuation Mastery</a>
              </h2>
              <h2>
                <a href="">Strategic Marketing</a>
              </h2>
              <h2>
                <a href="">Negotiation Wizardry</a>
              </h2>
              <h2>
                <a href="">Closing Success</a>
              </h2>
              <h2>
                <a href="">Property Management</a>
              </h2>
            </div>
          </div>
        </div>
        <div className="font-medium  col-span-1 border-b-2 border-grey-15 pb-5 bordery after:-bottom-1 after:right-0 xl:border-hidden">
          <h2 className="text-grey-60 text-lg">
            <a href="">Contact Us</a>
          </h2>
          <div className="space-y-4 mt-6 text-white">
            <h2>
              <a href="">Contact Form</a>
            </h2>
            <h2>
              <a href="">Our Offices</a>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex px-5 xl:px-12 2xl:px-40 py-5 justify-between bg-grey-10 items-center flex-col-reverse gap-5 xl:flex-row">
        <div className="text-sm text-white font-medium text-center">
          <a href="" className="block xl:inline-block">
            @2023 Estatein. All Rights Reserved.
          </a>
          <a href="" className="xl:ms-5 mt-2 xl:mt-0 inline-block">
            Terms & Conditions
          </a>
        </div>
        <div className="space-x-5">
          <a
            href=""
            className="inline-block bg-grey-08 rounded-full p-5 xl:p-2.5 align-top"
          >
            <img src="/footer/icons/Icon.svg" alt="" />
          </a>
          <a
            href=""
            className="inline-block bg-grey-08 rounded-full p-5 xl:p-2.5 align-top"
          >
            <img src="/footer/icons/Icon-1.svg" alt="" />
          </a>
          <a
            href=""
            className="inline-block bg-grey-08 rounded-full p-5 xl:p-2.5 align-top"
          >
            <img src="/footer/icons/Icon-2.svg" alt="" />
          </a>
          <a
            href=""
            className="inline-block bg-grey-08 rounded-full p-5 xl:p-2.5 align-top"
          >
            <img src="/footer/icons/Icon-3.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default footer;
