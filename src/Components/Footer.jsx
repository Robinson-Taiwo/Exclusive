import React from 'react'
import send from "../assets/send.svg"
import apple from "../assets/applestore.svg"
import play from "../assets/playstore.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import qr from "../assets/qr.png"
import copy from "../assets/copyright.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-det">

                <div className="foot-col">
                    <h1 className="foot-head">
                        Exclusive
                    </h1>

                    <p className="sub-foot">
                        Suscribe
                    </p>

                    <div className="foot-col-2">

                        <p className="sub-p">
                            Get 10% off your first order
                        </p>

                        <form className="form-foot">
                            <input className="foot-search-input" type="email" placeholder='enter email' />
                            <button className="foot-send-icon"> <img src={send} alt="" className="si" /> </button>

                        </form>
                    </div>


                </div>

                <div className="foot-col">
                    <h1 className="foot-head">
                        Support
                    </h1>


                    <div className="foot-col-2">

                        <p className="sub-p">
                            111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                        </p>

                        <p className="sub-p">
                            exclusive@gmail.com
                        </p>

                        <p className="sub-p">
                            +88015-88888-9999
                        </p>

                    </div>


                </div>

                <div className="foot-col">
                    <h1 className="foot-head">
                        Account
                    </h1>



                    <div className="foot-col-2">

                        <p className="sub-p">
                            My Account
                        </p>

                        <p className="sub-p">
                            Login / Register
                        </p>

                        <p className="sub-p">
                            Cart
                        </p>

                        <p className="sub-p">
                            Wishlist
                        </p>

                        <p className="sub-p">
                            shop
                        </p>
                    </div>


                </div>

                <div className="foot-col">
                    <h1 className="foot-head">
                        Quick Link
                    </h1>


                    <div className="foot-col-2">

                        <p className="sub-p">
                            Privacy Policy
                        </p>

                        <p className="sub-p">
                            Terms Of Use
                        </p>

                        <p className="sub-p">
                            FAQ
                        </p>

                        <p className="sub-p">
                            Contact
                        </p>

                    </div>


                </div>

                <div className="foot-col">
                    <h1 className="foot-head">
                        Download App
                    </h1>



                    <div className="foot-col-2">

                        <p className="sub-p-2">
                            Save $3 with App New User Only
                        </p>

                        <div className="foot-qr">
                            <img src={qr} className="qr-code" />



                            <div className="stores">
                                <img src={play} alt="playstore" className="play" />

                                <img src={apple} alt="applestore" className="play" />
                            </div>
                        </div>

                        <div className="social-media">

                            <img src={facebook} alt="applestore" className="handles" />

                            <img src={twitter} alt="twitter" className="handles" />

                            <img src={instagram} alt="instagram" className="handles" />

                            <img src={linkedin} alt="linkedin" className="handles" />






                        </div>
                    </div>


                </div>




            </div>

            <footer className="copyright">
                <img src={copy} alt="" className="copy-right" />   <span>Copyright Taiwo 2023. All right reserved</span>
            </footer>



        </div>
    )
}

export default Footer
