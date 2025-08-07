import Card from "./Card";
import Button from "./Button";

import "./CardList.css";

const CardList = ({ cards, selectedCardId, onSelectCard, onSubmitPayment }) => {
  return (
    <div className="CardList">
      {cards.map((card) => (
        <div key={card.id} className="card_wrapper">
          <Card
            {...card}
            onSelect={onSelectCard}
            isSelected={selectedCardId === card.id}
          />
          {selectedCardId === card.id && (
            <Button
              text={"이 카드로 결제하기"}
              variant={"selected-card"}
              onClick={() => onSubmitPayment(card.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
