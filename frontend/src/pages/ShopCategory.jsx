import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import all_product from '../assets/all_product';
import Item from '../components/Item/Item';
import './ShopCategory.css';

const SORT_OPTIONS = [
  { label: 'Newest', value: 'default' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
];

const ShopCategory = ({ category }) => {
  const [sortIndex, setSortIndex] = useState(0);

  const filtered = all_product.filter((p) => p.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sortIndex === 1) return a.new_price - b.new_price;
    if (sortIndex === 2) return b.new_price - a.new_price;
    return 0;
  });

  return (
    <div className='shopcategory'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1–{sorted.length}</span> of {sorted.length} products
        </p>
        <div className='shopcategory-sort'>
          <label>Sort by:</label>
          <select value={sortIndex} onChange={(e) => setSortIndex(Number(e.target.value))}>
            {SORT_OPTIONS.map((opt, i) => (
              <option key={i} value={i}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <p className='shopcategory-loading'>No products found.</p>
      ) : (
        <div className='shopcategory-products'>
          {sorted.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
