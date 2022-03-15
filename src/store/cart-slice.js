import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartInitialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemtoCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});



export const sendCartData = (cart)=>{
  return async (dispatch) =>{dispatch(
    uiActions.showNotification({
      status: "Pending",
      title: "Sending...",
      message: "Sending Cart Data!",
    })
  );

  const sendRequest = async() => {

    const response = await fetch(
      "https://reactretail-5d167-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    };

  }
  try{
  await sendRequest();
    dispatch(
    uiActions.showNotification({
      status: "Success",
      title: "Success..",
      message: "Sent Cart Data Succesfully!",
    })
  );
  }catch(error){
      dispatch(
      uiActions.showNotification({
        status: "Error",
        title: "Error!",
        message: error.message,
      })
    );
  };
  
 
  
};
}

export const cartActions = cartSlice.actions;
export default cartSlice;
