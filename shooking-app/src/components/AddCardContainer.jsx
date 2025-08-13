import Card from "./Card";
import CardForm from "./CardForm";
import Button from "./Button";

import "./AddCardContainer.css";

const AddCardContainer = ({
  draftCard,
  onUpdateField,
  onSubmitCard,
  submitting = false,
  submitError = "",
  validateCard,
}) => {
  const isValid = validateCard(draftCard);

  return (
    <div className="AddCardContainer">
      <Card {...draftCard} />

      <CardForm card={draftCard} onUpdateField={onUpdateField} />

      {submitError && <p>{submitError}</p>}

      {isValid && (
        <Button
          text={"작성 완료"}
          size={"md"}
          onClick={onSubmitCard}
          disabled={submitting || !isValid}
        />
      )}
    </div>
  );
};

export default AddCardContainer;
