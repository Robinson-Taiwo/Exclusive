import React, { useEffect } from 'react'
import "./SignUp.css"
import google from "../assets/Google.svg"
import PageLayout from './PageLayout'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setPassword, clearForm, setEmail, setIsAuthenticated } from './Features/SignUp/SignupSlice'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'



const SignUp = () => {

    // const { name, password, email, isAuthenticated } = useSelector(state => state.signup)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [showSignupForm, setShowSignupForm] = useState(true)
    // const [isAuthenticated, setIsAuthenticated] = useState(false)


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(null)
    const [loginPassword, setLoginPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [isTrue, setIsTrue] = useState(false)



    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';

        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }

    const loginValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';


        if (loginPassword === null || loginPassword === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (loginEmail === null || loginEmail === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            // if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            // } else {
            //     isproceed = false;
            //     toast.warning('Please enter the valid email')
            // }
        }

        return isproceed;
    }





    const show = () => {
        setShowSignupForm(!showSignupForm)
    }


    const handleLogin = (event) => {
        event.preventDefault()

        if (loginValidate()) {

            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: loginEmail,
                    password: loginPassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(json => {
                    toast.success('logged in successfully.');
                    console.log(json);
                    setLoginPassword('');
                    setLoginEmail('');
                    setIsTrue(true)
                    navigate("/")


                })
                .catch(err => {
                    console.log(err)
                    setLoginPassword('');
                    setLoginEmail('');
                    toast.error('Failed :' + err.message);
                })
        }


    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let regobj = { email, password }

        if (IsValidate()) {
            fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(


                    {
                        email: email,
                        username: name,
                        password: password,
                        name: {
                            firstname: 'John',
                            lastname: 'Doe'
                        },
                        address: {
                            city: 'kilcoole',
                            street: '7835 new road',
                            number: 3,
                            zipcode: '12926-3874',
                            geolocation: {
                                lat: '-37.3159',
                                long: '81.1496'
                            }
                        },
                        phone: '1-570-236-7033'
                    }
                )
            }).then((res) => {
                toast.success('Registered successfully.')
                setData(res)
                // localStorage.setItem('token', res.token)
                console.log(res)
                setName("")
                setPassword("")
                setEmail("")
                setShowSignupForm(!showSignupForm);
            }).catch((err) => {
                toast.error('Failed :' + err.message);
                console.log(err)
                setName("")
                setPassword("")
                setEmail("")
            });


        }




    };

    dispatch(setIsAuthenticated(isTrue))









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

                            <form onSubmit={handleSubmit} className="login-acts">
                                <input type="text"
                                    id="username"
                                    name="username" placeholder='Name'
                                    value={name} onChange={(e) => setName(e.target.value
                                    )} className="name" />

                                <input type="email"
                                    id="email"
                                    name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value
                                    )} className="name" />

                                <input type="password"
                                    id="password"
                                    name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value
                                    )} className="name" />
                            </form>
                        </div>

                        <div className="login-veri">
                            <button onClick={handleSubmit} className="accounts">
                                Create Account
                            </button>

                            <button className="account">
                                <img src={google} alt="" className="google" /> <span className='gog' >Sign up with Google</span>
                            </button>

                            <div className="log-in">
                                <p className="already">Already have an account?</p>

                                <button onClick={() => setShowSignupForm(!showSignupForm)} className="log">
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

                                    <input type="text" placeholder='UserName' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="name" />

                                    <input type="password" placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="name" />
                                </div>
                            </div>

                            <div className="login-buttons">
                                <button onClick={handleLogin} className="orange-login">
                                    Log in
                                </button>

                                <button className="forgot">
                                    forgot password?
                                </button>


                            </div>
                            <button onClick={() => setShowSignupForm(!showSignupForm)} className="lo">
                                {showSignupForm ? "Log in" : "sign-up"}
                            </button>
                        </div>

                    )}
                </div>

            </div>
        </PageLayout>

    )
}

export default SignUp
