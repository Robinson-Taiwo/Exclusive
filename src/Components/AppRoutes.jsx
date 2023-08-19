import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Home from './Home'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Account from './Account'
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import Checkout from './Checkout'
import Splash from './Splash'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/splashscreen" element={<Splash />} />
            <Route path="/products/:ids" element={<ProductDetails />} />
            <Route path='/Notfound' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
