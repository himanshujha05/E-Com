import React from 'react';
import './Popular.css';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import Item from '../Item/Item';

const Popular = () => {
  const { products, loadingProducts } = useShop();

  const popularWomen = products.filter((p) => p.category === 'women').slice(0, 4);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-items'>
        {loadingProducts ? (
          <p>Loading...</p>
        ) : (
          popularWomen.map((item) => (
            <Link key={item._id} to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
              <Item
                id={item._id}
                name={item.name}
                image={item.images?.[0] || ''}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Popular;
