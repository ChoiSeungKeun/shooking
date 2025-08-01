import "./Button.css";

const Button = ({ text, icon, variant, disabled, onClick }) => {
  return (
    <div>
      <button
        className={`Button button_${variant}`}
        onClick={onClick}
        disabled={disabled}
      >
        {icon && <span className="button_icon">{icon}</span>}
        {text && <span className="button_text">{text}</span>}
      </button>
    </div>
  );
};

export default Button;
