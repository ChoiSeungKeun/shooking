import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ text, icon, variant, disabled, onClick }) => {
  return (
    <button
      className={`Button button_${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
