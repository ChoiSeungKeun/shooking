import PropTypes from "prop-types";

import "./Card.css";
import cardImage from "./../assets/card.png";

const Card = ({
  id,
  cardNumbers,
  expiryDate,
  ownerName,
  code,
  password,
  onSelect,
  isSelected = false,
}) => {
  const handleSelect = () => {
    if (onSelect && id !== undefined) {
      onSelect(id);
    }
  };

  return (
    <div
      className={`Card ${isSelected ? "selected" : ""}`}
      onClick={handleSelect}
    >
      <img src={cardImage} alt="card" className="card-image" />
      <div className="card-numbers_wrapper">
        {cardNumbers.map((num, index) => (
          <span key={index}>{index >= 2 ? "•".repeat(num.length) : num}</span>
        ))}
      </div>
      <div className="expiry-date_wrapper">
        <span className="expiry-date">
          {expiryDate[0] === "" ? "MM" : expiryDate[0]}
        </span>
        <span>/</span>
        <span className="expiry-date">
          {expiryDate[1] === "" ? "YY" : expiryDate[1]}
        </span>
      </div>
      <div className="owner-name_wapper">
        {ownerName === "" ? "NAME" : ownerName}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  expiryDate: PropTypes.arrayOf(PropTypes.string).isRequired,
  ownerName: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  password: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default Card;
