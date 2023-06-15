import React, { useRef, useState } from 'react'
import stars from '../assets/stars.svg'
import data from "./data"
import heart from "../assets/white-heart.svg"
import gamepad from '../assets/gamepad.png'
import up from "../assets/up.svg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FlashSales.css"

const FlashSales = () => {


    const [isHovered, setIsHovered] = useState(false);


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
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };




    const reference = useRef()

    const next = () => {
        reference.current.next()
    }

    const previous = () => {
        reference.current.previous()
    }

    return (

        <div className="FlashSales">
            <button onClick={previous} className="caro-button">
                <img src={up} alt="" className="lup-arrow  " />
            </button>

            <button onClick={next} className="caro-button ml-4">
                <img src={up} alt="" className="pup-arrow rotate-90 " />
            </button>
            <div className="flash-boxe">
                <Carousel ref={reference} arrows={false} renderButtonGroupOutside={true} responsive={responsivenesss} swipeable={true} draggable={true} containerClass='lola' itemClass='amebo' >

                    {data.map((data, index) => {
                        return (
                            <div key={index} classNameflash-container
                            >

                                <div className={isHovered ? 'hovered' : 'flash-box'} onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)} >

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
                                        <button className="add-to-cart">Add to Cart</button>

                                        <p>

                                        </p>


                                    </div>


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
