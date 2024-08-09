function footer() {
  return (
    <section>
      <div className="py-14 lg:px-20 relative">
        <img
          src="/footer/footer-1bg.png"
          className="absolute bottom-0 left-0  "
          alt=""
        />
        <img
          src="/footer/footer-2bg.png"
          className="absolute bottom-0 right-0  "
          alt=""
        />
        <div className="flex items-center justify-between mt-3 gap-10 relative">
          <div>
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
          <button className="text-sm text-white px-5 py-3.5  bg-purple-60 rounded-[8px] min-w-max ">
            Explore Properties
          </button>
        </div>
      </div>
      <div className="py-5 lg:px-20 ">
        <div className="grid grid-cols-7">
          <div className="col-span-2">
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
            <span className="inline-block relative mt-5">
            <input
                type="email"
                name="email"
                id="email"
                placeholder="placeholder"
                className="outline-none text-white bg-transparent border border-grey-15 rounded-[8px] py-3 min-w-[300px] peer px-3 text-sm placeholder:opacity-0"
              />
              <label
                htmlFor="email"
                className="absolute top-1/2 -translate-y-1/2 left-3 text-grey-60 opacity-0 duration-200 peer-focus:opacity-0 peer-placeholder-shown:opacity-100   "
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
                
                <span className="inline-block ms-2 align-middle">Enter Your Email</span>
              </label>
              
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
