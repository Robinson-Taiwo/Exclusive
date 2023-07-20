import React from 'react'
import PageLayout from './PageLayout'
import gamepad from '../assets/gamepad.png'
import playstation from '../assets/playstation.png'
import television from '../assets/television.png'
import speakers from '../assets/speakers.png'
import stars from '../assets/stars.svg'
import trash from "../assets/bin.svg"
import "./Wishlist.css"
import ProductCard from './ProductCard'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
    return (

        <PageLayout>

            <div className='Wishlist'>

                <div className="first-wishlist">

                    <div className="total-wishlist">
                        Wishlist(4)
                    </div>

                    <div className="move-to-bag">
                        Move All To Bag
                    </div>

                </div>

                <div className="wishlist-slider">

                    <WishlistCard playstation={playstation} trash={trash} stars={stars} />

                    <div className="wishlist-container">

                        <div className="wishlist-container-one">

                            <div title='discount of 14%' className="discount-wishlist">
                                -14%
                            </div>


                            <div className="wishlist-image-container">

                                <img src={playstation} className="wishlist-image" />
                            </div>



                            <img src={trash} alt="trash" title='delete' className="bin-icon" />

                        </div>



                        <div className="wishlist-container-two">
                            <button className="add-cart">
                                Add To Cart
                            </button>                        </div>

                        <section className="wishlist-container-text">

                            <p className="wishlist-container-title">
                                GP11 Shooter USB Gamepad
                            </p>

                            <p className="wishlist-container-price">
                                $550
                            </p>
                        </section>

                    </div>


                    <div className="wishlist-container">

                        <div className="wishlist-container-one">

                            <div title='discount of 14%' className="discount-wishlist">
                                -14%
                            </div>


                            <div className="wishlist-image-container">

                                <img src={speakers} className="wishlist-image" />
                            </div>



                            <img src={trash} alt="trash" title='delete' className="bin-icon" />

                        </div>



                        <div className="wishlist-container-two">
                            <button className="add-cart">
                                Add To Cart
                            </button>                        </div>

                        <section className="wishlist-container-text">

                            <p className="wishlist-container-title">
                                GP11 Shooter USB Gamepad
                            </p>

                            <p className="wishlist-container-price">
                                $550
                            </p>
                        </section>

                    </div>


                    <div className="wishlist-container">

                        <div className="wishlist-container-one">

                            <div title='discount of 14%' className="discount-wishlist">
                                -14%
                            </div>


                            <div className="wishlist-image-container">

                                <img src={playstation} className="wishlist-image" />
                            </div>



                            <img src={trash} alt="trash" title='delete' className="bin-icon" />

                        </div>



                        <div className="wishlist-container-two">
                            <button className="add-cart">
                                Add To Cart
                            </button>                        </div>

                        <section className="wishlist-container-text">

                            <p className="wishlist-container-title">
                                GP11 Shooter USB Gamepad
                            </p>

                            <p className="wishlist-container-price">
                                $550
                            </p>
                        </section>

                    </div>


                </div>


                <section className="just-for-you-section">

                    <div className="just-for-you-head">

                        <div className="just-for-you-left">
                            <div className="just-for-you-first">

                            </div>

                            <div className="just-for-you-second">
                                Just For You
                            </div>
                        </div>

                        <div className="just-for-you-button">
                            See All
                        </div>

                    </div>


                    <div className="for-you-slider">

                        <div className="just-for-you-container">

                            <div className="wishlist-container-one">

                                <div title='discount of 14%' className="discount-wishlist">
                                    -14%
                                </div>


                                <div className="wishlist-image-container">

                                    <img src={gamepad} className="wishlist-image" />
                                </div>



                                <img src={trash} alt="trash" title='delete' className="bin-icon" />

                            </div>



                            <div className="wishlist-container-two">
                                <button className="add-cart">
                                    Add To Cart
                                </button>                        </div>

                            <section className="wishlist-container-text">

                                <p className="wishlist-container-title">
                                    GP11 Shooter USB Gamepad
                                </p>

                                <p className="wishlist-container-price">
                                    $550
                                </p>

                                <img src={stars} alt="stars" className='for-you-stars' />
                            </section>

                        </div>

                        <div className="just-for-you-container">

                            <div className="wishlist-container-one">

                                <div title='discount of 14%' className="discount-wishlist">
                                    -14%
                                </div>


                                <div className="wishlist-image-container">

                                    <img src={playstation} className="wishlist-image" />
                                </div>



                                <img src={trash} alt="trash" title='delete' className="bin-icon" />

                            </div>



                            <div className="wishlist-container-two">
                                <button className="add-cart">
                                    Add To Cart
                                </button>                        </div>

                            <section className="wishlist-container-text">

                                <p className="wishlist-container-title">
                                    GP11 Shooter USB Gamepad
                                </p>

                                <p className="wishlist-container-price">
                                    $550
                                </p>

                                <img src={stars} alt="stars" className='for-you-stars' />
                            </section>

                        </div>


                        <div className="just-for-you-container">

                            <div className="wishlist-container-one">

                                <div title='discount of 14%' className="discount-wishlist">
                                    -14%
                                </div>


                                <div className="wishlist-image-container">

                                    <img src={speakers} className="wishlist-image" />
                                </div>



                                <img src={trash} alt="trash" title='delete' className="bin-icon" />

                            </div>



                            <div className="wishlist-container-two">
                                <button className="add-cart">
                                    Add To Cart
                                </button>                        </div>

                            <section className="wishlist-container-text">

                                <p className="wishlist-container-title">
                                    GP11 Shooter USB Gamepad
                                </p>

                                <p className="wishlist-container-price">
                                    $550
                                </p>

                                <img src={stars} alt="stars" className='for-you-stars' />
                            </section>

                        </div>


                        <div className="just-for-you-container">

                            <div className="wishlist-container-one">

                                <div title='discount of 14%' className="discount-wishlist">
                                    -14%
                                </div>


                                <div className="wishlist-image-container">

                                    <img src={playstation} className="wishlist-image" />
                                </div>



                                <img src={trash} alt="trash" title='delete' className="bin-icon" />

                            </div>



                            <div className="wishlist-container-two">
                                <button className="add-cart">
                                    Add To Cart
                                </button>                        </div>

                            <section className="wishlist-container-text">

                                <p className="wishlist-container-title">
                                    GP11 Shooter USB Gamepad
                                </p>

                                <p className="wishlist-container-price">
                                    $550
                                </p>

                                <img src={stars} alt="stars" className='for-you-stars' />
                            </section>

                        </div>


                    </div>


                </section>


            </div>

        </PageLayout>
    )
}

export default Wishlist
