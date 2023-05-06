import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from "../assets/search.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/cart.svg"
import user from "../assets/user.svg"

import "./Navbar.css"

const Navbar = () => {

    const [showIcons, setShowIcons] = useState(true)

    return (
        <div className='Navbar-container'>
            <div className="black-nav">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            </div>
            <div className="white-nav">

                <div className="mid-nav">

                    <h1 className="logo">Tee's Exclusive</h1>

                    <nav className="nav-links">
                        <Link to="/" className='nav-link' >Home</Link>
                        <Link className='nav-link' >Contact</Link>
                        <Link className='nav-link'>About</Link>
                        <Link to="/signUp" className='nav-link'>Sign Up</Link>

                    </nav>

                    <div className="third-row">

                        <form className="form">
                            <input className='search-input' type="text" placeholder='what are you looking for?' />
                            <button className="search-icon"> <img src={search} alt="si" className='si' /> </button>

                        </form>

                        <div className={showIcons ? "nav-icons" : "nav-icons-hide"}>


                            <div className="one-icon">

                                <img src={heart} alt="" className="icon" />
                            </div>

                            <div className="one-icon">

                                <img src={cart} alt="" className="icon" />
                            </div>

                            <div className="one-icon">
                                <img src={user} alt="" className="icon" />

                            </div>


                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default Navbar
