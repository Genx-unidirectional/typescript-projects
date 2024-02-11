type PropsType = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavLinks = ({ view, setView }: PropsType) => {
  return (
    <nav>
      {view ? (
        <button className="header--nav-btn" onClick={() => setView(false)}>
          View Products
        </button>
      ) : (
        <button className="header--nav-btn" onClick={() => setView(true)}>
          View Cart
        </button>
      )}
    </nav>
  );
};
export default NavLinks;
