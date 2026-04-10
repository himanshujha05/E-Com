import React from 'react';
import './Item.css';

const Item = ({ name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name || 'product'} />
      <p>{name}</p>
      <div className='item-price'>
        <div className='item-price-new'>${Number(new_price).toFixed(2)}</div>
        {old_price && (
          <div className='item-price-old'>${Number(old_price).toFixed(2)}</div>
        )}
      </div>
    </div>
  );
};

export default Item;
