import React from "react";
// import navLogo1 from "../../assets/arrow_drop_up.png";
import navLogo2 from "../../assets/welcLinkLogo.png";
import navLogo3 from "../../assets/welcNavCountryLogo.png";
import navLogo4 from "../../assets/welcomeIGLogo.png";
import navLogo5 from "../../assets/welcomeXLogo.png";
import navLogo6 from "../../assets/welcomeNavLogo.png";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  return (
    <>
      <div className="navTopSection bg-nav-background p-3 pr-16">
        <div className="flex pr-2.5 gap-2 justify-end">
          <img src={navLogo3} alt="nav logo" className="w-9 h-6 pr-0 mr-0" />
          <p className="w-2.5 h-2.5 pt-1.5 pr-6 pl-0 ml-0 text-arrow-down cursor-pointer">
            <TiArrowSortedDown />
          </p>
          <div className="pt-1 flex gap-1.5">
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

      <div className="flex justify-between pr-24 font-medium">
        <div className="align-center pl-24 flex">
          <img
            src={navLogo6}
            alt="nav logo"
            className="w-42 h-16 pr-6 cursor-pointer"
          />
          <ul className="list-none flex pt-8 space-between text-lg font-medium text-center">
            <li className="text-active pr-4 cursor-pointer">Home</li>
            <li className="pr-4 cursor-pointer">About</li>
            <li className="pr-4 cursor-pointer">Products</li>
            <li className="pr-4 cursor-pointer">Conversions</li>
            <li className="pr-4 cursor-pointer">Open an account</li>
            <li className="pr-4 cursor-pointer">Contact us</li>
          </ul>
        </div>
        <div className="pt-6">
          <button className="pr-3.5 pt-3 pl-3.5 pb-2.5 gap-1.5 bg-nav-background rounded-s-md rounded-e-md">
            Download app
          </button>
        </div>
      </div>
    </>
  );
}
