import React, { useRef, useState } from 'react'
import stars from '../assets/stars.svg'
import data from "./data"
import heart from "../assets/white-heart.svg"
import gamepad from '../assets/gamepad.png'
import up from "../assets/up.svg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FlashSales.css"
import ProductCard from './ProductCard'

const ExploreProduct = () => {


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
                            <div key={index} className="flash-container"
                            >

                              

                                <ProductCard card={[1, 2, 3]} stars={stars} heart={heart} price={data.price} title={data.title} image={data.image} data={data} />
                            </div>
                        )
                    })}

                </Carousel>
            </div>




        </div>



    )
}

export default ExploreProduct
