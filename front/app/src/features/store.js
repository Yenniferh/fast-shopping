import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import orderReducer from './order/orderSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    order: orderReducer,
    categories: categoriesReducer,
  },
});
