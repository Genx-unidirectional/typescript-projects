import { useState } from "react";
import useCart from "../hooks/useCart";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, Reducer_Actions, totalItems, totalPrice, cart } = useCart();
  const onSubmitOrder = () => {
    dispatch({ type: Reducer_Actions.SUBMIT });
    setConfirm(true);
  };

  return (
    <main
      className="main main--cart"
      style={{ display: "flex", flexFlow: "column" }}
    >
      {confirm ? (
        <h2>Thank you for your order</h2>
      ) : (
        <>
          <h2 className="offscreen">Cart</h2>
          <ul className="cart">
            {cart.map((cartItem) => {
              return (
                <CartLineItem
                  dispatch={dispatch}
                  cartItem={cartItem}
                  Reducer_Actions={Reducer_Actions}
                />
              );
            })}
          </ul>
          <div className="cart__totals">
            <p>TotalItems: {totalItems}</p>
            <p>TotalPrice: {totalPrice}</p>
            <button
              className="cart__submit"
              disabled={!totalItems}
              onClick={onSubmitOrder}
            >
              Place order
            </button>
          </div>
        </>
      )}
    </main>
  );
};
export default Cart;
