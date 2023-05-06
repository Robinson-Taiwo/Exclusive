import React, { useState, useEffect } from 'react';

import PageLayout from './PageLayout'
import "./Home.css"

const Home = () => {


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



          <div className="advert">

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


        </section>


      </div>
    </PageLayout>
  )
}

export default Home
