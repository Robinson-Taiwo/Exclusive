import React from 'react'
import stars from '../assets/stars.svg'
import pic3 from "../assets/pic3.jpg"

import heart from "../assets/white-heart.svg"
import gamepad from '../assets/gamepad.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FlashSales = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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



    return (
        <div className='FlashSales' >
        <Carousel   
        responsive={responsive} className='FlashSales' >





            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />

        

                    </div>

                </div>  
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>

            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />




                    </div>

                </div>
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>

            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />




                    </div>

                </div>
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>

            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />




                    </div>

                </div>
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>

            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />




                    </div>

                </div>
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>

            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />




                    </div>

                </div>
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>

            <div className="flash-box">

                <div className="flash-sec1">

                    <div className="flash-inner1">

                        <div className="inner1-icons">

                            <div className="discount">
                                -14%
                            </div>

                            <img src={heart} alt="" className="hear-cion" />

                        </div>

                        <img src={gamepad} className="flash-inner2" />




                    </div>

                </div>
                <div className="flash-sec2">

                    <p className="sec2-name">
                        HAVIT HV-G92 Gamepad
                    </p>

                    <p className="sec2-price">
                        $120
                    </p>

                    <img src={stars} alt="ratings" className="sec2-rating" />

                </div>

            </div>


        </Carousel>

         </div>
    )
}

export default FlashSales
