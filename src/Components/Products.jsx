import React from 'react'
import stars from '../assets/stars.svg'
import heart from "../assets/white-heart.svg"

import "./Products.css"
import data from "./data"
import PageLayout from './PageLayout'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <PageLayout>
            <div className='producyss'>

                {data.map((data, index) => {
                    return (

                        <div className='productss' key={index}>

                            <ProductCard id={data.id} card={[1, 2, 3]} stars={stars} heart={heart} price={data.price} title={data.title} image={data.image} data={data} />
                        </div>
                    )
                })}


            </div>
        </PageLayout>
    )
}

export default Products
