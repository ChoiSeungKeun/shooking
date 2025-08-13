import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ text, icon, variant = "basic", size, disabled, onClick }) => {
  return (
    <button
      className={`Button button_${variant} button_${size}`}
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
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
