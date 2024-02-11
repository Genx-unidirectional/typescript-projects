// Making reducer to manipulate the state and return those function
import { useMemo, useReducer, createContext, ReactElement } from "react";
// Creating Initial state
export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = {
  cart: CartItemType[];
};

const initCartState: CartStateType = {
  cart: [],
};

const REDUCER_ACTION_TYPES = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};
export type ReducerActionType = typeof REDUCER_ACTION_TYPES;
export type Reducer_Action = {
  type: string;
  payload?: CartItemType;
};

// Creating reducer
const reducer = (
  state: CartStateType,
  action: Reducer_Action
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD: {
      if (!action.payload) {
        throw new Error("Payload is not present in ADD action type");
      }
      const { sku, name, price } = action.payload;
      //   we have to make array of Cart which have previous items and then modify the one which is added using dispatch
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      //   we have to look that the item exits or not if that item exits in cart we have to increase its quantity or if not we have to just add it with 1 quantity
      const itemExits: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );
      const qty = itemExits ? itemExits.qty + 1 : 1;
      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }
    case REDUCER_ACTION_TYPES.REMOVE: {
      if (!action.payload) {
        throw new Error("Payload is not present in REMOVE action type");
      }
      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPES.QUANTITY: {
      if (!action.payload) {
        throw new Error("Payload is not present in ADD action type");
      }
      const { sku, qty } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!itemExists) {
        throw new Error("Item must exits in order to increase it's quantity");
      }
      const updatedItem: CartItemType = { ...itemExists, qty };
      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPES.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("No matching action type is found");
  }
};

// creating custom hook with reducer and returning the dispatch ,cart,totalItems, totalPrice

const useCartContext = (initState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const Reducer_Actions = useMemo(() => {
    return REDUCER_ACTION_TYPES;
  }, []);
  const totalItems = state.cart.reduce((acc, curr) => curr.qty + acc, 0);
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(state.cart.reduce((acc, curr) => curr.qty * curr.price + acc, 0));
  const cart = state.cart.sort((a, b) => {
    let aItem = Number(a.sku.slice(-4));
    let bItem = Number(a.sku.slice(-4));
    return aItem - bItem;
  });

  return { dispatch, Reducer_Actions, cart, totalItems, totalPrice };
};
export type CartContextType = ReturnType<typeof useCartContext>;
const initCartContextState: CartContextType = {
  dispatch: () => {},
  Reducer_Actions: REDUCER_ACTION_TYPES,
  cart: [],
  totalItems: 0,
  totalPrice: "",
};
// creating context
export const CartContext = createContext<CartContextType>(initCartContextState);
type ChildrenType = {
  children?: ReactElement | ReactElement[];
};
//Creating contextProvider
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
