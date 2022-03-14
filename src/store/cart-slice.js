import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartCount: 0,
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity=state.totalQuantity+1;
      if(!existingItem){
          state.items.push({
              id: newItem.id, 
              price: newItem.price,
              quantity: 0,
              totalPrice: newItem.price,
              name: newItem.title,
          });
      }
      else{
          existingItem.quantity=existingItem.quantity+1;
          existingItem.totalPrice = existingItem.totalPrice + newItem.price;


      }
    },
    removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity=state.totalQuantity-1;
        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id != id);
        }
        else{
            existingItem.quantity=existingItem.quantity-1;
            existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
        }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
