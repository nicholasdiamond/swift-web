import React from "react";
import navLogo2 from "../../assets/welcLinkLogo.png";
import navLogo3 from "../../assets/welcNavCountryLogo.png";
import navLogo4 from "../../assets/welcomeIGLogo.png";
import navLogo5 from "../../assets/welcomeXLogo.png";
import navLogo6 from "../../assets/welcomeNavLogo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="max-sm:hidden">
        <div className="navTopSection bg-nav-background p-1 pr-16">
          <div className="flex pr-2.5 gap-2 justify-end pt-1">
            <img src={navLogo3} alt="nav logo" className="w-9 h-6 pr-0 mr-0" />
            <p className="w-2.5 h-2.5 pt-1.5 pr-6 pl-0 ml-0 text-arrow-down cursor-pointer">
              <TiArrowSortedDown />
            </p>
            <div className=" flex gap-1.5">
              <img
                src={navLogo4}
                alt="nav logo"
                className="shadow-nav-shadow w-5 h-5 p-px rounded-s-full rounded-e-full cursor-pointer"
              />
              <img
                src={navLogo5}
                alt="nav logo"
                className="shadow-nav-shadow w-5 h-5 p-px rounded-s-full rounded-e-full cursor-pointer"
              />
              <img
                src={navLogo2}
                alt="nav logo"
                className="shadow-nav-shadow w-5 h-5 p-px rounded-s-full rounded-e-full cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between pr-24 font-medium sticky top-0 navbarcustomstyle shadow-nav-shadow bg-white tablet:pr-2">
          <div className="align-center pl-24 flex tablet:pl-2">
            <img
              src={navLogo6}
              alt="nav logo"
              className="w-42 h-16 pr-3 cursor-pointer tablet:pr-0"
            />
            <ul className="list-none flex pt-7 space-between text-lg font-medium text-center tablet:text-base tablet:justify-normal">
              <li className="text-active pr-4 cursor-pointer tablet:mr-2 tablet:pr-0">
                Home
              </li>
              <li className="mr-4 cursor-pointer borderbottom tablet:mr-2">
                About
              </li>
              <li className="mr-4 cursor-pointer borderbottom tablet:mr-2">
                Products
              </li>
              <li className="mr-4 cursor-pointer borderbottom tablet:mr-2">
                Conversions
              </li>
              <li className="mr-4 cursor-pointer borderbottom tablet:mr-2">
                Open an account
              </li>
              <li className="mr-4 cursor-pointer borderbottom tablet:mr-2">
                Contact us
              </li>
            </ul>
          </div>
          <div className="pt-3">
            <button className="pr-3.5 pt-2.5 pl-3.5 pb-2.5 gap-1.5 bg-nav-background rounded-s-md rounded-e-md tablet:p-2 tablet:text-nowrap tablet:gap-0">
              Download app
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Nav */}
      <div className="2xl:hidden md:hidden lg:hidden xl:hidden sm:flex">
        <div className="flex justify-between p-2 pt-0">
          <div>
            <img src={navLogo6} alt="Nav logo" className="w-24 h-12" />
          </div>
          <div className="flex pt-3">
            <img src={navLogo3} alt="Nav logo" className="w-8 h-7 pt-1" />
            <TiArrowSortedDown className="text-2xl pt-2" />
            <IoIosMenu className="text-3xl pl-2" />
          </div>
        </div>
      </div>
    </>
  );
}
