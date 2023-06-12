import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FlashSales.css"

const Test = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };




    const renderCustomItem = ({ item }) => (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: '50%' }}>Item {item}</div>
            <div style={{ flex: '50%' }}>Item {item + 1}</div>
        </div>
    );

    return (
        <Carousel
            responsive={responsive}
            infinite
            removeArrowOnDeviceType={['tablet', 'mobile']}
            itemClass="carousel-item-padding-40-px"
            renderItem={renderCustomItem}
        >
            {[1, 3, 5, 7, 9, 11, 13].map((item) => (
                <div key={item}>{item}</div>
            ))}
        </Carousel>
    );
};

export default Test
