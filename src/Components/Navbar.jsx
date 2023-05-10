import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from "../assets/search.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/cart.svg"
import user from "../assets/user.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"


import "./Navbar.css"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showIcons, setShowIcons] = useState(false)

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
                        <Link to="/signUp" className='nav-link'>Signup</Link>

                    </nav>

                    <div className="third-row">

                        <form className="form">
                            <input className='search-input' type="text" placeholder='what are you looking for?' />
                            <button className="search-icon"> <img src={search} alt="si" className='si' /> </button>

                        </form>

                        <div className={!showIcons ? "nav-icons" : "nav-icons-hide"}>


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

            <div className="mobile-white-nav">

                <div className="mid-nav">

                    <div className="mobile-first-logo">

                        <img src={menu} alt="mennu-bar" className={showMenu ? "menu-logo" : "menu"} onClick={() => setShowMenu(!showMenu)} />
                        <h1 className="logo">Tee's Exclusive</h1>
                    </div>


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


                    <ul className={showMenu ? 'show-mobile-menu' : "nav-links"}>

                        {showMenu && (<img src={close} alt="mennu-bar" className={showMenu ? "menu-logo" : "menu"} onClick={() => setShowMenu(!showMenu)} />)}

                        <li className="nav-link">

                            <Link to="/"  >Home</Link>
                        </li>
                        <li className="nav-link">

                            <Link  >Contact</Link>
                        </li>
                        <li className="nav-link">

                            <Link >About</Link>
                        </li>
                        <li className="nav-link">

                            <Link to="/signUp" >Sign Up</Link>
                        </li>



                    </ul>


                </div>

                <div className="third-row">

                    <form className="form">
                        <input className='search-input' type="text" placeholder='what are you looking for?' />
                        <button className="search-icon"> <img src={search} alt="si" className='si' /> </button>

                    </form>


                </div>





            </div>
        </div>
    )
}

export default Navbar
