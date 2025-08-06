import { useState } from "react";
import PropTypes from "prop-types";
import { sanitizeInput } from "../util/sanitize";

import "./BaseInput.css";

const BaseInput = ({
  maxLength = 30,
  inputMode = "text",
  placeholder = "",
  value,
  autoFocus = false,
  display = "full",
  align = "center",
  masked = false,
  maskChar = "•",
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const displayValue =
    masked && !focused ? maskChar.repeat(value.length) : value;

  const handleChange = (e) => {
    const newValue = sanitizeInput(e.target.value, inputMode, maxLength);
    onChange(newValue);
  };

  return (
    <div className={`BaseInput BaseInput_display_${display}`}>
      <input
        type="text"
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        value={displayValue}
        autoFocus={autoFocus}
        onChange={(e) => handleChange(e)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`input input_${display} input_align_${align}`}
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
  align: PropTypes.oneOf(["left", "center", "right"]),
  masked: PropTypes.bool,
  maskChar: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default BaseInput;
