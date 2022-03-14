import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import cartSlice from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const itemAddHandler = () => {
    dispatch(cartSlice.actions.addItemtoCart());
  }
  const itemRemoveHandler = () => {
    dispatch(cartSlice.actions.removeItemFromCart());
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemAddHandler}>-</button>
          <button ocnClick={itemRemoveHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
