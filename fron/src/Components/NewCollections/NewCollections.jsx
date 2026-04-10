import React from 'react';
import './NewCollections.css';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import Item from '../Item/Item';

const NewCollections = () => {
  const { products, loadingProducts } = useShop();

  // Show the 8 newest products across all categories
  const newArrivals = products.slice(0, 8);

  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {loadingProducts ? (
          <p>Loading...</p>
        ) : (
          newArrivals.map((item) => (
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

export default NewCollections;
