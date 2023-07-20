import React from 'react'

const WishlistCard = ({ trash, playstation, stars }) => {
    return (
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
    )
}

export default WishlistCard
