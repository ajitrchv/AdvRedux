import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const newItem = {id , title, price, description,};

  const dispatch = useDispatch();

  const addtoCartHandler = () => {
    dispatch(cartSlice.actions.addItemtoCart(newItem));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
