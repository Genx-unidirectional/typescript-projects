import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import ProductList from "./components/ProductList";
const App = () => {
  const [view, setView] = useState(false);
  const pageContent = view ? <Cart /> : <ProductList />;
  return (
    <>
      <Header view={view} setView={setView}></Header>
      {pageContent}
      <Footer view={view} />
    </>
  );
};
export default App;
