import { useState } from "react";
import MultiInputField from "./MultiInputField";

export default {
  title: "Components/MultiInputField",
  component: MultiInputField,
  tags: ["autodocs"],
};

export const CardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState([
    "1234",
    "1234",
    "5678",
    "5678",
  ]);

  return (
    <MultiInputField
      label="카드 번호"
      inputCount={4}
      maxLength={4}
      inputMode="numeric"
      separator="-"
      values={cardNumbers}
      setValues={setCardNumbers}
    />
  );
};

export const ExpiryDate = () => {
  const [expiry, setExpiry] = useState(["08", "25"]);
  return (
    <MultiInputField
      label="만료일"
      inputCount={2}
      maxLength={2}
      inputMode="numeric"
      separator="/"
      values={expiry}
      setValues={setExpiry}
    />
  );
};
