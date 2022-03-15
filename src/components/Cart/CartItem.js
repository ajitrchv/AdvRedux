import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import cartSlice from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const itemAddHandler = () => {
    dispatch(cartSlice.actions.addItemtoCart({
      id: id,
      title: title,
      price: price,
      quantity: 1,
    }));
  };
  const itemRemoveHandler = () => {
    dispatch(cartSlice.actions.removeItemFromCart(id));
  }
  return (
    <li className={classes.item} key={classes.id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          Rs.{total}{' '}
          <span className={classes.itemprice}>(Rs.{price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemRemoveHandler}>-</button>
          <button onClick={itemAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
