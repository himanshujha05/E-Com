import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Product.css';

const STAR_COUNT = 5;

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useShop();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`http://localhost:5000/api/products/${productId}`);
        const json = await res.json();
        if (json.success) {
          setProduct(json.data);
        } else {
          setError('Product not found.');
        }
      } catch {
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    await addToCart(product._id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return <div className='product-loading'>Loading...</div>;
  if (error) return <div className='product-loading'>{error} <Link to='/'>Go back</Link></div>;

  const images = product.images?.length > 0 ? product.images : ['/placeholder.png'];
  const discount = product.old_price
    ? Math.round(((product.old_price - product.new_price) / product.old_price) * 100)
    : null;

  return (
    <div className='product'>
      <div className='product-left'>
        <div className='product-img-list'>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.name} ${i + 1}`}
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
            <span key={i} className={i < Math.round(product.ratings) ? 'star filled' : 'star'}>
              ★
            </span>
          ))}
          <p>({product.numReviews} reviews)</p>
        </div>

        <div className='product-right-prices'>
          <div className='product-right-price-new'>${product.new_price.toFixed(2)}</div>
          {product.old_price && (
            <div className='product-right-price-old'>${product.old_price.toFixed(2)}</div>
          )}
          {discount && <span className='product-discount'>{discount}% off</span>}
        </div>

        <p className='product-right-description'>{product.description || 'No description available.'}</p>

        <p className='product-stock'>
          {product.stock > 0 ? (
            <span className='in-stock'>In Stock ({product.stock})</span>
          ) : (
            <span className='out-of-stock'>Out of Stock</span>
          )}
        </p>

        <button
          className='product-right-btn'
          onClick={handleAddToCart}
          disabled={product.stock === 0 || added}
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
