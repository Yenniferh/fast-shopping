import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetProducts } from '../../Services/Api';

const initialState = {
  products: [],
  status: 'idle',
  otroStatus: 'idle',
  error: null,
};

export const selectAllProducts = (state) => state.products.products;
export const selectProduct = (state, productId) =>
  state.products.products.find((product) => product.id_product === productId);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await GetProducts();
    return res.products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.products = state.products.concat(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default productsSlice.reducer;
