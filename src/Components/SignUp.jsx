import React from 'react'
import "./SignUp.css"
import google from "../assets/Google.svg"
import PageLayout from './PageLayout'
// import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const SignUp = () => {

    const [showSignupForm, setShowSignupForm] = useState(true)

    const show = () => {
        setShowSignupForm(false)
    }

    return (
        <PageLayout>
            <div className="signup">

                <div className="signup-container">

                    <div className="signup-image">

                    </div>

                    {showSignupForm ? (<div className="login-det">

                        <div className="det-head">
                            <h1 className="det-heading">
                                Create an account
                            </h1>

                            <p className="det-desc">
                                Enter your details below
                            </p>
                        </div>

                        <div className="login-actions">

                            <div className="login-acts">
                                <input type="name" placeholder='Name' className="name" />

                                <input type="email" placeholder='Email or Phone Number' className="name" />

                                <input type="password" placeholder='Password' className="name" />
                            </div>
                        </div>

                        <div className="login-veri">
                            <button className="accounts">
                                Create Account
                            </button>

                            <button className="account">
                                <img src={google} alt="" className="google" /> <span className='gog' >Sign up with Google</span>
                            </button>

                            <div className="log-in">
                                <p className="already">Already have an account?</p>

                                <button onClick={show} className="log">
                                    log in
                                </button>

                            </div>
                        </div>

                    </div>) : (

                        <div className="login-det">


                            <div className="det-head">
                                <h1 className="det-heading">
                                    {!showSignupForm && "Log in to account"}
                                </h1>

                                <p className="det-desc">
                                    Enter your details below
                                </p>
                            </div>


                            <div className="login-actions">
                                <div className="login-acts">

                                    <input type="email" placeholder='Email or Phone Number' className="name" />

                                    <input type="password" placeholder='Password' className="name" />
                                </div>
                            </div>

                            <div className="login-buttons">
                                <button className="orange-login">
                                    Log in
                                </button>

                                <button className="forgot">
                                    forgot password?
                                </button>
                            </div>

                        </div>

                    )}
                </div>

            </div>
        </PageLayout>

    )
}

export default SignUp
