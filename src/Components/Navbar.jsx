import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from "../assets/search.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/cart.svg"
import user from "../assets/user.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { logout } from './Features/SignUp/SignupSlice'


import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showIcons, setShowIcons] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const dispatch = useDispatch()

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
                        {/* <Link to="/signUp" className='nav-link'>Signup</Link>           */}
                        {isAuthenticated ? <Link to="/signUp" className='nav-link'>logout</Link> : <Link to="/signUp" className='nav-link'>Signup</Link>}


                    </nav>

                    <div className="third-row">

                        <form className="form">
                            <input className='search-input' type="text" placeholder='what are you looking for?' />
                            <button className="search-icon"> <img src={search} alt="si" className='si' /> </button>

                        </form>

                        <div className={isAuthenticated ? "nav-icons" : "nav-icons-hide"}>


                            <div className="one-icon">

                                <img src={heart} alt="" className="icon " />
                            </div>

                            <div className="one-icon">

                                <img src={cart} alt="" className="icon" />
                                <span className="carto">11</span>
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


                    <div className={isAuthenticated ? "nav-icons" : "nav-icons-hide"}>


                       
                        <div className="one-icon">

                            <img src={cart} alt="" className="icon" /> <span className="carto">11</span>


                        </div>

                        <div className="one-icon">
                            <img src={user} alt="" className="icon" />

                        </div>



                    </div>


                    <div className={showMenu ? 'show-mobile-menubar' : "nav-links"}>

                        <div className="out-logo">
                            {showMenu && (<img src={close} alt="mennu-bar" className="menu-mobile-logo" onClick={() => setShowMenu(!showMenu)} />)}

                        </div>




                        <div className="mobile-nav-links">
                            <div className="nav-link">

                                <Link to="/"  >Home</Link>
                            </div>
                            <div className="nav-link">

                                <Link  >Contact</Link>
                            </div>
                            <div className="nav-link">

                                <Link >About</Link>
                            </div>
                            <div className="nav-link">

                                <Link to="/signUp" >Sign Up</Link>
                            </div>

                            <button onClick={() => dispatch(logout)} className="nav-link">
                                logout
                            </button>
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
