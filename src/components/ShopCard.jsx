import React from "react";
import shop from "../shop.json";

function ShopCard({item, handleClick}) {
  return (
    <>
      <div className="shopBox">
      {shop.map((item, index) => ( 
        <div className="shopBox__box" key={item.id}>
          <div className="shopImg">
            <img src={item.img} alt="" />           
            <div className="hoverBoxShop">
              <button onClick={() => handleClick(item)}>ADD TO CART</button>              
            </div>
          </div>
          <div className="shopText">
          <p>{item.name}</p>
          <span>${item.price}</span>
          </div>
        </div>
         ))}
      </div>
    </>
  );
}

export default ShopCard;
