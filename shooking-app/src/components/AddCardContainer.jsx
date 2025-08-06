import { useState } from "react";
import CardForm from "./CardForm";
import Button from "./Button";

import "./AddCardContainer.css";

const AddCardContainer = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expiryDate, setExpiryDate] = useState(["", ""]);
  const [ownerName, setOwnerName] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  const isComplete = () => {
    const isCardNumbersValid = cardNumbers.every((value) => value.length === 4);
    const isExpiryDateValid = expiryDate.every((value) => value.length === 2);
    const isOwnerValid = ownerName.trim().length > 0;
    const isCodeValid = code.length === 3;
    const isPasswordValid = password.every((p) => p.length === 1);

    return (
      isCardNumbersValid &&
      isExpiryDateValid &&
      isOwnerValid &&
      isCodeValid &&
      isPasswordValid
    );
  };

  return (
    <div className="AddCardContainer">
      <div>카드섹션</div>
      <CardForm
        cardNumbers={cardNumbers}
        expiryDate={expiryDate}
        ownerName={ownerName}
        code={code}
        password={password}
        setCardNumbers={setCardNumbers}
        setExpiryDate={setExpiryDate}
        setOwnerName={setOwnerName}
        setCode={setCode}
        setPassword={setPassword}
      />

      {isComplete() && <Button text={"작성 완료"} variant={"form"} />}
    </div>
  );
};

export default AddCardContainer;
