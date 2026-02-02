import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../../content/StoreContext";

const Cart = () => {
  const { cardItem, food_list, removeFromCard } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItem[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cardItem[item._id]}</p>
                <p>${item.price * cardItem[item._id]}</p>
                <p onClick={() => removeFromCard(item._id)} className="cross">
                  x
                </p>
              </div>
            );
          }
          
        })}
      </div>
    </div>
  );
};

export default Cart;
