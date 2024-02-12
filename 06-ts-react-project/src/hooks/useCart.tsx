import { useContext } from "react";
import CartContext from "../context/cartProvider";
import { CartContextType } from "../context/cartProvider";
const useCart = (): CartContextType => {
  return useContext(CartContext);
};
export default useCart;
