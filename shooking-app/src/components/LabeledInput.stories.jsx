import { useState } from "react";
import LabeledInput from "./LabeledInput";
import SegmentedInput from "./SegmentedInput";
import BaseInput from "./BaseInput";
import InfoIcon from "./InfoIcon";

export default {
  title: "Components/LabeledInput",
  component: LabeledInput,
  argTypes: {
    label: { control: "text" },
    labelSuffix: { control: "text" },
  },
};

export const CardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState([
    "1234",
    "1234",
    "5678",
    "5678",
  ]);

  return (
    <LabeledInput label="카드 번호">
      <SegmentedInput
        inputCount={cardNumbers.length}
        maxLength={4}
        inputMode="numeric"
        separator="-"
        values={cardNumbers}
        maskIndices={[3, 4]}
        onChange={setCardNumbers}
      />
    </LabeledInput>
  );
};

export const ExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState(["08", "26"]);

  return (
    <LabeledInput label={"만료일"}>
      <SegmentedInput
        inputCount={expiryDate.length}
        maxLength={2}
        inputMode="numeric"
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
    <LabeledInput
      label="카드 소유자 이름"
      labelSuffix={`${ownerName.length}/30`}
    >
      <div>
        <BaseInput
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={ownerName}
          align="left"
          onChange={setOwnerName}
        />
      </div>
    </LabeledInput>
  );
};

export const CVCCode = () => {
  const [code, setCode] = useState("");

  return (
    <LabeledInput label="보안 코드(CVC/CVV)">
      <BaseInput
        maxLength={3}
        inputMode="numeric"
        value={code}
        display="fit"
        masked={true}
        onChange={setCode}
      />
      <InfoIcon message="카드 뒷면의 3자리 숫자입니다." />
    </LabeledInput>
  );
};

export const Password = () => {
  const [password, setPassword] = useState(["1", "2"]);

  return (
    <LabeledInput label={"카드 비밀번호"}>
      <SegmentedInput
        inputCount={password.length}
        maxLength={1}
        inputMode="numeric"
        values={password}
        variant={"square"}
        display="fit"
        background={"transparent"}
        maskIndices={[1, 2]}
        onChange={setPassword}
      />
      <div className="fake-dot"></div>
      <div className="fake-dot"></div>
    </LabeledInput>
  );
};
