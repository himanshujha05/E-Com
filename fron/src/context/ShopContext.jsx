import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import api from '../api/axios';

const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('shopper_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('shopper_token') || null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCart, setLoadingCart] = useState(false);

  // ── Products ──────────────────────────────────────────────────────────────
  const fetchProducts = useCallback(async (params = {}) => {
    setLoadingProducts(true);
    try {
      const { data } = await api.get('/products', { params });
      setProducts(data.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoadingProducts(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ── Cart ──────────────────────────────────────────────────────────────────
  const fetchCart = useCallback(async () => {
    if (!token) return;
    setLoadingCart(true);
    try {
      const { data } = await api.get('/cart');
      setCartItems(data.data.items || []);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoadingCart(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchCart();
    } else {
      setCartItems([]);
    }
  }, [token, fetchCart]);

  const addToCart = async (productId, quantity = 1) => {
    if (!token) {
      window.location.href = '/login';
      return;
    }
    try {
      const { data } = await api.post('/cart/add', { productId, quantity });
      setCartItems(data.data.items || []);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const { data } = await api.delete(`/cart/${itemId}`);
      setCartItems(data.data.items || []);
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await api.delete('/cart/clear');
      setCartItems([]);
    } catch (error) {
      console.error('Failed to clear cart:', error);
    }
  };

  const getTotalCartItems = () =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalCartAmount = () =>
    cartItems.reduce((sum, item) => {
      const price = item.product?.new_price || 0;
      return sum + price * item.quantity;
    }, 0);

  // ── Auth ──────────────────────────────────────────────────────────────────
  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    const { user: loggedInUser, token: jwt } = data.data;
    setUser(loggedInUser);
    setToken(jwt);
    localStorage.setItem('shopper_token', jwt);
    localStorage.setItem('shopper_user', JSON.stringify(loggedInUser));
    return loggedInUser;
  };

  const register = async (name, email, password) => {
    const { data } = await api.post('/auth/register', { name, email, password });
    const { user: newUser, token: jwt } = data.data;
    setUser(newUser);
    setToken(jwt);
    localStorage.setItem('shopper_token', jwt);
    localStorage.setItem('shopper_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setCartItems([]);
    localStorage.removeItem('shopper_token');
    localStorage.removeItem('shopper_user');
  };

  const contextValue = {
    products,
    loadingProducts,
    fetchProducts,
    cartItems,
    loadingCart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartItems,
    getTotalCartAmount,
    user,
    token,
    login,
    register,
    logout,
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used inside ShopProvider');
  }
  return context;
};

export default ShopContext;
