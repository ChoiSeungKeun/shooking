import CardList from "./CardList";
import Button from "./Button";

import "./CardListContainer.css";

const CardListContainer = ({
  cards,
  selectedCardId,
  onSelectCard,
  onSubmitPayment,
  onChangeMode,
}) => {
  return (
    <div className="CardListContainer">
      {cards.length === 0 ? (
        <div className="card_section">
          <p>새로운 카드를 등록해주세요.</p>
        </div>
      ) : (
        <CardList
          cards={cards}
          selectedCardId={selectedCardId}
          onSelectCard={onSelectCard}
          onSubmitPayment={onSubmitPayment}
        />
      )}
      <div className="button_section">
        <Button text={"+"} variant={"new-card"} onClick={onChangeMode} />
      </div>
    </div>
  );
};

export default CardListContainer;
