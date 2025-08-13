import { useState, useReducer } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import Header from "../components/Header";
import CardListContainer from "../components/CardListContainer";
import AddCardContainer from "../components/AddCardContainer";
import Button from "../components/Button";

import mockCards from "../data/mockCards";
import { registerCard } from "./../api/cards";

const CARD_ACTION = {
  ADD: "ADD_CARD",
};

const PaymentMode = {
  LIST: "LIST",
  ADD: "ADD",
};

function cardListReducer(state, action) {
  switch (action.type) {
    case CARD_ACTION.ADD:
      return [...state, action.card];
    default:
      return state;
  }
}

const initialDraftCard = {
  id: null,
  cardNumbers: ["", "", "", ""],
  expiryDate: ["", ""],
  ownerName: "",
  code: "",
  password: ["", ""],
};

const validationCard = (card) => {
  const isValid =
    card.cardNumbers.every((v) => v.length === 4) &&
    card.expiryDate.every((v) => v.length === 2) &&
    card.ownerName.trim().length > 0 &&
    card.code.length === 3 &&
    card.password.every((v) => v.length === 1);

  return isValid;
};

const Payment = () => {
  const [cards, dispatch] = useReducer(cardListReducer, mockCards);
  const [draftCard, setDraftCard] = useState(initialDraftCard);
  const [mode, setMode] = useState(PaymentMode.LIST);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateDraftCardField = (field, value) => {
    setDraftCard((prev) => ({ ...prev, [field]: value }));
  };

  const resetDraftCard = () => {
    setDraftCard(initialDraftCard);
  };

  const submitNewCard = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (!validationCard(draftCard)) {
        setSubmitError("입력 값을 다시 확인해주세요");
        return;
      }

      // TODO 추후 백엔드 연결 시 요청 진행
      // const saved = await registerCard(draftCard);
      dispatch({ type: CARD_ACTION.ADD, card: draftCard });

      resetDraftCard();
      setMode(PaymentMode.LIST);
      setSelectedCardId(null);
    } catch (err) {
      setSubmitError(err.message || "카드 등록 중 오류가 발생했습니다.");
    } finally {
      setSubmitError(false);
    }
  };

  const submitPayment = (cardId) => {
    // TODO 결제 API 연동
    console.log(`${cardId} 카드로 결제`);
  };

  const cancelCardRegistration = () => {
    resetDraftCard();
    setSubmitError("");
    setMode(PaymentMode.LIST);
  };

  return (
    <div>
      {mode === "LIST" ? (
        <div>
          <Header
            title={"보유카드"}
            rightArea={<Button icon={<IoCloseOutline />} variant="icon" />}
            theme="light"
          />
          <CardListContainer
            cards={cards}
            selectedCardId={selectedCardId}
            onSelectCard={setSelectedCardId}
            onSubmitPayment={submitPayment}
            onChangeMode={() => setMode(PaymentMode.ADD)}
          />
        </div>
      ) : (
        <div>
          <Header
            title={"카드추가"}
            leftArea={
              <Button
                icon={<IoIosArrowBack />}
                variant="icon"
                onClick={cancelCardRegistration}
              />
            }
            rightArea={<Button icon={<IoCloseOutline />} variant="icon" />}
            theme="light"
          />
          <AddCardContainer
            draftCard={draftCard}
            onUpdateField={updateDraftCardField}
            onSubmitCard={submitNewCard}
            submitting={isSubmitting}
            submitError={submitError}
            validateCard={validationCard}
          />
        </div>
      )}
    </div>
  );
};

export default Payment;
