import React, { useEffect, useState } from "react";
import shopTitle from "../images/shopTitle.jpg";

const Cart = ({ cart, setCart, handleChange }) => {
  const [totalPrices, setTotalPrices] = useState({});

  const handleTotalPrices = () => {
    const totalPriceObj = {};
    cart.forEach((item) => {
      const totalPrice = item.amount * item.price;
      totalPriceObj[item.id] = totalPrice;
    });
    setTotalPrices(totalPriceObj);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handleTotalPrices();
  });

  return (
    <>
      <div className="pageTitle">
        <img src={shopTitle} alt="" />
        <div className="titleBck"></div>
        <div className="titleText">
          <h2>Discover</h2>
          <h3>Our Products</h3>
        </div>
        <div class="row-divider-bottom">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128.125"
            height="13.5"
            viewBox="0 0 128.125 13.5"
          >
            {" "}
            <path
              fill="#fff"
              data-name="Divder Top"
              d="M800,518c-8.782,15.986-46.811,11.315-56,12-35.126,2.618,56,1,56,1V518Zm0,0c8.782,15.986,46.811,11.315,56,12,35.126,2.618-56,1-56,1V518Z"
              transform="translate(-735.938 -518)"
            ></path>{" "}
          </svg>
        </div>
      </div>
      <div className="cartSection">
        <div className="cartHeader">
          <p className="product">Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p className="subtotalHeader">Subtotal</p>
        </div>

        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <i
              className="fa-regular fa-circle-xmark"
              onClick={() => handleRemove(item.id)}
            ></i>

            <img src={item.img} alt="itemimage" className="cart_img" />

            <p>{item.name}</p>
            <span className="itemPrice">${item.price}</span>
            <div className="quantity">
              <button
                className="increment"
                onClick={() => handleChange(item, +1)}
              >
                +
              </button>
              <button className="amount">{item.amount}</button>
              <button
                className="decrement"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
            <div className="subtotal">
              {totalPrices[item.id] !== undefined && (
                <span>${totalPrices[item.id].toFixed(2)}</span>
              )}
            </div>
          </div>
))}
        <div></div>
      </div>
      <div className="totals">
      <span className="cartTotals">Total: </span>
      <span>
        {" "}
        $
        {Object.values(totalPrices)
          .reduce((acc, curr) => acc + curr, 0)
          .toFixed(2)}
      </span> 
      <button className="submit">SUBMIT</button>
      </div>
    </>
  );
};

export default Cart;
