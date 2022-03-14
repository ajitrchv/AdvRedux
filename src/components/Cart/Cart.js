import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartEmpty = cartItems.length === 0;
  //console.log('here is vcart value RN, ',isCartEmpty)
  const trendData = ' is empty! Add something.';
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart{isCartEmpty && trendData}</h2>
    {!isCartEmpty &&
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key= {item.id}
            item={{ 
              id: item.id,
              title: item.name,
              quantity: item.quantity, 
              total: item.totalPrice, 
              price: item.price }}
          />
        ))}
      </ul>}
    </Card>
  );
};

export default Cart;
