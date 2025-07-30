import { useRef } from "react";

import "./MultiInputField.css";
import PropTypes from "prop-types";

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

const MultiInputField = ({
  label,
  inputCount,
  maxLength,
  separator,
  inputMode,
  placeholder,
  values,
  setValues,
}) => {
  const inputRefs = useRef(Array(inputCount).fill(null));

  const handleChange = (e, index) => {
    const cleanedValue = sanitizeInput(e.target.value, inputMode, maxLength);
    const newValues = [...values];
    newValues[index] = cleanedValue;

    setValues(newValues);

    if (cleanedValue.length === maxLength && index < inputCount - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key == "Backspace" && values[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="MultiInputField">
      <div className="label_section">
        <label>{label}</label>
      </div>
      <div className="input_section">
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
            />
            {separator && index < inputCount - 1 && <span>{separator}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

MultiInputField.propTypes = {
  label: PropTypes.string.isRequired,
  inputCount: PropTypes.number,
  maxLength: PropTypes.number,
  separator: PropTypes.string,
  inputMode: PropTypes.string,
  placeholder: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValues: PropTypes.func.isRequired,
};

export default MultiInputField;
