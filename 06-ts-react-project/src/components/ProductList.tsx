import { ReactElement } from "react";
import useProduct from "../hooks/useProducr";
import useCart from "../hooks/useCart";
import Product from "./Products";
const ProductList = () => {
  const { products } = useProduct();
  const { dispatch, Reducer_Actions, cart } = useCart();
  let pageContent: ReactElement | ReactElement[] = (
    <h1>No products to showcase</h1>
  );
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some(
        (cartItem) => cartItem.sku === product.sku
      );
      return (
        <Product
          key={product.sku}
          product={product}
          inCart={inCart}
          dispatch={dispatch}
          Reducer_Actions={Reducer_Actions}
        />
      );
    });
  }

  return <main className="main main--products">{pageContent}</main>;
};
export default ProductList;
