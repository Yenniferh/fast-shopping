import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUser, CreateOrder, AddOrderItem } from "../../Services/Api";

const initialState = {
  order_items: [],
  status: "idle",
  error: null,
  id_order: 0,
  total: 0,
};

export const postUser = createAsyncThunk("order/postUser", async (user) => {
  await CreateUser(user);
});

export const postOrder = createAsyncThunk("order/postOrder", async (order) => {
  const res = await CreateOrder(order);
  return res.id;
});

export const postOrderItem = createAsyncThunk(
  "order/postOrderItem",
  async (item) => {
    await AddOrderItem(item);
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderItem(state, action) {
      const { id_product, price } = action.payload;
      const existingOrderItem = state.order_items.find(
        (item) => item.id_product === id_product
      );
      if (existingOrderItem) {
        existingOrderItem.quantity += 1;
        existingOrderItem.subtotal = (
          existingOrderItem.price * existingOrderItem.quantity
        ).toFixed(2);
      } else {
        state.order_items.push({
          ...action.payload,
          quantity: 1,
          subtotal: price,
        });
      }
    },
    removeOrderItem(state, action) {
      const { id_product } = action.payload;
      state.order_items = state.order_items.filter(
        (item) => item.id_product !== id_product
      );
    },
    setItemQuantity(state, action) {
      const { id_product, quantity, stock } = action.payload;
      const existingOrderItem = state.order_items.find(
        (item) => item.id_product === id_product
      );
      state.error = null;
      if (stock >= quantity) {
        existingOrderItem.quantity = quantity;
      } else {
        state.error = "Not enough stock";
      }
    },
    calculatesTotal(state, action) {
      let total = 0;
      state.order_items.forEach((element) => {
        total += Number(element.quantity) * Number(element.price);
      });
      state.total = total.toFixed(2);
    },
    resetOrder(state, action) {
      state.order_items = [];
      state.id_order = 0;
      state.total = 0;
    },
  },
  extraReducers: {
    [postUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
    },
    [postOrder.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.id_order = action.payload;
    },
  },
});

export const {
  addOrderItem,
  removeOrderItem,
  setItemQuantity,
  calculatesTotal,
  resetOrder,
} = orderSlice.actions;
export default orderSlice.reducer;

export const selectAllOrderItems = (state) => state.order.order_items;
export const selectAllOrderItemsLength = (state) =>
  state.order.order_items.length;
export const selectItemQuantity = (state, id_product) => {
  const item = state.order.order_items.find(
    (item) => item.id_product === id_product
  );
  return item.quantity;
};
export const selectTotal = (state) => state.order.total;
export const selectIDOrder = (state) => state.order.id_order;
