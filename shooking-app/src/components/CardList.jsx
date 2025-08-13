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
            <div className="button_wrapper">
              <Button
                text={"이 카드로 결제하기"}
                variant={"payment"}
                size={"md"}
                onClick={() => onSubmitPayment(card.id)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
