import React from 'react'
import PageLayout from './PageLayout'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <PageLayout>

            <section className='not-found' >
                <div className="cart-navigation">
                    <Link to="/" className="cart-nav-home">
                        Home
                    </Link>
                    /
                    <p className="nav-home-cart">
                        404 Error
                    </p>

                </div>


                <div className="not-found-texts">
                    <h1 className="big-notfound-text">
                        404 Not Found
                    </h1>

                    <h1 className="big-notfound-p">
                        Your visited page not found. You may go home page.

                    </h1>

                    <Link to="/" className="not-found-button">
                        Back to home page
                    </Link>
                </div>

            </section>


        </PageLayout>
    )
}

export default NotFound
