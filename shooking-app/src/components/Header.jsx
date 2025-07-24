import "./Header.css";

const Header = ({ title, leftChild, rightChild, theme }) => {
  return (
    <header className={`Header header_${theme}`}>
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
