import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import '../CartSection/Cart.css'

function CartPage({ cartItems, setCartItems, user }) {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calcTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(calcTotal);
  }, [cartItems]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const checkoutHandler = async () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    try {
      const orderData = {
        userId: user._id,
        userName: user.name,
        email: user.gmail,
        products: cartItems,
        totalAmount: total,
      };

      await axios.post("http://localhost:5000/orders", orderData);
      alert("Order placed successfully!");
      setCartItems([]);
      navigate("/"); // redirect to home
    } catch (err) {
      console.error(err);
      alert("Something went wrong while placing order");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Qty: {item.qty}</p>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item._id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={checkoutHandler}>
              Checkout Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
