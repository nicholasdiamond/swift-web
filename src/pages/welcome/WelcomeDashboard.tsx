import React from "react";
import Navbar from "./Navbar";
import banner from "../../assets/welcomeBanner.png";

export default function WelcomeDashboard() {
  return (
    <div>
      <Navbar />
      <img src={banner} alt="Banner Image" className="w-full h-full mt-4" />
      <div></div>
    </div>
  );
}
