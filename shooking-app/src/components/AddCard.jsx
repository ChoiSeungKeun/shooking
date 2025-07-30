import "./AddCard.css";
import { useState } from "react";
import MultiInputField from "./MultiInputField";

const AddCard = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expiryDate, setExpiryDate] = useState(["", ""]);

  return (
    <div className="AddCard">
      <div>카드섹션</div>
      <div>
        <MultiInputField
          label="카드 번호"
          inputCount={4}
          maxLength={4}
          inputMode="numeric"
          separator="-"
          values={cardNumbers}
          setValues={setCardNumbers}
        />

        <MultiInputField
          label="만료일"
          inputCount={2}
          maxLength={2}
          inputMode="numeric"
          separator="/"
          values={expiryDate}
          setValues={setExpiryDate}
        />
      </div>
      <div>버튼섹션</div>
    </div>
  );
};

export default AddCard;
