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


        </Routes>
    )
}

export default AppRoutes
