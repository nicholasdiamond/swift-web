import navLogo2 from "../../assets/welcLinkLogo.png";
import navLogo3 from "../../assets/welcNavCountryLogo.png";
import navLogo4 from "../../assets/welcomeIGLogo.png";
import navLogo5 from "../../assets/welcomeXLogo.png";
import navLogo6 from "../../assets/welcomeNavLogo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  // window.onscroll = function () {
  //   myFunction();
  // };

  // // Get the navbar
  // const navbar = document.getElementById("navbar");

  // // Get the offset position of the navbar
  // const sticky = navbar.offsetTop;

  // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.scrollY >= sticky) {
  //     navbar.classList.add("sticky");
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  return (
    <>
      <div className="max-sm:hidden">
        <div className="navTopSection bg-nav-background pr-24">
          <div className="flex gap-2.5 justify-end pt-1">
            <div className="flex">
              <img src={navLogo3} alt="nav logo" className="w-7 h-5 " />
              <p className="w-2.5 h-2.5 pt-1.5 text-arrow-down cursor-pointer">
                <TiArrowSortedDown className="m-0 p-0 text-xs" />
              </p>
            </div>
            <div className=" flex">
              <img
                src={navLogo4}
                alt="nav logo"
                className=" w-5 h-5 p-px rounded-s-full rounded-e-full cursor-pointer"
              />
              <img
                src={navLogo5}
                alt="nav logo"
                className=" w-5 h-5 p-px rounded-s-full rounded-e-full cursor-pointer"
              />
              <img
                src={navLogo2}
                alt="nav logo"
                className=" w-5 h-5 p-px rounded-s-full rounded-e-full cursor-pointer"
              />
            </div>
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
