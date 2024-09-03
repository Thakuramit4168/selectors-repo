import React from 'react';
import ItemList from './components/ItemList';
import FilterControls from './components/FilterControls';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Item List with Filters</h1>
      <FilterControls />
      <ItemList />
    </div>
  );
};

export default App;
