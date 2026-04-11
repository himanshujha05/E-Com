import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import all_product from '../assets/all_product';
import './Product.css';

const STAR_COUNT = 5;

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart, user } = useShop();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  // Find product from static data by numeric id
  const product = all_product.find((p) => String(p.id) === String(productId));

  if (!product) {
    return (
      <div className='product-loading'>
        Product not found. <Link to='/'>Go back</Link>
      </div>
    );
  }

  const images = [product.image];
  const discount = product.old_price
    ? Math.round(((product.old_price - product.new_price) / product.old_price) * 100)
    : null;

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    // Pass the numeric id so the backend can look it up
    await addToCart(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className='product'>
      <div className='product-left'>
        <div className='product-img-list'>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.name} view ${i + 1}`}
              className={selectedImage === i ? 'active' : ''}
              onClick={() => setSelectedImage(i)}
            />
          ))}
        </div>
        <div className='product-img-showcase'>
          <img src={images[selectedImage]} alt={product.name} />
        </div>
      </div>

      <div className='product-right'>
        <h1>{product.name}</h1>

        <div className='product-right-stars'>
          {Array.from({ length: STAR_COUNT }).map((_, i) => (
            <span key={i} className={i < 4 ? 'star filled' : 'star'}>★</span>
          ))}
          <p>(121 reviews)</p>
        </div>

        <div className='product-right-prices'>
          <div className='product-right-price-new'>${Number(product.new_price).toFixed(2)}</div>
          {product.old_price && (
            <div className='product-right-price-old'>${Number(product.old_price).toFixed(2)}</div>
          )}
          {discount && <span className='product-discount'>{discount}% off</span>}
        </div>

        <p className='product-right-description'>
          High-quality {product.category === 'kid' ? "kids'" : product.category + "'s"} clothing.
          Crafted with premium materials for comfort and style.
        </p>

        <p className='product-stock'>
          <span className='in-stock'>In Stock</span>
        </p>

        <button
          className='product-right-btn'
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? 'Added to Cart ✓' : 'ADD TO CART'}
        </button>

        <p className='product-category'>
          <strong>Category:</strong> {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
