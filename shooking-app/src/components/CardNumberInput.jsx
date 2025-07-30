import "./CardNumberInput.css";
import { useRef, useState } from "react";

const CardNumberInput = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const indexRefs = useRef(Array(4).fill(null));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value;

    setCardNumbers(newCardNumbers);

    if (value.length === 4 && index < 3) {
      indexRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && cardNumbers[index] === "" && index > 0) {
      indexRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 16);

    const chunks = [0, 4, 8, 12].map((start) => pasted.slice(start, start + 4));
    setCardNumbers(chunks);

    const nextFocusIndex = chunks.findIndex((chunk) => chunk.length < 4);
    indexRefs.current[nextFocusIndex === -1 ? 3 : nextFocusIndex]?.focus();
  };

  // TODO 3, 4번째 input 마스킹 기능 구현 필요
  return (
    <div className="CardNumberInput">
      <div className="label_section">
        <label>카드 번호</label>
      </div>
      <div className="input_section">
        {cardNumbers.map((num, index) => (
          <div className="input_wrapper">
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={num}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              ref={(el) => (indexRefs.current[index] = el)}
            />
            {index < 3 && <span>-</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNumberInput;
