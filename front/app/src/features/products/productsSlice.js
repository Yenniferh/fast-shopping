import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {"id_product":2,"name":"Galaxy Note 10+","description":"Amazing smartphone","price":"659","stock":12,"id_category":1, "category": "Electronic"},
  {"id_product":3,"name":"LG Monitor 15.6 inch","description":"Full HD","price":"236","stock":15,"id_category":1, "category": "Electronic"}
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  }
})

export default productsSlice.reducer