import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../store/itemsSlice';

const ItemList = () => {
  const items = useSelector(selectFilteredItems); //.. 3

  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="item">
          {item.name} - {item.category}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
