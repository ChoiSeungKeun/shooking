import { useState } from "react";
import LabeledInput from "./LabeledInput";
import SegmentedInput from "./SegmentedInput";
import BaseInput from "./BaseInput";

export default {
  title: "Components/LabeledInput",
  component: LabeledInput,
};

export const CardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState([
    "1234",
    "1234",
    "5678",
    "5678",
  ]);

  return (
    <LabeledInput label="카드 번호" fullWidth={true}>
      <SegmentedInput
        inputCount={cardNumbers.length}
        maxLength={4}
        inputMode="numeric"
        separator="-"
        values={cardNumbers}
        onChange={setCardNumbers}
      />
    </LabeledInput>
  );
};

export const ExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState(["08", "26"]);

  return (
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
  );
};

export const OwnerName = () => {
  const [ownerName, setOwnerName] = useState("");

  return (
    <LabeledInput label="카드 소유자 이름" fullWidth={true}>
      <BaseInput
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={ownerName}
        onChange={setOwnerName}
      />
    </LabeledInput>
  );
};

export const CVCCode = () => {
  const [code, setCode] = useState("");

  return (
    <LabeledInput label="보안 코드(CVC/CVV)" fullWidth={false}>
      <BaseInput
        maxLength={3}
        inputMode="numeric"
        value={code}
        display="fit"
        onChange={setCode}
      />
    </LabeledInput>
  );
};

export const Password = () => {
  const [password, setPassword] = useState(["1", "2"]);

  return (
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
  );
};
