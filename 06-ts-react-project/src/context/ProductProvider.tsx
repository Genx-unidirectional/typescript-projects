// We are here creating the context to provide product data without prop drilling

import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";

export type ProductState = {
  sku: string;
  name: string;
  price: number;
};
const initState: ProductState[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];
type UseProductContextType = {
  products: ProductState[];
};

const initProductContext: UseProductContextType = {
  products: [],
};

const ProductContext = createContext<UseProductContextType>(initProductContext);

// Creating the customHook to provide that context

type ChildrenType = {
  children: ReactElement | ReactElement[];
};

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState(initState);
  // if we are fetching data from the database or from from the api we use useEffect hook
  // useEffect(()=>{
  //     const fetchUserData = async():Promise<ProductState[]>=>{
  //         try{
  //             const resp = await fetch("")
  //                 const data = await resp.json();
  //             return data
  //         }catch(err){
  //             console.log(err)
  //         }
  //     }
  //     fetchUserData().then((products)=>setProducts(products));
  // })
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
