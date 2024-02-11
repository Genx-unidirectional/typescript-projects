import { ProductState } from "../context/ProductProvider";
import { ReducerActionType } from "../context/cartProvider";
import { Reducer_Action } from "../context/cartProvider";
type props = {
  product: ProductState;
  dispatch: React.Dispatch<Reducer_Action>;
  Reducer_Actions: ReducerActionType;
  inCart: boolean;
};
const Product = ({ product, dispatch, Reducer_Actions, inCart }: props) => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  const price: string = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);
  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;
  const onAddToCart = () => {
    dispatch({ type: Reducer_Actions.ADD, payload: { ...product, qty: 1 } });
  };
  return (
    <article>
      <h3>{product.name}</h3>
      <img src={img} alt="product_image" />
      <p>
        {price}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
};
export default Product;
