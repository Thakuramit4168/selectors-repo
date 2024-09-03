import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    allItems: [
      { id: 1, name: 'Item 1', category: 'Category A' },
      { id: 2, name: 'Item 2', category: 'Category B' }, //... 1
      { id: 3, name: 'Item 3', category: 'Category A' },
      { id: 4, name: 'Item 4', category: 'Category C' },
    ],
    filter: 'All',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = itemsSlice.actions;

export const selectFilteredItems = (state) => {
  if (state.items.filter === 'All') return state.items.allItems;
  return state.items.allItems.filter(item => item.category === state.items.filter);
};

export default itemsSlice.reducer;
