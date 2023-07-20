import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from "../assets/search.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/cart.svg"
import user from "../assets/user.svg"
import up from "../assets/ups.svg"

import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
// import { logout } from './Features/SignUp/SignupSlice'


import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showIcons, setShowIcons] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items);

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

                        {/* <Link to="/signUp" className='nav-link'>Signup</Link>           */}
                        {isAuthenticated ? <Link to="/signUp" className='nav-link'>logout</Link> : <Link to="/signUp" className='nav-link'>Signup</Link>}


                    </nav>

                    <div className="third-row">

                        <form className="form">
                            <input className='search-input' type="text" placeholder='what are you looking for?' />
                            <button className="search-icon"> <img src={search} alt="si" className='si' /> </button>

                        </form>

                        <div className={isAuthenticated ? "nav-icons" : "nav-icons-hide"}>


                            <Link to="/wishlist" className="one-icon">

                                <img src={heart} alt="" className="icon" />
                                <span className="carto">0 </span>
                            </Link>

                            <Link to="/cart" className="one-icon">

                                <img src={cart} alt="" className="icon" />
                                <span className="carto">{cartItems.length}</span>
                            </Link>

                            <Link to="/account" className="one-icon">
                                <img src={user} alt="" className="icon" />

                            </Link>


                        </div>
                    </div>
                </div>





            </div>

            <div className="mobile-white-nav">

                <div className="mid-nav">

                    <div className="mobile-first-logo">

                        <img src={menu} alt="mennu-bar" className={showMenu ? "menu-logo" : "menu"} onClick={() => setShowMenu(!showMenu)} />
                        <Link to="/" className="logo">Tee's Exclusive</Link>
                    </div>


                    <div className={isAuthenticated ? "nav-icons" : "nav-icons-hide"}>



                        <Link to="/cart" className="one-icon">

                            <img src={cart} alt="" className="icon" /> <span className="carto">{cartItems.length}</span>


                        </Link>

                        <Link to="/account" className="one-icon">
                            <img src={user} alt="" className="icon" />

                        </Link>



                    </div>


                    <div className={showMenu ? 'show-mobile-menubar' : "nav-links"}>

                        <div className="out-logo">
                            {showMenu && (<img src={close} alt="mennu-bar" className="menu-mobile-logo" onClick={() => setShowMenu(!showMenu)} />)}

                        </div>

                        <div className="user-section">
                            <img src={user} alt="" className="mobile-user" />
                            <p className="user-name ">
                                Omoyeni Taiwo
                            </p>

                        </div>

                        <div className="link-category">

                            {/* <h1 className="chose-link">
                                select page
                            </h1> */}

                            <div className="mobile-nav-links">
                                <div className="nav-link-mobile">

                                    <Link to="/"  >login</Link>
                                </div>

                                <div className="nav-link-mobile">

                                    <Link to="/signUp" >Sign Up</Link>
                                </div>

                                {/* <div className="nav-link-mobile">

                                   
                                    <Link to="/wishlist" className="one-icon">

                                        <img src={heart} alt="" className="icon" />
                                        <span className="carto">0 </span>
                                    </Link>
                                </div> */}




                            </div>
                            <button className="nav-link">
                                <Link to="/wishlist" className="one-icon">

                                    <img src={heart} alt="" className="icon" />
                                    <span className="carto">0 </span>
                                </Link>
                                wishlist
                            </button>
                        </div>

                        {/* <div className="nav-link-mobile">

                                   
                                    <Link to="/wishlist" className="one-icon">

                                        <img src={heart} alt="" className="icon" />
                                        <span className="carto">0 </span>
                                    </Link>
                                </div> */}




                        <div className="select-mobile">

                            <h1 className="select-choice">select a category</h1>

                            <div className="mobile-choose">

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        women's Fashion
                                    </div> <img src={up} className='lop' alt="" />
                                </p>

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Men's Fashion
                                    </div> <img src={up} className='lop' alt="" />
                                </p>

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Electronics
                                    </div> <img src={up} className='lop' alt="" />
                                </p>

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Home & Lifestyle
                                    </div> <img src={up} className='lop' alt="" />
                                </p>

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Medicine
                                    </div> <img src={up} className='lop' alt="" />
                                </p>

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Sports and Outdoor
                                    </div> <img src={up} className='lop' alt="" />
                                </p>


                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Baby's and toys
                                    </div> <img src={up} className='lop' alt="" />
                                </p>


                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Groceries and Pets
                                    </div> <img src={up} className='lop' alt="" />
                                </p>

                                <p className="p-choose-mobile">
                                    <div className="cho-mob">
                                        Health & Beauty
                                    </div> <img src={up} className='lop' alt="" />          </p>
                            </div>

                        </div>


                    </div>


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
