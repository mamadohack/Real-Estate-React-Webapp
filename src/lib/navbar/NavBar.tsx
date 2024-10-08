import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  let mql = window.matchMedia("(max-width: 1280px)");
  const [ShowNavBar, SetShowNavbar] = useState(false);
  return (
    <section className="bg-grey-10">
      <nav
        className="border-b border-grey-15 text-sm text-white font-medium px-12 text-center relative"
        style={{
          background: "no-repeat url('AbstractDesign.svg')",
          backgroundSize: "cover",
          backgroundPositionX: "right",
          mixBlendMode: "color-dodge",
        }}
      >
        {/* <img src="AbstractDesign.svg" alt="" className="absolute top-0 left-0 h-full object-cover object-right mix-blend-color-dodge w-full " /> */}
        <div className="py-[0.9rem]">
          <span className="">✨Discover Your Dream Property with Estatein</span>
          <button>
            <span className="ms-2 underline">Learn More</span>
          </button>
        </div>
        <button className="absolute top-1/2 right-8 -translate-y-1/2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="26"
              height="26"
              rx="13"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M8.5 17.5L17.5 8.5M8.5 8.5L17.5 17.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </nav>
      <nav className=" px-5 lg:px-12 2xl:px-40 py-4 sticky top-0">
        <div className="flex items-center justify-between flex-wrap">
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
          <button
            className="px-3 py-2 rounded-lg bg-[--primary] lg:hidden duration-200 hover:opacity-85"
            onClick={() => {
              SetShowNavbar((p) => !p);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <div
            id="navbar_colapse"
            className={
              "w-full lg:block lg:w-auto ease-in-out duration-500 overflow-hidden xl:text-sm 2xl:text-lg"
            }
          >
            <ul className={"lg:gap-5 gap-2 lg:flex flex-col lg:flex-row text-white flex duration-500 ease-in-out"+" "+`${mql.matches && (ShowNavBar ? "h-screen" : "h-[0]")}`}>
              <li>
                <Link
                  to=""
                  className="rounded-[0.5rem] border border-grey-15 px-5 py-3 font-medium duration-200 hover:opacity-85 bg-grey-08 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="px-5 py-3 font-medium duration-200 hover:opacity-85 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="px-5 py-3 font-medium duration-200 hover:opacity-85 inline-block"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="px-5 py-3 font-medium duration-200 hover:opacity-85 inline-block"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/contact"
            className="text-white font-medium  px-5 py-3 hidden lg:block rounded-[0.5rem] border border-grey-15 duration-200 hover:opacity-85 bg-grey-08 text-sm"
          >
            <span className="">Contact Us</span>
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
