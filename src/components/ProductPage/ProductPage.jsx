import React, { useContext,  useState } from "react";
import "./product-page.css";
import { currentProductDetails } from "../../App";
// import star from '../../images/star1.webp'
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const context = useContext(currentProductDetails);
   const [currentItem] = useState(
    JSON.parse(localStorage.getItem("currentProductDetails"))
   );
   const [cartName, setCartName] = useState("ADD TO CART")
   const navigate = useNavigate()

   const dispatch = useDispatch()
  
  
  const AddToCart = (product) => {
    context.cartItems.allCartItems.push(currentItem);
    console.log(context.cartItems.allCartItems)
    context.setCartItems({...context.cartItems, cartLength: context.cartItems.allCartItems.length})
    dispatch(addCart(product))
  };
  return (
    <div className="product">
      <div className="product-left">
        <div class="heart">
          <svg
            style={{
              border: "1px solid #e3e3e3",
              padding: "5px",
              borderRadius: "50px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            class="_1l0elc"
            width="26"
            height="26"
            viewBox="0 0 20 16"
          >
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              fill="#2874F0"
              class="eX72wL"
              stroke="#FFF"
              fill-rule="evenodd"
              opacity=".9"
            ></path>
          </svg>
        </div>
        <img
          id="myimage"
           src={currentItem.image}
          //src={currentItem.image}
          height="100%"
          width="80%"
          alt="current-product"
          style={{
            boxShadow: "1px 1px 2px #e1e1e1",
            padding: "20px 20px",
            marginTop: "50px",
          }}
        />
        <div id="myresult" class="img-zoom-result"></div>
        <div className="btn_data">
          <button
            id="btn_cart"
            onClick={() => {
              setCartName("GO TO CART")
              AddToCart(currentItem);
              navigate("/Flipkart-Clone/viewcart")
            }}
          >
            <svg
              class="_1KOMV2"
              width="16"
              height="16"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class=""
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
              ></path>
            </svg>
            {cartName}
          </button>
          <button id="btn_checkout" onClick={() => {
              AddToCart(currentItem);
              navigate("/Flipkart-Clone/viewcart")
            }}>
            <svg
              class="_1KOMV2"
              width="16"
              height="16"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class=""
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
              ></path>
            </svg>
            BUY NOW
          </button>
        </div>
      </div>
      <div className="product-right">
        <p style={{ color: "gray" }}>{currentItem.category}</p>
        <br />
        <h1 id="products_desc"> {currentItem.description}</h1>
        <div class="box_rating">
          <div id="rating">
            <h5>{currentItem.rating.rate} <span style={{marginLeft : "2px"}}>&#9734;</span></h5>
            
          </div>
          <span style={{ color: "gray" }}>
            <b>{currentItem.rating.count}</b>&nbsp;Ratings & {currentItem.rating.count/2} Reviews
          </span>
        </div>
        <br />
        <h1 id="products_title">{currentItem.title}</h1>
        <p style={{color : "green"  , fontWeight: "bold"}}> Special price</p>
        <h1 id="products_price">
          {" "}
          <b>$ {currentItem.price}</b>
        </h1>
        <br />
        <p style={{ fontSize: "16px" }}>
          <b>Available offers</b>
        </p>
        <p id="offer">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            height="15px"
            width="15px"
            alt="offer-1" />
          &nbsp;<b>Bank Offer </b> 10% off on Samsung axis Bank credit card{" "}
          <b>T&C</b>
        </p>
        <p id="offer">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            height="15px"
            width="15px"
            alt="offer-2" 
           />
          &nbsp;<b>Bank Offer </b> 10% off on DBS Bank Debit and Credit Card
          Transactions, up to ₹750. above <b>T&C</b>
        </p>
        <p id="offer">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            height="15px"
            width="15px"
            alt="offer-3" 
          />
          &nbsp;<b>Bank Offer </b> 10% off on IDBI Bank Debit and Credit Card
          Transactions, up to ₹500.
        </p>
        <p id="offer">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            height="15px"
            width="15px"
            alt="offer-4" 
          />
          &nbsp;<b>Bank Offer </b> Buy this Product and Get Extra ₹500 Off on
          Bikes & Scooters
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
