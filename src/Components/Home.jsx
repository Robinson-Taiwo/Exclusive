import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PageLayout from './PageLayout'
// import images from "./data"
import advert from "./AdData"
import pic8 from "../assets/pic8.jpg"
import pic2 from "../assets/pic2.jpg"
import up from "../assets/up.svg"
import carIcon from "../assets/carIcon.svg"
import customer from "../assets/customer.svg"
import safe from "../assets/safe.svg"
import second from "../assets/second-ad.png"

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import speakers from '../assets/speakers.png'

import "./Home.css"
import FlashSales from './FlashSales';
import Carousel from 'react-multi-carousel';
import Categories from './Categories';
import Test from './Test';
import Bestselling from './Bestselling';
import { Link } from 'react-router-dom';
import Data from './data';

const Home = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    renderButtonGroupOutside: true
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

  const ProfileData = [
    {
      id: 1,
      title: "Image 1",
      url: "https://unsplash.com/photos/GG1FJwV67PA",
      description: "This is the first image.",
    },
    {
      id: 2,
      title: "Image 2",
      url: "https://unsplash.com/photos/_uB9B5GXhbY",
      description: "This is the second image.",
    },
    {
      id: 3,
      title: "Image 3",
      url: "https://unsplash.com/photos/cBvVzF5orr8",
      description: "This is the third image.",
    },
    {
      id: 4,
      title: "Image 4",
      url: "https://unsplash.com/photos/iXFCE37pASE",
      description: "This is the fourth image.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const responsivead = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <PageLayout>

      <div className='home' >

        <section id='top' className="home-1">



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



          <div className="advert-slider">

            <Carousel responsive={responsivead} arrows={false} showDots={true} autoPlay={true} className="advert-slides" swipeable={true} dotListClass='dotun' containerClass='zi'  >

              {advert.map((data, index) => {
                return (
                  <div className='ad-slid' key={index}>
                    <img src={second} alt={data.title} className="ad-slide-image" />
                  </div>
                )
              })}
            </Carousel>

          </div>



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

          <div className="flash-sales">

            <div className="fla-sa">

              <FlashSales />
            </div>

            <div className="view-all-div">
              <Link to="/Products" className="view-all">
                view all products
              </Link>
            </div>

          </div>

          <div>

          </div>




        </section>

        <div className="horizontal-line"> </div>

        <section className="categories-comp">
          <Categories />
        </section>

        <div className="horizontal-line2"> </div>

        <section className="this-month">

          <div className="sub-head">

            <div className="small-orange">

            </div>
            <span className="sub-text">This Month</span>

          </div>

          <div className="big-head-1">

            <div className="big-head">
              <h1 className="d-head">
                Best Selling Products
              </h1>
            </div>



            <button className="view-all-2">
              view all
            </button>
          </div>


          <section>

            <FlashSales />
          </section>


        </section>

        <section className="category-ad">
          <div className="category-ad-box">

            <img src={second} alt="" className="second-ad" />
          </div>
        </section>


        <section className="this-month">

          <div className="sub-head">

            <div className="small-orange">

            </div>
            <span className="sub-text">Our Prodcuts</span>

          </div>

          <div className="big-head-1">

            <div className="big-head">
              <h1 className="d-head">
                Explore Our Products
              </h1>
            </div>



            <button className="view-all-2">
              view all
            </button>
          </div>


          <section>

            <FlashSales />
          </section>


        </section>


        <section className="featured">


          <div className="featured-sub-head">

            <div className="small-orange">

            </div>
            <span className="sub-text">Featured</span>

          </div>

          <div className="big-head-1">

            <div className="featured-big-head">
              <h1 className="d-head">
                New Arrivals
              </h1>
            </div>
          </div>


          <div className="arrival">

            <div className="arrival-one">

              <h1 className="arive-head">
                PlayStation 5
              </h1>

              <p className="arive-text">
                Black and White version of the PS5 coming out on sale.
              </p>

              <p className="shop-now">Shop now</p>


            </div>

            <div className="arrival-two">

              <div className="arrival2-a">
                <h1 className="arive-head">
                  Women's Collections
                </h1>

                <p className="arive-text">
                  Featured woman collections that give you another vibe.
                </p>

                <p className="shop-now">Shop now</p>
              </div>

              <div className="arrival2-b">

                <div className="speakers">
                  <h1 className="arive-head">
                    Speakers
                  </h1>

                  <p className="arive-text">
                    Amazon wireless speakers.
                  </p>

                  <p className="shop-now">Shop Now</p>
                </div>

                <div className="perfume">

                  <h1 className="arive-head">
                    Perfume
                  </h1>

                  <p className="arive-text ">
                    GUCCI INTENSE OUD EDP
                  </p>

                  <p className="shop-now">Shop now</p>
                </div>

              </div>


            </div>

          </div>




        </section>


        <section className="pros">

          <div className="pro-first">

            <img src={carIcon} alt="carIcon" className="pro-icon" />

            <h1 className="pro-head">
              FREE AND FAST DELIVERY
            </h1>

            <p className="pro-text">
              Free delivery for all orders over $140
            </p>

          </div>

          <div className="pro-first">

            <img src={customer} alt="carIcon" className="pro-icon" />

            <h1 className="pro-head">
              24/7 CUSTOMER SERVICE
            </h1>

            <p className="pro-text">
              Friendly 24/7 customer support
            </p>

          </div>

          <div className="pro-first">

            <img src={safe} alt="carIcon" className="pro-icon" />

            <h1 className="pro-head">
              MONEY BACK GUARANTEE
            </h1>

            <p className="pro-text">
              We return money within 30 days
            </p>

          </div>

        </section>

        <section className="last">
          <a href='#top' className="go-up">
            <img src={up} alt="" className="up-arrow" />
          </a>
        </section>






      </div>
    </PageLayout>
  )
}

export default Home
