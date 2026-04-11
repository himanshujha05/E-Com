import React from 'react';
import './Popular.css';
import { Link } from 'react-router-dom';
import all_product from '../../assets/all_product';
import Item from '../Item/Item';

const Popular = () => {
  const popularWomen = all_product.filter((p) => p.category === 'women').slice(0, 4);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-items'>
        {popularWomen.map((item) => (
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
    </div>
  );
};

export default Popular;
