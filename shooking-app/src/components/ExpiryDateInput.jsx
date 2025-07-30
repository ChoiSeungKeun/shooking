import { useRef, useState } from "react";

const ExpiryDateInput = () => {
  const [expiryDates, setExpiryDates] = useState(["", ""]);
  const indexRefs = useRef(Array(2).fill(null));

  const handleChange = (e, index) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 2);
    const newExpiryDates = [...expiryDates];
    newExpiryDates[index] = input;

    setExpiryDates(newExpiryDates);

    if (input.length === 2 && index < 1) {
      indexRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && expiryDates[index] === "" && index > 0) {
      indexRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="ExpiryDateInput">
      <div className="label_section">
        <label>만료일</label>
      </div>
      <div className="input_section">
        {expiryDates.map((num, index) => (
          <div className="input_wrapper">
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={2}
              value={num}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (indexRefs.current[index] = el)}
            />
            {index < 1 && <span>/</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpiryDateInput;
