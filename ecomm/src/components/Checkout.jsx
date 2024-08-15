// components/Checkout.js
import React from 'react';

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='checkoutbox'>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button>Proceed to Payment</button>
        </>
      )}
    </div>
  );
}

export default Checkout;