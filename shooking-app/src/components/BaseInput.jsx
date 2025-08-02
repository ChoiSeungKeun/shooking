import PropTypes from "prop-types";

import "./BaseInput.css";

const BaseInput = ({
  maxLength = 30,
  inputMode = "text",
  placeholder = "",
  value,
  autoFocus = false,
  display = "full",
  onChange,
}) => {
  return (
    <div className={`BaseInput BaseInput_display_${display}`}>
      <input
        type="text"
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        // className={`input input_${display}`}
      />
    </div>
  );
};

BaseInput.prototype = {
  maxLength: PropTypes.number,
  inputMode: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  display: PropTypes.oneOf(["full", "fit"]),
  onChange: PropTypes.func.isRequired,
};

export default BaseInput;
