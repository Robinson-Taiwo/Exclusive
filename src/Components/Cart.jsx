import React, { useState } from 'react'
import PageLayout from './PageLayout'
import { Link } from 'react-router-dom'
import television from "../assets/television.png"
import playstation from '../assets/playstation.png'
import down from "../assets/down.svg"
import up from "../assets/ups.svg"
import { decreaseItemQuantity, increaseItemQuantity, clearCart } from './Cart/CartSlice'
import data from "./data"
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const { quantity, id, image, price, title } = useSelector(state => state.cart.items)

  const cartTotal = useSelector((state) => state.cart.total);


  const dispatch = useDispatch();

  const handleDecrease = (item) => {
    dispatch(decreaseItemQuantity(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseItemQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(handleClearCart());
  };

  function roundUpToTwoDecimalPlaces(number) {
    // Convert the input number to a float with two decimal places
    const roundedNumber = parseFloat(number).toFixed(2);
    return roundedNumber;
  }


  return (

    <PageLayout>

      <main className="cart-head">

        <div className="cart-navigation">
          <Link to="/" className="cart-nav-home">
            Home
          </Link>
          /
          <p className="nav-home-cart">
            Cart
          </p>

        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <section className="cart-container">


            <table className='table' >

              <tr className='table-head' >

                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Sub total</td>
              </tr>

              {cartItems.map(item => {
                return (

                  <tr key={item.id} className='h-[6.4rem] mb-[2.5rem]'>

                    <td className='cart-header-title'> <img src={item.image} alt="" className="cart-product-icon" />
                      <span className="container-header">{item.title}</span></td>
                    <td>${item.price}</td>
                    <td>

                      <div className="cart-actions">
                        <div className="cart-actions-one">
                          {item.quantity}
                        </div>

                        <div className="cart-actions-button">

                          <button onClick={() => dispatch(increaseItemQuantity(item))} >
                            <img src={up} alt="" className="drop-up" />
                          </button>

                          <button onClick={() => dispatch(decreaseItemQuantity(item))} >

                            <img src={down} alt="" className="drop-up" />
                          </button>


                        </div>
                      </div>
                    </td>
                    <td>{roundUpToTwoDecimalPlaces(item.price * item.quantity)}</td>
                  </tr>

                )
              })}

              {/* <tr className='h-[6.4rem] mb-[2.5rem]'>

            <td className='cart-header-title'> <img src={television} alt="" className="cart-product-icon" />
              <span className="container-header">LCD Monitor</span></td>
            <td>$650</td>
            <td>

              <div className="cart-actions">
                <div className="cart-actions-one">
                  {number}
                </div>

                <div className="cart-actions-button">

                  <button onClick={() => setNumber(number + 1)} >
                    <img src={up} alt="" className="drop-up" />
                  </button>

                  <button onClick={() => setNumber(number - 1)} >

                    <img src={down} alt="" className="drop-up" />
                  </button>


                </div>
              </div>
            </td>
            <td>$650</td>
          </tr> */}

              {/* <tr className='h-[6.4rem]'>

            <td className='cart-header-title'> <img src={television} alt="" className="cart-product-icon" />
              <span className="container-header">LCD Monitor</span></td>
            <td>$650</td>
            <td>

              <div className="cart-actions">
                <div className="cart-actions-one">
                  {number}
                </div>

                <div className="cart-actions-button">

                  <button onClick={() => setNumber(number + 1)} >
                    <img src={up} alt="" className="drop-up" />
                  </button>

                  <button onClick={() => setNumber(number - 1)} >

                    <img src={down} alt="" className="drop-up" />
                  </button>


                </div>
              </div>



            </td>
            <td>$650</td>
          </tr> */}



            </table>

            <section className="cart-button">
              <button className="update-cart">
                Return To Shop
              </button>

              <button className="update-cart">
                Update Cart
              </button>

            </section>


          </section>
        )}




        <div className="cupon">

          <div className="cupon-div">

            <input type="text" placeholder='cupon code' className="cupon-code" />

            <button className="apply-cupon">
              Apply cupon
            </button>


          </div>

          <div className="cart-total">

            <p className="cart-total-p">
              cart
            </p>

            <div className="activity">
              <p className="activity-text">
                Subtotal:
              </p>

              <p className="activity-price">
                ${cartTotal.toFixed(2)}
              </p>
            </div>


            <div className="activity">
              <p className="activity-text">
                Shiping:
              </p>

              <p className="activity-price">
                free
              </p>
            </div>

            <div className="activity-w">
              <p className="activity-text">
                Total:
              </p>

              <p className="activity-price">
                ${cartTotal.toFixed(2)}
              </p>
            </div>


            <button className="checkout">
              Process to checkout
            </button>

          </div>

        </div>

      </main>
    </PageLayout>
  )
}

export default Cart