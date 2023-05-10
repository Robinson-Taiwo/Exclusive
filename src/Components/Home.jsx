import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PageLayout from './PageLayout'
import images from "./data"
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"

import "./Home.css"

const Home = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const threeDaysInSeconds = 345600;
  const [timeLeft, setTimeLeft] = useState(threeDaysInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
    }
  }, [timeLeft]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secondsRemaining = timeLeft % 60;

  return (
    <PageLayout>

      <div className='home' >

        <section className="home-1">



          <div className="choose">

            <p className="p-choose">
              Woman's Fashion
            </p>

            <p className="p-choose">
              Men's Fashion
            </p>

            <p className="p-choose">
              Electronics Fashion
            </p>

            <p className="p-choose">
              Home & lifestyle
            </p>

            <p className="p-choose">
              Medicine
            </p>

            <p className="p-choose">
              Sports & Outdoor
            </p>


            <p className="p-choose">
              Baby's & Toys
            </p>


            <p className="p-choose">
              Groceries & Pets
            </p>

            <p className="p-choose">
              Health & Beauty            </p>
          </div>


          <div className="v-line">

          </div>



          <Slider {...settings} className="advert" >

            <div className="ads1">
              {/* <img src={pic1} alt="" className="ads" /> */}

            </div>

            <div className="ads2">
              {/* <img src={pic2} alt="" className="ads" /> */}

            </div>

            <div className="ads3">
              {/* <img src={pic3} alt="" className="ads" /> */}

            </div>

            <div className="ads4">
              {/* <img src={pic4} alt="" className="ads" /> */}

            </div>

            <div className="ads5">
              {/* <img src={pic5} alt="" className="ads" /> */}

            </div>

            <div className="ads6">
              {/* <img src={pic6} alt="" className="ads" /> */}

            </div>

            <div className="ads7">
              {/* <img src={pic1} alt="" className="ads" /> */}

            </div>



          </Slider>



        </section>


        <section className="home-2">

          <div className="sub-head">

            <div className="small-orange">

            </div>
            <span className="sub-text">Today's</span>

          </div>

          <div className="big-head">
            <h1 className="d-head">
              Flash Sales
            </h1>

            <div className="d-time">

              <div className="days">
                <span className="days-text">
                  Days
                </span>

                <span className="days-funct">
                  0{days}:
                </span>
              </div>

              <div className="hours">

                <span className="hours-text">
                  hours
                </span>

                <span className="hours-funct">
                  {hours}:
                </span>

              </div>

              <div className="mins">
                <span className="mins-text">
                  minutes
                </span>

                <span className="mins-funt">
                  {minutes}:
                </span>
              </div>

              <div className="seconds">

                <span className="seconds-text">
                  seconds
                </span>

                <span className="seconds-funct">
                  {secondsRemaining}
                </span>

              </div>

            </div>
          </div>


        </section>


      </div>
    </PageLayout>
  )
}

export default Home
