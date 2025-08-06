import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { sanitizeInput } from "../util/sanitize";

import "./SegmentedInput.css";

const SegmentedInput = ({
  inputCount = 2,
  maxLength = 10,
  inputMode = "text",
  placeholder = "",
  separator = "",
  values,
  autoFocusIndex = null,
  varient,
  display = "full",
  justify = "center",
  background,
  maskIndices = [],
  maskChar = "•",
  onChange,
}) => {
  const inputRefs = useRef(Array(inputMode).fill(null));
  const [focusedIndex, setFocusedIndex] = useState(null);

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

  const getDisplayValue = (val, index) => {
    if (focusedIndex === index) return val;

    if (maskIndices.includes(index + 1)) return maskChar.repeat(val.length);

    return val;
  };

  return (
    <div
      className={`SegmentedInput SegmentedInput_display_${display} SegmentedInput_justify_${justify} SegmentedInput_background_${background}`}
    >
      {values.map((val, index) => (
        <div className="input_wrapper" key={index}>
          <input
            type="text"
            inputMode={inputMode}
            maxLength={maxLength}
            value={getDisplayValue(val, index)}
            placeholder={placeholder}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
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
  inputCount: PropTypes.number,
  maxLength: PropTypes.number,
  inputMode: PropTypes.string,
  placeholder: PropTypes.string,
  separator: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoFocusIndex: PropTypes.number,
  varient: PropTypes.string,
  display: PropTypes.string,
  justify: PropTypes.string,
  background: PropTypes.string,
  maskIndices: PropTypes.arrayOf(PropTypes.number),
  maskChar: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SegmentedInput;
