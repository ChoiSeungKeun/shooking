import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ text, icon, variant = "basic", size, disabled, onClick }) => {
  return (
    <button
      className={`Button Button__${variant} Button__${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {text && <span className="button__text">{text}</span>}
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
