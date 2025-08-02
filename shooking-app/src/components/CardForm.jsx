import { useState } from "react";
import LabeledInput from "./LabeledInput";
import SegmentedInput from "./SegmentedInput";
import BaseInput from "./BaseInput";

import "./CardForm.css";

const CardForm = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expiryDate, setExpiryDate] = useState(["", ""]);
  const [ownerName, setOwnerName] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  return (
    <div className="CardForm">
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

      <LabeledInput label="카드 소유자 이름" fullWidth={true}>
        <BaseInput
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={ownerName}
          onChange={setOwnerName}
        />
      </LabeledInput>

      <LabeledInput label="보안 코드(CVC/CVV)" fullWidth={false}>
        <BaseInput
          maxLength={3}
          inputMode="numeric"
          value={code}
          display="fit"
          onChange={setCode}
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
  );
};

export default CardForm;
