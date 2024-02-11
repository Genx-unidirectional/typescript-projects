import { useState } from "react";
import useCart from "../hooks/useCart";
import NavLinks from "./SideNav";
type PropsType = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ view, setView }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  return (
    <header className="header">
      <h1>Acme Co.</h1>
      <div className="header--div">
        <p>TotalPrice : {totalPrice}</p>
        <p>TotalItems : {totalItems}</p>
        <NavLinks view={view} setView={setView} />
      </div>
    </header>
  );
};
export default Header;
