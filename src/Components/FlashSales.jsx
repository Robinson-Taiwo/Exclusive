import React from 'react'
import stars from '../assets/stars.svg'
import data from "./data"
import heart from "../assets/white-heart.svg"
import gamepad from '../assets/gamepad.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FlashSales.css"

const FlashSales = () => {





    const responsivenesss = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrows: true,
    //     renderButtonGroupOutside: true
    // };


    return (

        <div className="FlashSales">
            <div className="flash-boxe">
                <Carousel arrows={true} renderButtonGroupOutside={true} infinite={true} responsive={responsivenesss} swipeable={true} containerClass='lola' itemClass='amebo' >

                    {data.map((data, index) => {
                        return (
                            <div key={index} className="flash-box">

                                <div className="flash-sec1">

                                    <div className="flash-inner1">

                                        <div className="inner1-icons">

                                            <div className="discount">
                                                -14%
                                            </div>

                                            <img src={heart} alt="" className="hear-cion" />

                                        </div>

                                        <img src={data.image} className="flash-inner2" />



                                    </div>

                                </div>
                                <div className="flash-sec2">

                                    <p className="sec2-name">
                                        {data.title}
                                    </p>

                                    <p className="sec2-price">
                                        {data.price}$
                                    </p>

                                    <p>
                                        <img src={stars} alt="ratings" className="sec2-rating" />

                                    </p>

                                    <p>

                                    </p>


                                </div>


                            </div>
                        )
                    })}

                </Carousel>
            </div>




        </div>



    )
}

export default FlashSales
