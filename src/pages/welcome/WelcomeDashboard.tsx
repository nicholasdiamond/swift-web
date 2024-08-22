import React from "react";
import Navbar from "./Navbar";
import banner from "../../assets/welcomeBanner.png";
import breakOut from "../../assets/breakOut.png";
import reliable from "../../assets/security_update_good.png";
import efficient from "../../assets/blur_on.png";
import reward from "../../assets/award_star.png";
import seamless from "../../assets/view_cozy.png";
import integration from "../../assets/settings_input_antenna.png";
import fast from "../../assets/bolt.png";
import Card from "react-bootstrap/Card";
import { IoMdCheckmark } from "react-icons/io";

export default function WelcomeDashboard() {
  return (
    <>
      <Navbar />
      <img src={banner} alt="Banner Image" className="w-full h-full mt-4" />
      <div className="flex justify-center max-w-6xl m-auto">
        <div className="pt-40 z-50">
          <div>
            <p className="text-2xl w-9/12 font-medium leading-8 pb-8">
              Break out from slow and insecure transactions with our{" "}
              <span className="font-bold text-3xl text-swift-span">Swift,</span>{" "}
              <span className="font-bold text-3xl text-active">Reliable</span>{" "}
              and{" "}
              <span className="font-bold text-3xl text-swift-span">Secure</span>{" "}
              payment platform
            </p>
          </div>
          <div className="flex mb-8 gap-3 flex-wrap max-w-8xl">
            <Card className="w-64 border shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={fast} alt="" className="p-8" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Fast</Card.Title>
                <Card.Text className="border-bottom">
                  Make payments for your cable networks with ease using our
                  platform and get best deals.
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  PAY{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
            <Card className="w-64 border shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={reliable} alt="" className="p-8" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Reliable</Card.Title>
                <Card.Text className="border-bottom">
                  Make payments for your cable networks with ease using our
                  platform and get best deals.
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  PAY{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
            <Card className="w-64 border shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={efficient} alt="" className="p-8" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Efficient</Card.Title>
                <Card.Text className="border-bottom">
                  Make payments for your cable networks with ease using our
                  platform and get best deals.
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  PAY{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
            <Card className="w-64 border shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={reward} alt="" className="p-8" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Reward</Card.Title>
                <Card.Text className="border-bottom">
                  Make payments for your cable networks with ease using our
                  platform and get best deals.
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  PAY{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
            <Card className="w-64 border shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={seamless} alt="" className="p-8" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Seamless</Card.Title>
                <Card.Text className="border-bottom">
                  Make payments for your cable networks with ease using our
                  platform and get best deals.
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  PAY{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
            <Card className="w-64 border shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={integration} alt="" className="p-8" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Integrations</Card.Title>
                <Card.Text className="border-bottom">
                  Make payments for your cable networks with ease using our
                  platform and get best deals.
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  PAY{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="breakout w-8/12 pr-8">
          <img src={breakOut} alt="breakOut" className="h-3/5 w-11/12" />
        </div>
      </div>
    </>
  );
}
