import React from "react";
import navLogo1 from "../../assets/arrow_drop_up.png";
import navLogo2 from "../../assets/welcLinkLogo.png";
import navLogo3 from "../../assets/welcNavCountryLogo.png";
import navLogo4 from "../../assets/welcomeIGLogo.png";
import navLogo5 from "../../assets/welcomeXLogo.png";
import navLogo6 from "../../assets/welcomeBanner.png";

export default function Navbar() {
  return (
    <>
      <div className="navTopSection">
        <img src={navLogo3} alt="nav logo" />
        <img src={navLogo1} alt="nav logo" />
        <img src={navLogo4} alt="nav logo" />
        <img src={navLogo5} alt="nav logo" />
        <img src={navLogo2} alt="nav logo" />
      </div>
      <div>
        <div>
          <img src={navLogo6} alt="nav logo" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Conversions</li>
            <li>Open an account</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <button>Download app</button>
        </div>
      </div>
    </>
  );
}
