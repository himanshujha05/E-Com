import React from 'react';
import './Item.css'; // Make sure this file exists and has styles

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt={props.name || "product"} />
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new"> ${props.new_price}</div>
        <div className="item-price-old"> ${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
