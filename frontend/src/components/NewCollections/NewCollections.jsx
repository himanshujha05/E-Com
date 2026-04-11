import React from 'react';
import './NewCollections.css';
import { Link } from 'react-router-dom';
import new_collections from '../../assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collections.map((item) => (
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

export default NewCollections;
