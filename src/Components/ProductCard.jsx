import React, { useRef, useState } from 'react'
import gamepad from "../assets/gamepad.png"
import stars from '../assets/stars.svg'
import trash from "../assets/bin.svg"
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './Cart/CartSlice';
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({ data, id, stars, image, price, title, heart }) => {


    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart);


    const handleAddToCart = () => {
        console.log(dispatch(addItemToCart(data)));
        console.log(cartItems)
    };

    return (

        <div>


            <div className="product-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

                <div className="product-container-one">

                    <div title='discount of 14%' className="discount-product">
                        -14%
                    </div>


                    <div className="product-image-container">

                        <img src={image} className="product-image" />
                    </div>



                    <img src={heart} alt="trash" title='delete' className="bin-icon" />

                </div>



                <div className={isHovered ? "product-container-two" : "product-container-two-none"}>
                    <button onClick={handleAddToCart} className="product-add-cart">
                        Add To Cart
                    </button>                        </div>

                <Link to={`/products/${id}`} className="product-container-text">

                    <p className="product-container-title">
                        <Link to={`/products/${id}`}>{title} </Link>
                    </p>

                    <p className="product-container-price">
                        ${price}
                    </p>

                    <p className="productCard-stars">
                        <img src={stars} alt="ratings" className="sec2-rating" />
                    </p>
                </Link>


            </div>







        </div>



    )
}

export default ProductCard
