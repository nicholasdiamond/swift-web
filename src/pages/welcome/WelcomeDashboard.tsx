import React from "react";
import Navbar from "./Navbar";
import banner from "../../assets/welcomeBanner.png";
import breakOut from "../../assets/breakOut.png";
import reliable from "../../assets/security_update_good.png";
import efficient from "../../assets/blur_on.png";
import reward from "../../assets/award_star.png";
import seamless from "../../assets/view_cozy.png";
import integration from "../../assets/settings_input_antenna.png";
import excitingOffer from "../../assets/excitingOffer.png";
import bills from "../../assets/bills.png";
import currency from "../../assets/currency.png";
import deposit from "../../assets/deposit.png";
import transfer from "../../assets/transfer.png";
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
            <Card className="w-64 border shadow-card-shadow">
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
            <Card className="w-64 border shadow-card-shadow">
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
            <Card className="w-64 border shadow-card-shadow">
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
            <Card className="w-64 border shadow-card-shadow">
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
            <Card className="w-64 border shadow-card-shadow">
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
            <Card className="w-64 border shadow-card-shadow">
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
      <div className="max-w-6xl m-auto pb-8">
        <div className="pt-20 pb-0">
          <img src={excitingOffer} alt="exciting offers" className="w-4/12" />
        </div>
        <div className="flex justify-center flex-wrap pl-0 gap-3 pt-0">
          <Card className="w-2/5 h-11/12 border shadow-card-shadow">
            <Card.Img variant="top" src={bills} />
            <Card.Body>
              <Card.Title className="bold">PAY BILLS</Card.Title>
              <Card.Text>
                We cover a wide range bill payment ranging from airtime
                recharge, internet subscription, travel tickets, cable recharge,
                electricity top-up e.t.c
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="w-2/5 h-11/12 border shadow-card-shadow">
            <Card.Img variant="top" src={currency} />
            <Card.Body>
              <Card.Title className="bold">Fast</Card.Title>
              <Card.Text>
                Get a better rate conversion with us on all currency exchange
                and do more with your forex to local conversions
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="w-2/5 h-11/12 border shadow-card-shadow">
            <Card.Img variant="top" src={deposit} />
            <Card.Body>
              <Card.Title className="bold">Fast</Card.Title>
              <Card.Text>
                Reliably save with Swiftpoint for fulfilling your money
                objectives like building a savings, expenditure motives and
                investment related decisions
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="w-2/5 h-11/12 border shadow-card-shadow">
            <Card.Img variant="top" src={transfer} />
            <Card.Body>
              <Card.Title className="bold">Fast</Card.Title>
              <Card.Text>
                Seamlessly send funds to other Swiftpoint users around you
                without hassle and get a considerable fee charge on each
                transfer
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
