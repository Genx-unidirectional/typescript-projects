import useCart from "../hooks/useCart";
type Props = {
  view: boolean;
};
const Footer = ({ view }: Props) => {
  const date: string = new Date().getFullYear().toString();
  const { totalItems, totalPrice } = useCart();
  return (
    <footer className="footer">
      {view ? (
        <p>Shopping Cart &copy; {date}</p>
      ) : (
        <>
          <div>
            <p>TotalPrice : {totalPrice}</p>
            <p>TotalItems : {totalItems}</p>
            <p>Shopping Cart &copy; {date}</p>
          </div>
        </>
      )}
    </footer>
  );
};
export default Footer;
