import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount, loadingCart, user } = useShop();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className='cart-empty'>
        <p>Please <Link to='/login'>login</Link> to view your cart.</p>
      </div>
    );
  }

  if (loadingCart) {
    return <div className='cart-empty'><p>Loading cart...</p></div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className='cart-empty'>
        <p>Your cart is empty.</p>
        <Link to='/'>Continue Shopping</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-format-main'>
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {cartItems.map((item) => {
          const product = item.product;
          if (!product) return null;

          return (
            <div key={item._id} className='cart-items-format cart-items-format-main'>
              <img
                className='cart-icon-product-icon'
                src={product.images?.[0] || ''}
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>${product.new_price.toFixed(2)}</p>
              <button className='cart-quantity'>{item.quantity}</button>
              <p>${(product.new_price * item.quantity).toFixed(2)}</p>
              <button
                className='cart-remove'
                onClick={() => removeFromCart(item._id)}
                aria-label='Remove item'
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      <div className='cart-down'>
        <div className='cart-total'>
          <h1>Cart Totals</h1>
          <div className='cart-total-item'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className='cart-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cart-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount().toFixed(2)}</h3>
          </div>

          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>

        <div className='cart-promocode'>
          <p>Have a promo code? Enter it here</p>
          <div className='cart-promobox'>
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
