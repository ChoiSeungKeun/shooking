import LabeledInput from "./LabeledInput";
import SegmentedInput from "./SegmentedInput";
import BaseInput from "./BaseInput";
import InfoIcon from "./InfoIcon";

import "./CardForm.css";

const CardForm = ({ card, onUpdateField }) => {
  const bind = (field) => (value) => onUpdateField(field, value);

  return (
    <div className="CardForm">
      <LabeledInput label="카드 번호">
        <SegmentedInput
          inputCount={card.cardNumbers.length}
          maxLength={4}
          inputMode="numeric"
          separator="-"
          values={card.cardNumbers}
          maskIndices={[3, 4]}
          onChange={bind("cardNumbers")}
        />
      </LabeledInput>

      <LabeledInput label={"만료일"}>
        <SegmentedInput
          inputCount={card.expiryDate.length}
          maxLength={2}
          inputMode="numeric"
          separator="/"
          values={card.expiryDate}
          display="fit"
          onChange={bind("expiryDate")}
        />
      </LabeledInput>

      <LabeledInput
        label="카드 소유자 이름"
        labelSuffix={`${card.ownerName.length}/30`}
      >
        <div>
          <BaseInput
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            value={card.ownerName}
            align="left"
            onChange={bind("ownerName")}
          />
        </div>
      </LabeledInput>

      <LabeledInput label="보안 코드(CVC/CVV)">
        <BaseInput
          maxLength={3}
          inputMode="numeric"
          value={card.code}
          display="fit"
          masked={true}
          onChange={bind("code")}
        />
        <InfoIcon message="카드 뒷면의 3자리 숫자입니다." />
      </LabeledInput>

      <LabeledInput label={"카드 비밀번호"}>
        <SegmentedInput
          inputCount={card.password.length}
          maxLength={1}
          inputMode="numeric"
          values={card.password}
          variant={"square"}
          display="fit"
          background={"transparent"}
          maskIndices={[1, 2]}
          onChange={bind("password")}
        />
        <div className="fake-dot"></div>
        <div className="fake-dot"></div>
      </LabeledInput>
    </div>
  );
};

export default CardForm;
