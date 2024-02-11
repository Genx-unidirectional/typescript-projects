import UseProduct from "../hooks/useProducr";
import { ProductState } from "../context/ProductProvider";
import Product from "./Products";
import useCart from "../hooks/useCart";

const ProductList = () => {
  const { products } = UseProduct();
  const { dispatch, cart, Reducer_Actions } = useCart();
  return (
    <main className="main">
      {products.map((product: ProductState, idx) => {
        const inCart: boolean = cart.some((item) => item.sku === product.sku);
        return (
          <Product
            key={idx}
            product={product}
            dispatch={dispatch}
            Reducer_Actions={Reducer_Actions}
            inCart={inCart}
          />
        );
      })}
    </main>
  );
};
export default ProductList;
