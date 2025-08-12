import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ title, leftArea, rightArea, theme = "dark" }) => {
  return (
    <header className={`Header theme_${theme}`}>
      <div className="header_left">{leftArea}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightArea}</div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  leftArea: PropTypes.node,
  rightArea: PropTypes.node,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default Header;
