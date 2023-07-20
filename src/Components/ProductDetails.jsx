import React from 'react'
import PageLayout from './PageLayout'
import { Link, useNavigate, useParams } from 'react-router-dom';
import products from "./data"
import { useEffect } from 'react';
import controller from "../assets/bigWhite.png"
import white1 from "../assets/white1.png"
import white2 from "../assets/white2.png"
import white3 from "../assets/white3.png"
import white4 from "../assets/white4.png"
import stars from '../assets/stars.svg'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'
import wishlist from '../assets/Wishlist.svg'
import Delivery from '../assets/icon-delivery.svg'
import ret from "../assets/return.svg"

import NotFound from './NotFound';
import "./ProductDetails.css"
import FlashSales from './FlashSales';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === parseInt(id));

    // if (!product) {
    //     useEffect(
    //         navigate("/Notfound"), []
    //     )
    // }

    if (!product) {
        return <div><NotFound /></div>;
    }
    return (

        <PageLayout>


            <div className="product-details">

                <div className="cart-navigation">
                    <Link to="/" className="cart-nav-home">
                        Home
                    </Link>
                    /
                    <p className="nav-home-cart">
                        {product.category}
                    </p>

                    /
                    <p className="nav-home-cart">
                        {product.title}
                    </p>

                </div>

                <main className="product-details-main">

                    <div className="product-details-images">

                        <div className="product-small-images">

                            <div className="details-subImages">

                                <img src={white1} alt="" className="subImages-img" />

                            </div>

                            <div className="details-subImages">

                                <img src={white2} alt="" className="subImages-img" />

                            </div>

                            <div className="details-subImages">

                                <img src={white3} alt="" className="subImages-img" />

                            </div>

                            <div className="details-subImages">

                                <img src={white4} alt="" className="subImages-img" />

                            </div>

                        </div>

                        <div className="details-mainImages">

                            <img src={product.image} alt={product.title} title={product.title} className="details-bigImages" />

                        </div>


                    </div>

                    <div className="product-details-info">

                        <h1 className="productDetail-title">

                            {product.title}
                        </h1>

                        <p className="details-review">
                            <img src={stars} alt="" className="details-star" /> <p className='details-counting'>({product.rating.count} reviews)</p>
                            <p>|</p>
                            <p className="details-instock">
                                In stock
                            </p>
                        </p>

                        <p className="details-price">
                            ${product.price}0   
                        </p>

                        <p className="details-description">
                            {product.description}
                        </p>

                        <p className="details-line"></p>

                        <div className="details-actions">

                            <div className="details-ammount">

                                <button className="details-minus">
                                    <img src={minus} alt="" className="icon-minus" />
                                </button>

                                <div className="details-number">
                                    2
                                </div>

                                <button className="details-plus">
                                    <img src={plus} alt="" className="icon-minus" />
                                </button>

                            </div>

                            <button className="details-buy">
                                Buy Now
                            </button>

                            <button className="details-heart">
                                <img src={wishlist} alt="" className="details-heart-icon" />
                            </button>
                        </div>

                        <div className="details-last">

                            <div className="details-last1">
                                <div className="details-last-icon">
                                    <img src={Delivery} alt="" />
                                </div>

                                <div className="details-last-text">
                                    <h6>Free Delivery</h6>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>

                            </div>
                            <div className="hr"></div>

                            <div className="details-last1">
                                <div className="details-last-icon">
                                    <img src={ret} alt="" />
                                </div>

                                <div className="details-last-text">
                                    <h6>Return Delivery</h6>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>

                            </div>


                        </div>

                    </div>


                </main>

                <div className="details-sub-head">

                    <div className="small-orange">

                    </div>
                    <span className="sub-text">Related items</span>

                </div>

                <FlashSales />

            </div>


            {/* 
            this is the product detail page
            <p>Product ID: {id}</p>
            {product.title} */}


        </PageLayout>

    )
}

export default ProductDetails
