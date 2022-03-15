import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reactretail-5d167-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Couldn't not fetch data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error!",
          message: "Couldn't fetch data!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reactretail-5d167-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success..",
          message: "Sent Cart Data Succesfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};
