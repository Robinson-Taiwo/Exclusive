import React from 'react'
import PageLayout from './PageLayout'
import "./Checkout.css"
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <PageLayout>

            <div className='Checkout'>

                <div className="cart-navigation">
                    <Link to="/" className="cart-nav-home">
                        Home
                    </Link>
                    /
                    <p className="cart-nav-home">
                        My Account
                    </p>
                    /
                    <p className="cart-nav-home">
                        Product
                    </p>
                    /
                    <Link to="/cart" className="cart-nav-home">

                        view cart
                    </Link>
                    /
                    <p className="cart-nav-home">
                        checkout
                    </p>

                </div>

            </div>
        </PageLayout>
    )
}

export default Checkout
