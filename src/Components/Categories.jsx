import React from 'react'
import camera from "../assets/camera.svg"
import cellphone from "../assets/cellphone.svg"
import watch from "../assets/watch.svg"
import computer from "../assets/computer.svg"
import games from "../assets/games.svg"
import headphone from "../assets/headphone.svg"
import "./Categories.css"


const Categories = () => {
    return (
        <div className='cate' >

            <div className="sub-headc">

                <div className="small-orange">

                </div>
                <span className="sub-text">Categories</span>

            </div>

            <div className="big-headc">
                <h1 className="d-head">
                    Browse By Category
                </h1>


            </div>


            <div className="categories-box">

                <div className="categories-box-child">

                    <img src={cellphone} alt="" className="category-image" />

                    <p className="cate-box-p">
                        phones
                    </p>

                </div>


                <div className="categories-box-child">

                    <img src={computer} alt="" className="category-image" />

                    <p className="cate-box-p">
                        Computer
                    </p>

                </div>


                <div className="categories-box-child">

                    <img src={watch} alt="" className="category-image" />

                    <p className="cate-box-p">
                        Smartwatch
                    </p>

                </div>


                <div className="categories-box-child">

                    <img src={camera} alt="" className="category-image" />

                    <p className="cate-box-p">
                        Cameras
                    </p>

                </div>


                <div className="categories-box-child">

                    <img src={headphone} alt="" className="category-image" />

                    <p className="cate-box-p">
                        Headphone
                    </p>

                </div>


                <div className="categories-box-child">

                    <img src={games} alt="" className="category-image" />

                    <p className="cate-box-p">
                        Gaming
                    </p>

                </div>



            </div>

        </div>
    )
}

export default Categories
