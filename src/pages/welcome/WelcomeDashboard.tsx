import React from "react";
import Navbar from "./Navbar";
import banner from "../../assets/welcomeBanner.png";
import serviceBanner from "../../assets/servicesBanner.png";
import transactionproofBanner from "../../assets/transactionproofBanner.png";
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
import scan1 from "../../assets/scan1.png";
import scanner from "../../assets/code_scanner.png";
import download2 from "../../assets/download2.png";
import download from "../../assets/download.png";
import register3 from "../../assets/register3.png";
import register from "../../assets/register.png";
import lock from "../../assets/shield_lock.png";
import swiftP1 from "../../assets/swiftP1.png";
import swiftP2 from "../../assets/swiftP2.png";
import swiftP3 from "../../assets/swiftP3.png";
import footerlogo from "../../assets/welcomeNavLogo.png";
import Card from "react-bootstrap/Card";
import { IoMdCheckmark } from "react-icons/io";
import { Carousel } from "react-bootstrap";

export default function WelcomeDashboard() {
  return (
    <>
      <Navbar />
      <Carousel fade className="carouselControl customAnimation">
        <Carousel.Item>
          <img src={banner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={serviceBanner} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={transactionproofBanner} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="flex justify-center max-w-6xl m-auto max-sm:max-w-3xl max-sm:pl-2 max-sm:pr-2">
        <div className="pt-40 z-50 max-sm:pt-10">
          <div>
            <p className="text-2xl w-9/12 font-medium leading-8 pb-8 max-sm:text-base max-sm:pb-2 max-sm:max-w-40">
              Break out from slow and insecure transactions with our{" "}
              <span className="font-bold text-3xl text-swift-span max-sm:text-xl">
                Swift,
              </span>{" "}
              <span className="font-bold text-3xl text-active max-sm:text-xl">
                Reliable
              </span>{" "}
              and{" "}
              <span className="font-bold text-3xl text-swift-span max-sm:text-xl">
                Secure
              </span>{" "}
              payment platform
            </p>
          </div>
          <div className="flex mb-8 gap-3 flex-wrap max-w-8xl max-sm:max-w-2xl max-sm:justify-center">
            <Card className="w-64 border shadow-card-shadow">
              <Card.Body className="bg-active h-4/5 center">
                <img src={fast} alt="fast" className="p-8" />
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
                <img src={reliable} alt="reliable" className="p-8" />
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
                <img src={efficient} alt="efficient" className="p-8" />
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
                <img src={reward} alt="reward" className="p-8" />
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
                <img src={seamless} alt="seamless" className="p-8" />
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
                <img src={integration} alt="integration" className="p-8" />
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
        <div className="breakout w-8/12 pr-8 max-sm:pr-1 max-sm:w-full">
          <img
            src={breakOut}
            alt="breakOut"
            className="h-3/5 w-11/12 max-sm:w-80 max-sm:h-44"
          />
        </div>
      </div>

      <div className="max-w-6xl m-auto pb-8 max-sm:max-w-3xl">
        <div className="pt-20 pb-0 max-sm:justify-center max-sm:pt-0 max-sm:pl-8">
          <img
            src={excitingOffer}
            alt="exciting offers"
            className="w-4/12 max-sm:w-11/12"
          />
        </div>
        <div className="flex justify-center flex-wrap pl-0 gap-3 pt-0">
          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            <Card.Img variant="top" src={bills} />
            <div className="customOffer max-sm:ml-53 text-end bg-white w-20">
              <p className="text-center text-2xl pt-1 font-semibold text-active">
                FAST
              </p>
            </div>
            <Card.Body>
              <div className="text-end offersPercent max-sm:ml-54 bg-active w-20">
                <p className="text-center text-2xl pt-1 text-white font-semibold">
                  100%
                </p>
              </div>
              <Card.Title className="bold">PAY BILLS</Card.Title>
              <Card.Text>
                We cover a wide range bill payment ranging from airtime
                recharge, internet subscription, travel tickets, cable recharge,
                electricity top-up e.t.c
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            <Card.Img variant="top" src={currency} />
            <div className="customOffer max-sm:ml-53 text-end bg-white w-20">
              <p className="text-center text-2xl pt-1 font-semibold text-active">
                RATE
              </p>
            </div>
            <Card.Body>
              <div className="text-end offersPercent max-sm:ml-54 bg-active w-20">
                <p className="text-center text-2xl pt-1 text-white font-semibold">
                  100%
                </p>
              </div>
              <Card.Title className="bold">CURRENCY CONVERSION</Card.Title>
              <Card.Text>
                Get a better rate conversion with us on all currency exchange
                and do more with your forex to local conversions
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            <Card.Img variant="top" src={deposit} />
            <div className="customOffer max-sm:ml-53 text-end bg-white w-20">
              <p className="text-center text-2xl pt-1 font-semibold text-active">
                SAFE
              </p>
            </div>
            <Card.Body>
              <div className="text-end offersPercent max-sm:ml-54 bg-active  w-20">
                <p className="text-center text-2xl pt-1 text-white font-semibold">
                  100%
                </p>
              </div>
              <Card.Title className="bold">DEPOSIT</Card.Title>
              <Card.Text>
                Reliably save with Swiftpoint for fulfilling your money
                objectives like building a savings, expenditure motives and
                investment related decisions
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            <Card.Img variant="top" src={transfer} />
            <div className="customOffer max-sm:ml-53 text-end bg-white ">
              <p className="text-center text-2xl pt-1 font-semibold text-active">
                SWIFT
              </p>
            </div>
            <Card.Body>
              <div className="text-end offersPercent max-sm:ml-54 max-sm:w-20 bg-active ">
                <p className="text-center text-2xl pt-1 text-white font-semibold">
                  100%
                </p>
              </div>
              <Card.Title className="bold">TRANSFER</Card.Title>
              <Card.Text>
                Seamlessly send funds to other Swiftpoint users around you
                without hassle and get a considerable fee charge on each
                transfer
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="bg-footer-texture bg-[length:1180px_640px] bg-no-repeat h-4/5 p-20 pb-32 mb-8 mt-20 max-sm:p-10 max-sm:mt-8 max-sm:text-center max-sm:pt-8 max-sm:h-5/6 max-sm:bg-[length:1370px_1095px]">
        <div className="max-w-5xl m-auto text-center max-sm:max-w-2xl">
          <h2 className="font-bold max-sm:pb-1 2xl:pb-5  md:pb-5  lg:pb-5  xl:pb-5 ">
            Three Steps to get onboarded with us
          </h2>
          <div className="flex gap-4 max-w-5xl m-auto max-sm:flex-wrap">
            <div className="shadow-stepsCard-shadow text-center p-2 w-96 bg-stepsCard-background">
              <img
                src={scan1}
                alt="scanner"
                className="w-20 max-sm:w-14 max-sm:pt-0 max-sm:pl-0  2xl:pt-2 2xl:pl-2  md:pt-2 md:pl-2  lg:pt-2 lg:pl-2  xl:pt-2 xl:pl-2"
              />
              <img
                src={scanner}
                alt="scanner"
                className="w-48 max-sm:w-32 max-sm:pl-20 max-sm:pb-1 md:pl-28 md:pb-3 xl:pl-28 xl:pb-3 lg:pl-28 lg:pb-3 2xl:pl-28 2xl:pb-3"
              />
              <h2 className="font-bold max-sm:pb-0 max-sm:mb-0">Scan</h2>
              <p>
                Get our mobile app on apple and google playstore by scanning
                this barcode and start experiencing swift payments on all bills
                and expenditures
              </p>
            </div>

            <div className="shadow-stepsCard-shadow text-center p-2 w-96 bg-stepsCard-background">
              <img
                src={download2}
                alt="download"
                className="w-20 max-sm:w-14 max-sm:pt-0 max-sm:pl-0  2xl:pt-2 2xl:pl-2  md:pt-2 md:pl-2  lg:pt-2 lg:pl-2  xl:pt-2 xl:pl-2"
              />
              <img
                src={download}
                alt="download"
                className="w-48 max-sm:w-32 max-sm:pl-20 max-sm:pb-1 md:pl-28 md:pb-3 xl:pl-28 xl:pb-3 lg:pl-28 lg:pb-3 2xl:pl-28 2xl:pb-3"
              />
              <h2 className="font-bold max-sm:pb-0 max-sm:mb-0">Download</h2>
              <p>
                Install our mobile app on your device after scanning and you are
                on flight for swift transactions
              </p>
            </div>

            <div className="shadow-stepsCard-shadow text-center p-2 w-96 bg-stepsCard-background">
              <img
                src={register3}
                alt="register"
                className="w-20 max-sm:w-14 max-sm:pt-0 max-sm:pl-0  2xl:pt-2 2xl:pl-2  md:pt-2 md:pl-2  lg:pt-2 lg:pl-2  xl:pt-2 xl:pl-2"
              />
              <img
                src={register}
                alt="register"
                className="w-48 max-sm:w-32 max-sm:pl-20 max-sm:pb-1 md:pl-28 md:pb-3 xl:pl-28 xl:pb-3 lg:pl-28 lg:pb-3 2xl:pl-28 2xl:pb-3"
              />
              <h2 className="font-bold max-sm:pb-0 max-sm:mb-0">Register</h2>
              <p>
                Now we need to know you by filling our simple form for KYC to
                ensure authenti- cations and security on how platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-4xl m-auto pt-20 pl-10 pr-10 pb-20">
        <p className="font-semibold text-2xl pb-5">
          What we represent @Swiftpoint{" "}
          <span className="text-red-700 "> ?</span>
        </p>
        <div className="2xl:hidden  md:hidden  lg:hidden  xl:hidden max-sm:block">
          <div>
            <Card className="w-64 border h-5/6 shadow-privacy-shadow mb-3">
              <Card.Body className="bg-active h-2/5 center">
                <img src={lock} alt="fast" className="p-8 w-32" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Privacy</Card.Title>
                <Card.Text className="border-bottom">
                  Our authentication process is built safely to secure your
                  account with us and ensure payouts request users consent
                  before transaction processing
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  SECURE{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="w-64 border h-5/6 shadow-privacy-shadow mb-3">
              <Card.Body className="bg-active h-2/5 center">
                <img src={lock} alt="fast" className="p-8 w-32" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">International wallets</Card.Title>
                <Card.Text className="border-bottom">
                  We represent good exchange rate and swift conversion of
                  currencies in all countries as to users desired interest
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  GLOBAL{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="w-64 border h-5/6 shadow-privacy-shadow mb-3">
              <Card.Body className="bg-active h-2/5 center">
                <img src={lock} alt="fast" className="p-8 w-32" />
              </Card.Body>
              <Card.Body>
                <Card.Title className="bold">Seamless UI</Card.Title>
                <Card.Text className="border-bottom">
                  We serve you at best with our services and app environment by
                  making all user interfaces best fit for users experince
                </Card.Text>
                <p className="flex justify-end font-bold pb-0">
                  EASY TO USE{" "}
                  <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Carousel
          fade
          className="carouselControl customOfferAnimation max-sm:hidden"
        >
          <Carousel.Item>
            <div className="flex">
              <div>
                <Card className="w-80 border h-5/6 shadow-privacy-shadow">
                  <Card.Body className="bg-active h-2/5 center">
                    <img src={lock} alt="fast" className="p-8 w-32" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className="bold">Privacy</Card.Title>
                    <Card.Text className="border-bottom">
                      Our authentication process is built safely to secure your
                      account with us and ensure payouts request users consent
                      before transaction processing
                    </Card.Text>
                    <p className="flex justify-end font-bold pb-0">
                      SECURE{" "}
                      <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <img src={swiftP1} alt="swift point" className="w-96 top" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex">
              <div>
                <Card className="w-80 border h-5/6 shadow-privacy-shadow">
                  <Card.Body className="bg-active h-2/5 center">
                    <img src={lock} alt="fast" className="p-8 w-32" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className="bold">
                      International wallets
                    </Card.Title>
                    <Card.Text className="border-bottom">
                      We represent good exchange rate and swift conversion of
                      currencies in all countries as to users desired interest
                    </Card.Text>
                    <p className="flex justify-end font-bold pb-0">
                      GLOBAL{" "}
                      <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <img src={swiftP2} alt="swift point" className="w-96 top" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex">
              <div>
                <Card className="w-80 border h-5/6 shadow-privacy-shadow">
                  <Card.Body className="bg-active h-2/5 center">
                    <img src={lock} alt="fast" className="p-8 w-32" />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className="bold">Seamless UI</Card.Title>
                    <Card.Text className="border-bottom">
                      We serve you at best with our services and app environment
                      by making all user interfaces best fit for users experince
                    </Card.Text>
                    <p className="flex justify-end font-bold pb-0">
                      EASY TO USE{" "}
                      <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <img src={swiftP3} alt="swift point" className="w-96 top" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <footer className="bg-footer-texture bg-[length:1350px_650px] bg-no-repeat p-20 max-sm:p-3">
        <div className="max-w-4xl m-auto flex gap-10 pt-10 max-sm:block max-sm:pt-3 max-sm:max-w-2xl">
          <div className="max-sm:flex max-sm:justify-center max-sm:pb-3">
            <div>
              <img
                src={footerlogo}
                alt="Swift Point"
                className="w-48 max-sm:w-32 max-sm:justify-center"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 max-sm:flex max-sm:flex-wrap max-sm:gap-0 max-sm:ml-1">
            <div className="max-sm:w-36">
              <p
                className="pl-8 font-bold pb-0 mb-0 text-xl max-sm:text-base
              "
              >
                Products
              </p>
              <ul className="mt-0 pt-0 max-sm:text-xs">
                <li className="cursor-pointer">Bills payment</li>
                <li className="cursor-pointer">Currency conversion</li>
                <li className="cursor-pointer">Savings</li>
                <li className="cursor-pointer">Transfers</li>
              </ul>
            </div>

            <div className="max-sm:w-36">
              <p
                className="pl-8 font-bold pb-0 mb-0 text-xl max-sm:text-base
            "
              >
                Conversions
              </p>
              <ul className="mt-0 pt-0 max-sm:text-xs">
                <li className="cursor-pointer">Local to foreign</li>
                <li className="cursor-pointer">Foreign to local</li>
              </ul>
            </div>

            <div className="max-sm:w-36">
              <p
                className="pl-8 font-bold pb-0 mb-0 text-xl max-sm:text-base
            "
              >
                Open Account
              </p>
              <ul className="mt-0 pt-0 max-sm:text-xs">
                <li className="cursor-pointer">Local wallet</li>
                <li className="cursor-pointer">International wallet</li>
              </ul>
            </div>

            <div className="max-sm:w-36">
              <p
                className="pl-8 font-bold pb-0 mb-0 text-xl max-sm:text-base
              "
              >
                Contact us
              </p>
              <ul className="mt-0 pt-0 max-sm:text-xs">
                <li className="cursor-pointer">Live chat</li>
                <li className="cursor-pointer text-nowrap">
                  mail: swiftpoint@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center pt-28 font-Inter max-sm:pt-5 max-sm:pb-8">
          &copy; copyright swiftpoint 2024
        </p>
      </footer>
    </>
  );
}
