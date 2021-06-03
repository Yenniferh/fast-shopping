import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetProductCategories } from '../../Services/Api';

const initialState = {};

export const fetchProductCategories = createAsyncThunk(
  'categories/fetchProductCategories',
  async (product) => await GetProductCategories(product)
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

export default categoriesSlice.reducer;
