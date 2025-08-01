import "./AddCard.css";
import { useState } from "react";
import LabeledInput from "./LabeledInput";
import SegmentedInput from "./SegmentedInput";

const AddCard = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expiryDate, setExpiryDate] = useState(["", ""]);
  const [password, setPassword] = useState(["", ""]);

  return (
    <div className="AddCard">
      <div>카드섹션</div>
      <div className="card-from">
        <LabeledInput label="카드 번호" fullWidth={true}>
          <SegmentedInput
            inputCount={cardNumbers.length}
            maxLength={4}
            inputMode="numeric"
            placeholder="XXXX"
            separator="-"
            values={cardNumbers}
            onChange={setCardNumbers}
          />
        </LabeledInput>

        <LabeledInput label={"만료일"} fullWidth={false}>
          <SegmentedInput
            inputCount={expiryDate.length}
            maxLength={2}
            inputMode="numeric"
            placeholder="XX"
            separator="/"
            values={expiryDate}
            display="fit"
            onChange={setExpiryDate}
          />
        </LabeledInput>

        <LabeledInput label={"카드 비밀번호"} fullWidth={false}>
          <SegmentedInput
            inputCount={password.length}
            maxLength={1}
            inputMode="numeric"
            placeholder="X"
            values={password}
            varient={"square"}
            display="fit"
            background={"transparent"}
            onChange={setPassword}
          />
        </LabeledInput>
      </div>
      <div>버튼섹션</div>
    </div>
  );
};

export default AddCard;
