import navLogo6 from "../../assets/welcomeNavLogo.png";
import banner from "../../assets/welcomeBanner.png";
import serviceBanner from "../../assets/servicesBanner.png";
import transactionproofBanner from "../../assets/transactionproofBanner.png";
import Navbar from "./Navbar";
import breakOut from "../../assets/breakOut.png";
import reliable from "../../assets/security_update_good.png";
import efficient from "../../assets/blur_on.png";
import reward from "../../assets/award_star.png";
import seamless from "../../assets/view_cozy.png";
import integration from "../../assets/settings_input_antenna.png";
import excitingOffer from "../../assets/excitingOffer.png";
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
import { useEffect } from "react";

export default function WelcomeDashboard() {
  // useEffect(() => {
  //   const navLinks = document.getElementById("navLinks");
  //   if (navLinks) {
  //     const links = navLinks.getElementsByClassName("links") as HTMLCollectionOf<HTMLElement>;
  //     for (let i = 0; i < links.length; i++) {
  //       links[i].addEventListener("click", function() {
  //         // Remove the active class from all links
  //         const currentActive = document.getElementsByClassName("activeclass") as HTMLCollectionOf<HTMLElement>;
  //         if (currentActive.length > 0) {
  //           currentActive[0].className = currentActive[0].className.replace(" activeclass", "");
  //         }
  //         // Add the active class to the clicked link
  //         this.className += " activeclass";
  //         console.log(this);

  //       });
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   const navLinks = document.getElementById("navLinks");
  //   if (navLinks) {
  //     const links = navLinks.getElementsByClassName("links") as HTMLCollectionOf<HTMLElement>;

  //     // Set the first link to active by default
  //     if (links.length > 0) {
  //       links[0].className += " activeclass";
  //     }

  //     for (let i = 0; i < links.length; i++) {
  //       links[i].addEventListener("click", function() {
  //         // Remove the active class from all links
  //         const currentActive = document.getElementsByClassName("activeclass") as HTMLCollectionOf<HTMLElement>;
  //         if (currentActive.length > 0) {
  //           currentActive[0].className = currentActive[0].className.replace(" activeclass", "");
  //         }

  //         // Add the active class to the clicked link
  //         this.className += " activeclass";
  //         console.log(this);
  //       });
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      const links = navLinks.getElementsByClassName(
        "links"
      ) as HTMLCollectionOf<HTMLElement>;

      // Set the first link to active by default
      if (links.length > 0) {
        links[0].classList.add("activeclass");
      }

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
          // Remove the active class from all links
          for (let j = 0; j < links.length; j++) {
            links[j].classList.remove("activeclass");
          }

          // Add the active class to the clicked link
          this.classList.add("activeclass");
          console.log(this);
        });
      }
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="stickyNav max-sm:hidden" id="navLinks">
        <div className="flex justify-between lg:pr-24 text-sm top-0 navbarcustomstyle shadow-nav-shadow bg-white tablet:pr-2">
          <div className="align-center lg:pl-28 flex tablet:pl-2">
            <img
              src={navLogo6}
              alt="nav logo"
              className="w-28 h-14 pr-3 cursor-pointer tablet:pr-0"
            />
            <ul className="list-none flex unorderedList pt-4 mb-1 space-between lg:text-lg text-xs text-center tablet:text-base tablet:justify-normal">
              <li className="links">Home</li> {/* tablet:mr-2 tablet:pr-0 */}
              <li className=" links">About</li>
              {/* tablet:mr-2 */}
              <li className=" links">Products</li>
              {/* tablet:mr-2 */}
              <li className=" links">Conversions</li>
              {/* tablet:mr-2 */}
              <li className=" links">Open an account</li>
              {/* tablet:mr-2 */}
              <li className=" links">Contact us</li>
              {/* tablet:mr-2 */}
            </ul>
          </div>
          <div className="pt-3">
            <button className="pr-2 pt-2.5 pl-2 w-28 pb-2.5 gap-1.5 bg-nav-background rounded-s-md rounded-e-md tablet:p-2 tablet:text-nowrap tablet:gap-0">
              Download app
            </button>
          </div>
        </div>
      </div>

      <Carousel fade className="carouselControl customAnimation">
        <Carousel.Item>
          <img src={banner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={transactionproofBanner} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="flexbox max-sm:hidden">
        <div className="left">
          <div className="pt-10 z-50 max-sm:pt-10 tablet:pt-20">
            <div className="pt-10">
              <p className="text-3xl w-9/12 font-medium leading-9 pb-10 max-sm:text-base max-sm:pb-2 max-sm:max-w-40">
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
            <div className="flex mb-8 gap-3 flex-wrap max-w-8xl  tablet:max-w-4xl tablet:m-auto">
              <Card className="border shadow-card-shadow lg:w-52 tablet:w-48">
                <Card.Body className="bg-active h-3/5 center">
                  <img src={fast} alt="fast" className="p-3" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold tablet:text-lg">Fast</Card.Title>
                  <Card.Text className="border-bottom text-sm pb-3 mb-3">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow lg:w-52 tablet:w-48">
                <Card.Body className="bg-active h-3/5 center">
                  <img src={reliable} alt="reliable" className="p-3" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold tablet:text-lg">
                    Reliable
                  </Card.Title>
                  <Card.Text className="border-bottom text-sm">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow lg:w-52 tablet:w-48">
                <Card.Body className="bg-active h-3/5 center">
                  <img src={efficient} alt="efficient" className="p-3" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold tablet:text-lg">
                    Efficient
                  </Card.Title>
                  <Card.Text className="border-bottom text-sm">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow lg:w-52 tablet:w-48">
                <Card.Body className="bg-active h-3/5 center">
                  <img src={reward} alt="reward" className="p-3" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold tablet:text-lg">
                    Reward
                  </Card.Title>
                  <Card.Text className="border-bottom text-sm">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow lg:w-52 tablet:w-48">
                <Card.Body className="bg-active h-3/5 center">
                  <img src={seamless} alt="seamless" className="p-3" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Seamless</Card.Title>
                  <Card.Text className="border-bottom text-sm">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow lg:w-52 tablet:w-48">
                <Card.Body className="bg-active h-3/5 center">
                  <img src={integration} alt="integration" className="p-3" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Integrations</Card.Title>
                  <Card.Text className="border-bottom text-sm">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="breakout">
            <img src={breakOut} alt="breakOut" />
          </div>
        </div>
      </div>

      <div className="2xl:hidden md:hidden lg:hidden xl:hidden">
        <div>
          <div>
            <div className="max-sm:flex justify-center">
              <div className="pt-5">
                <p className="text-3xl w-9/12 font-medium leading-9 pb-10 max-sm:text-base max-sm:pb-2 text-nowrap">
                  Break out from <br /> slow and insecure <br /> transactions{" "}
                  <br /> with our{" "}
                  <span className="font-bold text-3xl text-swift-span max-sm:text-xl">
                    Swift, <br />
                  </span>{" "}
                  <span className="font-bold text-3xl text-active max-sm:text-xl">
                    Reliable
                  </span>{" "}
                  and <br />
                  <span className="font-bold text-3xl text-swift-span max-sm:text-xl">
                    Secure <br />
                  </span>{" "}
                  payment platform
                </p>
              </div>
              <div className="breakout">
                <img src={breakOut} alt="breakOut" />
              </div>
            </div>

            <div className="flex justify-center mb-8 gap-3 flex-wrap">
              <Card className="border shadow-card-shadow max-sm:w-11/12 mobile-M:pb-5">
                <Card.Body className="bg-active max-sm:h-40 center">
                  <img src={fast} alt="fast" className="p-4 w-28" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Fast</Card.Title>
                  <Card.Text className="border-bottom text-sm">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow max-sm:w-11/12 mobile-M:pb-5">
                <Card.Body className="bg-active max-sm:h-40 center">
                  <img src={reliable} alt="reliable" className="p-4 w-28" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Reliable</Card.Title>
                  <Card.Text className="border-bottom text-sm pb-3 mb-3">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow max-sm:w-11/12 mobile-M:pb-5">
                <Card.Body className="bg-active max-sm:h-40 center">
                  <img src={efficient} alt="efficient" className="p-4 w-28" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Efficient</Card.Title>
                  <Card.Text className="border-bottom text-sm pb-3 mb-3">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow max-sm:w-11/12 mobile-M:pb-5">
                <Card.Body className="bg-active max-sm:h-40 center">
                  <img src={reward} alt="reward" className="p-4 w-28" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Reward</Card.Title>
                  <Card.Text className="border-bottom text-sm pb-3 mb-3">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow max-sm:w-11/12 mobile-M:pb-5">
                <Card.Body className="bg-active max-sm:h-40 center">
                  <img src={seamless} alt="seamless" className="p-4 w-28" />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Seamless</Card.Title>
                  <Card.Text className="border-bottom text-sm pb-3 mb-3">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
              <Card className="border shadow-card-shadow max-sm:w-11/12 mobile-M:pb-5">
                <Card.Body className="bg-active max-sm:h-40 center">
                  <img
                    src={integration}
                    alt="integration"
                    className="p-4 w-28"
                  />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="bold">Integrations</Card.Title>
                  <Card.Text className="border-bottom text-sm pb-3 mb-3">
                    Make payments for your cable networks with ease using our
                    platform and get best deals.
                  </Card.Text>
                  <p className="flex justify-end font-bold pb-0 mb-0">
                    PAY{" "}
                    <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="cardSection m-auto pb-8 max-sm:max-w-3xl">
        <div className="pt-20 pb-0 max-sm:justify-center max-sm:pt-0 max-sm:pl-8">
          <img
            src={excitingOffer}
            alt="exciting offers"
            className="w-5/12 max-sm:w-11/12"
          />
        </div>
        <div className="flex justify-center flex-wrap pl-0 gap-4 pt-0">
          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            {/* <Card.Img variant="top" src={bills} /> */}
            <div className="customOffer2 flex  justify-between bg-white w-20">
              <div></div>
              <div className="flex flex-col justify-between">
                <div></div>
                <p className="mb-0 bg-white p-1  text-2xl pt-1 font-medium text-active tablet:text-lg">
                  FAST
                </p>
              </div>
            </div>

            {/* CARD BODY */}
            <div>
              <div className="flex justify-between ">
                <div></div>
                <p className="text-center p-1 bg-active text-2xl text-white font-medium tablet:text-lg">
                  100%
                </p>
              </div>

              <Card.Title className="bold center texttitle">
                PAY BILLS
              </Card.Title>
              <Card.Text className="textcolor pl-3 pb-2">
                We cover a wide range bill payment ranging from airtime
                recharge, internet subscription, travel tickets, cable recharge,
                electricity top-up e.t.c
              </Card.Text>
            </div>
          </Card>

          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            {/* <Card.Img variant="top" src={currency} /> */}
            <div className="currencyConversion flex justify-between text-end w-20">
              <div></div>
              <div className="flex flex-col justify-between">
                <div></div>
                <div>
                  <p className="mb-0 bg-white p-1 text-2xl pt-1 font-medium text-active tablet:text-lg">
                    RATE
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div>
              <div className="flex justify-between">
                <div></div>
                <p className="text-center text-2xl p-1 bg-active text-white font-medium tablet:text-lg">
                  100%
                </p>
              </div>
              <Card.Title className="bold center texttitle pl-3">
                CURRENCY CONVERSION
              </Card.Title>
              <Card.Text className="textcolor pl-3 pb-2">
                Get a better rate conversion with us on all currency exchange
                and do more with your forex to local conversions
              </Card.Text>
            </div>
          </Card>

          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            {/* <Card.Img variant="top" src={deposit} /> */}
            <div className="deposit flex justify-between text-end w-20">
              <div></div>
              <div className="flex flex-col justify-between">
                <div></div>
                <p className="mb-0 bg-white p-1 text-2xl pt-1 font-medium text-active tablet:text-lg">
                  SAFE
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div>
              <div className="flex justify-between ">
                <div></div>
                <p className="text-center text-2xl p-1 bg-active text-white font-medium tablet:text-lg">
                  100%
                </p>
              </div>
              <Card.Title className="bold center texttitle">DEPOSIT</Card.Title>
              <Card.Text className="textcolor pl-3 pb-2 pr-1.5">
                Reliably save with Swiftpoint for fulfilling your money
                objectives like building a savings, expenditure motives and
                investment related decisions
              </Card.Text>
            </div>
          </Card>

          <Card className="w-2/5 h-11/12 border shadow-card-shadow max-sm:w-11/12">
            {/* <Card.Img variant="top" src={transfer} /> */}
            <div className="transfer flex justify-between text-end">
              <div></div>
              <div className="flex flex-col justify-between">
                <div></div>
                <p className="mb-0 bg-white text-xl p-1 font-medium text-active tablet:text-lg">
                  SWIFT
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div>
              <div className="flex justify-between">
                <div></div>
                <p className="text-center p-1.5 text-2xl pt-1 bg-active text-white font-medium tablet:text-lg">
                  100%
                </p>
              </div>
              <Card.Title className="bold center texttitle">
                TRANSFER
              </Card.Title>
              <Card.Text className="textcolor pl-3 pb-2 pr-1">
                Seamlessly send funds to other Swiftpoint users around you
                without hassle and get a considerable fee charge on each
                transfer
              </Card.Text>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-footer-texture bg-[length:1433px_620px]  h-4/5 p-20 pb-32 mb-8 mt-20 max-sm:p-10 max-sm:mt-8 max-sm:text-center max-sm:pt-8 max-sm:h-5/6 max-sm:bg-[length:1370px_1095px]  laptop-L:bg-[length:1433px_620px]">
        <div className=" m-auto text-center max-sm:max-w-2xl getOnboard">
          <h2 className="font-bold max-sm:pb-1 2xl:pb-5  md:pb-5  lg:pb-5  xl:pb-5 mobile-M:pb-3">
            Three Steps to get onboarded with us
          </h2>
          <div className="flex gap-4 max-w-5xl m-auto max-sm:flex-wrap">
            <div className="shadow-stepsCard-shadow text-center p-2 w-full bg-stepsCard-background">
              <img
                src={scan1}
                alt="scanner"
                // className="w-24 max-sm:w-14 max-sm:pt-0 max-sm:pl-0  lg:pt-2 lg:pl-2 tablet:w-14"
                className="w-20 tablet:w-14"
              />
              <img
                src={scanner}
                alt="scanner"
                className="w-48 max-sm:w-32 max-sm:pl-20 max-sm:pb-1 lg:pl-20 lg:pb-3  mobile-M:w-44 mobile-M:pl-28 mobile-M:pb-3 mobile-L:w-48 mobile-L:pl-32 tablet:pl-14 tablet:w-28 lg:w-36"
              />
              <h2 className="font-bold max-sm:pb-0 text-2xl max-sm:mb-0">
                Scan
              </h2>
              <p className="text-sm">
                Get our mobile app on apple and google playstore by scanning
                this barcode and start experiencing swift payments on all bills
                and expenditures
              </p>
            </div>

            <div className="shadow-stepsCard-shadow text-center p-2 w-full bg-stepsCard-background">
              <img
                src={download2}
                alt="download"
                // className="w-24 max-sm:w-14 max-sm:pt-0 max-sm:pl-0  lg:pt-2 lg:pl-2 tablet:w-14"
                className="w-20 tablet:w-14"
              />
              <img
                src={download}
                alt="download"
                className="w-48 max-sm:w-32 max-sm:pl-20 max-sm:pb-1 lg:pl-20 lg:pb-3  mobile-M:w-44 mobile-M:pl-28 mobile-M:pb-3 mobile-L:w-48 mobile-L:pl-32 tablet:pl-14 tablet:w-28 lg:w-36"
              />
              <h2 className="font-bold max-sm:pb-0 text-2xl max-sm:mb-0">
                Download
              </h2>
              <p className="text-sm">
                Install our mobile app on your device after scanning and you are
                on flight for swift transactions
              </p>
            </div>

            <div className="shadow-stepsCard-shadow text-center p-2 w-full bg-stepsCard-background">
              <img
                src={register3}
                alt="register"
                // className="w-24 max-sm:w-14 max-sm:pt-0 max-sm:pl-0  lg:pt-2 lg:pl-2 tablet:w-14"
                className="w-20 tablet:w-14"
              />
              <img
                src={register}
                alt="register"
                className="w-48 max-sm:w-32 max-sm:pl-20 max-sm:pb-1 lg:pl-20 lg:pb-3  mobile-M:w-44 mobile-M:pl-28 mobile-M:pb-3 mobile-L:w-48 mobile-L:pl-32 tablet:pl-14 tablet:w-28 lg:w-36"
              />
              <h2 className="font-bold max-sm:pb-0 text-2xl max-sm:mb-0">
                Register
              </h2>
              <p className="text-sm">
                Now we need to know you by filling our simple form for KYC to
                ensure authenti- cations and security on how platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" whatWePresent m-auto pt-20 pb-0 mobile-M:pt-8 mobile-M:pb-8   tablet:pl-8 ">
        <p
          className="font-bold justify-start text-3xl pb-5 mobile-M:pb-2 mobile-M:pl-0 
        max-sm:block max-sm:pb-2 max-sm:pl-10 paragraph"
        >
          What we represent @Swiftpoint<span className="text-red-700 "> ?</span>
        </p>
        <div className="2xl:hidden  md:hidden  lg:hidden  xl:hidden max-sm:flex max-sm:flex-wrap max-sm:justify-center max-sm:h-screen">
          <div>
            <Card className="w-11/12 border h-5/6 shadow-privacy-shadow mb-3 m-auto">
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
            <Card className="w-11/12 border h-5/6 shadow-privacy-shadow mb-3 m-auto">
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
            <Card className="w-11/12 border h-5/6 shadow-privacy-shadow mb-3 m-auto">
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

        <div className="cardContainer max-sm:hidden tablet:pt-5">
          <div className="fadingCard fadingCard1">
            <div className="flex">
              <div>
                <Card className="lg:w-96 border h-5/6 shadow-privacy-shadow tablet:w-72 tablet:h-4/6">
                  <Card.Body className="bg-active h-2/5 center">
                    <img
                      src={lock}
                      alt="fast"
                      className="p-8 w-40 max-tablet:p-0 max-tablet:w-20"
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className="bold lg:pt-3 lg:pb-3 tablet:pt-2 tablet:pb-1">
                      Privacy
                    </Card.Title>
                    <Card.Text className="border-bottom lg:mb-6">
                      Our authentication process is built safely to secure your
                      account with us and ensure payouts request users consent
                      before transaction processing
                    </Card.Text>
                    <p className="flex justify-end font-bold pb-0 tablet:mb-0 tablet:pt-3">
                      SECURE{" "}
                      <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <img
                  src={swiftP1}
                  alt="swift point"
                  className="swiftpt h-full"
                />
              </div>
            </div>
          </div>
          <div className="fadingCard fadingCard2">
            <div className="flex">
              <div>
                <Card className="lg:w-96 border h-5/6 shadow-privacy-shadow tablet:w-72 tablet:h-4/6">
                  <Card.Body className="bg-active h-2/5 center">
                    <img
                      src={lock}
                      alt="fast"
                      className="p-8 w-40 max-tablet:p-0 max-tablet:w-20"
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className="bold lg:pt-3 lg:pb-3 tablet:pt-2 tablet:pb-1">
                      International wallets
                    </Card.Title>
                    <Card.Text className="border-bottom lg:mb-6">
                      We represent good exchange rate and swift conversion of
                      currencies in all countries as to users desired interest
                    </Card.Text>
                    <p className="flex justify-end font-bold pb-0 tablet:mb-0 tablet:pt-3">
                      GLOBAL{" "}
                      <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <img
                  src={swiftP2}
                  alt="swift point"
                  className="swiftpt h-full"
                />
              </div>
            </div>
          </div>
          <div className="fadingCard fadingCard3">
            <div className="flex">
              <div>
                <Card className="lg:w-96 border h-5/6 shadow-privacy-shadow tablet:w-72 tablet:h-4/6">
                  <Card.Body className="bg-active h-2/5 center">
                    <img
                      src={lock}
                      alt="fast"
                      className="p-8 w-40 max-tablet:p-0 max-tablet:w-20"
                    />
                  </Card.Body>
                  <Card.Body>
                    <Card.Title className="bold lg:pt-3 lg:pb-3 tablet:pt-2 tablet:pb-1">
                      Seamless UI
                    </Card.Title>
                    <Card.Text className="border-bottom lg:mb-6">
                      We serve you at best with our services and app environment
                      by making all user interfaces best fit for users experince
                    </Card.Text>
                    <p className="flex justify-end font-bold pb-0 tablet:mb-0 tablet:pt-3">
                      EASY TO USE{" "}
                      <IoMdCheckmark className="pl-1 text-2xl pb-1 text-active" />
                    </p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <img
                  src={swiftP3}
                  alt="swift point"
                  className="swiftpt h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-footer-texture bg-[length:1432px_610px] p-20 max-sm:p-3 laptop-L:bg-[length:1432px_610px]">
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

          <div className="flex flex-wrap gap-2 max-sm:flex max-sm:flex-wrap max-sm:gap-0 max-sm:ml-1 mobile-M:pl-4">
            <div className="max-sm:w-36 mobile-M:w-40">
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

            <div className="max-sm:w-36 mobile-M:w-40">
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

            <div className="max-sm:w-36 mobile-M:w-40">
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

            <div className="max-sm:w-36 mobile-M:w-40">
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
