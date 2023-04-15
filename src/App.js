import React, { createContext, useEffect, useState } from 'react'
import PrimarySearchAppBar from './components/NavBar/PrimarySearchAppBar'
import HomePage from './components/HomePage/HomePage'
import ProductPage from './components/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import {Route, Routes} from 'react-router-dom'
export const currentProductDetails = createContext()
const App = () => {
  const [state, setState] = useState(null)
  const [cartItems, setCartItems] = useState({
    allCartItems: [],
    GrandTotal: null,
    cartLength: 0,
    Discount: null,
    couponCode: null,
    DeliveryCharges:null
  });
  const [product, setProduct] = useState([])

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProduct(data))
}

useEffect(() => {
  getData()
}, [])



  return (
    <>
    <currentProductDetails.Provider value={{product:product, state:state, setState:setState , cartItems:cartItems, setCartItems:setCartItems}}>
    <PrimarySearchAppBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path="/viewcart" element={<Cart />} />
    </Routes>
    </currentProductDetails.Provider>
    </>
  )
}

export default App