import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { user, logout, getTotalCartItems } = useShop();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Shopper' />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {menu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        {user ? (
          <div className='nav-user'>
            <span className='nav-username'>Hi, {user.name.split(' ')[0]}</span>
            <button onClick={handleLogout} className='nav-logout-btn'>Logout</button>
          </div>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}

        <Link to='/cart'>
          <img src={cart_icon} alt='Cart' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
