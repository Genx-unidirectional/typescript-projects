import { ChangeEvent, memo } from "react";
import { CartItemType, Reducer_Action } from "../context/cartProvider";
import { ReducerActionType } from "../context/cartProvider";
type PropsType = {
  dispatch: React.Dispatch<Reducer_Action>;
  Reducer_Actions: ReducerActionType;
  cartItem: CartItemType;
};

const CartLineItem = ({ dispatch, Reducer_Actions, cartItem }: PropsType) => {
  const removeItem = () => {
    dispatch({ type: Reducer_Actions.REMOVE, payload: cartItem });
  };
  const highestQty = 20 > cartItem.qty ? 20 : cartItem.qty;
  const img: string = new URL(`../images/${cartItem.sku}.jpg`, import.meta.url)
    .href;
  const optionNum: number[] = [...Array(highestQty).keys()].map((i) => i + 1);
  const options = optionNum.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });
  const increaseQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: Reducer_Actions.QUANTITY,
      payload: { ...cartItem, qty: Number(e.target.value) },
    });
  };
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartItem.price * cartItem.qty);
  return (
    <li className="cart__item">
      <img src={img} alt={cartItem.name} className="cart__img" />
      <div aria-label="Item Name">{cartItem.name}</div>
      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(cartItem.price)}
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select"
        aria-label="Item Quantity"
        value={cartItem.qty}
        onChange={increaseQty}
      >
        {options}
      </select>
      <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
        {totalPrice}
      </div>
      <button
        className="cart__button"
        aria-label="Remove Item From Cart"
        title="Remove Item From Cart"
        onClick={removeItem}
      >
        ❌
      </button>
    </li>
  );
};

function arePropsEqual(
  { cartItem: prevCartItem }: PropsType,
  { cartItem: nextCartItem }: PropsType
): boolean {
  return Object.keys(prevCartItem).every((key) => {
    prevCartItem[key as keyof CartItemType] ===
      nextCartItem[key as keyof CartItemType];
  });
}
const MemoizedCartItem = memo<typeof CartLineItem>(CartLineItem, arePropsEqual);

export default CartLineItem;
