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
      <div className="header__title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>TotalPrice : {totalPrice}</p>
          <p>TotalItems : {totalItems}</p>
        </div>
      </div>
      <NavLinks view={view} setView={setView} />
    </header>
  );
};
export default Header;
