import React, { useContext, useEffect, useState } from 'react'
import { currentProductDetails } from "../../App";
import "./cart.css"
import { useSelector, useDispatch } from 'react-redux';
import { delCart, remCart, addCart, totalPrice } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  //const data = useContext(currentProductDetails)
  //console.log(data.cartItems.allCartItems.filter(ele => [...new Set([ele.id])]))
  const data = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

 

  const addTotal = () => {
    return data && data.map(ele => ele.price).reduce((a,b) => a+b,0)
  }
  // useEffect(() => {
  //   addTotal()
  // },[button])
  const [price, setPrice] = useState({total : addTotal()})
 console.log(price.total)

  const button = (ele) => {
    dispatch(addCart(ele))
 }

 const updatePrice = () => {
  setPrice({ total : addTotal()})
 }

 useEffect(() => {
  updatePrice()
 },[button])
  
 
  return (
    <div className='body_cart_container'>
      {data.length <= 0 ? (
        <>
       <div className='empty_cart_container'>
       <div className='cart_text'>
                <h4> KlipKart </h4>
              </div>
              <div className='empty_cart_details'>
                <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='empty-cart' />
                <p>Your cart is empty!</p>
                <p>Add items to it now.</p>
                <button onClick={() => navigate("/")}>Shop now</button>
              </div>
       </div>
        </>
      ) : (
        <>
          <div className='cart_container'>
            <div className='left_cart_container'>
              <div className='cart_text'>
                <h4> FlipKart&nbsp;({data.length}) </h4>
              </div>
              <div className='cart_items'>
                {data.map((ele) => {
                  return (
                    <>
                      <div key={ele.id} className='item_container'>
                        <div className='item'>
                          <div className='left_item'>
                            <div className='image_item'>
                              <img src={ele.image} alt={ele.title} onClick={() => {
                                localStorage.setItem("currentProductDetails", JSON.stringify(ele))
                                navigate("/product")
                              }}/>
                            </div>

                          </div>
                          <div className='right_item'>
                            <div className='title_text'>
                              <p onClick={() => {
                                localStorage.setItem("currentProductDetails", JSON.stringify(ele))
                                navigate("/product")
                              }}>{ele.title.length <= 53 ? ele.title : ele.title.substr(0, 50) + "..."}</p>
                              <p>{ele.description.substr(0, 53) + "..."}</p>
                            </div>
                            <div className='category_text'>
                              <p> Category : {ele.category} </p>
                            </div>
                            <div className='price_text'>
                              <p>${ele.price.toFixed(2)}</p>
                            </div>

                          </div>
                        </div>

                        <div className='item_buttons'>
                          <div className='item_button'>
                            <button onClick={() => dispatch(delCart(ele))} disabled={ele.qty === 1 ? true : false}> - </button>
                            <div className='item_number'>
                              {ele.qty}
                            </div>
                            <button onClick={() => button(ele)}> + </button>
                          </div>
                           
                          <div className='remove_button'>
                            <button onClick={(e) => dispatch(remCart(ele))}> Remove From Cart </button>
                          </div>
                        </div>
                      </div>

                    </>
                  )
                })}
              </div>
              <div className='placeorder_button'>
                <button>PLACE ORDER</button>
              </div>
            </div>

            <div className='right_cart_container'>
              <div className='right_cart_details'>
                <p className='price_detail_text'>PRICE DETAILS</p>
                <div className='price_detail_container'>
                  <div className='total_price'>
                    <p>Price ({data.length} items)</p>
                    <p>${price.total.toFixed(2)}</p>
                  </div>

                  <div className='total_discount'>
                    <p>Discount</p>
                    <p style={{color: "#388e3c"}}>- $0</p>
                  </div>

                  <div className='delivery_charge'>
                    <p>Delivery Charges</p>
                    <p style={{color: "#388e3c"}}>Free</p>
                  </div>

                  <div className='total_amount'>
                    <h3>Total Amount</h3>
                    <h3>${price.total.toFixed(2)}</h3>
                  </div>
                </div>
              </div>

              <div className='secure_text'>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg' alt='secure payment gateway' />
                <p>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>

  )
}

export default Cart