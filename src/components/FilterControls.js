import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/itemsSlice';

const FilterControls = () => {
  const dispatch = useDispatch();                                               // .. 4
 
  return (
    <div className="filter-controls">
      <button onClick={() => dispatch(setFilter('All'))}>All</button>
      <button onClick={() => dispatch(setFilter('Category A'))}>Category A</button>
      <button onClick={() => dispatch(setFilter('Category B'))}>Category B</button>
      <button onClick={() => dispatch(setFilter('Category C'))}>Category C</button>
    </div>
  );
};

export default FilterControls;
