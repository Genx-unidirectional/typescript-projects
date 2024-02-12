import { memo } from "react";
import { ReducerActionType } from "../context/cartProvider";
import { Reducer_Action } from "../context/cartProvider";
import { ProductState } from "../context/ProductProvider";
type Props = {
  product: ProductState;
  dispatch: React.Dispatch<Reducer_Action>;
  Reducer_Actions: ReducerActionType;
  inCart: boolean;
};

const Product = ({ dispatch, product, Reducer_Actions, inCart }: Props) => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;
  const onAddToCart = () => {
    dispatch({ type: Reducer_Actions.ADD, payload: { ...product, qty: 1 } });
  };
  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt="product_image" className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: preInCart }: Props,
  { product: nextProduct, inCart: nextInCart }: Props
): boolean {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductState] ===
        nextProduct[key as keyof ProductState]
      );
    }) && preInCart === nextInCart
  );
}

const MemoizedProduct = memo(Product, areProductsEqual);
export default MemoizedProduct;
