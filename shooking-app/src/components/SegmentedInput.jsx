import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./SegmentedInput.css";

const sanitizeInput = (value, inputMode, maxLength) => {
  const rules = {
    numeric: (v) => v.replace(/\D/g, ""),
    tel: (v) => v.replace(/\D/g, ""),
    text: (v) => v,
    email: (v) => v,
    url: (v) => v,
  };

  const handler = rules[inputMode] || ((v) => v);
  return handler(value).slice(0, maxLength);
};

const SegmentedInput = ({
  inputCount,
  maxLength = 10,
  inputMode = "text",
  placeholder = "",
  separator = "",
  values,
  autoFocusIndex = null,
  varient,
  display = "full",
  justity = "center",
  background,
  onChange,
}) => {
  const inputRefs = useRef(Array(inputMode).fill(null));

  useEffect(() => {
    if (autoFocusIndex !== null && inputRefs.current[autoFocusIndex]) {
      inputRefs.current[autoFocusIndex].focus();
    }
  }, [autoFocusIndex]);

  const handleChange = (e, index) => {
    const newValue = sanitizeInput(e.target.value, inputMode, maxLength);
    const newValues = [...values];
    newValues[index] = newValue;
    onChange(newValues);

    if (newValue.length === maxLength && index < inputCount - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && values[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className={`SegmentedInput SegmentedInput_display_${display} SegmentedInput_justity_${justity} SegmentedInput_background_${background}`}
    >
      {values.map((val, index) => (
        <div className="input_wrapper" key={index}>
          <input
            type="text"
            inputMode={inputMode}
            maxLength={maxLength}
            value={val}
            placeholder={placeholder}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className={`input input_${varient}`}
          />
          {separator && index < inputCount - 1 && <span>{separator}</span>}
        </div>
      ))}
    </div>
  );
};

SegmentedInput.propTypes = {
  inputCount: PropTypes.number.isRequired,
  maxLength: PropTypes.number,
  inputMode: PropTypes.string,
  placeholder: PropTypes.string,
  separator: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoFocusIndex: PropTypes.number,
  varient: PropTypes.string,
  display: PropTypes.string,
  justity: PropTypes.string,
  background: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SegmentedInput;
