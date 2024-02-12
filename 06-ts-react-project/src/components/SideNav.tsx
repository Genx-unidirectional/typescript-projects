type PropsType = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLinks = ({ view, setView }: PropsType) => {
  return (
    <nav className="nav">
      {view ? (
        <button onClick={() => setView(false)}>View Products</button>
      ) : (
        <button onClick={() => setView(true)}>View Cart</button>
      )}
    </nav>
  );
};
export default NavLinks;
