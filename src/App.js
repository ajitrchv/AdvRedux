import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification.js";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartShow = useSelector((state) => state.ui.cartShow);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(
        sendCartData({ items: cart.items, totalQuantity: cart.totalQuantity })
      );
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
